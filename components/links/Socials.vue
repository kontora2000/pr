<template>
  <div class="socials-wrapper">
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-instagram link-underline-solid" href="">Instagram</a>
    </div>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-telegram link-underline-solid" href="">Telegram</a>
    </div>
    <div class="socials-item">
      <a class="socials-item-link socials-item-link-whatsapp only-desktop link-underline-solid" href="">WhatsApp</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
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
    line-height: 1.6rem;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
</style>
