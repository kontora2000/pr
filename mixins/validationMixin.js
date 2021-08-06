export default {
  data () {
    return {
      phoneErrorMessage: '',
      nameErrorMessage: '',
      adressErrorMessage: '',
      typesErrorMessage: '',
      isNotValid: false,
    }
  },
  methods: {
    validate () {
      this.nameErrorMessage = ''
      this.phoneErrorMessage = ''
      this.adressErrorMessage = ''
      this.checkTypes()
      this.checkAdress() 
      this.checkPhone()
      this.checkName()
      return this.checkTypes() && this.checkAdress() && this.checkPhone() && this.checkName()
    },
    checkName () {
      if (this.name.trim() === '') { 
        this.nameErrorMessage = 'Напишите, как Вас зовут'
        return false 
      }
      // if (!this.name.match(/^[А-ЯЁ][а-яё]\s+$/)) {
      //   this.nameErrorMessage = 'Адрес должен содержать только киррилицу'
      //   return false 
      // }
      return true
    },
    checkAdress () {
      if (this.adress.trim() === '') {
        this.adressErrorMessage = 'Напишите свой адрес'
        return false
      }
      // if (!this.adress.match(/^[А-ЯЁ][а-яё]+$/)) {
      //   this.adressErrorMessage = 'Адрес должен содержать только киррилицу'
      //   return false
      // }
      return true
    },
    checkPhone () {
      if (this.phone.trim() === '') { 
        this.phoneErrorMessage = 'Напишите свой телефон'
        return false
      }
      if (!this.phone.match(/^[-+]?[0-9]+$/)) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Только цифры'
        return false
      }
      if (this.phone.length > 10) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Не более 10 цифр'
        return false
      }
      if (!this.phone.match(/^.{1,10}$/)) {
        this.isNotValid = true
        this.phoneErrorMessage = 'Введите номер полностью'
        return false
      }
      this.isNotValid = false
      this.phoneErrorMessage = ''
      return true
    },
    checkTypes () {
      if (this.checkedTypes.length === 0) {
        this.typesErrorMessage = 'Выберите хотя бы один пункт'
        return false
      }
      return true
    },
  },
}
