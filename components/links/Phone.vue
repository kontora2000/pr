<template>
  <div v-hide class="phone-block fixed-block">
    <a class="phone-number-link" href="tel:+78612153000">
      <slot />
    </a>
  </div>
</template>

<script>
import hideMixin from '~/mixins/hideMixin.js'

export default {
  name: 'Phone',
  mixins: [hideMixin],
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
