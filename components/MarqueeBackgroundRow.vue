<template>
  <div ref="row" class="marquee-background-row">
    <div class="marquee-background-row-inner">
      <span v-for="k in 2" :key="k" class="marquee-background-row-inner-el">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    shift: {
      type: String,
      default: '0%',
    },
    number: {
      type: Number,
      default: 1,
    },
  },
  data () {
    return {
      isAnimated: true,
      timeline: null,
    }
  },
  mounted () {
    let offsetX
    let startX
    let originX
    if (this.number % 2 === 0) {
      offsetX = -w * 2
      originX = '0% 0%'
      startX = 0 - i * 200
    }
  },
}
</script>

<style>

    .marquee-background-row {
      position: relative;
      left: 0px;
      top: 0px;
      max-height: 20vh;
      overflow: visible;
      position: relative;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      max-width: 100vw;
      overflow: hidden;
    }

    .marquee-background-row-inner {
      width: 400%;
      position: relative;
      transform-origin: 0% 100%;
    }

    .marquee-background-row-inner-el {
      display: block;
      float: left;
      width: 50%;
      text-transform: lowercase;
      font-family: 'Transgender Grotesk';
      font-weight: 400;
      color: #FFF1F4;
      font-size: 25vh;
      line-height: 20vh;
      max-height: 20vh;
    }

     .marquee-background-row-inner-el > nobr {
       overflow: hidden;
     }
</style>
