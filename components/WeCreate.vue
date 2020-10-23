<template>
  <div class="we-create">
    <div class="word-create">
      <div class="word-create-svg-wrapper">
        <svg class="word-create-svg">
          <use xlink:href="~/static/sprite.svg#word-create" />
        </svg>
      </div>
    </div>
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
    //       markers: false,
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
  .word-create {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .word-create-svg-wrapper {
    width: 100vw;
    height: 30rem;
    position: absolute;
    bottom: 3.2rem;
    overflow: hidden;
  }

  .word-create-svg {
    width: 140vw;
    height: 100%;
    left: -70vw;
    position: absolute;
    top: 0;
    transform: translateX(50vw);
  }

  .word-create-svg>use {
    stroke-width: 6.5px;
  }

  .we-create {
    line-height: 5rem;
    max-width: 116.8rem;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
  }

  @media (min-width: 1460px) {
    .we-create {
      line-height: 7.2rem;
      width: 100%;
      max-width: 172rem;
    }
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
