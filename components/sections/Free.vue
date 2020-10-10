<template>
  <section class="freefreefree-section">
    Бесплатно замерим
    <div class="section-gradient-bottom freefreefree-section-gradient-bottom" />
    <!-- <section class="freefreefree-section" /> -->
    <slot />
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
  }
  .freefreefree-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--White100) 100%);
  }
</style>
