<template>
  <div>
    <button id="call-babes" class="button-measurer fixed-block" @click="openDialog">
      Вызвать замерщика
    </button>
    <button id="call-babes-background" ref="background" class="button-measurer fixed-block" />
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
