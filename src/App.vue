<script setup>
import EasterEgg from "@/components/EasterEgg.vue";
import AppWindow from "@/components/AppWindow.vue";
import NavBar from "@/components/NavBar.vue";

const modalVisible = ref(false);
const modalType = ref(''); // Установите тип модального окна
const currentContent = ref('');

const devMode = true;
const showModal = () => {
  modalVisible.value = true;
  modalType.value = 'universal'; // Установите тип модального окна по вашему выбору
  currentContent.value = modalType.value === 'dark' ? 'dark-form-content' : 'default-content';
};

const closeModal = () => {
  modalVisible.value = false;
};
import { reactive, toRaw } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { h, ref } from 'vue';

import { Button, Menu, Modal } from 'ant-design-vue';
const current = ref(['mail']);
import Lenis from "@studio-freight/lenis";

const formState = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const labelCol = {
  style: {
    width: '150px',
  },
};
const wrapperCol = {
  span: 14,
};

// const lenis = new Lenis({
//   duration: 1.1,
//   easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
//   direction: "vertical",
//   gestureDirection: "vertical",
//   smooth: true,
//   smoothTouch: true,
//   touchMultiplier: 2,
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const items = ref([
  {
    key: 'cases',
    label: h(RouterLink, { to: '/' }, 'Кейсы'),
    title: 'Кейсы',
  },
  {
    key: 'offers',
    label: h(RouterLink, { to: '/about' }, 'Услуги'),
    title: 'Услуги',
  },
  {
    key: 'contacts',
    label: h(RouterLink, { to: '/about' }, 'Контакты'),
    title: 'Контакты',
  },
  {
    key: 'team',
    label: h(RouterLink, { to: '/about' }, 'Команда'),
    title: 'Команда',
  },
]);

</script>

<template>
  <div v-if="!devMode" class="placeholder">
    <span class="rhizome-loader animate__animated animate__fadeIn">RHIZOME</span>
    <img class="loader animate__animated animate__fadeInUp animate__delay-1s" src="@/assets/loader.svg">
  </div>
  <div v-else>
    <AppWindow :isOpen="modalVisible" :modalType="modalType" :currentContent="currentContent" @close="closeModal" />
    <NavBar />
    <div class="layout">
      <div class="content-wrapper">
        <div class="content-area">
          <transition name="fade" mode="out-in">
            <router-view @open-modal="showModal" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 415px) {
  .rhizome-loader {
    font-size: 4rem;
  }
}
.rhizome-loader {
  color: #274c77;
  font-size: 8rem;
  font-weight: 700;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: 'Point';
  src: url('./fonts/Point-Bold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Point';
  src: url('./fonts/Point-Regular.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Point';
  src: url('./fonts/Point-Book.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
:deep(#app) {
  background: #e7ecef!important;
  font-family: Point, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
  height: 100%;
  width: 100%;
  background-color: #e7ecef;
}
@media screen and (max-width: 767px) {
  .mobile {
    display: block; /* Скрываем сайдбар в мобильной версии */
  }

  .desktop {
    display: none!important; /* Отображаем сайдбар в мобильной версии */
  }
}
@media screen and (min-width: 767px) {
  .mobile {
    display: none; /* Скрываем сайдбар в мобильной версии */
  }

  .desktop {
    display: block; /* Отображаем сайдбар в мобильной версии */
  }
}
.header {
  background-color: rgba(231, 236, 239, 0.78);
  backdrop-filter: blur(20px) saturate(200%);;
  display: flex;
  width: 100%;
  padding-inline: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: lowercase;
  font-family: Point, sans-serif;
  font-weight: 800!important;
  font-size: 2rem;
}
:deep(.ant-menu-title-content) {
}
.menu-items {
  background-color: transparent;
  color: #3a3a3a;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: none!important;
}
.site-layout :deep(.site-layout-background) {
  background: #e7ecef;
}
.placeholder {
  background: #e7ecef;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  padding: 1.3rem;
  font-size: 1.2rem;
  text-transform: lowercase;
  font-family: Point, sans-serif;
  border-radius: 50px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  display: flex;
}
.btn-primary {
  background-color: #274c77;
  color: white;
}
.layout {
  background: #e7ecef;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.content-area {
  width: 100%;
  min-width: 90vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.mobile {
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.breadcrumbs {
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: start;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  background: #e7ecef;
  width: 100%;
}
:deep(.fade-enter-active, .fade-leave-active) {
  transition: opacity 0.5s;
}
:deep(.fade-enter, .fade-leave-to) {
  opacity: 0;
}
</style>
<style>
* {
  scroll-behavior: smooth;
}
html, body {
  font-family: Point, sans-serif;
}
.ant-modal-mask {
  background-color: #14283FA5 !important;
  backdrop-filter: blur(20px)!important;
}
.ant-modal-content {
  padding: 70px 24px!important;
}
.submit-button-row {
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn {
  padding: 1.3rem;
  font-size: 1.2rem;
  text-transform: lowercase;
  font-family: Point, sans-serif;
  border-radius: 50px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  display: flex;
}
.btn-primary {
  background-color: #274c77;
}
label {
  font-family: Point, sans-serif;
  font-size: 1rem!important;
}
.number{
  width: 100%!important;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dial-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.radio-group {
  width: 100%;
  display: flex;
}
.ant-modal-footer {
  display: none;
}
.btn-primary:hover {
  background-color: #6096ba;
  color: white!important;
}
.footer {
  padding: 3rem;
  height: 20rem;
  background-color: white!important;
}
.e-mail-row {
  width: 100%;
  text-align: left;
  justify-content: flex-start!important;
  font-family: Point, sans-serif;
  font-size: 4rem;
  font-weight: 600;
  color: #3a3a3a;
}
.info-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between!important;
  align-items: center!important;
  font-family: Point, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 4rem;
  color: #3a3a3a;
}
.col-1, .col-2, .col-3 {
  display: flex;
  flex-direction: column;
}
.col-3 {
  align-items: flex-end;
}
.col-1 {
  align-items: flex-start;
  opacity: 0.4;
}
.col-2 {
  align-items: center;
}
a {
  color: #274c77;
}
.footer-fix {
  height: 200px;
  background-color: white;
  display: none;
}
.items-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100vw;
}
* {
  font-family: Point, sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
