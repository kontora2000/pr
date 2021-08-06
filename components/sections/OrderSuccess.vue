<template>
  <div class="order-form-success">
    <div class="order-form-success-svg">
      <svg
        v-show="isShowSVG"
        id="gal"
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="204"
        viewBox="0 0 274 204"
        fill="none"
      >
        <path
          d="M5 107.491L94.8333 199L269 5"
          stroke="#252525"
          stroke-width="12"
          stroke-linejoin="bevel"
        />
      </svg>
    </div>
    <div class="order-form-success-text">
      Сообщение отправлено.<br />
      Скоро позвоним по номеру +7&nbsp;{{ numb }}, чтобы уточнить детали
    </div>
  </div>
</template>

<script>
import Vivus from 'vivus'

export default {
  name: 'OrderSuccess',
  props: {
    number: {
      type: [Number, String],
      default: '',
      required: true,
    },
  },
  data () {
    return {
      isShowSVG: false,
    }
  },
  computed: {
    numb () { 
      const n = this.number.split('')
      n.splice(3, 0, '-')
      n.splice(7, 0, '-')
      n.splice(10, 0, '-')
      return n.join('') 
    },
  },
  mounted () {
    this.isShowSVG = true
    const ok = new Vivus('gal', { duration: 75, })
  },
}
</script>

<style scoped>
 .order-form-success {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }

 .order-form-success-text {
   margin-top: 4rem;
   font-family: var(--font-default);
   font-weight: 500;
   font-size: 1.4rem;
   line-height: 2.2rem; 
   text-align: center;
   text-transform: uppercase;
 }
</style>
