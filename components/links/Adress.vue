<template>
  <div v-hide class="address-block">
    <a class="address-link link-underline-solid" href="#"><slot /></a>
    <span class="address-star">
        <svg class="address-star-svg star-x-svg" v-hide>
          <use xlink:href="~/static/sprite.svg#star-x"></use>
        </svg>
    </span>
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
    font-weight: 500;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .address-star-svg {
    height: .7rem;
    margin: 0 .4rem;
    width: .7rem;
  }

  .address-star-svg>use {
    fill: var(--Violet100);
  }

  .address-block .hours>sup { }
</style>
