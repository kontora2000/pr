<template>
  <div ref="wrapper" class="logo-wrapper fixed-block" :class="colorClass">
    <nuxt-link to="/" class="logo">
    <Sprite />
      <span class="logo-part-wrapper logo-part-wrapper-pr">
        <svg ref="pr" class="logo-part-svg logo-part-pr-svg">
          <defs>
            <filter id="logo-innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
              <feOffset dy="1" dx="1" />
              <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1.5" k3="1.5" result="shadowDiff" />

              <feFlood flood-color="#fff" flood-opacity=".64" />
              <feComposite in2="shadowDiff" operator="in" />
              <feComposite in2="SourceGraphic" operator="over" result="firstfilter" />

              <feGaussianBlur in="firstfilter" stdDeviation=".5" result="blur2" />
              <feOffset dy="-.5" dx="-.5" />
              <feComposite in2="firstfilter" operator="arithmetic" k2="-1.5" k3="1.5" result="shadowDiff" />

              <feFlood flood-color="#850020" flood-opacity="0.2" />
              <feComposite in2="shadowDiff" operator="in" />
              <feComposite in2="firstfilter" operator="over" />
            </filter>
          </defs>
          <use xlink:href="#logo-part-pr" />
        </svg>
      </span>
      <span ref="crown" class="logo-part-wrapper logo-part-wrapper-crown">
        <svg class="logo-part-svg logo-part-crown-svg">
          <use xlink:href="#logo-part-crown" />
        </svg>
      </span>
      <span ref="cessWrapper" class="logo-part-wrapper logo-part-wrapper-cess">
        <svg ref="cess" class="logo-part-svg logo-part-cess-svg">
          <use xlink:href="#logo-part-cess" />
        </svg>
      </span>
    </nuxt-link>
    <div class="logo-subtitle">
      Студия мебели и&nbsp;дизайна
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import colorClassMixin from '~/mixins/colorClassMixin.js'

import Sprite from '~/components/Sprite'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'Logo',
  components: {
    Sprite,
  },
  mixins: [colorClassMixin],
  data () {
    return { isVisible: false, }
  },
  mounted () {
    gsap.to(this.$refs.wrapper, {
      duration: 0.5,
      y: '-=30vh',
      scrollTrigger: {
        trigger: '#free-section',
        toggleActions: 'play none reverse none',
        start: '20% center',
        end: '20% center',
        markers: true,
      },
    })
    gsap.to('.logo-part-wrapper-cess,.logo-part-wrapper-pr', {
      duration: 0.3,
      width: 0,
      scrollTrigger: {
        trigger: '#free-section',
        toggleActions: 'play none reverse none',
        start: '20% center',
        end: '20% center',
      },
    })
    gsap.to('.logo-subtitle', {
      duration: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: '#free-section',
        toggleActions: 'play none reverse none',
        start: '20% center',
        end: '20% center',
      },
    })
  },
  methods: {
    hide () {
      this.isVisible = false
      this.$refs.pr.style.width = '0px'
      this.$refs.cess.style.width = '0px'
    },
  },
}
</script>

