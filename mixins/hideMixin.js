import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  mounted () {
    // const { clientHeight, } = window.document.documentElement
    gsap.to(this.$el, {
      opacity: 0,
      duration: 0.25,
      scrollTrigger: {
        trigger: '#free-section',
        start: 'top top',
        end: 'top top',
        markers: true,
        toggleActions: 'play none reverse none',
      },
    })
  },
}
