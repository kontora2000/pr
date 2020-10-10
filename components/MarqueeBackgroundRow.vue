<template>
  <div class="title-background-row-wrapper">
    <span class="title-background-row" ref="row"><slot /><span>
  </div>
</template>

<script>
export default {
  name: 'MarqueBackgroundRow',
  props: {
      shift: {
          type: String,
          default: '0vw'
      }
  },
  data () {
    return {
      isAnimated: true,
      timeline: null
    }
  },
  mounted () {

  }
}
</script>

<style>
    @keyframes marquee{
        0% {text-indent: 100%;}
        100% {text-indent: -100%;}
        }
    }

    .title-background-row-wrapper {
        position: relative;
    }

    .title-background-row {
        animation: marquee 10s infinite;
    }
</style>
