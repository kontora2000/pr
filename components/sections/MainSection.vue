<template>
  <section class="main-scene">
    <div class="clouds-front main-scene-layer-4 main-scene-layer" />
    <div class="scene-kitchen-chairs main-scene-layer-3 main-scene-layer" />
    <div class="scene-kitchen-lights main-scene-layer-3 main-scene-layer" />
    <div class="scene-kitchen-counter main-scene-layer-2 main-scene-layer" />
    <slot />
  </section>
</template>

<script>
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'MainSection',
  mixins: [sectionMixin],
}
</script>
