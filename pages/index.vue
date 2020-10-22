<template>
  <div id="app">
    <div class="address-socials-wrapper" :class="colorClass">
      <adress v-hide class="address-block">Краснодар,&nbsp;Тургенева,&nbsp;123</adress>
      <socials />
      <phone>+7&thinsp;861&thinsp;215-30-00</phone>
    </div>
    <consult-button />
    <call-babes-button />
    <main-section color-class="colors-section-main">
      <logo />
      <we-create />
    </main-section>

    <free-section id="free-section" color-class="colors-section-freefreefree">
      <marque-background>
        <nobr>
          <span class="marquee-word marquee-word-zamerim"></span>
          <span class="marquee-word marquee-word-sproektiruem"></span>
          <span class="marquee-word marquee-word-dostavim"></span>
          <span class="marquee-word marquee-word-soberem"></span>
        </nobr>
      </marque-background>
      <!--<arc />-->
    </free-section>

    <realised-section color-class="colors-section-realised" />

    <order-section id="order-section" color-class="colors-section-order" />

    <contacts-section color-class="colors-section-contacts" />

    <!-- <title-section /> -->
    <dialog-mesurement />
  </div>
</template>

<script>
//  import links
import logo from '~/components/links/Logo.vue'
import phone from '~/components/links/Phone.vue'
import adress from '~/components/links/Adress.vue'
import socials from '~/components/links/Socials.vue'

//  import sections
import titleSection from '~/components/sections/Title.vue'
import mainSection from '~/components/sections/Main.vue'
import freeSection from '~/components/sections/Free.vue'
import realisedSection from '~/components/sections/Realised.vue'
import contactsSection from '~/components/sections/Contacts.vue'
import orderSection from '~/components/sections/Order.vue'

// import section parts
import weCreate from '~/components/WeCreate.vue'
import marqueBackground from '~/components/MarqueeBackground.vue'
import arc from '~/components/Arc.vue'

// import buttons
import callBabesButton from '@/components/buttons/CallBabesButton.vue'
import consultButton from '@/components/buttons/ConsultButton.vue'

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
    orderSection,
    realisedSection,
    freeSection,
    contactsSection,
    titleSection,
    callBabesButton,
    consultButton,
    dialogMesurement,
    marqueBackground,
    arc,
  },
  computed: {
    backgroundColor () {
      return this.$store.getters['system/backgroundColor']
    },
    textColor () {
      return this.$store.getters['system/textColor']
    },
    colorClass () {
      return this.$store.getters['system/colorClass']
    },
  },
}
</script>

<style scoped>
  body, #app {
    /*overflow-x:hidden !important;*/
  }

  @media (max-width: 460px) {

  }
</style>
