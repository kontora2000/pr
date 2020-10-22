import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data () {
    return {
      timeline: null,
      scene: null,
    }
  },
  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    textColor: {
      type: String,
      default: '#000000',
    },
    colorClass: {
      type: String,
      default: '',
    },
  },
  mounted () {
    gsap.to('#app', {
      scrollTrigger: {
        trigger: this.$el,
        backgroundColor: this.backgroundColor,
        duration: 0.1,
        onEnter: () => {
          if (this.colorClass !== '') {
            this.$store.commit('system/setColorClass', this.colorClass)
          }
        },
        onEnterBack: () => {
          if (this.colorClass !== '') {
            this.$store.commit('system/setColorClass', this.colorClass)
          }
        },
      },
      start: 'top top',
      end: 'bottom center',
      ease: 'linear',
    })
  },
  methods: {
    changeBackgroundColor () {
      if (this.backgroundColor !== '') {
        this.$store.commit('setBackgroundColor', this.backgroundColor)
      }
    },
    changeTextColor () {
      if (this.textColor === '' || this.textColor === undefined) {
        this.textColor = 0xFFFFFF - parseInt(this.backgroundColor.replace('#', '0x'), 16)
        if (this.textColor > 0x7FFFFF) { this.textColor = '#ffffff' } else {
          this.textColor = '#000000'
        }
        // ввыбираем все текстовые элементы и меняем им цвет шрифта
        const els = document.querySelectorAll('div,span,p,i,section,a,li')
        // eslint-disable-next-line no-plusplus
        for (let k = 0; k < els.length; k++) {
          els[k].style.color = this.textColor
          if (els[k].classList.contains('text-outlined')) {
            els[k].style.WebkitTextStrokeColor = this.textColor
            this.$store.commit('setBackgroundColor', this.textColor)
          }
        }
        document.querySelector('.active').style.textColor = this.textColor
        document.querySelector('.active').style.borderColor = this.textColor
      }
    },
  },
}
