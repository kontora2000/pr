<template>
  <div class="author-wrapper">
    <div class="author-pos-wrapper">{{ author.pos }}</div>
    <div class="author-link-wrapper">
      <a :href="author.url">{{ author.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
