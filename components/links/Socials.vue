<template>
  <div class="socials-wrapper fixed-block">
    <div class="socials">
      <div class="socials-item">
        <a class="instagram" href="">Instagram</a>
      </div>
      <div class="socials-item">
        <a class="telegram" href="">Telegram</a>
      </div>
      <div class="socials-item">
        <a class="whatsapp" href="">Whatsapp</a>
      </div>
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
        left:70%;
        transform: translateX(-70%);
    }
    .socials {
        display: flex;
        flex-direction: column;
    }

    .socials-item {
        text-transform: uppercase;
    }
</style>
