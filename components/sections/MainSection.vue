<template>
  <section id="top-scene" class="top-section">
    <slot />
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sectionMixin from '../../mixins/sectionMixin'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

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
    this.menu = this.$el.querySelector('.we-create')
    const cloudsBack = document.querySelector('.clouds-back')
    const cloudsFront = document.querySelector('.clouds-front')
    const chairs = document.querySelector('.scene-kitchen-chairs')
    const tableChairs = document.querySelector('.scene-table-chairs')
    gsap.to(
      this.menu, {
        scrollTrigger: {
          trigger: this.$el,
          markers: true,
          start: 'top center',
          end: 'bottom 800px',
          // toggleActions: 'restart none reverse none', 
          scrub: true
        },
        y: -400,
        ease: 'linear', 
        duration: 0.4,
      })
      // .to(cloudsBack, { opacity: 0, }, 0)
      // .to(cloudsFront, 0.3, { opacity: 0, }, 0)
      // .to(chairs, 0.3, { opacity: 0, }, 0)
      // .to(tableChairs, 0.3, { opacity: 0, }, 0)
  },
}
</script>
