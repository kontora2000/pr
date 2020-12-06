<template>
  <div id="app">
    <SectionEssential>
      <h2 class="page-essential-header">Реквизиты</h2>
      <p><nobr>ИНН&thinsp;2312182279</nobr><br><nobr>ОГРН&thinsp;1112312004716</nobr></p>
    </SectionEssential>
    <Footer />
  </div>
</template>

<script>
//  import sections
import SectionEssential from '~/components/sections/SectionEssential.vue'
import Footer from '~/components/sections/Footer.vue'

export default {
  Name: 'essential',
  components: {
    SectionEssential,
    Footer,
  },
}
</script>

<style scoped>

</style>
