<template>
  <section class="order-section">
    <h1>Заказать</h1>
    <form>
      <input type="text" name="adress">
      <input type="text" name="phone">
      <button class="button-big order-section-form-button-send">Вызвать замерщика</button>
    </form>
    <div class="section-gradient-bottom order-section-gradient-bottom"></div>
  </section>
</template>

<script>
export default {
  name: 'OrderSection',
}
</script>

<style scoped>
  .order-section {
    background-color: #E4D8D4;
  }
  .order-section>h1 {
    color: var(--White100);
  }
  .order-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 252, 244, 0) 0%, #98CEFF 100%);
  }
</style>
