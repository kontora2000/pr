<template>
  <section class="freefreefree-section">
    <div class="freefreefree-arch">
      <div class="freefreefree-arch-inner">
        Замерим,<br>
        спроектируем,<br>
        доставим<br>
        и<br>
        установим
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
    padding-bottom: 0;
  }
  .freefreefree-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--White100) 100%);
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
    text-align: center;
  }
</style>