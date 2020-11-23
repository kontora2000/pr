<template>
  <div id="app">
    <SectionEssential>
      <h2 class="page-essential-header">Политика конфиденциальности</h2>
    </SectionEssential>
    <Footer />
  </div>
</template>

<script>
//  import sections
import SectionEssential from '~/components/sections/SectionEssential.vue'
import Footer from '~/components/sections/Footer.vue'

export default {
  Name: 'Privacy-policy',
  components: {
    SectionEssential,
    Footer,
  },
}
</script>


<style scoped>

</style>