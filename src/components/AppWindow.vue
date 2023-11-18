<!-- AppWindow.vue -->

<template>
  <div v-if="isOpen" class="my-modal">
    <div class="overlay animate__animated animate__fadeIn animate__faster" @click="closeModal"></div>
    <div class="modal-content animate__animated animate__backInUp animate__faster">
      <!-- Условие для выбора контента в зависимости от modalType -->
      <template v-if="modalType === 'dark'" id="dark">
        <div class="container terminal-dark" >
          <div class="row terminal-header-dark">
            <div class="terminal-buttons-row desktop">
              <div @click="closeModal" class="red"><div class="cross">X</div></div>
              <div class="yellow"></div>
              <div class="green"></div>
            </div>
            <div class="terminal-buttons-row mobile">
              <div @click="closeModal" class="red-mobile"><div class="cross">X</div></div>
            </div>
            <div class="appname-dark">
              <span>полный цикл</span>
            </div>
            <div class="social">
              <IconMessageDots  data-aos="fade-up" color="#3987da" :size="20" stroke-width="2" />
            </div>
          </div>
          <div class="container terminal-container-dark">
            <template v-if="currentContent === 'dark-form-content'">
            <div class="modal-row">
              <div class="modal-col-1">
                <h1 class="h1-dark">Полный цикл разработки с Rhizome</h1>
                <p class="terminal-text-dark">Разработка любого решения для вашего бизнеса: от формирования гипотезы до интеграции в ваш бизнес</p>
              </div>
              <div class="modal-col-2">
                <a-button class="btn btn-primary" type="primary" @click="showFeedbackForm">заказать разработку</a-button>
              </div>
            </div>
            <Vue3Marquee :pause-on-hover="true" :clone="true" class="container offers-container">
              <div class="card-dark">
                <h2 class="h2">Аудит бизнес-процессов</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Разработка ТЗ</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Брендинг и дизайн</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Прототипирование</h2>
              </div>
            </Vue3Marquee>
            <Vue3Marquee :pause-on-hover="true" :clone="true" :direction="'reverse'" class="container offers-container">
              <div class="card-dark">
                <h2 class="h2">Backend и Frontend разработка</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Внедрение продукта</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Тестирование</h2>
              </div>
              <div class="card-dark">
                <h2 class="h2">Оптимизация</h2>
              </div>
            </Vue3Marquee>
            <div class="container steps-container mobile">
              <div class="cards-row">
                <div class="step-card-dark">
                  <IconCalculator  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                  <p class="terminal-text-dark" style="margin-top: 1rem;">
                    Вводная бесплатная консультация
                  </p>
                </div>
                <div class="step-card-dark">
                  <IconSignature  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                  <p class="terminal-text-dark">
                    Согласование ТЗ и заключение договора
                  </p>
                </div>
              </div>
              <div class="cards-row">
                <div class="step-card-dark">
                  <IconReceipt2  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2 " />
                  <p class="terminal-text-dark">
                    Предоплата и последовательная разработка
                  </p>
                </div>
                <div class="step-card-dark">
                  <IconThumbUp  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                  <p class="terminal-text-dark">
                    Сдача проекта и завершение обязательств
                  </p>
                </div>
              </div>
            </div>
            <div class="container steps-container desktop">
                  <div class="step-card-dark">
                    <IconCalculator  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                    <p class="terminal-text-dark" style="margin-top: 1rem;">
                      Вводная бесплатная консультация
                    </p>
                  </div>
                  <div class="step-card-dark">
                    <IconSignature  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                    <p class="terminal-text-dark">
                      Согласование ТЗ и заключение договора
                    </p>
                  </div>
                  <div class="step-card-dark">
                    <IconReceipt2  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2 " />
                    <p class="terminal-text-dark" >
                      Предоплата и последовательная разработка
                    </p>
                  </div>
                  <div class="step-card-dark">
                    <IconThumbUp  data-aos="fade-up" color="#3987da" :size="50" stroke-width="2" />
                    <p class="terminal-text-dark">
                      Сдача проекта и завершение обязательств
                    </p>
                  </div>
              </div>
            </template>
            <template v-else-if="currentContent === 'feedback'">
              <form class="animate__animated animate__fadeIn form-wrapper" @submit.prevent="submitFeedbackForm">
                <button @click="goBack" class="back-btn-dark animate__animated animate__fadeIn"><IconArrowLeft  data-aos="fade-up" color="#3987da" :size="20" stroke-width="2" /></button>
                <h1 class="form-heading-dark animate__animated animate__fadeIn">Вводная консультация</h1>
                <p class="form-subtext-dark animate__animated animate__fadeIn">Команда студии Rhizome в данном формате сотрудничества закрывает все процессы: product-management, дизайн и разработка. Вы получаете готовый IT-продукт</p>
                <div class="container form-container">
                  <div class="form-col1 animate__animated animate__fadeIn">
                    <label for="fullName" class="label-dark">ФИО:</label>
                    <input style="background: #212121; border: 2px solid #3987da; color: white;" type="text" v-model="reqData.name" id="fullName" name="fullName" required>

                    <label for="phoneNumber" class="label-dark">Номер телефона:</label>
                    <input style="background: #212121; border: 2px solid #3987da; color: white;" type="tel" v-model="reqData.phone" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Например, 123-45-678" required>

                    <label for="email" class="label-dark">Email:</label>
                    <input style="background: #212121; border: 2px solid #3987da; color: white;" type="email" v-model="reqData.email"  id="email" name="email" required>

                    <label class="label-dark">Предпочтительный способ связи:</label>
