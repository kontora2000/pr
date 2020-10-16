export default {
  data () {
    return {
      phoneErrorMessage: '',
      nameErrorMessage: '',
      adressErrorMessage: '',
      isNotValid: false,
    }
  },
  methods: {
    validate () {
      if (this.checkPhone() === false) { return false }
      if (this.checkAdress() === false) { return false }
      if (this.checkName() === false) { return false }
      return true
    },
    checkName () {
      if (this.name === '') { return false }
      if (!this.name.match(/^[А-ЯЁ][а-яё]\s+$/)) { return false }
      return false
    },
    checkAdress () {
      if (this.adress === '') {
        this.nameErrorMessage = 'Введите имя'
        return false
      }
      if (!this.name.match(/^[А-ЯЁ][а-яё]+$/)) {
        this.nameErrorMessage = 'Имя должно содердать только киррилицу'
        return false
      }
      return false
    },
    checkPhone () {
      if (this.phone === '') { return }

      if (!this.phone.match(/^[-+]?[0-9]+$/)) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Введите только цифры'
        return false
      }
      if (this.phone.length > 10) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Не более 10 символов'
        return false
      }
      if (!this.phone.match(/^.{1,10}$/)) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Введите номер полностью'
        return false
      }
      this.isNotValid = false
      this.phoneErrorMessage = null
      return true
    },
  },
}
