<template>
  <div class="marquee-background-wrapper">
    <row v-for="i in 8" :key="i" :title="title">
      <slot />
    </row>
  </div>
</template>

<script>
import row from '@/components/MarqueeBackgroundRow'

export default {
  name: 'MarqueeBackground',
  components: {
    row,
  },
  props: {
    title: {
      type: String,
      default: 'Замерим изготовим приготовим хуйготовим',
    },
  },
}
</script>

<style scoped>
  .marquee-background {
    position: absolute;
    width: 100%;
    min-width: 100vw;
    height: auto;
    overflow: hidden;
  }
</style>