<!--                    <div class="radio-row">-->
<!--                      <label for="contactPhone" class="phone-label-dark"><input type="radio" v-model="reqData.type" id="contactPhone" name="contactMethod" value="phone" > Телефон</label>-->
<!--                      <label for="contactEmail" class="email-label-dark"><input type="radio" v-model="reqData.type" id="contactEmail" name="contactMethod" value="email"> Почта</label>-->
<!--                    </div>-->
                    <div class="radio-wrapper">
                      <a-radio-group v-model:value="reqData.type" button-style="solid">
                        <a-radio-button  v-model="reqData.type" id="contactPhone" name="contactMethod" value="phone">Позвонить</a-radio-button>
                        <a-radio-button  v-model="reqData.type" id="contactEmail" name="contactMethod" value="email">Написать</a-radio-button>
                      </a-radio-group>
                    </div>
                  </div>
                  <div class="form-col2 animate__animated animate__fadeIn">
                    <label for="comments" class="label-dark">Комментарии:</label>
                    <textarea style="background: #212121; border: 2px solid #3987da; color: white;" v-model="reqData.context" id="comments" name="comments" rows="4"></textarea>
                    <input type="submit" value="Отправить" @click="send">
                  </div>
                </div>
              </form>
              <div class="disclaimer-row">
                <p class="disclaimer-light">Отправляя заявку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template v-else-if="modalType === 'white'">
        <div class="container terminal-white" >
          <div class="row terminal-header-white">
            <div class="terminal-buttons-row desktop">
              <div @click="closeModal" class="red"><div class="cross">X</div></div>
              <div class="yellow"></div>
              <div class="green"></div>
            </div>
            <div class="terminal-buttons-row mobile">
              <div @click="closeModal" class="red-mobile"><div class="cross">X</div></div>
            </div>
            <div class="appname-light">
              <span>отдельные решения</span>
            </div>
            <div class="social">
              <IconMessageDots  data-aos="fade-up" color="#274c77" :size="20" stroke-width="2" />
            </div>
          </div>
          <div class="container terminal-container">
            <template v-if="currentContent === 'light-form-content'">
              <div class="modal-row">
                <div class="modal-col-1">
                  <h1 class="h1-light animate__animated animate__fadeIn">Создание отдельных решений, доработка и сопровождение проектов</h1>
                  <p class="terminal-text-light animate__animated animate__fadeIn">Доработка и сопровождение веб-сайтов, приложений, чат-ботов, и процессов product-managment</p>
                </div>
                <div class="modal-col-2">
                  <a-button class="btn btn-primary animate__animated animate__fadeIn" type="primary" @click="showFeedbackForm">привлечь команду</a-button>
                </div>
              </div>
              <Vue3Marquee :pause-on-hover="true" :clone="true" class="container offers-container">
                <div class="card-light">
                  <h2 class="h2-light">Доработка сайта, чат-бота, приложения</h2>
                </div>
                <div class="card-light">
                  <h2 class="h2-light">Разработка дизайна проекта</h2>
                </div>
                <div class="card-light">
                  <h2 class="h2-light">Создание прототипов</h2>
                </div>
                <div class="card-light">
                  <h2 class="h2-light">Product-managment</h2>
                </div>
              </Vue3Marquee>
              <Vue3Marquee :pause-on-hover="true" :clone="true" :direction="'reverse'" class="container offers-container">
                <div class="card-light">
                  <h2 class="h2-light">Тестирование продукта</h2>
                </div>
                <div class="card-light">
                  <h2 class="h2-light">Аудит и оптимизация существующих решений</h2>
                </div>
                <div class="card-light">
                  <h2 class="h2-light">Сопровождение</h2>
                </div>
              </Vue3Marquee>
              <div class="container steps-container desktop">
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconCalculator  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light" style="margin-top: 1rem;">
                      Вводная бесплатная консультация
                    </p>
                  </div>
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconSignature  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light">
                      Формирование оптимального состава команды на аутсорсинг
                    </p>
                  </div>
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconReceipt2  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2 " />
                    <p class="terminal-text-light">
                      Предоплата и последовательная разработка
                    </p>
                  </div>
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconThumbUp  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light">
                      Сдача проекта и завершение обязательств
                    </p>
                  </div>
              </div>
              <div class="container steps-container mobile">
                <div class="cards-row">
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconCalculator  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light" style="margin-top: 1rem;">
                      Вводная бесплатная консультация
                    </p>
                  </div>
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconSignature  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light" >
                      Формирование оптимального состава команды на аутсорсинг
                    </p>
                  </div>
                </div>
                <div class="cards-row">
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconReceipt2  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2 " />
                    <p class="terminal-text-light" >
                      Предоплата и последовательная разработка
                    </p>
                  </div>
                  <div class="step-card-light animate__animated animate__fadeIn">
                    <IconThumbUp  data-aos="fade-up" color="#274c77" :size="50" stroke-width="2" />
                    <p class="terminal-text-light" >
                      Сдача проекта и завершение обязательств
                    </p>
                  </div>
                </div>
              </div>
            </template>
            <template v-else-if="currentContent === 'feedback'">
              <form class="animate__animated animate__fadeIn form-wrapper" @submit.prevent="submitFeedbackForm">
                  <button @click="goBackLight" class="back-btn animate__animated animate__fadeIn"><IconArrowLeft  data-aos="fade-up" color="#274c77" :size="20" stroke-width="2" /></button>
                  <h1 class="form-heading-light animate__animated animate__fadeIn">Вводная консультация</h1>
                  <p class="form-subtext animate__animated animate__fadeIn">В зависимости от приоритетных задач бизнеса, студия Rhizome предоставляет отдельные единицы команды на аутсорсинг процессов под вашим руководством. Расскажите о себе и ваших целях - и мы свяжемся с вами</p>
                <div class="container form-container">
                  <div class="form-col1 animate__animated animate__fadeIn">
                    <label for="fullName">ФИО:</label>
                    <input type="text" v-model="reqData.name" id="fullName" name="fullName" required>

                    <label for="phoneNumber">Номер телефона:</label>
                    <input type="tel" v-model="reqData.phone" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Например, 123-45-678" required>

                    <label for="email">Email:</label>
                    <input type="email" v-model="reqData.email" id="email" name="email" required>

                    <label>Предпочтительный способ связи:</label>
