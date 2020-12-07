<template>
  <div v-hide class="address-block">
    <a class="address-link link-underline-solid" href="#"><slot /></a>
    <span class="address-star">
      <svg v-hide class="address-star-svg star-x-svg">
        <use xlink:href="~/static/sprite.svg#star-x" />
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
    height: .8rem;
    margin: 0 .4rem;
    width: .8rem;
  }

  .address-star-svg>use {
    fill: var(--Violet100);
  }

  .address-block .hours>sup {
    font-size: 7px;
    font-weight: 500;
    margin-left: .5px;
  }
  @media (max-width: 460px) {
    .address-block {
      display: flex;
      justify-content: center;
    }

    .address-link {
      position: relative;
      top: .2rem;
    }

    .address-star {
      margin: .3rem 1.2rem 0;
    }
  }
</style>
