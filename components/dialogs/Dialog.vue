<template>
  <div v-show="isVisible" id="dialog-measurement">
    <form class="dialog-measurement-form">
      <div class="input-block">
        <input v-model="adress" type="text" name="where" required>
        <label alt="label" data-placeholder="Ваш адрес" />
      </div>
      <div class="input-block">
        <input v-model="dateAndTime" type="datetime" name="when" required>
        <label alt="label" data-placeholder="Удобные время и дата" />
      </div>
      <div class="input-block">
        <input v-model="phone" type="tel" name="phone" required>
        <label alt="label" data-placeholder="Телефон" />
      </div>
      <button class="ok" disabled="disabled" @click.prevent="sendOrder">
        Вызвать замерщика
      </button>
    </form>
    <div class="about-process">
      <h3>Что потом</h3>
      <div class="about-process-in">
        1. Замерим
        <br>Делаем расчет по вашим размерам, далее наш технолог
        выезжает на объект для детального замера и необходимой консультации. Замер имеет залоговую
        стоимость, которую мы возвращаем при заключении договора.
      </div>
      <div class="about-process-in">
        2. Спроектируем
        <br>Разрабатываем дизайн-проект, согласовываем с вами.
        Согласовать можно лично, а можно удаленно: через whatsapp или электронную почту.
      </div>
      <div class="about-process-in">
        3. Подберём фурнитуру
        <br>Встречаемся у нас в студии для подбора всех
        материалов и фурнитуры. Корректируем расчет при необходимости.
      </div>
      <div class="about-process-in">
        4. Заключим договор
        <br>Вы вносите предоплату, изделие отдается на
        изготовление. Доплата производится перед вывозом изделия из цеха.
      </div>
      <div class="about-process-in">
        5. Установим мебель
        <br>Мебель установлена, а вы счастливы)
      </div>
    </div>
    <button class="close" @click.self="closeDialog">
      ╳ закрыть
    </button>
  </div>
</template>

<script>

export default {
  name: 'DialogMesurement',
  data () {
    return {
      adress: '',
      dateAndTime: '',
      phone: '',
      isValid: false,
      errors: [],
    }
  },
  computed: {
    isVisible () {
      return this.$store.state.dialogMesurementOpen
    },
  },
  methods: {
    closeDialog () {
      this.$store.commit('closeDialog')
    },
    validate () {

    },
    showErrors () {
      const error = 'error!!'
      this.errors = { ...this.errors, error, }
    },
    sendOrder () {
      if (!this.isValid) {
        this.showErrors()
        this.$axios.post('/order', {
          data: this.data(),
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
  },
}

</script>
