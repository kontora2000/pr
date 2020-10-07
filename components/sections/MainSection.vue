<template>
  <section id="top-scene" class="top-section">
    <slot />
  </section>
</template>

<script>
import { gsap, Power2 } from 'gsap'
import { scrollTrigger } from 'gsap/dist/ScrollTrigger'
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'Mainsection',
  mixins: [sectionMixin],
  data () {
    return {
      scene: null,
      timeLine: null,
      menu: null,
    }
  },
  mounted () {
    gsap.registerPlugin(scrollTrigger)
    this.menu = this.$el.querySelector('.we-create')
    this.timeLine = gsap.timeline()
    const cloudsBack = document.querySelector('.clouds-back')
    const cloudsFront = document.querySelector('.clouds-front')
    const chairs = document.querySelector('.scene-kitchen-chairs')
    const tableChairs = document.querySelector('.scene-table-chairs')
    gsap.to(
      this.menu, 0.4, {
        scrollTrigger: this.$el, 
        y: -400,
        ease: Power2.easeOut, 
      }, 0)
      .to(cloudsBack, 0.3, { opacity: 0, }, 0)
      .to(cloudsFront, 0.3, { opacity: 0, }, 0)
      .to(chairs, 0.3, { opacity: 0, }, 0)
      .to(tableChairs, 0.3, { opacity: 0, }, 0)
  },
}
</script>
