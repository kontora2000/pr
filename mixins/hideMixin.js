import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  computed: {
    colorClass () {
      return this.$store.getters['system/colorClass']
    },
  },
  mounted () {
    const { clientHeight, } = window.document.documentElement
    gsap.to(this.$el, {
      opacity: 0,
      duration: 0.25,
      scrollTrigger: {
        trigger: '#app',
        start: 'top top',
        end: clientHeight + 'px',
        toggleActions: 'play none reverse none',
      },
    })
  },
}
