<template>
  <div class="button-measurer-wrapper fixed-block">
    <button id="call-babes" class="button-measurer" @click="openDialog">Вызвать <br class="only-phone">замерщика</button>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'CallBabesButton',
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
    bottom: 4rem;
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
  }
  .button-measurer:hover {
    box-shadow: 0px 12px 24px rgba(101, 0, 19, 0.04),
                1px 8px 16px rgba(133, 1, 40, 0.08),
                1px 12px 20px rgba(101, 0, 19, 0.16),
                inset -1px -8px 12px rgba(217, 181, 201, 0.44),
                inset -0.5px -0.5px 1.5px rgba(133, 0, 32, 0.2),
                inset 1px 1px 4px var(--White100);
  }

  @media (max-width: 460px) {
    .button-measurer {
      padding: 1.2rem 1rem 1.25rem;
    }
  }
</style>