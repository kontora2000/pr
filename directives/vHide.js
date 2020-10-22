import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  inserted (el) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.25,
      scrollTrigger: {
        trigger: '#free-section',
        start: '20% center',
        end: '20% center',
        toggleActions: 'play none reverse none',
      },
    })
  },
  update (el) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.25,
      scrollTrigger: {
        trigger: '#free-section',
        start: '20% center',
        end: '20% center',
        markers: false,
        toggleActions: 'play none reverse none',
      },
    })
  },
  // update (el) {
  //   // const scrollPos = (window.scrollY || document.documentElement.scrollTop)
  //   // const { clientHeight, } = window.document.documentElement
  //   // if (scrollPos > clientHeight) {
  //   //   document.querySelector('.logo-pr').style.width = '0px'
  //   //   document.querySelector('.logo-cess').style.width = '0px'
  //   //   gsap.to(el, {
  //   //     opacity: 0.0,
  //   //     duration: 0.5,
  //   //     onComplete () {
  //   //       // if (el.classList.hasClass('logo-crown'))
  //   //       // eslint-disable-next-line no-param-reassign
  //   //       el.style.display = 'none'
  //   //     },
  //   //   })
  //   // } else
  //   // if ((scrollPos < window.document.documentElement.clientHeight) &&
  //   //     (scrollPos > (clientHeight - 50))) {
  //   //   gsap.to(el, {
  //   //     opacity: 1.0,
  //   //     duration: 0.5,
  //   //     onComplete () {
  //   //       // if (el.classList.hasClass('logo-crown'))
  //   //       // eslint-disable-next-line no-param-reassign
  //   //       el.style.display = 'block'
  //   //       document.querySelector('.logo-pr').style.width = '0px'
  //   //       document.querySelector('.logo-cess').style.width = '0px'
  //   //     },
  //   //   })
  //   // }
  // },
}
