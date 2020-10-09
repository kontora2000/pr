<template>
  <div class="phone-block fixed-block">
    <a class="phone-number-link" href="tel:+78612153000">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Phone',
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
    .phone-number-link {
      font-size: 1.2rem;
      letter-spacing: .1em;
    }
  }
</style>
