<template>
  <div class="we-create">
    <div v-show="isShowSVG" class="word-create">
      <div class="word-create-svg-wrapper">
        <svg
          id="word-so"

          xmlns="http://www.w3.org/2000/svg"
          class="word-create-svg"
          version="1.1"
          viewBox="0 0 1719.8 333.7"
          xml:space="preserve"
        >
          <path
            id="so_1_"
            class="st0"
            d="M2.5,326.5c135.3-92.9,273.2-141.7,418.9-166.2c79.1-13.3,144.8-25.6,209.5-60.7l-3.9,25.4
 c52.8-41.1,72.9-81.8,39.1-85.5C583.8,30.7,458.6,98,436.4,190.4c-10,41.7,13.4,60.6,65.8,52.9c48.1-7,106.5-35,172.2-82.2
 c-6.2,8-10.6,13.9-12.8,20.7c-5.3,15.9,6.5,22.6,24.4,12.3c18.4-10.6,35.7-32.9,41.3-46.5c7.4-17.8-1.1-21.5-14.2-16.5
 c-11.5,4.3-23.8,17.5-33.6,32.2"
          />
          <path
            id="z_1_"
            class="st0"
            d="M740.4,151.2c26.6-40.4,52.5-39.3,51.2-25.9c-1.2,11.9-12.3,41.4-59.9,60
 c61.2-23.1,86.1,3.2,85.1,26.9c-2.1,46.4-93.5,120.4-165,116.9c-31.2-1.5-61.2-39,3-81.9c61.7-41.2,197.1-85.8,441-90.4"
          />

          <path
            id="d_1_"
            class="st0"
            d="M857.7,103.1c-29,5.8-52.4,33.3-57.3,48.4c-5.1,15.9,5.9,22.9,24.4,12.3
 c14.9-8.5,29.6-26.1,38.8-40.3c17-26.4,26.9-51.4,31.2-78.6c4.9-31.1-2.8-42-26.9-40.3C824,7.9,772.5,37.1,745.9,68.4
 c-22.8,26.7-12.4,36,11.6,33.4c36.5-4,120.9-26.6,238.2-81.9l-3.9,25.4c22.1-11,38-23.2,54.9-40.9l-18.5,45.4"
          />

          <path
            id="aem_1_"
            class="st0"
            d="M1716.9,4.5c-148.4,127-339.7,152.3-569.9,151.8c-17.4-24-7.6-64.1,21.1-118.1
 c-26.4,40.2-45.9,60.4-60.8,71.9c-11.7,9-12.4,8.6-12.3,1.4c0.1-11.9-0.3-31.4,12.1-55.6c-28.4,49.5-52.8,69.6-63.8,76.3
 c0.3-12.4,4.6-30.3,4.6-30.3c-47.8,40.5-72.8,44.1-79.8,36.3c-8.3-9.2,1.3-23.2,1.8-24.4c20.5-34.6,63.8-47.3,53.5-26.9
 c-6.8,13.4-38.7,29.8-61.6,33.9c-12.4,11-19.4,21.4-31.1,26.9c0-8.3,2.6-25.3,7.5-40.4c-9.5,14.6-23.8,31.2-38.8,40.3
 c-19.1,11.6-29.3,2.9-24.4-12.3c4.3-13.2,26.6-42,57.3-48.4"
          />
        </svg>
      </div>
    </div>
    <we-create-item folder="kitchens">
      Кухни
    </we-create-item>
    <we-create-item folder="wardrobes">
      <span class="only-desktop">Шкафы&thinsp;и&thinsp;</span>гардеробные
    </we-create-item>
    <we-create-item folder="livingrooms">
      Мебель&thinsp;в&thinsp;гостинные
    </we-create-item>
    <we-create-item folder="cabinets">
      Кабинеты
    </we-create-item>
    <we-create-item folder="bathrooms">
      Ванные
    </we-create-item>
    <we-create-item folder="hallways">
      Прихожие
    </we-create-item>
  </div>
</template>

<script>
import gsap from 'gsap'
import Vivus from 'vivus'
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
      isShowSVG: false,
      isShowMenu: false,
    }
  },
  mounted () {
    this.menu = this.$el
    this.isShowSVG = true
    const v = new Vivus('word-so', { duration: 100, type: 'oneByOne', }, () => {
    })
    gsap.to('.we-create-link', {
      delay: 0.5,
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      onComplete: () => {
        document.body.style.overflow = 'scroll'
      },
    })
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

    fill: none;
    /*stroke:rgba(146, 100, 222, 1);*/
    stroke:var(--Black100);
    stroke-miterlimit: 10;
    stroke-linejoin: bevel;
    stroke-width: 7.5px;
  }

  .word-create-svg>use {
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
      margin-left: 0;
      margin-right: 0;
      margin-top: 16rem;
      text-align: center;
      width: 100%;
    }

    .word-create-svg-wrapper {
      top: -11rem;
      bottom: auto;
      left: 0;
      height: 18rem;
    }

    .word-create-svg {
      width: 200vw;
      left: -94vw;
    }
  }

  @media (max-width: 380px) {
    .we-create {
      margin-top: 14rem;
    }

    .word-create-svg-wrapper {
      top: -12rem;
    }
  }

  @media (max-width: 340px) {
    .we-create {
      margin-top: 11rem;
    }
  }
</style>
