<template>
  <div class="socials-wrapper" :class="colorClass">
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-instagram link-underline-solid" href="https://instagram.com/princess_mebel" target="_blank">Instagram</a>
    </div>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-telegram link-underline-solid" href="https://t.me/princessfurniture" target="_blank">Telegram</a>
    </div>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-whatsapp only-desktop link-underline-solid" href="https://wa.com/princess_mebel" target="_blank">WhatsApp</a>
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
    margin-bottom: .4rem;
  }

  .socials-item-link {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
</style>
