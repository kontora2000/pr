<template>
  <section class="freefreefree-section">
    <slot />
    <div class="freefreefree-arch-wrapper">
      <div class="freefreefree-arch-text">
        <svg width="583" height="1094" viewBox="0 0 583 1094">
          <path id="curve" fill="transparent" d="M292 1082C137.676 1082 12.5 956.924 12.5 802.5L12.5001 291C12.5001 136.676 137.576 11.5 292 11.5C446.324 11.5 571.5 136.576 571.5 291L571.5 802.5C571.5 956.924 446.424 1082 292 1082Z"></path>
          <text width="100%" style="transform:translate3d(0,0,0);">
              <textPath style="transform:translate3d(0,0,0);" alignment-baseline="middle" xlink:href="#curve" startOffset="-1800px" id="text-path">Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ Бесплатно ✹ </textPath>
          </text>
        </svg>
      </div>
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
export default {
  name: 'FreeSection',
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

  .freefreefree-arch-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-2rem);
  }

  .freefreefree-arch-text text {
    fill: var(--Black100);
    font-family: var(--font-serif);
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .16em;
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
</style>