<template>
  <div class="marquee-background">
    <row v-for="i in 5" :key="i" :number="i-0">
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
}
</script>

<style scoped>
  .marquee-background {
    min-width: 100vw;
    height: auto;
    overflow: hidden;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
  }
</style>
