<template>
  <app-window :currentContent="'light-form-content'" :is-open="showMyModal" @close="closeMyModal" :modalType="modalType" />

  <div>
    <!-- Desktop Navbar -->
    <div v-if="!isMobile" class="desktop-nav">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <div class="nav-container">
        <div class="menu-items-wrapper">
          <a href="#" class="desktop-item">услуги</a>
          <a href="#" class="desktop-item">контакты</a>
          <a href="#" class="desktop-item" @click="openModal('universal')">команда</a>
        </div>
        <!-- Добавьте другие пункты меню по необходимости -->
        <button @click="handleTerminalClick('universal')" class="btn btn-primary">получить консультацию</button>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div v-else class="navbar-mobile">
      <div @click="toggleSidebar" class="burger-icon">☰</div>
      <transition name="fade">
        <div v-if="isSidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>
      </transition>
      <transition name="slide">
        <div v-if="isSidebarOpen" class="mobile-sidebar">
          <img src="@/assets/logo.svg" alt="Logo" class="logo" />
          <a href="#" class="mobile-item">услуги</a>
          <a href="#" class="mobile-item">контакты</a>
          <a href="#" class="mobile-item">команда</a>
          <!-- Добавьте другие пункты меню по необходимости -->
          <button @click="openModal" class="btn btn-primary">получить консультацию</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AppWindow from "@/components/AppWindow.vue";
export default {
  components: { AppWindow },
  data() {
    return {
      isMobile: false,
      isSidebarOpen: false,
      modalType: '',
      showMyModal: false,
    };
  },
  methods: {
    openModal() {
      this.$store.dispatch('openModal', { modalType: 'universal' });
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 768; // Измените этот порог по необходимости
    },
    handleTerminalClick(type) {
      const terminalHeadingDark = document.querySelector('.terminal-heading-dark');
      const terminalTextDark = document.querySelector('.terminal-text-dark');
      const terminalHeadingLight = document.querySelector('.terminal-heading-light');
      const terminalTextLight = document.querySelector('.terminal-text-light');
      const glitchWriterLight = document.querySelector('.launch-text-light');
      const glitchWriterDark = document.querySelector('.launch-text-dark');

      // Скрываем элементы в зависимости от типа терминала
      if (type === 'dark') {
        if (terminalHeadingDark && terminalTextDark) {
          terminalHeadingDark.style.display = 'none';
          terminalTextDark.style.display = 'none';
        }
      } else if (type === 'white') {
        if (terminalHeadingLight && terminalTextLight) {
          terminalHeadingLight.style.display = 'none';
          terminalTextLight.style.display = 'none';
        }
      }

      // Показываем glitch-writer для соответствующего терминала
      if (type === 'dark') {
        this.showGlitchWriterDark = true;
        this.showGlitchWriterWhite = false; // Убеждаемся, что для другого терминала значение false
      } else if (type === 'white') {
        this.showGlitchWriterWhite = true;
        this.showGlitchWriterDark = false; // Убеждаемся, что для другого терминала значение false
      }

      // Запускаем таймер на отображение glitch-writer через 3 секунды для dark и white
      if (type !== 'universal') {
        setTimeout(() => {
          // Устанавливаем тип модального окна
          this.modalType = type;

          // Показываем модальное окно
          this.showMyModal = true;

          // Запускаем таймер на скрытие glitch-writer через 1 секунду после открытия модального окна
          setTimeout(() => {
            if (type === 'dark') {
              this.showGlitchWriterDark = false;
            } else if (type === 'white') {
              this.showGlitchWriterWhite = false;
            }

            // Показываем соответствующие элементы в зависимости от типа терминала
            if (type === 'dark') {
              if (terminalHeadingDark && terminalTextDark) {
                terminalHeadingDark.style.display = 'block';
                terminalTextDark.style.display = 'block';
              }
            } else if (type === 'white') {
              if (terminalHeadingLight && terminalTextLight) {
                terminalHeadingLight.style.display = 'block';
                terminalTextLight.style.display = 'block';
              }
            }
          }, 1000);
        }, type === 'universal' ? 0 : 3000);
      } else {
        // Если тип universal, отображаем модальное окно сразу без задержки
        this.modalType = type;
        this.showMyModal = true;
        // ... (ваш код после открытия модального окна)
      }
    },
    closeMyModal() {
      this.showMyModal = false;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style scoped>
* {
  font-family: Point, sans-serif;
}
.navbar-mobile {
  height: 4rem;
  position: fixed;
  z-index: 99999999;
  background-color: rgba(231, 236, 239, 0.81);
  backdrop-filter: blur(20px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
/* Стили по необходимости */
.logo {
  height: 100%;
  max-height: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  float: left;
}

/* Дополнительные стили для мобильной версии */
.burger-icon {
  font-size: 20px;
  cursor: pointer;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
}

.mobile-sidebar {
  position: fixed;
  font-size: 2rem;
  top: 0;
  left: 0;
  display: flex;
  width: 80%;
  height: 100vh;
  background: #e7ecef;
  z-index: 2;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

.fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to, .slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.desktop-item {
  background-color: transparent;
  color: #3a3a3a;
  font-weight: 600;
  padding-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;
  text-decoration: none;
}
.desktop-nav {
  height: 100%;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  width: 100%;
  position: fixed;
  background-color: rgba(231, 236, 239, 0.81);
  backdrop-filter: blur(20px);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  padding-left: 5.6rem;
  z-index: 9999999;
}
.btn {
  text-transform: lowercase;
  padding: 0.9rem;
  font-family: Point, sans-serif;
  border-radius: 50px;
  font-weight: 500;
  justify-content: center;
  border: none;
  color: white;
  font-size: 1rem;
  align-items: center;
  display: flex;
}
.btn-primary {
  background-color: #274c77;
}
.mobile-item {
  background-color: transparent;
  border-bottom: 2px solid #274c77;
  color: #274c77;
  padding-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;
  text-decoration: none;
}
.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.menu-items-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
