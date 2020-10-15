<template>
  <div class="we-create">
    <i class="we-create-cursive">Создаём</i>
    <we-create-item folder="kitchens">Кухни</we-create-item>
    <we-create-item folder="wardrobes">Шкафы&thinsp;и&thinsp;гардеробные</we-create-item>
    <we-create-item folder="livingrooms">Мебель&thinsp;в&thinsp;гостинные</we-create-item>
    <we-create-item folder="cabinets">Кабинеты</we-create-item>
    <we-create-item folder="bathrooms">Ванные</we-create-item>
    <we-create-item folder="hallways">Прихожие</we-create-item>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import weCreateItem from '~/components/WeCreateItem.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'WeCreate',
  components: {
    weCreateItem,
  },
  data () {
    return {
      scene: null,
      timeLine: null,
      menu: null,
    }
  },
  mounted () {
    this.menu = this.$el
    // const cloudsBack = document.querySelector('.clouds-back')
    // const cloudsFront = document.querySelector('.clouds-front')
    // const chairs = document.querySelector('.scene-kitchen-chairs')
    // const tableChairs = document.querySelector('.scene-table-chairs')
    // gsap.to(
    //   this.menu, {
    //     scrollTrigger: {
    //       trigger: this.$el,
    //       markers: true,
    //       // toggleActions: 'restart none reverse none', 
    //       scrub: true,
    //     },
    //     y: -400,
    //     ease: 'linear', 
    //     duration: 0.4,
    //   })
  },
}
</script>

<style scoped>
  .we-create {
    line-height: 5rem;
    text-align: center;
    position: absolute;
    bottom: 4rem;
    z-index: 6;
  }

  @media (max-width: 460px) {
    .we-create {
      bottom: auto;
      font-size: 2rem;
      line-height: 3.4rem;
      margin-left: .5rem;
      margin-right: .5rem;
      margin-top: 0;
      text-align: center;
      width: calc(100% - 1rem);
    }
  }
</style>