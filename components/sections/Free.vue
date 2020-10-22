<template>
  <section class="freefreefree-section">
    <slot />
    <div class="freefreefree-wrapper">
      <div class="freefreefree-star-wrapper">
        <svg v-hide class="freefreefree-star-svg star-plus-svg">
          <use xlink:href="~/static/sprite.svg#star-plus" />
        </svg>
      </div>
      <div class="freefreefree-inner">
        <span class="free-free-free-word bes">Бесплатно</span> <span class="free-free-free-word zam">замерим,</span> <br><span class="free-free-free-words spr">спроектируем, </span><span class="free-free-free-word dos">доставим</span> <span class="free-free-free-word ust">и&nbsp;установим</span>
      </div>
    </div>
    <div class="section-gradient-bottom freefreefree-section-gradient-bottom" />
  </section>
</template>

<script>
import gsap from 'gsap'
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'FreeSection',
  mixins: [sectionMixin],
  mounted () {
    gsap.fromTo('.freefreefree-star-wrapper',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '10% top',
          end: '10% top',
          toggleActions: 'play none reverse none',
        },
      }
    )

    gsap.fromTo('.bes',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '12% top',
          end: '12% top',
          toggleActions: 'play none reverse none',
        },
      }
    )

    gsap.fromTo('.zam',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '20% top',
          end: '20% top',
          toggleActions: 'play none reverse none',
        },
      }
    )

    gsap.fromTo('.spr',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '50% top',
          end: '50% top',
          toggleActions: 'play none reverse none',
        },
      }
    )

    gsap.fromTo('.dos',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '70% top',
          end: '70% top',
          toggleActions: 'play none reverse none',
        },
      }
    )

    gsap.fromTo('.ust',
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '.freefreefree-section',
          start: '90% top',
          end: '90% top',
          toggleActions: 'play none reverse none',
        },
      }
    )
  },
}
</script>

<style scoped>
  .free-free-free-word {
    opacity: 0;
  }

  .freefreefree-section {
    background: var(--Pink100);
    height: 400vh;
    max-height: 400vh;
    padding-bottom: 0;
  }
  .freefreefree-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--White100) 100%);
    z-index: 1;
  }

  .freefreefree-wrapper {
    display: flex;
    margin: -100vh auto 16rem;
    padding: 0 2rem;
    max-width: 1500px;
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 16rem;
    z-index: 2;
  }

  .freefreefree-star-svg {
    margin-top: 1.2rem;
    height: 5.6rem;
    width: 5.6rem;
  }

  .freefreefree-inner {
    font-size: 7.2rem;
    font-family: var(--font-transgender);
    line-height: 8rem;
    margin: 0 2rem;
  }

  @media (min-width: 1500px) {
    .freefreefree-wrapper {

    }

    .freefreefree-inner {

    }
  }

  @media (max-width: 460px) {

    .freefreefree-inner {
      font-size: 2.8rem;
      margin: 0 .4rem;
    }
  }
</style>
