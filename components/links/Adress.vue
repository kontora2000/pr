<template>
  <span v-hide class="address-block fixed-block">
    <a class="address-link" href="#">
      <slot />
      <span class="hours">c&nbsp;10<sup>00</sup> до&nbsp;18<sup>00</sup></span>
    </a></span>
</template>

<script>
export default {
  name: 'Adress',
}
</script>