<!--                    <div class="radio-row">-->
<!--                      <label for="contactPhone" class="phone-label"><input type="radio" v-model="reqData.type" id="contactPhone" name="contactMethod" value="phone"> Телефон</label>-->
<!--                      <label for="contactEmail" class="email-label"><input type="radio" v-model="reqData.type" id="contactEmail" name="contactMethod" value="email"> Почта</label>-->
<!--                    </div>-->
                    <div class="radio-wrapper">
                      <a-radio-group v-model:value="reqData.type" button-style="solid">
                        <a-radio-button  v-model="reqData.type" id="contactPhone" name="contactMethod" value="phone">Позвонить</a-radio-button>
                        <a-radio-button  v-model="reqData.type" id="contactEmail" name="contactMethod" value="email">Написать</a-radio-button>
                      </a-radio-group>
                    </div>
                    </div>
                  <div class="form-col2 animate__animated animate__fadeIn">
                    <label for="comments">Комментарии:</label>
                    <textarea v-model="reqData.context" id="comments" name="comments" rows="4"></textarea>
                    <input type="submit" value="Отправить" @click = "send">
                  </div>
                </div>
                </form>
              <div class="disclaimer-row">
                <p class="disclaimer">Отправляя заявку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template v-else-if="modalType === 'universal'">
        <div class="container terminal-uni" >
          <div class="row terminal-header-white">
            <div class="terminal-buttons-row desktop">
              <div @click="closeModal" class="red"><div class="cross">X</div></div>
              <div class="yellow"></div>
              <div class="green"></div>
            </div>
            <div class="terminal-buttons-row mobile">
              <div @click="closeModal" class="red-mobile"><div class="cross">X</div></div>
            </div>
            <div class="appname-light">
              <span>бесплатная консультация</span>
            </div>
            <div class="social">
              <IconMessageDots  data-aos="fade-up" color="#274c77" :size="20" stroke-width="2" />
            </div>
          </div>
          <div class="container terminal-container">
            <template v-if="currentContent === 'default-content'">
              <form class="animate__animated animate__fadeIn form-wrapper">
                <h1 class="form-heading-light animate__animated animate__fadeIn">Бесплатная консультация</h1>
                <p class="form-subtext animate__animated animate__fadeIn">В зависимости от приоритетных задач бизнеса, студия Rhizome предоставляет отдельные единицы команды на аутсорсинг процессов под вашим руководством. Расскажите о себе и ваших целях - и мы свяжемся с вами</p>
                <div class="container form-container">
                  <div class="form-col1 animate__animated animate__fadeIn">
                    <label for="fullName">ФИО:</label>
                    <input type="text" v-model="reqData.name" id="fullName" name="fullName" required>

                    <label for="phoneNumber">Номер телефона:</label>
                    <input type="tel" v-model="reqData.phone" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Например, 123-45-678" required>

                    <label for="email">Email:</label>
                    <input type="email" v-model="reqData.email" id="email" name="email" required>

                    <label>Предпочтительный способ связи:</label>
                    <div class="radio-wrapper">
                      <a-radio-group v-model:value="reqData.type" button-style="solid">
                        <a-radio-button  v-model="reqData.type" id="contactPhone" name="contactMethod" value="phone">Позвонить</a-radio-button>
                        <a-radio-button  v-model="reqData.type" id="contactEmail" name="contactMethod" value="email">Написать</a-radio-button>
                      </a-radio-group>
                    </div>
                  </div>
                  <div class="form-col2 animate__animated animate__fadeIn">
                    <label for="comments">Комментарии:</label>
                    <textarea v-model="reqData.context" id="comments" name="comments" rows="4"></textarea>
                    <input type="submit" value="Отправить" @click="send">
                  </div>
                </div>
              </form>
              <div class="disclaimer-row">
                <p class="disclaimer-dark">Отправляя заявку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>

