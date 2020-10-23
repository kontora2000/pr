<template>
  <section class="main-scene">
    <div class="main-scene-mask">
      <div class="main-scene-bg"></div>
      <div class="main-scene-stars main-scene-layer-2"></div>
      <div class="clouds-front main-scene-layer-4 main-scene-layer" />
      <div class="scene-kitchen-chairs main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-lights main-scene-layer-3 main-scene-layer" />
      <div class="scene-kitchen-counter main-scene-layer-2 main-scene-layer" />
      <div class="clouds-back main-scene-layer-1 main-scene-layer" />
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
  .colors-section-main {
    /*background-color: var(--PinkThin100);*/
  }
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
    overflow-x: hidden;
  }

  .main-scene-layer {
    background-color: transparent;
    background-position: 800% 0;
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

  .scene-kitchen-counter {
    background-image: url('../../static/_img/main-scene/kitchen.png');
    background-position-y: -30px;
  }

  .scene-kitchen-chairs {
    background-image: url('../../static/_img/main-scene/chairs.png');
    background-position-y: -30px;
  }

  .scene-kitchen-lights {
    background-image: url('../../static/_img/main-scene/lights.png');
    background-position-y: -20px;
  }

  .scene-table-chairs {
    background-image: url('../../static/_img/main-scene/table-chairs.png');
  }

  .clouds-front {
    background-image: url('../../static/_img/main-scene/clouds-front.png');
    background-position-y: -100px;
  }

  .clouds-back {
    background-image: url('../../static/_img/main-scene/clouds-back.png');
    background-position-y: -100px;
}

  .main-scene-stars {
    background-image: url('../../static/_img/main-scene/stars.png');
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    width: 116%;
    transform: translateX(-50%);
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
    background: radial-gradient(81.13% 85.17% at 50% 84.48%, rgba(255, 156, 215, 0) 77.73%, rgba(16, 0, 203, 0.49) 98.51%), radial-gradient(154.91% 70.04% at 50% 45.04%, rgba(255, 193, 212, 0) 20.73%, rgba(96, 0, 219, 0.16) 59.69%), radial-gradient(172.76% 116.16% at 50% 100%, #FFF3F6 46.26%, #FFD8E2 100%, #FFD8E2 100%);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -5;
  }

  .main-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--Pink100) 80%);
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


  @media (min-width: 1460px) {
    .main-scene-mask {
      width: 92rem;
    }

    .main-scene-layer {
      background-position-x: 100%;
      width: 1800px;
      min-width: 300px;
    }

    .scene-kitchen-counter {
      background-position-y: -30px;
    }

  }

  @media (max-width: 460px) {
    .main-scene-layer {
      background-position: 0 0;
    }

    .scene-kitchen-counter {
      background-position-x: -40vw;
    }

    .scene-kitchen-chairs {
      background-position-x: -86vw;
    }

    .scene-kitchen-lights {
      background-position-x: -50vw;
    }

    .scene-table-chairs {
      background-position-x: -30vw;
    }

    .clouds-front {
      background-position-x: -100px;
    }

    .clouds-back {
      background-position: -40vw -70px;
    }

    .main-scene-mask {
      height: 100vh;
      width: calc(100vw - .8rem);
    }
  }

</style>
