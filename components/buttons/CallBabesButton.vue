<template>
  <div class="button-measurer-wrapper fixed-block" :class="colorClass">
    <a id="call-babes" href="#order-section" class="button-measurer button">
      Вызвать <br class="only-phone">замерщика
    </a>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import colorClassMixin from '~/mixins/colorClassMixin.js'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'CallBabesButton',
  mixins: [colorClassMixin],
  mounted () {
    gsap.to(this.$el, {
      opacity: 0,
      duration: 0.15,
      scrollTrigger: {
        trigger: '.order-section',
        toggleActions: 'play none reverse none',
        start: 'top bottom',
        end: 'top bottom',
      },
    })
  },
  methods: {
    openDialog () {
      const bg = this.$refs.background
      gsap.to(bg, 0.2, {
        scaleX: 30,
        scaleY: 30,
        onComplete: () => {
          document.body.style.overflow = ''
          document.body.style.position = ''
          this.$store.commit('openDialog')
        },
      })
    },
  },
}
</script>

<style scoped>
  .button-measurer-wrapper {
    bottom: 2rem;
    right: 2rem;
    z-index: 99;
  }

  .button-measurer {
    background: var(--PinkLight100);
    color: var(--PinkDark100);
    position: relative;
    text-shadow: 0.5px 0.5px 0.5px var(--White100),
                -0.5px -0.5px 0.5px rgba(217, 181, 201, 0.72);
    box-shadow: 0px 0px 20px rgba(101, 0, 19, 0.08),
                2px 4px 8px rgba(133, 1, 40, 0.12),
                2px 8px 16px rgba(101, 0, 19, 0.16),
                inset -1px -8px 12px rgba(217, 181, 201, 0.44),
                inset -0.5px -0.5px 1.5px rgba(133, 0, 32, 0.2),
                inset 1px 1px 4px var(--White100);
    will-change: text-shadow, box-shadow, transform;
    
  }
  .button-measurer:hover {
    background: var(--GrayLight100);
    box-shadow: 0px 12px 24px rgba(101, 0, 19, 0.04),
                1px 8px 16px rgba(133, 1, 40, 0.08),
                1px 12px 20px rgba(101, 0, 19, 0.16),
                inset -1px -8px 12px rgba(217, 181, 201, 0.44),
                inset -0.5px -0.5px 1.5px rgba(133, 0, 32, 0.2),
                inset 1px 1px 4px var(--White100);
  }
  .colors-section-realised.button-measurer-wrapper .button-measurer {
    background: var(--GrayLight100);
    color: var(--Gray100);
    text-shadow: 0.5px 0.5px 0.5px var(--White100),
                -0.5px -0.5px 0.5px var(--Gray64);
    box-shadow: 0px 12px 24px var(--Gray44),
                1px 8px 16px var(--Gray88),
                1px 12px 20px var(--Gray64),
                inset -1px -8px 12px var(--Gray44),
                inset -0.5px -0.5px 1.5px var(--Gray20),
                inset 1px 1px 4px var(--White100);
  }
  .colors-section-realised.button-measurer-wrapper .button-measurer:hover {
    background-color: var(--White100);
    box-shadow: 0px 12px 24px var(--Gray44),
                1px 8px 16px var(--Gray88),
                1px 12px 20px var(--Gray64),
                inset -1px -8px 12px var(--Gray44),
                inset -0.5px -0.5px 1.5px var(--Gray20),
                inset 1px 1px 4px var(--White100);
  }

  @media (max-width: 460px) {
    .button-measurer-wrapper {
      bottom: 1.2rem;
      right: .8rem;
    }
    .button-measurer {
      padding: .6rem 2.4rem .6rem;
      text-align: center;
    }
  }
</style>
