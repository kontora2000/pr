<template>
  <section id="top-scene" class="top-section">
    <slot />
  </section>
</template>

<script>
import { gsap, Power2 } from 'gsap'
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
    this.menu = this.$el.querySelector('.we-create')
    this.timeLine = gsap.timeline()
    const cloudsBack = document.querySelector('.clouds-back')
    const cloudsFront = document.querySelector('.clouds-front')
    const chairs = document.querySelector('.scene-kitchen-chairs')
    const tableChairs = document.querySelector('.scene-table-chairs')
    const tween = this.timeLine.to(this.menu, 0.4, { y: -400, ease: Power2.easeOut, }, 0)
      .to(cloudsBack, 0.3, { opacity: 0, }, 0)
      .to(cloudsFront, 0.3, { opacity: 0, }, 0)
      .to(chairs, 0.3, { opacity: 0, }, 0)
      .to(tableChairs, 0.3, { opacity: 0, }, 0)
    // this.timeLine.add(TweenLite.to(this.menu, 0.5, {top:"-60%", ease:  Linear.easeNone}));
    this.scene.setTween(tween)
      .setPin(this.menu)
      .addIndicators('menuanim')
      .on('start', () => {
        // TweenLite.to(this.menu, 0.8, {y:-400})
      })
    this.$scrollmagic.updateScene(this.scene)
  },
}
</script>
