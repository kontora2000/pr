<template>
  <div class="phone-block fixed-block">
    <a class="phone-number-link" href="tel:+78612153000">
      <slot />
    </a>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Phone',
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
  .phone-block {
    right: 2rem;
  }

  .phone-number-link {
    font-family: var(--font-transgender);
    font-size: 1.6rem;
    letter-spacing: .02em;
    line-height: 1.6rem;
  }

  @media (max-width: 460px) {
    .phone-block.fixed-block {
      margin: .8rem 0 0;
      position: relative;
      left: 50%;
      text-align: center;
      transform: translateX(-50%);
      width: 100%;
    }
    .phone-number-link {
      font-size: 1.3rem;
      letter-spacing: .04em;
    }
  }
</style>
