<template>
  <div class="logo-wrapper fixed-block">
    <a href="/" class="logo">
      <span class="logo-part-wrapper logo-part-wrapper-pr">
        <svg class="logo-part-svg logo-part-pr-svg" v-hide>
          <defs>
            <filter id="logo-innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"></feGaussianBlur>
              <feOffset dy="1" dx="1"></feOffset>
              <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1.5" k3="1.5" result="shadowDiff"></feComposite>
              
              <feFlood flood-color="#fff" flood-opacity=".64"></feFlood>
              <feComposite in2="shadowDiff" operator="in"></feComposite>
              <feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>
                  
                  
              <feGaussianBlur in="firstfilter" stdDeviation=".5" result="blur2"></feGaussianBlur>
              <feOffset dy="-.5" dx="-.5"></feOffset>
              <feComposite in2="firstfilter" operator="arithmetic" k2="-1.5" k3="1.5" result="shadowDiff"></feComposite>
              
              <feFlood flood-color="#850020" flood-opacity="0.2"></feFlood>
              <feComposite in2="shadowDiff" operator="in"></feComposite>
              <feComposite in2="firstfilter" operator="over"></feComposite>
            </filter>
          </defs>
          <use xlink:href="~/static/sprite.svg#logo-part-pr"></use>
        </svg>
      </span>
      <span class="logo-part-wrapper logo-part-wrapper-crown">
        <svg class="logo-part-svg logo-part-crown-svg">
          <use xlink:href="~/static/sprite.svg#logo-part-crown"></use>
        </svg>
      </span>
      <span class="logo-part-wrapper logo-part-wrapper-cess">
        <svg class="logo-part-svg logo-part-cess-svg" v-hide>
          <use xlink:href="~/static/sprite.svg#logo-part-cess"></use>
        </svg>
      </span>
    </a>
    <div class="logo-subtitle" v-hide>Студия мебели и&nbsp;дизайна</div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return { isVisible: false, }
  },
  methods: {
    hide () {
      this.isVisible = false
      this.$refs.left.style.width = '0px'
      this.$refs.right.style.width = '0px'
    },
  },
}
</script>

<style scoped>
  .logo-wrapper {
    display: block;
    height: 2.5rem;
    left: 50%;
    margin: 0;
    position: fixed;
    text-align: center;
    top: 20%;
    transform: translate(-50%);
    width: 34.4rem;
    z-index: 1004;
  }

  .logo {
    border-bottom: none;
    cursor: pointer;
    display: block;
    width: 100%;
    transition: transform .125s ease-in-out;

    filter: drop-shadow(0 0 20px rgba(101, 0, 19, 0.08));
  }
  .logo:hover {
    transform: translateY(-.6rem);
  }
  .logo-part-wrapper {
    display: inline-block;
    vertical-align: top;

    filter: drop-shadow(2px 8px 16px rgba(101, 0, 37, 0.24));
  }

  .logo-part-wrapper-pr {
    height: 3.275rem;
    margin-right: -.8rem;
    width: 9.012rem;
  }

  .logo-part-wrapper-crown {
    width: 7.876rem;
  }

  .logo-part-wrapper-cess {
    height: 3.451rem;
    margin: -.1rem 0 0 -.6rem;
    width: 17.606rem;
  }

  .logo-part-svg {
    height: 100%;
    max-height: 4.4rem;
    width: 100%;

    filter: drop-shadow(2px 4px 8px rgba(133, 1, 56, 0.2));
  }

  .logo-part-pr-svg>use,
  .logo-part-crown-svg>use,
  .logo-part-cess-svg>use {
    fill: var(--PinkLight100);
  }

  .logo-subtitle {
    cursor: default;
    font-family: var(--font-transgender);
    font-size: 1rem;
    letter-spacing: .53em;
    line-height: 1.6rem;
    margin-top: .2rem;
    text-transform: uppercase;
  }
</style>