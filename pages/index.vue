<template>
  <div id="app">
    <div class="adress-socials-wrapper">
      <adress v-hide class="address-block">
        Краснодар, <br>Тургенева,&nbsp;123
      </adress>
      <socials />
      <phone>+7&thinsp;861&thinsp;215-30-00</phone>
    </div>
    <call-babes-button>Вызвать замерщика</call-babes-button>
    <main-section text-color="#ffffff" background-color="#fff1f5">
      <logo />
      <we-create />
    </main-section>
    <!-- <title-section /> -->
    <call-babes-button />
    <dialog-mesurement />
    <footer />
  </div>  
</template>

<script>
//  import links
import logo from '~/components/links/Logo.vue'
import phone from '~/components/links/Phone.vue'
import adress from '~/components/links/Adress.vue'
import socials from '~/components/links/Socials.vue'

//  import sections
import titleSection from '~/components/sections/TitleSection.vue'
import mainSection from '~/components/sections/MainSection.vue'
import gallery from '~/components/Gallery.vue'
import weCreate from '~/components/WeCreate.vue'

// import buttons
import callBabesButton from '@/components/buttons/CallBabesButton.vue'

// import dialogs
import dialogMesurement from '@/components/dialogs/Dialog.vue'

export default {
  components: {
    logo,
    phone,
    adress,
    socials,
    weCreate,
    mainSection,
    titleSection,
    gallery,
    callBabesButton,
    dialogMesurement,
  },
  computed: {
    backgroundColor () {
      return this.$store.getters['system/backgroundColor']
    },
    textColor () {
      return this.$store.getters['system/textColor']
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
