<template>
  <section class="order-section">
    <h1 class="section-header section-header-order">
      Заказать
    </h1>
    <div class="section-subheader">
      Заполните эту форму и&nbsp;к&nbsp;вам приедет замерщик, чтобы снять размеры места под&nbsp;установку. Затем мы&nbsp;изготовим и&nbsp;установим вашу мебель.
    </div>
    <div class="errors">
      <span v-if="phoneErrorMessage!==''">{{ phoneErrorMessage }}</span>
      <span v-if="nameErrorMessage!==''">{{ nameErrorMessage }}</span>
      <span v-if="adressErrorMessage!==''">{{ adressErrorMessage }}</span>
    </div>
    <form ref="form" class="order-form" @submit.prevent="submitForm()" v-if="!isSuccess">
      <div class="order-form-checkboxes-wrapper">
        <span class="order-form-checkboxes-header">Вас интересуют:</span>

        <input id="checkbox-kitchen" class="order-form-checkbox" name="kitchens" value="Кухня" type="checkbox">
        <label for="checkbox-kitchen">Кухня</label>

        <input id="checkbox-closet" class="order-form-checkbox" name="closet" value="Шкаф-купе" type="checkbox">
        <label for="checkbox-closet">Шкаф-купе</label>

        <input id="checkbox-dressing-room" class="order-form-checkbox" name="dressing room" value="Гардеробная" type="checkbox">
        <label for="checkbox-dressing-room">Гардеробная</label>

        <input id="checkbox-bathroom" class="order-form-checkbox" name="furniture for bathroom" value="Мебель для ванной" type="checkbox">
        <label for="checkbox-bathroom">Мебель для&nbsp;ванной</label>

        <input id="checkbox-living-room" class="order-form-checkbox" name="furniture for living room" value="Мебель в гостинную" type="checkbox">
        <label for="checkbox-living-room">Мебель в&nbsp;гостинную</label>

        <input id="checkbox-cabinet" class="order-form-checkbox" name="furniture for cabinet" value="Мебель в кабинет" type="checkbox">
        <label for="checkbox-cabinet">в&nbsp;кабинет</label>

        <input id="checkbox-childroom" class="order-form-checkbox" name="furniture for childroom" value="Мебель в детскую" type="checkbox">
        <label for="checkbox-childroom">в&nbsp;детскую</label>

        <input id="checkbox-hallway" class="order-form-checkbox" name="hallway furniture" value="Мебель в прихожую" type="checkbox">
        <label for="checkbox-hallway">в&nbsp;прихожую</label>
      </div>
      <div class="order-form-input-wrapper input-wrapper">
        <input v-model="adress" class="order-form-input" type="text" name="adress" required>
        <label class="floatting-label" data-placeholder="Адрес&nbsp;установки" />
      </div>
      <div class="order-form-input-wrapper input-wrapper">
        <input v-model="phone" class="order-form-input" type="text" name="phone" required>
        <label class="floatting-label" data-placeholder="Контактный&nbsp;телефон" />
      </div>
      <div class="order-form-input-wrapper input-wrapper">
        <input v-model="name" class="order-form-input" type="text" name="name" required>
        <label class="floatting-label" data-placeholder="Ваше&nbsp;имя" />
      </div>
      <div class="order-section-form-button-send-wrapper">
        <div class="subtitle order-section-form-button-send-subtitle">
          В&nbsp;течении 15&nbsp;минут мы&nbsp;перезвоним по&nbsp;указанному номеру телефона, чтобы подтвердить заявку и&nbsp;договориться об&nbsp;удобном для&nbsp;замера времени
        </div>
        <button class="button-big order-section-form-button-send">
          Вызвать&nbsp;замерщика
        </button>
      </div>
    </form>
    <div v-if="isSuccess">
      Вашая заявка отправлена! Ждите звонка!
    </div>
    <div v-if="isError">
      Ошибка отправления заявки. Попробуйте позже!
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
    }
  },
  methods: {
    filter () {
      return true
    },
    async submitForm () {
      if (this.validate() === true) {
        const formData = new FormData(this.$refs.form)
        formData.set('type', ['Шкафы', 'Мафы'])
        formData.set('key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
        const res = await this.$axios.post('https://www.api.kontora.cc/order.php', formData)
        if (res.data.isSuccess) {
          this.isSuccess = true
          console.log(res.data)
        } else { this.isError = true }
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
  }
  .order-section>h1 {
    color: var(--White100);
    text-align: center;
  }
  .order-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 252, 244, 0) 0%, #98CEFF 100%);
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
    letter-spacing: .08em;
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
    margin-bottom: .4rem;
    padding: 2rem 2.4rem;
    text-align: center;
    transition: background-color .1s ease-in-out,
                border-color .1s ease-in-out,
                color .1s ease-in-out;
  }
  .order-form-checkbox + label:not(:last-child) {
    margin-right: .4rem;
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

  .order-form-input-wrapper {}

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

  @media (max-width: 460px) {
    .order-section>h1 {
      margin-left: .8rem;
      margin-right: .8rem;
      text-align: left;
    }

    .order-form {
      margin: 3.6rem .8rem 0;
    }

    .order-form-checkbox + label {
      padding: 1.3rem 1.2rem 1.1rem;
    }

    .order-section-form-button-send-wrapper {
      display: block;
    }

    .order-section-form-button-send-subtitle {
      margin-right: 0;
      text-align: center;
    }

    .order-section-form-button-send {
      display: block;
      margin: 2.8rem auto 0;
    }
  }
</style>
