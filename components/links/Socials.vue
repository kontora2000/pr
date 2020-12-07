<template>
  <div class="socials-wrapper" :class="colorClass">
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-instagram link-underline-solid" href="https://instagram.com/princess_mebel" target="_blank">Instagram</a>
    </div>
    <span class="socials-star only-phone">
      <svg v-hide class="socials-star-svg star-plus-svg">
        <use xlink:href="~/static/sprite.svg#star-plus" />
      </svg>
    </span>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-telegram link-underline-solid" href="https://t.me/princessfurniture" target="_blank">Telegram</a>
    </div>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-whatsapp only-desktop link-underline-solid" href="https://wa.me/79676738990" target="_blank">WhatsApp</a>
    </div>
  </div>
</template>

<script>
import colorClassMixin from '~/mixins/colorClassMixin.js'

export default {
  name: 'Socials',
  mixins: [colorClassMixin],
}
</script>

<style scoped>
  .socials-wrapper {
    display: flex;
    flex-direction: column;
    left: 70%;
    position: absolute;
  }

  .socials-item {
    margin-bottom: .6rem;
  }

  .socials-item-link {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .socials-star {
    margin: .3rem 1.2rem 0;
  }

  .socials-star-svg {
    height: .9rem;
    width: .9rem;
  }

  .socials-star-svg>use {
    fill: var(--Violet100);
  }

  @media (max-width: 460px) {
    .socials-wrapper {
      display: inline-flex;
      flex-direction: row;
      left: 50%;
      margin: .8rem 0 0;
      position: relative;
      transform: translateX(-50%);
    }
  }
</style>
