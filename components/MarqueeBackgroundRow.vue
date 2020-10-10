<template>
  <div class="marquee-background-row-wrapper">
    <div ref="row" class="marquee-background-row">
      <span v-for="k in 8" :key="k">
        <slot />
      </span>
    </div>
    <span />
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    shift: {
      type: String,
      default: '0vw',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isAnimated: true,
      timeline: null,
    }
  },
  mounted () {

  },
}
</script>

<style>
    @keyframes marquee{
        0% {left: 100%;}
        100% {left: -100%;}
        }

    .marquee-background-row {
      animation: marquee 10s infinite;
      position: relative;
      min-width: 100vw;
      flex-direction: row;
      overflow: visible;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
    }

    .marquee-background-row > span {
      width: 100%;
      font-size: 5vw;
      text-transform: lowercase;
      font-family: 'Transgender Grotesk';
      font-weight: 400;
      color: #FFF1F4;
    }
</style>
