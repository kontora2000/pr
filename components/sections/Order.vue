<template>
  <section class="order-section">
    <div class="section-grid order-section-grid">
      <div
        class="section-grid-header-sticky-cont-wrapper order-section-grid-header-sticky-cont-wrapper"
      >
        <div
          class="section-grid-header-sticky-cont order-section-grid-header-sticky-cont"
        >
          <h1 class="section-header order-section-header">
            Заказать
          </h1>
        </div>
      </div>
      <div class="order-section-grid-content-wrapper">
        <div class="section-subheader">
          Заполните эту форму и&nbsp;к&nbsp;вам приедет замерщик, чтобы снять
          размеры места под&nbsp;установку. Затем мы&nbsp;изготовим
          и&nbsp;установим вашу мебель.
        </div>
        <form
          v-if="!isSuccess"
          ref="form"
          class="order-form"
          @submit.prevent="submitForm()"
        >
          <div class="order-form-checkboxes-wrapper">
            <span class="order-form-checkboxes-header">Вас интересуют:</span>
            <input
              id="checkbox-kitchen"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="kitchens"
              value="Кухня"
              type="checkbox"
            >
            <label for="checkbox-kitchen">Кухня</label>
            <input
              id="checkbox-closet"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="closet"
              value="Шкаф-купе"
              type="checkbox"
            >
            <label for="checkbox-closet">Шкаф-купе</label>
            <input
              id="checkbox-dressing-room"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="dressing room"
              value="Гардеробная"
              type="checkbox"
            >
            <label for="checkbox-dressing-room">Гардеробная</label>
            <input
              id="checkbox-bathroom"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="furniture for bathroom"
              value="Мебель для ванной"
              type="checkbox"
            >
            <label for="checkbox-bathroom">Мебель для&nbsp;ванной</label>
            <input
              id="checkbox-living-room"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="furniture for living room"
              value="Мебель в гостинную"
              type="checkbox"
            >
            <label for="checkbox-living-room">Мебель в&nbsp;гостинную</label>
            <input
              id="checkbox-cabinet"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="furniture for cabinet"
              value="Мебель в кабинет"
              type="checkbox"
            >
            <label for="checkbox-cabinet">в&nbsp;кабинет</label>
            <input
              id="checkbox-childroom"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="furniture for childroom"
              value="Мебель в детскую"
              type="checkbox"
            >
            <label for="checkbox-childroom">в&nbsp;детскую</label>
            <input
              id="checkbox-hallway"
              v-model="checkedTypes"
              class="order-form-checkbox"
              name="hallway furniture"
              value="Мебель в прихожую"
              type="checkbox"
            >
            <label for="checkbox-hallway">в&nbsp;прихожую</label>
            <div class="errors">
              <span v-if="typesErrorMessage">{{
                typesErrorMessage
              }}</span>
            </div>
          </div>
          <div class="order-form-input-wrapper input-wrapper">
            <input
              v-model="adress"
              class="order-form-input"
              type="text"
              name="adress"
              required
            >
            <label class="floatting-label" data-placeholder="Адрес установки" />
            <div class="errors">
              <span v-if="adressErrorMessage">{{
                adressErrorMessage
              }}</span>
            </div>
          </div>
          <div class="order-form-input-wrapper input-wrapper">
            <input
              v-model="phone"
              class="order-form-input"
              type="tel"
              name="phone"
              required
            >
            <label
              class="floatting-label"
              data-placeholder="Контактный телефон (без +7)"
            />
            <div class="errors">
              <span v-if="phoneErrorMessage !== ''">{{
                phoneErrorMessage
              }}</span>
            </div>
          </div>
          <div class="order-form-input-wrapper input-wrapper">
            <input
              v-model="name"
              class="order-form-input"
              type="text"
              name="name"
              required
            >
            <label class="floatting-label" data-placeholder="Ваше имя" />
            <div class="errors">
              <span v-if="nameErrorMessage">{{ nameErrorMessage }}</span>
            </div>
          </div>
          <div class="note-privacy-policy">Нажав на кнопку "Вызвать замерщика", вы соглашаетесь с <NuxtLink to="privacy-policy" class="link-underline-solid">обработкой ваших персональных данных</NuxtLink></div>
          <div class="order-section-form-button-send-wrapper">
            <div class="subtitle order-section-form-button-send-subtitle">
              Чтобы подтвердить заявку и&nbsp;договориться об&nbsp;удобном
              для&nbsp;замера времени, мы&nbsp;перезвоним по&nbsp;указанному
              номеру телефона в&nbsp;течении 15&nbsp;минут
            </div>
            <button class="button-big button-black order-section-form-button-send">
              Вызвать&nbsp;замерщика
            </button>
          </div>
        </form>
        <div v-if="isSuccess">
          Заявка отправлена. Скоро мы позвоним :)
        </div>
        <div v-if="isError">
          Ошибка. Пожалуйста, перезагрузите страницу и нажмите кнопку ещё раз
        </div>
      </div>
    </div>
    <div class="section-gradient-bottom order-section-gradient-bottom" />
  </section>