<script>
import {IconArrowLeft, IconReceipt2, IconThumbUp, IconSignature, IconArrowBadgeRightFilled, IconMessageDots, IconCalculator} from "@tabler/icons-vue";
import GlitchedWriter from "vue-glitched-writer";
import {Vue3Marquee} from "vue3-marquee";
import { ref } from 'vue';
import {mapGetters} from "vuex";
import axios from "axios";


export default {
  computed: {
    ...mapGetters(['isModalOpen', 'modalType']),
  },
  components: {IconArrowLeft, IconThumbUp, IconReceipt2, IconCalculator, IconSignature, Vue3Marquee, GlitchedWriter, IconArrowBadgeRightFilled, IconMessageDots},
  props: {
    isOpen: Boolean,
    modalType: String, // Добавляем новый параметр modalType
    currentContent: '',
  },
  data() {
    return {
      value1: 'a',
      currentContent: this.modalType === 'dark' ? 'dark-form-content' : (this.modalType === 'white' ? 'light-form-content' : 'default-content'),
      reqData:{
        name: null,
        phone: null,
        email: null,
        context: null,
        type: null
      }
    };
  },
  mounted() {
    console.log('modalType:', this.modalType);
  },
  methods: {
    closeModal() {
      if (this.modalType === 'dark') {
        this.currentContent = 'dark-form-content';
      } else if (this.modalType === 'white') {
        this.currentContent = 'light-form-content';
      } else if (this.modalType === 'universal') {
        this.currentContent = 'default-content';
      }

      this.$emit('close')
    },
    showFeedbackForm() {
      this.currentContent = 'feedback';
    },
    goBack() {
      this.currentContent = 'dark-form-content';
    },
    goBackLight() {
      this.currentContent = 'light-form-content';
    },
    send() {
      console.log(this.reqData);
      const url = "https://api.rhizomedev.com/send-mail"
      axios.post(url, this.reqData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then(response => {
            console.log('Письмо успешно отправлено:', response.data);
            console.log('Отправленные данные:');
            console.log(this.reqData);
            this.closeModal()
          })
          .catch(error => {
            console.error('Ошибка при отправке данных:', error);
            console.error('Проблема:', error.message);
          });

    }
  },

  watch: {
    modalType(newModalType) {
      switch (newModalType) {
        case 'dark':
          this.currentContent = 'dark-form-content';
          break;
        case 'white':
          this.currentContent = 'light-form-content';
          break;
        case 'universal':
          this.currentContent = 'default-content';
          break;
        default:
          // Обработка других значений modalType
          this.currentContent = 'default-content';
      }
    },
  },
};

</script>
<style scoped>

@media only screen and (max-width: 900px) {
  .terminal-text-dark {
    font-size: 1rem!important;
  }
  .terminal-container-dark {
    justify-content: space-between!important;
  }
  .terminal-container-dark input {
    background-color: #2f2f2f!important;
    color: white!important;
  }
  .terminal-container-dark input[type="submit"] {
    background-color: #3987da!important;
  }
  .terminal-container-dark :deep(:where(.css-dev-only-do-not-override-1qb1s0s).ant-radio-button-wrapper) {
    background-color: transparent!important;
    color: white;
  }
  .terminal-container-dark :deep(:where(.css-dev-only-do-not-override-1qb1s0s).ant-radio-button-wrapper-checked) {
    background-color: #3987da!important;
    color: white;
  }
}
@media only screen and (max-width: 430px) {
  .social {
    margin-left: 1rem!important;
  }
  .terminal-uni {
    min-width: 90vw!important;
  }
  .form-heading-light {
    font-size: 2rem!important;
  }
  .form-heading-dark {
    font-size: 2rem!important;
  }
  .h2 {
    font-size: 1rem!important;
  }
  .card-dark {
  }
  .cross {
    font-size: 0.8rem!important;
  }
  .mobile {
    display: flex!important;
  }
  .desktop {
    display: none!important;
  }
  .steps-container {
    //flex-wrap: wrap!important;
  }
  .terminal-text-dark {
    font-size: 1rem!important;
  }
  .step-card-dark {
    background-color: transparent!important;
    padding: 0!important;
    border: none!important;
  }
  .step-card-light {
    background-color: transparent!important;
    padding: 0!important;
    border: none!important;
  }
  .terminal-container {
    align-items: center!important;
  }
  .terminal-white {
    min-width: 90vw!important;
  }
  .terminal-dark {
    min-width: 90vw!important;
  }
  .card-light {
    min-height: 4rem!important;
  }
  .terminal-container-dark {
    justify-content: space-between!important;
    align-items: center!important;
    padding:1rem!important;
  }
  .h1-light {
    font-size: 1.5rem!important;
  }
  .h2-light {
    margin: 0!important;
    font-size: 1rem!important;
  }
  .terminal-text-light {
    font-size: 1rem!important;
  }
  .form-subtext {
    font-size: 0.8rem!important;
  }
  .form-subtext-dark {
    font-size: 1rem!important;
  }
  .form-container {
    flex-direction: column!important;
    gap: 0!important;
  }
  .h1-dark {
    font-weight: 700!important;
    font-size: 1.5rem!important;
  }
  .modal-row {
    padding: 0!important;
    align-items: flex-start!important;
    flex-direction: column!important;
  }
}
.terminal-container-dark {
  justify-content: space-between!important;
}
.terminal-container input, textarea {
  color: white!important;
}
.terminal-container-dark input[type="submit"] {
  background-color: #3987da!important;
}
.terminal-container-dark :deep(:where(.css-dev-only-do-not-override-1qb1s0s).ant-radio-button-wrapper) {
  background-color: transparent!important;
  color: white;
}
.terminal-container-dark :deep(:where(.css-dev-only-do-not-override-1qb1s0s).ant-radio-button-wrapper-checked) {
  background-color: #3987da!important;
  color: white;
}
.desktop {
  display: flex;
}
.mobile {
  display: none;
}
.radio-row {
  display: flex;
  justify-content: center;
}
.phone-label {
  text-align: center;
}
.phone-label-dark {
  text-align: center;
  color: white;
}
.email-label-dark {
  text-align: center;
  color: white;
}
.disclaimer-row {
  width: 100%;
}
.disclaimer {
  text-align: center;
  opacity: 0.4;
}
a {
  color: #3987da;
}
.disclaimer-light {
  color: white;
  text-align: center;
  opacity: 0.4;
}
a.disclaimer-light {
  color: black;
}
.email-label {
  text-align: center;
}
.form-container {
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-direction: row;
  justify-content: space-around;
}
#comments {
  height: 70%;
}
form {
  font-family: Point, sans-serif;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

.label-dark {
  display: block;
  margin-bottom: 8px;
  color: #e1e1e1;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid rgba(39, 76, 119, 0.52);
  border-radius: 16px;
  box-sizing: border-box;
  font-size: 16px;
}
input:focus-visible, select:focus-visible, textarea:focus-visible {
  border: 1px solid rgba(39, 76, 119)!important;
  border-radius: 16px;
}
.radio-group {
  margin-bottom: 15px;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.radio-label input[type="radio"] {
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #2196F3;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

.radio-label input[type="radio"]:checked {
  background-color: #2196F3;
}

.radio-label span {
  color: #333;
}

input[type="submit"] {
  background-color: #274c77;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #0b7dda;
}

.back-btn {
  background-color: transparent;
  border: 2px solid #274c77;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.back-btn-dark {
  background-color: transparent;
  border: 2px solid #3987da;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.back-btn-dark:hover {
  background-color: transparent;
  border: 2px solid #3987da;
  border-radius: 1rem;
  cursor: pointer;
}

.back-btn:hover {
  background-color: white;
  border: 2px solid #274c77;
  border-radius: 1rem;
  cursor: pointer;
}
.form-subtext {
  font-family: Point, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #161616;
}
.form-subtext-dark {
  font-family: Point, sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #dadada;
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
.form-heading-light {
  color: #274c77;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: Point, sans-serif;
}
.form-heading-dark {
  color: #3987da;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: Point, sans-serif;
}
.modal-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-right: 2rem;
  padding-left: 2rem;
}
.modal-col-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.h2 {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: lowercase;
  color: #3987da;
  margin-bottom: 0;
  font-family: Point, sans-serif;
}
.h1-dark {
font-size: 2.5rem;
  color: white;
}
.h1-light {
  font-size: 2rem;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2rem;
}
.yellow {
  background-color: #FFB429;
  border: 1px solid #F0A318;
  border-radius: 50%;
  width: 13px;
  height: 13px;
}
.green {
  border: 1px solid #12A025;
  background-color: #25C63A;
  border-radius: 50%;
  width: 13px;
  height: 13px;
}
.red {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FF544D;
  border: 1px solid #DA3C37;
  border-radius: 50%;
  color: #DA3C37;
  font-family: Point, sans-serif;
  padding: 0;
  line-height: 1.3;
  font-weight: 800;
  text-align: center;
  font-size: 0.8rem;
  width: 13px;
  height: 13px;
  transition: all 0.2s ease-in-out;
}
.red:hover {
  background-color: #ad2923;
  cursor: pointer;
}
.red-mobile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FF544D;
  border: 1px solid #DA3C37;
  border-radius: 50%;
  color: #DA3C37;
  font-family: Point, sans-serif;
  padding: 0;
  line-height: 1.3;
  font-weight: 800;
  text-align: center;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease-in-out;
}
.red-mobile:hover {
  background-color: #ad2923;
  cursor: pointer;
}
#dark .terminal-dark {
  min-width: auto!important;
}
.steps-container {
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}
.btn-primary:hover {
  background-color: #6096ba;
  color: white!important;
}
.step-card-dark {
  background-color: #1e1e1e;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  font-weight: 600;
  max-width: 14rem;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.step-card-light {
  background-color: #f8f8f8;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  font-weight: 600;
  max-width: 14rem;
  border-radius: 1.3rem;
  border: 2px solid #274c77;
}
.terminal-buttons-row {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
  max-width: 4rem;
  justify-content: center;
  align-items: center;
}
.appname-dark {
  width: 100%;
  max-width: 44rem;
  color: white;
  background-color: #1e1e1e;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-family: 'Ubuntu Mono', monospace;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.appname-light {
  font-size: 0.7rem;
  width: 100%;
  max-width: 44rem;
  color: #1e1e1e;
  background-color: #eaeaea;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-family: 'Ubuntu Mono', monospace;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.terminal-header-white {
  background-color: white;
  border: 1px solid #e7e7e7;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  gap: 0;
  height: 2.5rem;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
}
.terminal-header-dark {
  background-color: #3b3b3b;
  height: 2.5rem;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid #484848;
  border-bottom: 1px solid #2e2e2e;
  display: flex;
  flex-direction: row;
  gap: 0;
}
.card-dark {
  background-color: #1e1e1e;
  padding: 1rem;
  max-width: 25rem;
  display: flex;
  margin-right: 2rem;
  margin-left: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  min-height: 6rem;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.h2-light {
  color: #274c77;
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  text-transform: lowercase;
  font-family: Point, sans-serif;
}
.card-light {
  background-color: #f8f8f8;
  padding: 1rem;
  max-width: 25rem;
  display: flex;
  margin-right: 2rem;
  margin-left: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  min-height: 4rem;
  border-radius: 1.3rem;
  border: 2px solid #274c77;
}
.terminal-container {
  background-color: rgba(255, 255, 255, 0.97);
  color: black!important;
  border: 1px solid #e7e7e7;
  height: 100%;max-height: 20rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  padding: 1rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border-top: 0;
  min-height: 90vh;

}
.terminal-container-dark {
  background-color: rgba(31, 31, 31, 0.77);
  height: 100%;
  gap: 1rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  padding: 1rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border: 1px solid #3c3c3c;
  border-top: 0;
}
.terminal-white {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: black!important;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 50vw;
  max-width: 90vw;
}
.terminal-uni {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: black!important;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 40rem;
  min-height: 90vh;
}
.terminal-dark {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 40rem;
  max-width: 90vw;
  min-height: 90vh;
}
.offers-container {
  height: 100%;
  max-height: 8rem;
  margin-bottom: 1rem;
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
  font-family: Point, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  width: 100%;
  max-width: 54rem;

}
:deep(.terminal-text-light) {
  color: #1e1e1e;
  font-family: Point, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  width: 100%;
  max-width: 54rem;
}
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.81);
  backdrop-filter: blur(20px);
  z-index: 999999;
}

.modal-content {
  z-index: 9999999;
  display: flex;
  width: min-content;
  max-height: 95vh;
}
:deep(.ant-steps-item-title) {
  color: white!important;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  max-width: 5rem!important;
}
:deep(.ant-steps-item-content) {
  word-wrap: break-word;
  width: 100%;
  max-width: 2rem;
}
</style>
<style>
.ant-radio-group {
  display: flex;
}
.ant-radio-button-wrapper-checked {
  background-color: #274c77!important;
}
.ant-radio-button-wrapper:hover {
  color: #274c77;
}
.cross{
  font-size: 0.6rem;
  color: black;
  margin: 0;
  line-height: 0;
}
</style>


