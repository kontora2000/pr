<template>
  <div v-hide class="address-block">
    <a class="address-link link-underline-solid" href="#"><slot /></a>
    <span class="hours">c&nbsp;10 до&nbsp;18<sup>00</sup></span>
  </div>
</template>

<script>
export default {
  name: 'Adress',
}
</script>

<style scoped>
  .address-block {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }

  .address-link {
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .address-block .hours {
  }
</style>
