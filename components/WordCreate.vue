<template>
  <div class="word-create">
    <div class="word-create">
      <div class="word-create-svg-wrapper">
        <svg class="word-create-svg">
          <use xlink:href="~/static/sprite.svg#word-create" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Vivus from 'vivus'

export default {
  name: 'WordCreate',
  mounted () {
    // const v = new Vivus('word-create-svg', { duration: 200, })
  },
}
</script>

<style scoped>
  @media (max-width: 460px) {
    .word-create-svg-wrapper {
      left: -1rem;
      height: 10rem;
    }
  }
  
</style>
