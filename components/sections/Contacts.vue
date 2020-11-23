<template>
  <section class="contacts-section">
    <h1 class="section-header contacts-section-header">Оставайтесь <br><span class="only-desktop">с&nbsp;нами </span>на&nbsp;связи</h1>
    <div class="contacts-section-inner">
      <div class="contacts-section-inner-socials">
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-instagram" href="https://instagram.com/princess_mebel" target="_blank">
            <svg class="icon-svg icon-instagram-svg">
              <use xlink:href="~/static/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-telegram" href="https://t.me/princessfurniture" target="_blank">
            <svg class="icon-svg icon-telegram-svg">
              <use xlink:href="~/static/sprite.svg#icon-telegram"></use>
            </svg>
          </a>
        </div>
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-whatsapp" href="https://wa.me/79676738990" target="_blank">
            <svg class="icon-svg icon-whatsapp-svg">
              <use xlink:href="~/static/sprite.svg#icon-whatsapp"></use>
            </svg>
          </a>
        </div>
      </div>

      <div class="contacts-section-inner-address">
        <a class="contacts-section-inner-address-link link-underline-solid" href="#" target="_blank">Краснодар, улица Тургенева, дом&nbsp;123</a>
        <div class="working-hours">По будням — с 10 до 18<sup>00</sup></div>
      </div>

      <div class="contacts-section-inner-tel-email">
        <div class="contacts-section-inner-tel-email-inner">
          <div class="contacts-section-inner-tel-email-wrapper">
            <a class="contacts-section-inner-tel-email-link-tel" href="tel:+78612153000" target="_blank"><nobr>+7&thinsp;861&thinsp;215-30-00</nobr></a>
          </div>
          <div class="contacts-section-inner-tel-email-wrapper">
            <a class="contacts-section-inner-tel-email-link-email link-underline-solid" href="mailto:princess_mebel@mail.ru" target="_blank">princess_mebel@mail.ru</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <div class="section-gradient-bottom contacts-section-gradient-bottom" />
  </section>
</template>



<script>
import sectionMixin from '../../mixins/sectionMixin'
import Footer from '~/components/sections/Footer.vue'

export default {
  name: 'ContactsSection',
  mixins: [sectionMixin],
  components: {
    Footer,
  }
}
</script>



<style scoped>
.contacts-section {
  background: var(--BlueLight100);
  padding-bottom: 1rem;
  overflow-x: hidden;
  width: 100vw;
}
.contacts-section-gradient-bottom {
  background: linear-gradient(180deg, rgba(255, 152, 195, 0) 0%, #FF98C3 100%);
}

.contacts-section>h1 {
  color: var(--White100);
  text-align: center;
}

.contacts-section-inner {
  display: grid;
  grid-template-columns: 25.6rem calc(100% - 51.2rem) 25.6rem;
  margin: 13.2rem auto 22rem;
  max-width: 1248px;
  position: relative;
  z-index: 1;
}

.contacts-section-inner a.link-underline-solid {
  border-bottom-color: var(--Black36);
}

.contacts-section-inner-socials {
  display: flex;
  justify-content: space-between;
}

.contacts-section-inner-socials-link {
  display: inline-block;
}

.contacts-section-inner-socials-link:hover svg {
  opacity: 1;
  transition: transform .125s ease-in-out, opacity .125s linear;
  will-change: opacity, transform;
}

.contacts-section-inner-socials-link:hover svg {
  opacity: .64;
  transform: scale(1.1);
}

.contacts-section-inner-address {
  text-align: center;
}

.contacts-section-inner-address-link {
  font-family: var(--font-transgender);
  font-size: 2rem;
  letter-spacing: -.01em;
}

.contacts-section-inner-address .working-hours {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: .08em;
  margin-top: 1.2rem;
  text-transform: uppercase;
}

.contacts-section-inner-address .working-hours>sup {
  font-size: .8rem;
  letter-spacing: 0;
}

.contacts-section-inner-tel-email {
  display: inline-flex;
  justify-content: flex-end;
}

.contacts-section-inner-tel-email-wrapper:not(:first-child) {
  margin-top: 1.2rem;
}

.contacts-section-inner-tel-email-link-tel {
  font-family: var(--font-transgender);
  font-size: 2rem;
}

.contacts-section-inner-tel-email-link-email {
  font-family: var(--font-default);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: .04em;
  text-transform: uppercase;
}

@media (min-width: 1460px) {
  .contacts-section {
    padding-bottom: 0.1rem;
    padding-top: 10rem;
  }
}

@media (max-width: 460px) {

  .contacts-section-inner {
    font-size: 1.1rem;
    font-family: var(--font-default);
    font-weight: 500;
    grid-template-columns: auto;
    letter-spacing: .08em;
    margin: 7vh auto 24vh;
    text-transform: uppercase;
  }

  .contacts-section-inner-socials {
    grid-row: 3/4;
    /*margin: 7.2rem auto 0;*/
    margin: 8vh auto 0;
    width: 20rem;
  }

  .contacts-section-inner-socials-link>svg {
    max-width: 4.8rem;
    max-height: 4.8rem;
  }

  .contacts-section-inner-address {
    grid-row: 2/3;
    /*margin-top: 4.4rem;*/
    margin-top: 8vh;
  }

  .contacts-section-inner-address-link {
    font-family: var(--font-default);
    font-size: 1.1rem;
    letter-spacing: .08em;
  }

  .working-hours {
    margin-top: 2.4rem;
  }

  .working-hours sup {
    font-size: 8px;
  }

  .contacts-section-inner-tel-email {
    text-align: center;
    display: inline-flex;
    justify-content: center;
  }

  .contacts-section-inner-tel-email-wrapper {
    display: inline-block;
    margin: 0 .4rem;
  }

  .contacts-section-inner-tel-email-link-tel {
    font-family: var(--font-default);
    font-size: 1.1rem;
  }

  .contacts-section-inner .link-underline-solid {
    border-bottom-color: var(--Black36);
  }
}
</style>
