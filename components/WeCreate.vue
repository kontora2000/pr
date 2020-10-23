<template>
  <div class="we-create">
    <div class="word-create">
      <div class="word-create-svg-wrapper">
        <svg id="word-create-svg" class="word-create-svg" viewBox="0 0 1721 335">
          <path d="M3.5 327.5C138.8 234.6 276.7 185.8 422.4 161.3C501.5 148 567.2 135.7 631.9 100.6L628 126C680.8 84.8999 700.9 44.1999 667.1 40.4999C584.8 31.6999 459.6 98.9999 437.4 191.4C427.4 233.1 450.8 252 503.2 244.3C551.3 237.3 609.7 209.3 675.4 162.1C669.2 170.1 664.8 176 662.6 182.8C657.3 198.7 669.1 205.4 687 195.1C705.4 184.5 722.7 162.2 728.3 148.6C735.7 130.8 727.2 127.1 714.1 132.1C702.6 136.4 690.3 149.6 680.5 164.3M1717.9 5.5C1569.5 132.5 1378.2 157.8 1148 157.3C1130.6 133.3 1140.4 93.2 1169.1 39.2C1142.7 79.4 1123.2 99.6 1108.3 111.1C1096.6 120.1 1095.9 119.7 1096 112.5C1096.1 100.6 1095.7 81.1 1108.1 56.9C1079.7 106.4 1055.3 126.5 1044.3 133.2C1044.6 120.8 1048.9 102.9 1048.9 102.9C1001.1 143.4 976.1 147 969.1 139.2C960.8 130 970.4 116 970.9 114.8C991.4 80.2 1034.7 67.5 1024.4 87.9C1017.6 101.3 985.7 117.7 962.8 121.8C950.4 132.8 943.4 143.2 931.7 148.7C931.7 140.4 934.3 123.4 939.2 108.3C929.7 122.9 915.4 139.5 900.4 148.6C881.3 160.2 871.1 151.5 876 136.3C880.3 123.1 902.6 94.3 933.3 87.9M858.701 104.1C829.701 109.9 806.301 137.4 801.401 152.5C796.301 168.4 807.301 175.4 825.801 164.8C840.701 156.3 855.401 138.7 864.601 124.5C881.601 98.0999 891.501 73.0999 895.801 45.8999C900.701 14.7999 893.001 3.8999 868.901 5.5999C825.001 8.8999 773.501 38.0999 746.901 69.3999C724.101 96.0999 734.501 105.4 758.501 102.8C795.001 98.7999 879.401 76.1999 996.701 20.8999L992.801 46.2999C1014.9 35.2999 1030.8 23.0999 1047.7 5.3999L1029.2 50.7999M741.399 152.2C767.999 111.8 793.899 112.9 792.599 126.3C791.399 138.2 780.299 167.7 732.699 186.3C793.899 163.2 818.799 189.5 817.799 213.2C815.699 259.6 724.299 333.6 652.799 330.1C621.599 328.6 591.599 291.1 655.799 248.2C717.499 207 852.899 162.4 1096.8 157.8" fill="none" stroke="#252525" stroke-miterlimit="10" stroke-linejoin="bevel" />
        </svg>
      </div>
    </div>
    <we-create-item folder="kitchens">
      Кухни
    </we-create-item>
    <we-create-item folder="wardrobes">
      Шкафы&thinsp;и&thinsp;гардеробные
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
import wordCreate from '~/components/WordCreate.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'WeCreate',
  components: {
    weCreateItem,
    wordCreate,
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
    const v = new Vivus('word-create-svg', { duration: 500, type: 'sync' })
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
        stroke-width: 6.5px;

    height: 100%;
    left: -70vw;
    position: absolute;
    top: 0;
    transform: translateX(50vw);
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
      margin-left: .5rem;
      margin-right: .5rem;
      margin-top: 0;
      text-align: center;
      width: calc(100% - 1rem);
    }
  }
</style>
