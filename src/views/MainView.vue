<template>
  <section class="section1">
      <div class="container-fluid animate__animated animate__fadeIn animate__slow">
        <h1  class="h1 title"><span class="rhizome">RHIZOME</span><br><span class="typing-text"></span><span class="cursor">|</span></h1>
        <p class="subtext animate__animated animate__fadeInUp animate__delay-2s" id="subtext">От идеи к готовому IT-продукту: дизайн, разработка веб-сайтов, приложений, чат-ботов и сложных сервисов</p>
        <a-divider></a-divider>
        <div class="row buttons-row animate__animated animate__fadeInUp animate__delay-2s" >
          <a-button href="#cases" class="btn btn-outlined" >Кейсы Rhizome</a-button>
          <a-button class="btn btn-primary" type="primary" @click="handleTerminalClick('universal')">Получить консультацию</a-button>
        </div>
      </div>
  </section>
  <section class="section2">
      <div class="container element" data-aos="fade-up">
        <h1 class="main-heading heading-dark" data-aos="fade-up">Наши компетенции</h1>
        <p data-aos="fade-up" class="p p-dark">Cтудия <span style="font-weight: 600">Rhizome</span> помогает компаниям, готовым к масштабированию, разработать собственные системы управления бизнес-процессами и коммуникации с клиентами</p>
        <a-divider></a-divider>
        <div class="container">
          <div class="row" data-aos="fade-up">
            <IconHomeDollar data-aos="fade-up" color="#a3cef1" :size="48" stroke-width="2" />
            <h1 data-aos="fade-up" class="main-heading heading-dark">Малый и средний бизнес</h1>
          </div>
          <p class="p p-dark" data-aos="fade-up">
            - Структура E-commerce<br>
            - Производственные предприятия<br>
            - Ритейл<br>
            - Предприятия общественного питания<br>
            - Гостиничный сервсис<br>
            - Клиентский сервис<br>
          </p>
          <a-divider></a-divider>
          <div class="row" data-aos="fade-up">
            <IconSchool color="#a3cef1" :size="48" stroke-width="2" />
            <h1 data-aos="fade-up" class="main-heading heading-dark">Онлайн-образование</h1>
          </div>
          <p class="p p-dark" data-aos="fade-up">
            - Онлайн-школы<br>
            - EdTech платформы<br>
            - Эксперты<br>
          </p>
        </div>
        <a-divider></a-divider>
        <div class="row" data-aos="fade-up">
          <IconHeartHandshake color="#a3cef1" :size="48" stroke-width="2" />
          <h1 data-aos="fade-up" class="main-heading heading-dark">Рекрутинговые агентства</h1>
        </div>
        <div class="row buttons-row" data-aos="fade-up">
          <a-button href="#cases" class="btn btn-outlined-dark">Кейсы Rhizome</a-button>
          <a-button class="btn btn-primary-dark" type="primary" @click="handleTerminalClick('universal')">Получить консультацию</a-button>
        </div>
      </div>
    </section>
  <section class="section3" style="display: flex" id="cases" ref="casesSection">
      <div class="separated-text-wrapper">
        <h1 class="h1"><glitched-writer :options="textGlitchOptions" class="separated-text" text="Кейсы" appear preset="neo" /><span class="rhizome"> Rhizhome</span></h1>
      </div>
      <div class="container cases-container">
        <div class="row cases-row">
          <div class="card" data-aos="fade-up">
            <img src="@/assets/greenpers.jpg" class="case-img" />
            <div class="container description-container">
              <h3 class="h3">Бот-календарь для агентства по аутсорсингу персонала GreenPers</h3>
              <p class="subtext-small">Освобождение 75% рабочего времени менеджеров компании по аутсорсингу линейных сотрудников за 14 дней.</p>
              <a-divider></a-divider>
              <div class="row badges-row">
                <a-badge class="badge" count="Telegram-бот" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#274c77', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
                <a-badge class="badge" count="Тайм-менеджмент" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#8b8c89', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
              </div>
            </div>
          </div>
          <div class="card" data-aos="fade-down">
            <div class="video-wrapper">
              <video-player :options="videoOptions" />
            </div>
            <div class="container description-container">
            <h3 class="h3">Система диагностики психологического состояния сотрудников: startup</h3>
            <p class="subtext-small">Экосистема для снижения текучести кадров и расходов компании более чем на 30% за счет работы с психологическим состоянием сотрудников.</p>
            <a-divider></a-divider>
            <div class="row badges-row">
              <a-badge class="badge" count="Веб-приложение" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#274c77', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
              <a-badge class="badge" count="Диагностика" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#8b8c89', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
            </div>
            </div>
          </div>
        </div>
        <div class="row cases-row">
          <div class="card" data-aos="fade-down">
            <div class="video-wrapper">
            <video-player :options="videoOptions2" />
            </div>
            <div class="container description-container">
            <h3 class="h3">Информационная система для медицинской клиники</h3>
            <p class="subtext-small">Повышение выручки медицинской клиники на 5,5% за счет внедрения информационной системы</p>
            <a-divider></a-divider>
            <div class="row badges-row">
              <a-badge class="badge" count="Веб-интерфейс" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: '#274c77', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
              <a-badge class="badge" count="Учет пациентов" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#8b8c89', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
            </div>
              </div>
          </div>
          <div class="card" data-aos="fade-up">
            <img src="@/assets/green.jpg" class="case-img" />
            <div class="container description-container">
            <h3 class="h3">Система-оплаты для прибалтийской игральной компании</h3>
            <p class="subtext-small">Мультивалютная платежная система в чат-боте для пополнения и вывода средств.</p>
            <a-divider></a-divider>
            <div class="row badges-row">
              <a-badge class="badge" count="Telegram-бот" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#274c77', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
              <a-badge class="badge" count="Gambling" :number-style="{ padding: '1rem 1rem 1rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#8b8c89', color: 'white', fontFamily: 'Point, sans-serif', fontWeight: 600 }" />
            </div>
              </div>
          </div>
        </div>
        <div class="card" data-aos="fade-up">
          <div class="video-wrapper">
          <video-player :options="videoOptions3" />
          </div>
          <div class="container description-container">
          <h3 class="h3">Подборка из 3-х кейсов по дизайну и веб-разработке</h3>
          <p class="subtext-small">Разработка полноценного сайта за 2 для Академии Цифровых Технологий.<br>
            Элементы айдентики и веб-сайт для CpaColl.<br>
            Хайп-календарь для пиарщика No1 в России.</p>
          </div>
        </div>
      </div>
    </section>
  <section id="offers" class="section4">
      <div class="separated-text-wrapper">
        <h1 class="h1" data-aos="fade-up">Услуги для<br>вашего бизнеса</h1>
      </div>
      <div class="row row-offer">
        <div class="container terminal-dark" @click="handleTerminalClick('dark')" >
          <div class="row terminal-header-dark">
          <div class="terminal-buttons-row">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
            <div class="appname">
              <span></span>
            </div>
          </div>
          <div class="container terminal-container-dark" @click="handleTerminalClick('dark')">
            <h1 v-if="showTerminalContent && !showGlitchWriter" class="terminal-heading-dark"><IconArrowBadgeRightFilled  data-aos="fade-up" color="limegreen" :size="20" stroke-width="2" /> Полный цикл разработки</h1>
            <p v-if="showTerminalContent && !showGlitchWriter" class="terminal-text-dark">Комплексный product-management и разработка IT-решений для вашего бизнеса <span class="cursor-small">|</span></p>
            <span class="launch-text-dark" v-if="showGlitchWriterDark" >>> <glitched-writer text="инициализация кода" appear preset="neo" /></span>
          </div>
        </div>
        <div class="container terminal-white" ref="terminalSection" @click="handleTerminalClick('white')">
          <div class="row terminal-header-white">
            <div class="terminal-buttons-row">
              <div class="red"></div>
              <div class="yellow"></div>
              <div class="green"></div>
            </div>
            <div class="appname">
              <span></span>
            </div>
          </div>
          <div class="container terminal-container" @click="handleTerminalClick('white')">
            <h1 v-if="showTerminalContent && !showGlitchWriter" class="terminal-heading-light"><IconArrowBadgeRightFilled data-aos="fade-up" color="limegreen" :size="20" stroke-width="2" /> Создание отдельных решений, доработка и сопровождение проектов</h1>
            <p v-if="showTerminalContent && !showGlitchWriter" class="terminal-text-light">Аутсорсинг единиц команды для приоритетных целей бизнеса <span class="cursor-small">|</span></p>
            <span v-if="showGlitchWriterWhite" class="launch-text-light" >>> <glitched-writer text="инициализация кода" appear preset="neo" /></span>
          </div>
        </div>
      </div>
    </section>
  <section class="section5" ref="section5">
      <div class="row counter-row-1" v-if="shouldShowCounters">
        <div class="col">
          <div class="row counter-row">
            <vue3-autocounter data-aos="fade-up" class="counter" ref='counter' :startAmount='0' :endAmount='20' :duration='3' prefix='> ' suffix='' separator=',' :autoinit='true'/>
            <p class="subtext-small counter-subtext" data-aos="fade-up">Реализованных комплексных IT-решений для бизнеса</p>
          </div>
        </div>
        <div class="col">
          <div class="row counter-row">
            <vue3-autocounter data-aos="fade-down" class="counter" ref='counter' :startAmount='0' :endAmount='3' :duration='3' prefix='' suffix='' separator=',' :autoinit='true'/>
            <p data-aos="fade-down" class="subtext-small counter-subtext">Кейса, разработанных для зарубежного рынка</p>
          </div>
        </div>
        <div class="col">
          <div class="row counter-row">
            <vue3-autocounter data-aos="fade-up" class="counter" ref='counter' :startAmount='0' :endAmount='1' :duration='3' prefix='' suffix='' separator=',' :autoinit='true'/>
            <p data-aos="fade-down" class="subtext-small counter-subtext">IT-startup проект, являющийся резидентом Skolkovo, в управлении</p>
          </div>
        </div>
      </div>
      <div class="last-button">
        <a-button class="btn btn-primary" type="primary" @click="handleTerminalClick('universal')">Получить консультацию</a-button>
      </div>
    </section>
  <section  id="team" class="section6">
    <div class="separated-text-wrapper">
      <h1 class="h1" data-aos="fade-up">Команда</h1>
    </div>
    <div class="profile-container">

    </div>
  </section>
  <section id="contacts" class="footer-section">
    <!--    Footer area-->
    <div class="footer desktop">
      <div class="e-mail-row">
        <img class="logo-footer" src="@/assets/logo.svg" />
      </div>
      <div class="row e-mail-row">
        <a class="mail-link" href="mailto:info@rhizomedev.com">info@rhizomedev.com</a>
      </div>
      <div class="row info-row">
        <div class="col-1">
          <span>Юридический адрес</span>
          <span style="font-weight: 600">Rhizhome | 2023</span>
        </div>
        <div class="col-2">
          <span>/</span>
          <a href="#"><span>Политика обработки персональных данных</span></a>
        </div>
        <div class="col-3">
          <a href="#"><span>Telegram</span></a>
          <a href="#"><span>Whatsapp</span></a>
        </div>
      </div>
    </div>
    <div class="mobile-footer mobile">
      <div class="e-mail-row-mobile">
        <div class="col-logo">
          <img class="logo-footer" src="@/assets/logo.svg" />
        </div>
        <div class="col-links">
          <a href="#" class="brand-icon">
            <IconBrandTelegram :size="48"></IconBrandTelegram>
          </a>
          <a href="#" class="brand-icon">
            <IconBrandWhatsapp :size="48"></IconBrandWhatsapp>
          </a>
        </div>
      </div>
      <div class="row e-mail-row">

        <a class="mail-link" href="mailto:info@rhizomedev.com">info@rhizomedev.com</a>
      </div>
      <div class="row info-row">
        <div class="col-1">
          <span>Юридический адрес</span>
          <span style="font-weight: 600">Rhizhome | 2023</span>
        </div>
        <div class="col-2">
          <span>/</span>
          <a href="#"><span>Политика обработки персональных данных</span></a>
        </div>
      </div>
      <div class="footer-placeholder"></div>
    </div>
  </section>

  <app-window :currentContent="'light-form-content'" :is-open="showMyModal" @close="closeMyModal" :modalType="modalType" />
  </template>