<style scoped>
  .logo-wrapper {
    display: block;
    /*height: 2.5rem;*/
    left: 50%;
    margin: 0;
    position: fixed;
    text-align: center;
    top: 32%;
    transform: translate(-50%);
    width: 34.4rem;
    z-index: 1004;
  }

  .logo {
    border-bottom: none;
    cursor: pointer;
    display: block;
    width: 100%;
    transition: transform .125s ease-in-out, -webkit-filter .2s ease-in-out, filter .2s ease-in-out;
    will-change: transform, filter, -webkit-filter;

    filter: drop-shadow(0 0 20px rgba(101, 0, 19, .08));
  }
  .logo:hover {
    transform: translateY(-.6rem);
    filter: drop-shadow(0 4px 22px rgba(101, 0, 19, .1));
  }
  .colors-section-realised.logo-wrapper .logo {
    filter: drop-shadow(0 0 20px var(--Gray44));
  }
  .colors-section-realised.logo-wrapper .logo:hover {
    filter: drop-shadow(0 4px 22px var(--Gray44));
  }
  .colors-section-order.logo-wrapper .logo {
    filter: drop-shadow(0 0 20px  var(--Beige44));
  }
  .colors-section-order.logo-wrapper .logo:hover {
    filter: drop-shadow(0 4px 22px var(--Beige44));
  }
  .colors-section-contacts.logo-wrapper .logo {
    filter: drop-shadow(0 0 20px var(--BlueLightShadow44));
  }
  .colors-section-contacts.logo-wrapper .logo:hover {
    filter: drop-shadow(0 4px 22px var(--BlueLightShadow44));
  }

  .logo-part-wrapper {
    display: inline-block;
    vertical-align: top;
    transition:  filter .2s ease-in-out, -webkit-filter .2s ease-in-out;
    will-change: -webkit-filter, filter;

    filter: drop-shadow(2px 8px 16px rgba(101, 0, 37, 0.26));
  }
  .logo:hover .logo-part-wrapper {
    filter: drop-shadow(0 10px 18px rgba(101, 0, 37, .28));
  }
  .colors-section-realised.logo-wrapper .logo-part-wrapper {
    filter: drop-shadow(2px 8px 16px var(--Gray64));
  }
  .colors-section-realised.logo-wrapper .logo:hover .logo-part-wrapper {
    filter: drop-shadow(0 10px 18px var(--Gray64));
  }
  .colors-section-order.logo-wrapper .logo-part-wrapper {
    filter: drop-shadow(2px 8px 16px  var(--Beige64));
  }
  .colors-section-order.logo-wrapper .logo:hover .logo-part-wrapper {
    filter: drop-shadow(0 10px 18px var(--Beige64));
  }
  .colors-section-contacts.logo-wrapper .logo-part-wrapper {
    filter: drop-shadow(2px 8px 16px var(--BlueLightShadow64));
  }
  .colors-section-contacts.logo-wrapper .logo:hover .logo-part-wrapper {
    filter: drop-shadow(0 10px 18px var(--BlueLightShadow64));
  }

  .logo-part-wrapper-pr {
    height: 3.275rem;
    margin-right: -.8rem;
    width: 9.012rem;
  }

  .logo-part-wrapper-crown {
    width: 7.876rem;
  }

  .logo-part-wrapper-cess {
    height: 3.451rem;
    margin: -.1rem 0 0 -.6rem;
    width: 17.606rem;
  }

  .logo-part-svg {
    height: 100%;
    max-height: 4.4rem;
    width: 100%;
    transition: -webkit-filter .2s ease-in-out, filter .2s ease-in-out;
    will-change: -webkit-filter, filter;

    filter: drop-shadow(1px 3px 3px rgba(133, 1, 56, .28));
  }
  .logo:hover .logo-part-svg {
    filter: drop-shadow(1px 4px 4px rgba(133, 1, 56, .28));
  }
  .colors-section-realised.logo-wrapper .logo-part-svg {
    filter: drop-shadow(1px 3px 3px var(--Gray88));
  }
  .colors-section-realised.logo-wrapper .logo:hover .logo-part-svg {
    filter: drop-shadow(1px 4px 4px var(--Gray88));
  }
  .colors-section-order.logo-wrapper .logo-part-svg {
    filter: drop-shadow(1px 3px 3px var(--Beige88));
  }
  .colors-section-order.logo-wrapper .logo:hover .logo-part-svg {
    filter: drop-shadow(1px 4px 4px var(--Beige88));
  }
  .colors-section-contacts.logo-wrapper .logo-part-svg {
    filter: drop-shadow(1px 3px 3px var(--BlueLightShadow88));
  }
  .colors-section-contacts.logo-wrapper .logo:hover .logo-part-svg {
    filter: drop-shadow(1px 4px 4px var(--BlueLightShadow88));
  }

  .logo-part-pr-svg>use,
  .logo-part-crown-svg>use,
  .logo-part-cess-svg>use {
    fill: var(--PinkLight100);
    transition: fill .175s ease-in-out;
    will-change: fill;
  }
  .logo:hover .logo-part-pr-svg>use,
  .logo:hover .logo-part-crown-svg>use,
  .logo:hover .logo-part-cess-svg>use {
    fill: var(--GrayLight100);
  }
  .colors-section-realised.logo-wrapper .logo-part-pr-svg>use,
  .colors-section-realised.logo-wrapper .logo-part-crown-svg>use,
  .colors-section-realised.logo-wrapper .logo-part-cess-svg>use,
  .colors-section-order.logo-wrapper .logo-part-pr-svg>use,
  .colors-section-order.logo-wrapper .logo-part-crown-svg>use,
  .colors-section-order.logo-wrapper .logo-part-cess-svg>use,
  .colors-section-contacts.logo-wrapper .logo-part-pr-svg>use,
  .colors-section-contacts.logo-wrapper .logo-part-crown-svg>use,
  .colors-section-contacts.logo-wrapper .logo-part-cess-svg>use {
    fill: var(--GrayLight100);
  }
  .colors-section-realised.logo-wrapper .logo:hover .logo-part-pr-svg>use,
  .colors-section-realised.logo-wrapper .logo:hover .logo-part-crown-svg>use,
  .colors-section-realised.logo-wrapper .logo:hover .logo-part-cess-svg>use,
  .colors-section-order.logo-wrapper .logo:hover .logo-part-pr-svg>use,
  .colors-section-order.logo-wrapper .logo:hover .logo-part-crown-svg>use,
  .colors-section-order.logo-wrapper .logo:hover .logo-part-cess-svg>use,
  .colors-section-contacts.logo-wrapper .logo:hover .logo-part-pr-svg>use,
  .colors-section-contacts.logo-wrapper .logo:hover .logo-part-crown-svg>use,
  .colors-section-contacts.logo-wrapper .logo:hover .logo-part-cess-svg>use {
    fill: var(--White100);
  }

  .logo-subtitle {
    color: #DCB2C0;
    cursor: default;
    font-family: var(--font-transgender);
    font-size: 1rem;
    letter-spacing: .53em;
    line-height: 1.6rem;
    margin-top: .2rem;
    text-transform: uppercase;
  }

  @media (max-width: 460px) {
    .logo-wrapper {
      top: 37%;
      width: 24.3rem;
    }

    .logo-part-svg {
      max-height: 3.2rem;
    }

    .logo-part-wrapper-pr {
      height: 2.329rem;
      width: 6.344rem;
    }

    .logo-part-wrapper-crown {
      width: 5.545rem;
    }

    .logo-part-wrapper-cess {
      height: 2.454rem;
      width: 12.4rem;
    }

    .logo-subtitle {
      display: none;
    }
  }
</style>
