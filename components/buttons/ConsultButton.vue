<template>
  <div class="link-open-chat-wrapper fixed-block" :class="colorClass">
    <a id="consult" href="#" class="link-open-chat">
      <span class="icon-consult-wrapper">
        <svg class="icon-svg icon-consult-svg">
          <use xlink:href="~/static/sprite.svg#icon-consult" />
        </svg>
      </span>
      <span class="link-open-words-wrapper"><span class="only-desktop link-underline-solid">Проконсультироваться<br></span><span class="only-phone link-underline-solid">Спросить<br></span><span class="link-underline-solid">в&nbsp;WhatsApp</span></span>
    </a>
  </div>
</template>

<script>
import gsap from 'gsap'
import colorClassMixin from '~/mixins/colorClassMixin.js'

export default {
  name: 'ConsultButton',
  mixins: [colorClassMixin],
  mounted () {
    gsap.to(this.$el, {
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: '.contacts-section',
        toggleActions: 'play none reverse none',
        start: 'top bottom',
        end: 'top bottom',
      },
    })
  },
}
</script>

<style scoped>
  .link-open-chat-wrapper {
    bottom: 4rem;
    left: 2rem;
    z-index: 99;
  }

  .link-open-chat {
    color: var(--White100);
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(101, 0, 19, 0.72),
                 2px 3px 4px rgba(133, 1, 40, 0.2),
                 1px 1px 2px rgba(101, 0, 19, 0.16);
  }

  .icon-consult-wrapper {
    filter: drop-shadow(2px 8px 16px rgba(101, 0, 37, 0.26));
    transition: filter .2s ease-in-out, -webkit-filter .2s ease-in-out;
    will-change: filter;
  }
  .link-open-chat:hover .icon-consult-wrapper {
    filter: drop-shadow(0 10px 18px rgba(101, 0, 37, .28));
  }

  .icon-consult-svg {
    display: inline-block;
    height: 3.6rem;
    margin-right: .4rem;
    vertical-align: middle;
    width: 4.1rem;
    filter: drop-shadow(1px 3px 3px rgba(133, 1, 40, 0.2));;
    transition: transform .125s ease-in-out, filter .2s ease-in-out, -webkit-filter .2s ease-in-out;
    will-change: transform, filter, -webkit-filter;
  }
  .link-open-chat:hover .icon-consult-svg {
    transform: translateY(-.4rem);
    filter: drop-shadow(1px 4px 4px rgba(133, 1, 56, .28));
  }
  .icon-consult-svg>use {
    fill: var(--PinkLight100);
  }
<<<<<<< HEAD
=======

  .link-open-words-wrapper {
      display: inline-block;
      vertical-align: top;
    }
>>>>>>> des2

  @media (max-width: 460px) {
    .link-open-chat-wrapper {
      bottom: 1.6rem;
      left: .8rem;
    }

    .icon-consult-wrapper {
      display: inline-block;
      height: 2.8rem;
      vertical-align: top;
    }

    .link-open-words-wrapper {
      display: inline-block;
      margin-top: -.4rem;
      vertical-align: top;
    }
  }
</style>