<script>
import { gsap } from "gsap";
import AppWindow from '@/components/AppWindow.vue';
import {Button} from "ant-design-vue";
import AOS from "aos";
import VideoPlayer from '@/components/VideoPlayer.vue';
import { IconBrandWhatsapp, IconBrandTelegram, IconHomeDollar, IconSchool, IconHeartHandshake, IconArrowBadgeRightFilled } from "@tabler/icons-vue";
import GlitchedWriter from 'vue-glitched-writer'
import EasterEgg from "@/components/EasterEgg.vue";


import { ref } from 'vue';


export default {
  beforeRouteEnter(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  emits: ["open-modal"],
  components: { IconBrandTelegram, IconBrandWhatsapp, EasterEgg, AppWindow, Button, VideoPlayer, IconHomeDollar, IconSchool, IconArrowBadgeRightFilled, IconHeartHandshake, GlitchedWriter},
  watch: {
    $route(to, from) {
      if (this.isContentChanged(to, from) && this.animationsPlayed) {
        this.$nextTick(() => {
          AOS.refresh();
        });
      }
    },
  },
  methods: {
    handleKeyUp(event) {
      if (event.key.toLowerCase() === "gipsy") {
        this.$refs.easterEgg.showEasterEgg = true;
        this.$refs.easterEgg.playAudio();

        // Через секунду скрываем Easter Egg
        setTimeout(() => {
          this.$refs.easterEgg.showEasterEgg = false;
        }, 1000);
      }
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
        }, type === 'universal' ? 0 : 1800);
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
    handleScroll() {
      const casesSection = this.$refs.casesSection;
      const section5 = this.$refs.section5;
      if (casesSection) {
        const rect = casesSection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          this.showGlitchedWriter = true;
        } else {
          this.showGlitchedWriter = false;
        }
      }
      if (section5) {
        const rect = section5.getBoundingClientRect();

        // Проверяем, находится ли секция в области видимости и счетчики еще не отрисованы
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !this.hasShownCounters) {
          this.shouldShowCounters = true;
          this.hasShownCounters = true;
          // Ваш код для отрисовки счетчиков
        }
      }
    },
    initAOS() {
      AOS.init()
    },
  },

  data() {
    return {
      showGlitchWriterDark: false,
      showGlitchWriterWhite: false,
      modalType: '',
      showTerminalContent: true,
      currentContent: '',
      showMyModal: false,
      open: ref(false),
      isGlitchVisible: false,
      showModal: false,
      shouldShowCounters: false,
      hasShownCounters: false,
      showGlitchWriter: false,
      videoOptions: {
        autoplay: 'muted',
        loop: true,
        preload: 'auto',
        controls: false,
        responsive: true,
        fluid: true,
        breakpoints: {
          tiny: 200,
          xsmall: 200,
          small: 200,
          medium: 200,
          large: 200,
          xlarge: 200,
          huge: 200
        },
        sources: [{
          src: '/video.mp4',
          type: 'video/mp4'
        }]
      },
      videoOptions2: {
        autoplay: 'muted',
        loop: true,
        controls: false,
        fill: true,
        width: 650,
        responsive: true,
        fluid: true,
        breakpoints: {
          tiny: 200,
          xsmall: 200,
          small: 200,
          medium: 200,
          large: 200,
          xlarge: 200,
          huge: 200
        },
        preload: 'auto',
        sources: [{
          src: '/video2.mp4',
          type: 'video/mp4'
        }]
      },
      videoOptions3: {
        autoplay: 'muted',
        loop: true,
        controls: false,
        width: 650,
        fill: true,
        preload: 'auto',
        responsive: true,
        fluid: true,
        breakpoints: {
          tiny: 200,
          xsmall: 200,
          small: 200,
          medium: 200,
          large: 200,
          xlarge: 200,
          huge: 200
        },
        sources: [{
          src: '/video3.mp4',
          type: 'video/mp4'
        }]
      }
    }
  },
 mounted() {
   window.addEventListener("keyup", this.handleKeyUp);
   this.initAOS();
   AOS.init();
   gsap.defaults({ease: "none"});
   window.addEventListener("scroll", this.handleScroll);

   const tl = gsap.timeline({repeat: 0, repeatDelay:1, yoyo:false});
   tl.to(".typing-text", {duration: 1.5, text:"студия разработки полного цикла"})
       .to(".typing-text", {x:100})
       .to(".cursor", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5 })
       .to(".cursor-small", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5 });
   this.animationsPlayed = true;

 },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("keyup", this.handleKeyUp);
  },

}
</script>

