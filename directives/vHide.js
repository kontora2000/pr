// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export default {
//   inserted (el) {
//     // window.addEventListener('scroll', () => {
//     //   const scrollPos = (window.scrollY || document.documentElement.scrollTop)
//     //   const clientHeight = window.screen.availHeight
//     //   if (scrollPos > clientHeight) {
//     //     document.querySelector('.logo-pr').style.width = '0px'
//     //     document.querySelector('.logo-cess').style.width = '0px'
//     //     gsap.to(el, {
//     //       duration: 0.5,
//     //       // eslint-disable-next-line quote-props
//     //       'opacity': 0.0,
//     //       onComplete () {
//     //       // eslint-disable-next-line no-param-reassign
//     //         el.style.display = 'none'
//     //       },
//     //     })
//     //   } else
//     //   if ((scrollPos < clientHeight)) {
//     //     document.querySelector('.logo-pr').style.width = ''
//     //     document.querySelector('.logo-cess').style.width = ''
//     //     gsap.to(el, {
//     //       duration: 0.25,
//     //       opacity: 1.0,
//     //       onComplete () {
//     //       // eslint-disable-next-line no-param-reassign
//     //         el.style.display = 'block'
//     //       },
//     //     })
//     //   }
//     // })
//     const { clientHeight, } = window.document.documentElement
//     gsap.to(el, {
//       opacity: 0,
//       scrollTrigger: {
//         trigger: '#app',
//         start: '0px',
//         end: clientHeight + 'px',
//         toggleActions: 'play none reverse none',
//       },
//     })
//   },
//   update (el) {
//     // const scrollPos = (window.scrollY || document.documentElement.scrollTop)
//     // const { clientHeight, } = window.document.documentElement
//     // if (scrollPos > clientHeight) {
//     //   document.querySelector('.logo-pr').style.width = '0px'
//     //   document.querySelector('.logo-cess').style.width = '0px'
//     //   gsap.to(el, {
//     //     opacity: 0.0,
//     //     duration: 0.5,
//     //     onComplete () {
//     //       // if (el.classList.hasClass('logo-crown'))
//     //       // eslint-disable-next-line no-param-reassign
//     //       el.style.display = 'none'
//     //     },
//     //   })
//     // } else
//     // if ((scrollPos < window.document.documentElement.clientHeight) &&
//     //     (scrollPos > (clientHeight - 50))) {
//     //   gsap.to(el, {
//     //     opacity: 1.0,
//     //     duration: 0.5,
//     //     onComplete () {
//     //       // if (el.classList.hasClass('logo-crown'))
//     //       // eslint-disable-next-line no-param-reassign
//     //       el.style.display = 'block'
//     //       document.querySelector('.logo-pr').style.width = '0px'
//     //       document.querySelector('.logo-cess').style.width = '0px'
//     //     },
//     //   })
//     // }
//   },

// }
