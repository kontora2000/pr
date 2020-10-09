<template>
  <div id="app">
    <div class="address-socials-wrapper">
      <adress v-hide class="address-block">Краснодар,&nbsp;Тургенева,&nbsp;123</adress>
      <socials />
      <phone>+7&thinsp;861&thinsp;215-30-00</phone>
    </div>
    <consult-button />
    <call-babes-button />
    <main-section text-color="#ffffff" background-color="transparent">
      <logo />
      <we-create />
    </main-section>

    <section class="freefreefree-section">
      Бесплатно замерим
      <div class="section-gradient-bottom freefreefree-section-gradient-bottom"></div>
    </section>

    <section class="realised-section">
      <h1>Реализовали</h1>
      <div class="realised-section-link-instagram-wrapper">
        <div class="realised-section-link-instagram-comment">Больше контента у&nbsp;нас в&nbsp;инстаграме</div>
        <a class="button button-big realised-section-link-instagram" href="https://instagram.com/princess_mebel" target="_blank">@princess_mebel</a>
      </div>
      <div class="section-gradient-bottom realised-section-gradient-bottom"></div>
    </section>

    <order-section />

    <section class="contacts-section">
      <h1>Оставайтесь <br><span class="only-desktop">с&nbsp;нами </span>на&nbsp;связи</h1>
      <div class="contacts-section-inner">
        <div class="contacts-section-inner-socials">
          <div class="contacts-section-inner-socials-link-wrapper">
            <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-instagram" href="https://instagram.com/princess_mebel" target="_blank">Ins</a>
          </div>
          <div class="contacts-section-inner-socials-link-wrapper">
            <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-telegram" href="https://t.me/princess_mebel" target="_blank">Tg</a>
          </div>
          <div class="contacts-section-inner-socials-link-wrapper">
            <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-whatsapp" href="https://whatsapp.com/princess_mebel" target="_blank">WApp</a>
          </div>
        </div>

        <div class="contacts-section-inner-address">
          <a class="contacts-section-inner-address-link link-underline-solid" href="#" target="_blank">Краснодар, Тургенева, дом&nbsp;123</a>
        </div>

        <div class="contacts-section-inner-tel-email">
          <div class="contacts-section-inner-tel-email-wrapper">
            <a class="contacts-section-inner-tel-email-link-tel" href="tel:+78612153000" target="_blank"><nobr>+7&thinsp;861&thinsp;215-30-00</nobr></a>
          </div>
          <div class="contacts-section-inner-tel-email-wrapper">
            <a class="contacts-section-inner-tel-email-link-email link-underline-solid" href="mailto:mail@princess.furniture" target="_blank">mail@princess.furniture</a>
          </div>
        </div>
      </div>
      <div class="copyrights-cont">
        <div class="license">©&thinsp;2011&hairsp;–&hairsp;2020, ООО «ЛИОН»&thinsp;/&thinsp;Princess.furniture<span class="only-desktop"> —&nbsp;Все права защищены.</span><br><nobr>ИНН&thinsp;2312182279</nobr>&nbsp;|&nbsp;<nobr>ОГРН&thinsp;1112312004716</nobr></div>
        <div class="by-kontora-wrapper">Сделала <a class="link-underline-solid" href="https://kontora.cc">Контора</a></div>
      </div>
      <div class="section-gradient-bottom contacts-section-gradient-bottom"></div>
    </section>

    <!-- <title-section /> -->
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
import orderSection from '~/components/sections/OrderSection.vue'
import weCreate from '~/components/WeCreate.vue'

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
    titleSection,
    gallery,
    callBabesButton,
    consultButton,
    dialogMesurement,
    orderSection,
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

<style scoped>
  .freefreefree-section {
    background: var(--Pink100);
  }
  .freefreefree-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 244, 247, 0) 0%, var(--White100) 100%);
  }


  .realised-section {
    background: var(--White100);
  }
  .realised-section>h1,
  .realised-section-link-instagram-comment {
    color: var(--Gray100);
  }
  .realised-section-link-instagram-wrapper {
    text-align: center;
  }
  .realised-section-link-instagram-comment {
    font-size: .9rem;
    letter-spacing: .06em;
    line-height: 1.6rem;
    margin-bottom: 2.4rem;
    text-transform: uppercase;
  }
  .realised-section-link-instagram {
    background: linear-gradient(180deg, #CAD4DE 0%, #A1B2C5 100%);
    color: var(--White100);
  }
  .realised-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E4D8D4 100%);
  }

  .contacts-section {
    background: #98CEFF;
  }
  .contacts-section>h1 {
    color: var(--White100);
    text-align: center;
  }
  .contacts-section-inner {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-family: var(--font-serif);
    font-size: 3.6rem;
    margin: 16rem 2rem;
    position: relative;
    z-index: 1;
  }
  .contacts-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 152, 195, 0) 0%, #FF98C3 100%);
  }
</style>