<style scoped>
.footer-section {
  width: 100%;
}
.footer {
  padding: 3rem;
  height: 20rem;
  background-color: white!important;
  flex-direction: column;
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
@media (max-width: 575.98px) {
  .col-2 {
    text-align: center;
  }
  .mobile {
    display: flex!important;
  }
  .desktop {
    display: none!important;
  }
  .mail-link {
    font-size: 1rem!important;
    margin-top: 1rem!important;
  }
  .info-row {
    margin: 0!important;
  }
  .element {
    border-radius: 30px!important;
  }
  .container-fluid {
    padding: 1rem!important;
  }
  .section3 {
    padding: 1rem!important;
  }
  .separated-text-wrapper {
    text-align: center!important;
  }
  .h1 {
    min-width: auto!important;
  }
  .section3 .h1 {
    line-height: 0.7!important;
  }
  .section4 .h1 {
    font-size: 3rem!important;
  }
  .counter-row {
    justify-content: center!important;
    width: 100%!important;
    align-items: center!important;
    text-align: center!important;
    flex-direction: column!important;
  }
  .case-img {
    min-width: 23rem!important;
  }
  .section3 .separated-text {
    font-size: 4rem!important;
  }
  .section3 .rhizome {
    font-size: 4rem!important;
  }
  .element {
    width: 98vw!important;
    padding: 3rem 2rem 3rem 2rem!important;
  }
  .buttons-row {
    margin-top: 1rem!important;
  }
  .title {
    line-height: 0.6!important;
    margin-top: 2rem!important;
  }
  .rhizome {
    font-size: 5rem!important;
  }
  .typing-text {
    font-size: 3rem!important;
  }
  .cursor {
    font-size: 3rem!important;
  }
}

@media (max-width: 767.98px) {
  .container-fluid {
    padding: 1rem!important;
  }
  .footer {
    padding: 1rem!important;
  }
}

@media (max-width: 991.98px) {
  .container-fluid {
    padding: 1rem!important;
  }
}

@media (max-width: 1199.98px) { }

@media (max-width: 1399.98px) { }

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
.btn-primary-dark {
  background-color: #a3cef1;
  color: #3a3a3a;
}
.btn-outlined-dark {
  background-color: transparent;
  border: 2px solid #a3cef1;
  color: #a3cef1;
}
.btn-outlined-dark:hover {
  background-color: transparent;
  border: 2px solid #6096ba;
  color: #6096ba;
}
.e-mail-row-mobile {
  display: flex;
  justify-content: space-between;
}
.col-links {
  justify-content: center;
  align-items: center;
  display: flex;
}
.brand-icon {
  font-size: 2rem;
}
.btn-outlined:hover {
  background-color: transparent;
  border: 2px solid #6096ba;
  color: #6096ba;
}
.mobile-footer
.btn-outlined {
  background-color: transparent;
  border: 2px solid #274c77;
  color: #274c77;
}
.btn-primary:hover {
  background-color: #6096ba;
}
.h2 {
  font-size: 5rem;
  font-weight: 700;
  text-align: left;
  width: 100%;
}
.separated-text-wrapper {
  min-height: 150px;
  width: 100%;
}
.separated-text {
  font-size: 5rem;
  margin-bottom: 5rem;
  font-weight: 700;
  text-align: left;
  padding-left: 0!important;
  width: 100%;
  color: #3a3a3a;
}
:deep(.ant-divider-inner-text) {
  padding: 0;
}
.element {
  border-radius: 66px;
  background: linear-gradient(108deg, rgba(0, 0, 0, 0.00) 11.68%, rgba(0, 0, 0, 0.86) 86.59%);
  margin-bottom: 5rem;
  background-blend-mode: soft-light, normal, normal;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.h1 {
  font-size: 6rem;
  font-weight: 600;
  width: 100%;
  min-width: 100vw;
}

.subtext {
  font-weight: 400;
  font-size: 2rem;
}
.typing-text {
  font-weight: 400;
  width: 100%;
  font-family: Point, sans-serif;
}
.cursor {
  font-weight: 400;
}
.section1 {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
}
.container-fluid {
padding: 5rem;
  width: 100%;
}
.element {
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
  background-position: center;
  width: 90vw;
  height: auto;
  padding: 5rem 3rem 5rem 3rem;
  font-family: Point, sans-serif;
}
.main-heading {
  font-size: 3rem;
  font-weight: 600;
  color: white;
}
.p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
.section3 {
  color: #3a3a3a;
  background-color: #8b8c89;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  position: relative;
}
.footer-placeholder {
  height: 3rem;
}
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 620px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.case-img {
  width: 100%;
  min-width: 30rem;
}
.h1 {
  color: #3a3a3a;
}
.rhizome {
  color: #274c77;
  font-weight: 700;
}
.h3 {
  color: #274c77;
  font-size: 2rem;
  font-weight: 700;
}
.subtext-small {
  font-size: 1.5rem;
  font-weight: 400;
  color: #3a3a3a;
}
.row-offer {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  margin-top: 6rem;
}
.offer {
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p {
  margin:0;
}
.subheading {
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
}
.buttons-row {
  margin-top: 4rem;
  gap: 2rem;
}
.section3 {
  background-color: white;
  padding-bottom: 10rem;
}
.counter {
  font-size: 6rem;
  color: #274c77;
  font-weight: 700;
}
.counter-subtext {
  width: 100%;
  margin-left: 2rem;
  margin-right: 2rem;
  max-width: 15rem;
}
.counter-row {
  justify-content: center;
  width: 100%;
  align-items: center;
}
.desktop {
  display: flex;
}
.mobile {
  display: none;
}
.section5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.mobile-footer {
  background-color: white;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
}
.section4 {
  padding-top: 4rem;
  padding-bottom: 7rem;
  padding-left: 3rem;
  padding-right: 3rem;
  position: relative;
  width: 100%;
}
.badges-row {
  gap: 0.5rem;
  margin-top: 1rem;
}
.badge {
  text-transform: lowercase;
  opacity: 0.7;
}
.cases-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 100vw;
}
.heading-dark {
  color: #e7ecef;
}
.p-dark {
  color: #e7ecef;
}
.video-wrapper {
  width: 100%;
  max-width: 37rem;
  background: transparent;
  border: none!important;
}
.description-container {
  width: 100%;
  max-width: 35rem;
}
.title {
  min-height: 250px;
}
.terminal-header-white {
  background-color: white;
  height: 2.5rem;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid #e7e7e7;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  gap: 0;
}
.terminal-header-dark {
  background-color: #3b3b3b;
  height: 2.5rem;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid #484848;
  border-bottom: 1px solid #2e2e2e;
  display: flex;
  flex-direction: row;
  gap: 0;
}
.terminal-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
}
.yellow {
  background-color: #FFB429;
  border: 1px solid #F0A318;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.green {
  border: 1px solid #12A025;
  background-color: #25C63A;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.cases-row {
  gap: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.red {
  background-color: #FF544D;
  border: 1px solid #DA3C37;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.terminal-buttons-row {
  display: flex;
  padding-left: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  max-width: 6rem;
  justify-content: center;
  align-items: center;
}
.appname {
  width: 100%;
  max-width: 20rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.terminal-container {
  background-color: rgba(255, 255, 255, 0.63);
  height: 100%;
  color: black!important;
  padding: 1rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  max-height: 20rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border: 1px solid #e7e7e7;
  border-top: 0;
  min-height: 230px;
}
.terminal-container-dark {
  background-color: #1F1F1FA0;
  height: 100%;
  max-height: 20rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  padding: 1rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border: 1px solid #3c3c3c;
  border-top: 0;
  min-height: 230px;
}
.terminal-white {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  height: 100%;
  color: black!important;
  width: 30rem;
}
.terminal-dark {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  height: 100%;
  width: 30rem;
  min-height: 230px;
}
.terminal-dark:nth-child(2n):hover {
  margin-top: 0;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 40px 0px rgba(34, 57, 108, 0.48);
  cursor: pointer;
}
.terminal-dark:hover {
  margin-top: -10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 40px 0px rgba(34, 57, 108, 0.48);
  cursor: pointer;
}

.terminal-white:hover {
  margin-top: -10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 40px 0px rgba(34, 57, 108, 0.48);
  cursor: pointer;
}
.terminal-heading-dark {
  color: white;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
}
.terminal-heading-light {
  color: #262626;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
}
.terminal-text-dark {
  color: white;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 1.5rem;
}
.terminal-text-light {
  color: #1e1e1e;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 1.5rem;
}
.counter-row-1 {
  gap: 0.5rem;
  justify-content: center;
}
.last-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
}
.launch-text-dark {
  font-size: 1.5rem;
  font-weight: 400;
  color: #11ff11;
}
.launch-text-light {
  font-size: 1.5rem;
  font-weight: 400;
  color: #11ff11;
}
#nohover {
  width: 100%;
  min-width: 90vw;
}
#nohover:hover {
  margin: 0;
  cursor: auto;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
}
.full-modal.ant-modal-content {
  background-color: #1e1e1e!important;
}

</style>
<style>
html {
  width: 100%;
  max-width: 100vw;
}
</style>
