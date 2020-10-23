<template>
  <div ref="row" class="marquee-background-row">
    <div ref="inner" class="marquee-background-row-inner">
      <span v-for="k in 8" :key="k" class="marquee-background-row-inner-el" ref="els">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'Row',
  props: {
    shift: {
      type: String,
      default: '0%',
    },
    number: {
      type: Number,
      default: 1,
    },
  },
  data () {
    return {
      isAnimated: true,
      timeline: null,
    }
  },
  mounted () {
    let offsetX
    let startX
    let originX
    const w = this.$refs.inner.offsetWidth
    if (this.number % 2 === 0) {
      offsetX = -w
      originX = '0% 0%'
      startX = 0 - this.number * 800
    } else {
      offsetX = 0
      startX = -w * 0.25 - this.number * 800
      originX = '100% 0%'
    }
    gsap.fromTo(this.$refs.els,
      { x: startX, trasnformOrigin: originX, },
      {
        x: offsetX,
        trasnformOrigin: originX,
        duration: 80,
        scrollTrigger: {
          trigger: '#free-section',
          scrub: true,
          start: '10% center',
          end: '1000px',
          markers: false,
        },
      }
    )
  },
}
</script>

<style>

    .marquee-background-row {
      position: relative;
      left: 0px;
      top: 0px;
      max-height: 20vh;
      overflow: visible;
      position: relative;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      max-width: 100vw;
      overflow: hidden;
    }
    .marquee-background-row:not(:last-child) {
      margin-bottom: 0;
    }

    .marquee-background-row-inner {
      width: 800%;
      position: relative;
      transform-origin: 0% 100%;
    }

    .marquee-background-row-inner-el {
      display: block;
    }

    .marquee-background-row-inner-el > nobr {

    }

    .marquee-word {
      background-size: contain !important;
      display: inline-block;
      height: 169px;
    }
    .marquee-word:not(:last-child) {
      margin-right: 0;
    }

    .marquee-word-zamerim {
      background: transparent url('../static/_img/free/zamerim.png') 0 0 no-repeat;
      width: 856px;
    }
    .marquee-word-sproektiruem {
      background: transparent url('../static/_img/free/sproektiruem.png') 0 0 no-repeat;
      width: 1370px;
    }
    .marquee-word-dostavim {
      background: transparent url('../static/_img/free/dostavim.png') 0 0 no-repeat;
      width: 930px;
    }
    .marquee-word-soberem {
      background: transparent url('../static/_img/free/soberem.png') 0 0 no-repeat;
      width: 856px;
    }

    @media (max-width: 460px) {
      .marquee-background-row-inner-el {
        /*font-size: 6.4rem;
        line-height: 6rem;*/
      }
    }
</style>
