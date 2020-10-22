<template>
  <section class="freefreefree-section">
    <slot />
    <div class="freefreefree-wrapper">
      <div class="freefreefree-star-wrapper">
        <svg v-hide class="freefreefree-star-svg star-plus-svg">
          <use xlink:href="~/static/sprite.svg#star-plus" />
        </svg>
      </div>
      <div class="freefreefree-inner"><span class="free-free-free-word">Бесплатно</span> <span class="free-free-free-word">замерим,</span> <br><span class="free-free-free-word">спроектируем, </span><span class="free-free-free-word">доставим</span> <span class="free-free-free-word">и&nbsp;установим</span></div>
    </div>
    <div class="section-gradient-bottom freefreefree-section-gradient-bottom" />
  </section>
</template>

<script>
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'FreeSection',
  mixins: [sectionMixin],
}
</script>

<style scoped>
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
      max-width: 90rem;
    }

    .freefreefree-inner {
      font-size: 5.6rem;
      padding-top: 20rem;
    }
  }

  @media (max-width: 460px) {

    .freefreefree-inner {
      font-size: 2.8rem;
      margin: 0 .4rem;
    }
  }
</style>
