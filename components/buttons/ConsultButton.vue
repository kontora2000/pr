<template>
  <div class="link-open-chat-wrapper fixed-block" :class="colorClass">
    <a id="consult" href="https://wa.me/79676738990" class="link-open-chat">
      <span class="icon-consult-wrapper">
        <svg class="icon-svg icon-consult-svg">
          <use xlink:href="#icon-consult" />
        </svg>
      </span>
      <span class="link-open-words-wrapper"><span class="only-desktop link-underline-solid">Проконсультироваться<br></span><span class="only-phone link-underline-solid">Спросить<br></span><span class="link-underline-solid">в&nbsp;WhatsApp</span></span>
    </a>
  </div>
</template>

<script>
import gsap from 'gsap'
import colorClassMixin from '~/mixins/colorClassMixin.js'

import Sprite from '~/components/Sprite'

export default {
  name: 'ConsultButton',
  mixins: [colorClassMixin],
  mounted () {
    gsap.to(this.$el, {
      opacity: 0,
      duration: 0.15,
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
    bottom: 2rem;
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
    text-shadow: 0px 2px 8px rgba(101, 0, 19, 0.72),
                 2px 3px 4px rgba(133, 1, 40, 0.2),
                 1px 1px 2px rgba(101, 0, 19, 0.16);
  }
  .colors-section-realised.link-open-chat-wrapper .link-open-chat {
    text-shadow: 0px 0px 8px var(--Gray64),
                 2px 3px 4px var(--Gray88),
                 1px 1px 4px var(--Gray100);
  }
  .colors-section-order.link-open-chat-wrapper .link-open-chat {
    text-shadow: 0px 0px 8px var(--Beige64),
                 2px 3px 4px var(--Beige88),
                 1px 1px 4px var(--Beige100);
  }

  .icon-consult-wrapper {
    display: inline-block;
    filter: drop-shadow(2px 8px 16px rgba(101, 0, 37, 0.26));
    height: 4.55rem;
    margin-right: .6rem;
    width: 5.2rem;
    transition: filter .2s ease-in-out, -webkit-filter .2s ease-in-out;
    will-change: filter;
  }
  .link-open-chat:hover .icon-consult-wrapper {
    filter: drop-shadow(0 10px 18px rgba(101, 0, 37, .28));
  }
  .colors-section-realised.link-open-chat-wrapper .icon-consult-wrapper {
    filter: drop-shadow(2px 8px 16px var(--Gray64));
  }
  .colors-section-realised.link-open-chat-wrapper .link-open-chat:hover .icon-consult-wrapper {
    filter: drop-shadow(0 10px 18px var(--Gray64));
  }
  .colors-section-order.link-open-chat-wrapper .icon-consult-wrapper {
    filter: drop-shadow(2px 8px 16px var(--Beige64));
  }
  .colors-section-order.link-open-chat-wrapper .link-open-chat:hover .icon-consult-wrapper {
    filter: drop-shadow(0 10px 18px var(--Beige64));
  }

  .icon-consult-svg {
    display: inline-block;
    height: 4.55rem;
    vertical-align: middle;
    width: 5.2rem;
    filter: drop-shadow(1px 3px 3px rgba(133, 1, 40, 0.2));;
    transition: transform .125s ease-in-out, filter .2s ease-in-out, -webkit-filter .2s ease-in-out;
    will-change: transform, filter, -webkit-filter;
  }
  .link-open-chat:hover .icon-consult-svg {
    transform: translateY(-.4rem);
    filter: drop-shadow(1px 4px 4px rgba(133, 1, 56, .28));
  }
  .colors-section-realised.link-open-chat-wrapper .icon-consult-svg {
    filter: drop-shadow(1px 3px 3px var(--Gray88));
  }
  .colors-section-realised.link-open-chat-wrapper .link-open-chat:hover .icon-consult-svg {
    filter: drop-shadow(1px 4px 4px var(--Gray88));
  }
  .colors-section-order.link-open-chat-wrapper .icon-consult-svg {
    filter: drop-shadow(1px 3px 3px var(--Beige88));
  }
  .colors-section-order.link-open-chat-wrapper .link-open-chat:hover .icon-consult-svg {
    filter: drop-shadow(1px 4px 4px var(--Beige88));
  }

  .icon-consult-svg>use {
    fill: var(--PinkLight100);
    transform: scale(1.6);
    transition: fill .175s ease-in-out;
    will-change: transform, fill;
  }
  .link-open-chat:hover .icon-consult-svg>use {
    fill: var(--GrayLight100);
  }
  .colors-section-realised.link-open-chat-wrapper .icon-consult-svg>use,
  .colors-section-order.link-open-chat-wrapper .icon-consult-svg>use,
  .colors-section-contacts.link-open-chat-wrapper .icon-consult-svg>use {
    fill: var(--GrayLight100);
  }
  .colors-section-realised.link-open-chat-wrapper .link-open-chat:hover .icon-consult-svg>use,
  .colors-section-order.link-open-chat-wrapper .link-open-chat:hover .icon-consult-svg>use,
  .colors-section-contacts.link-open-chat-wrapper .link-open-chat:hover .icon-consult-svg>use {
    fill: var(--White100);
  }

  .link-open-words-wrapper {
      display: inline-block;
      margin-top: .2rem;
      vertical-align: top;
    }

  @media (max-width: 460px) {
    .link-open-chat-wrapper {
      bottom: 1.6rem;
      left: .8rem;
    }

    .icon-consult-wrapper {
      display: inline-block;
      height: 2.8rem;
      vertical-align: top;
      position: relative;
      top: -.8rem;
    }

    .link-open-words-wrapper {
      display: inline-block;
      margin-top: -.4rem;
      vertical-align: top;
    }
  }
</style>
