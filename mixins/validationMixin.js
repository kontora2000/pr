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
      return this.checkTypes() && this.checkAdress() && this.checkPhone() && this.checkName()
    },
    checkName () {
      if (this.name === '') { 
        this.nameErrorMessage = 'Имя не должно быть пустым'
        return false 
      }
      // if (!this.name.match(/^[А-ЯЁ][а-яё]\s+$/)) {
      //   this.nameErrorMessage = 'Адрес должен содержать только киррилицу'
      //   return false 
      // }
      return true
    },
    checkAdress () {
      if (this.adress === '') {
        this.nameErrorMessage = 'Напишите, как вас зовут'
        return false
      }
<<<<<<< HEAD
      // if (!this.adress.match(/^[А-ЯЁ][а-яё]+$/)) {
      //   this.adressErrorMessage = 'Адрес должен содержать только киррилицу'
      //   return false
      // }
      return true
=======
      if (!this.name.match(/^[А-ЯЁ][а-яё]+$/)) {
        this.nameErrorMessage = 'Напишите, пожалуйста, по-русски'
        return false
      }
      return false
>>>>>>> 06dba505e8882b38e0a4deb96d2a0ae05b9c462a
    },
    checkPhone () {
      if (this.phone === '') { return }

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
      if (this.checkedTypes.filter(el => el === '').length > 0 && this.checkTypes.length === 0) {
        this.typesErrorMessage = 'Выберите хотя бы один пункт'
        return false
      }
      return true
    },
  },
}
