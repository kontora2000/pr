<template>
  <section class="main-scene">
    <div class="main-scene-mask">
      <div class="main-scene-bg"></div>
      <div class="clouds-front main-scene-layer-4 main-scene-layer" />
      <div class="scene-kitchen-chairs main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-lights main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-counter main-scene-layer-2 main-scene-layer" />
    </div>
    <slot />
    <div class="section-gradient-bottom main-section-gradient-bottom"></div>
  </section>
</template>

<script>
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'MainSection',
  mixins: [sectionMixin],
}
</script>

<style scoped>
  .top-section {
    background-color:transparent;
    color: var(--Black);
    display: grid;
    height: auto;
    min-height: 80vh;
    width: 100%;
    max-width: 100vw;
  }

  .main-scene {
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  .main-scene-layer {
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: absolute;
    width: 100%;
    min-width: 100vw;
  }

  .main-scene-layer-1 {z-index: 1;}
  .main-scene-layer-2 {z-index: 2;}
  .main-scene-layer-3 {z-index: 3;}
  .main-scene-layer-4 {z-index: 4;}
  .main-scene-layer-5 {z-index: 5;}

  .clouds-back {
    background-image: url('../../static/_img/main-scene/clouds-back.png');
    min-height: 120vh;
    height: 120vh;
  }

  .k1 {
    background-image: url('../../static/_img/animation/kitchen/k1.png') !important;
    position: fixed;
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    z-index: 10;
  }

  .k2 {
    background-image: url('../../static/_img/animation/kitchen/k2.png') !important;
    position: fixed;
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    z-index: 10;
  }

  .k3 {
    background-image: url('../../static/_img/animation/kitchen/k3.png') !important;
    position: fixed;
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    z-index: 10;
  }

  .k4 {
    background-image: url('../../static/_img/animation/kitchen/k4.png') !important;
    position: fixed;
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    z-index: 10;
  }

  .k5 {
    background-image: url('../../static/_img/animation/kitchen/k5.png') !important;
    position: fixed;
    background-color: transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    min-width: 100vw;
    z-index: 10;
  }

  .scene-kitchen-counter {
    background-image: url('../../static/_img/main-scene/kitchen.png');
  }

  .scene-kitchen-chairs {
    background-image: url('../../static/_img/main-scene/chairs.png');
  }

  .scene-kitchen-lights {
    background-image: url('../../static/_img/main-scene/lights.png');
  }

  .scene-table-chairs {
    background-image: url('../../static/_img/main-scene/table-chairs.png');
  }

  .clouds-front {
    background-image: url('../../static/_img/main-scene/clouds-front.png'); 
  }

  .main-scene-mask {
    border-radius: 1000px 1000px 0 0;
    height: calc(100vh - 3.6rem);
    width: 53.6rem;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  .main-scene-bg {
    background: var(--Pink100);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -5;
  }

  .main-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--Pink100) 80%);
  }
</style>
