<template>
  <section class="freefreefree-section">
    <slot />
    <div class="freefreefree-arch-wrapper">
      <div class="freefreefree-arch">
        <div class="freefreefree-arch-inner">
          Замерим,<br>
          спроектируем,<br>
          доставим<br>
          и<br>
          установим
        </div>
      </div>
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
    max-height: 100vh;
    overflow: hidden;
    padding-bottom: 0;
  }
  .freefreefree-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--White100) 100%);
    z-index: 1;
  }

  .freefreefree-arch-wrapper {
    margin: 0 auto;
    max-width: 60rem;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .freefreefree-arch {
    background: var(--White24);
    backdrop-filter: blur(24px);
    border-radius: 1000px 1000px 0 0;
    height: calc(100vh - 10rem);
    margin: 0 auto;
    max-width: 53.6rem;
    width: 100%;
  }

  .freefreefree-arch-inner {
    font-size: 4.8rem;
    font-family: var(--font-transgender);
    margin: 0 2rem;
    padding-top: 10rem;
    text-align: center;
  }

  @media (max-width: 460px) {
    .freefreefree-arch {
      height: 100vh;
      max-width: calc(100vw - 3.2rem);
    }

    .freefreefree-arch-inner {
      font-size: 2.8rem;
      margin: 0 .4rem;
    }
  }
</style>