</template>

<script>
import validationMixin from '~/mixins/validationMixin'

export default {
  name: 'OrderSection',
  mixins: [validationMixin],
  data () {
    return {
      name: '',
      phone: '',
      adress: '',
      isSuccess: false,
      isError: false,
      checkedTypes: [],
    }
  },
  methods: {
    filter () {
      return true
    },
    async submitForm () {
      if (this.validate() === true) {
        try {
          const formData = new FormData(this.$refs.form)
          formData.set('types', this.checkedTypes)
          formData.set('key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
          const res = await this.$axios.post(
            'https://api.princess-mebel.ru/order.php',
            formData
          )
          if (res.data && res.data.isSuccess) {
            this.isSuccess = true
          } else {
            this.isError = true
          }
        } catch (e) {
          this.isError = true
        }
      } else {
        this.isNotValid = true
      }
    },
  },
}
</script>

<style scoped>
.order-section {
  background-color: var(--BeigeLight100);
  width: 100vw;
}

.order-section-gradient-bottom {
  background: linear-gradient(180deg, rgba(255, 252, 244, 0) 0%, #98ceff 100%);
}

.order-section-grid-header-sticky-cont-wrapper {
  grid-row: 1/2;
}

.order-section-grid-header-sticky-cont {
  height: 43.6rem;
  margin-top: -1.6rem;
}

.order-section-header {
  color: var(--White100);
  width: 43.6rem;
}

.order-section-grid-content-wrapper {
  grid-column: 1/3;
  grid-row: 1/2;
}

.order-section-grid-content-wrapper .section-subheader {
  margin-top: 0;
}

.order-form {
  margin: 4.8rem auto 0;
  max-width: 68.4rem;
  position: relative;
  z-index: 1;
}

.order-form-checkboxes-wrapper {
  display: inline-block;
}

.order-form-checkboxes-header,
.order-form-checkbox + label {
  font-weight: 500;
  letter-spacing: 0.08em;
  line-height: 1.6rem;
  text-transform: uppercase;
}

.order-form-checkboxes-header {
  display: inline-block;
  float: left;
  margin: 2.1rem 1.2rem 0 0;
}

.order-form-checkbox {
  display: none;
}

.order-form-checkbox + label {
  border: 1px solid var(--Black16);
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  float: left;
  margin-bottom: 0.8rem;
  padding: 1.8rem 2.4rem 1.65rem;
  text-align: center;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
}
.order-form-checkbox + label:not(:last-child) {
  margin-right: 0.4rem;
}

.order-form-checkbox + label:hover {
  border-color: var(--Black100);
  color: var(--Black100);
}

.order-form-checkbox:checked + label {
  border-color: var(--Black100);
  background-color: var(--Black100);
  color: var(--White100);
}

.order-form-input-wrapper {
}

.order-form-input {
  width: 100%;
}

.order-section-form-button-send-wrapper {
  display: inline-flex;
  margin-top: 5.2rem;
}

.order-section-form-button-send-subtitle {
  margin-right: 4rem;
}
.order-section-form-button-send-subtitle:before {
  content: "✹";
  display: inline-block;
  float: left;
  font-size: 8.8rem;
  height: 100%;
  line-height: 6.4rem;
  margin-right: 0.8rem;
  vertical-align: top;
}

@media (min-width: 1460px) {
  .order-section-grid-header-sticky-cont {
    height: 56rem;
  }

  .order-section-header {
    width: 56rem;
  }
}

@media (max-width: 460px) {
  .order-section {
    overflow-x: hidden;
  }

  .order-section-header {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  .order-form {
    margin: 3.6rem 0.8rem 0;
  }

  .order-form-checkboxes-header {
    margin-top: 1.4rem;
  }

  .order-form-checkbox + label {
    padding: 1.3rem 1.2rem 1.1rem;
  }

  .note-privacy-policy {
    font-weight: 500;
    font-size: .9rem;
    letter-spacing: .04em;
    margin-top: 2.8rem;
    opacity: .36;
    text-align: center;
    text-transform: uppercase;
  }

  .order-section-form-button-send-wrapper {
    display: inline-flex;
    margin-top: 2rem;
  }

  .order-section-form-button-send-subtitle {
    margin-right: 0;
    text-align: center;
  }
  .order-section-form-button-send-subtitle-span {
    position: relative;
    top: .8rem;
  }

  .order-section-form-button-send-subtitle:before {
    content: "";
  }

  .order-section-form-button-send {
    display: block;
    margin: 2.8rem auto 0;
  }
}
</style>
