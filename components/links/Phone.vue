<template>
  <span v-hide class="phone-block fixed-block">
    <a class="phone-number-link" href="tel:+78612153000">
      <slot />
    </a>
  </span>
</template>

<script>
export default {
  name: 'Phone',
}
</script>
