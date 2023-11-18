<template>
  <app-window :currentContent="'light-form-content'" :is-open="showMyModal" @close="closeMyModal" :modalType="modalType" />

  <div>
    <!-- Desktop Navbar -->
    <div v-if="!isMobile" class="desktop-nav">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <div class="nav-container">
        <div class="menu-items-wrapper">
          <a href="#cases" class="desktop-item">кейсы</a>
          <a href="#offers" class="desktop-item">услуги</a>
          <a href="#contacts" class="desktop-item">контакты</a>
          <a href="#team" class="desktop-item">команда</a>
        </div>
        <!-- Добавьте другие пункты меню по необходимости -->
        <button @click="handleTerminalClick('universal')" class="btn btn-primary">получить консультацию</button>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div v-else class="navbar-mobile animate__animated animate__fadeInUp animate__delay-2s">
      <div @click="toggleSidebar" class="burger-icon">

        <h3 class="menu-h3">> меню</h3></div>
      <transition name="fade">
        <div v-if="isSidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>
      </transition>
      <transition name="slide">
        <div v-if="isSidebarOpen" class="mobile-sidebar">
          <img src="@/assets/logo.svg" alt="Logo" class="logo" />
          <a @click="handleMenuItemClick('cases', $event)" class="mobile-item">> кейсы</a>
          <a @click="handleMenuItemClick('offers', $event)" class="mobile-item">> услуги</a>
          <a @click="handleMenuItemClick('contacts', $event)" class="mobile-item">> контакты</a>
          <a @click="handleMenuItemClick('team', $event)" class="mobile-item">> команда</a>
          <!-- Добавьте другие пункты меню по необходимости -->
          <button  @click="handleTerminalClick('universal'); closeSidebar()" class="btn btn-primary">получить консультацию</button>
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
      sections: {
        'cases': 'cases',
        'offers': 'offers',
        'contacts': 'contacts',
        'team': 'team',
      },
    };
  },
  methods: {
    openModal() {
      this.$store.dispatch('openModal', { modalType: 'universal' });
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleMenuItemClick(section, event) {
      const sectionId = this.sections[section];
      this.scrollToSection(sectionId);
      this.closeSidebar();
    },
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
.menu-h3 {
  text-align: center;
  margin: 0;
  color: #274c77;
  font-weight: 600;
}
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
* {
  font-family: Point, sans-serif;
}
.navbar-mobile {
  border-top: 2px solid rgba(39, 76, 119, 0.1);
  box-shadow: 0px 10px 52px rgba(39, 76, 119, 0.3);
  height: 4rem;
  position: fixed;
  bottom:0;
  gap: 1rem;
  z-index: 99999999;
  background-color: rgba(231, 236, 239, 0.8);
  backdrop-filter: blur(20px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-weight: 800;
  color: #274c77;
  cursor: pointer;
}

.sidebar-overlay {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
}

.mobile-sidebar {
  position: fixed;
  font-size: 2rem;
  left: 0;
  bottom:0;
  gap: 1rem;
  display: flex;
  width: 80%;
  height: 100vh;
  background: #e7ecef;
  padding: 1rem;
  z-index: 2;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  margin-top: 1rem;
  align-items: center;
  display: flex;
}
.btn-primary {
  background-color: #274c77;
}
.mobile-item {
  color: #274c77;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  font-family: "Ubuntu Mono", monospace;
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
