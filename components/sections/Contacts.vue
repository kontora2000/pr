<template>
  <section class="contacts-section">
    <h1 class="section-header contacts-section-header">
      Оставайтесь <br><span class="only-desktop">с&nbsp;нами </span>на&nbsp;связи
    </h1>
    <div class="contacts-section-inner">
      <div class="contacts-section-inner-socials">
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-instagram" href="https://instagram.com/princess_mebel" target="_blank">
            <svg class="icon-svg icon-instagram-svg">
              <use xlink:href="~/static/sprite.svg#icon-instagram" />
            </svg>
          </a>
        </div>
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-telegram" href="https://t.me/princess_mebel" target="_blank">
            <svg class="icon-svg icon-telegram-svg">
              <use xlink:href="~/static/sprite.svg#icon-telegram" />
            </svg>
          </a>
        </div>
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-whatsapp" href="https://whatsapp.com/princess_mebel" target="_blank">
            <svg class="icon-svg icon-whatsapp-svg">
              <use xlink:href="~/static/sprite.svg#icon-whatsapp" />
            </svg>
          </a>
        </div>
      </div>

      <div class="contacts-section-inner-address">
        <a class="contacts-section-inner-address-link link-underline-solid" href="#" target="_blank">Краснодар, улица Тургенева, дом&nbsp;123</a>
        <div class="working-hours">
          По будням — с 10 до 18<sup>00</sup>
        </div>
      </div>

      <div class="contacts-section-inner-tel-email">
        <div class="contacts-section-inner-tel-email-wrapper">
          <a class="contacts-section-inner-tel-email-link-tel" href="tel:+78612153000" target="_blank"><nobr>+7&thinsp;861&thinsp;215-30-00</nobr></a>
        </div>
        <div class="contacts-section-inner-tel-email-wrapper">
          <a class="contacts-section-inner-tel-email-link-email link-underline-solid" href="mailto:princess_mebel@mail.ru" target="_blank">princess_mebel@mail.ru</a>
        </div>
      </div>
    </div>
    <div class="copyrights-cont">
      <div class="license">
        ©&thinsp;2011&hairsp;–&hairsp;2020, ООО «ЛИОН»&thinsp;/&thinsp;Студия&nbsp;мебели&nbsp;«<a class="link-underline-solid" href="/">Princess</a>»<span class="only-desktop"> —&nbsp;Все права защищены.</span><br><nobr>ИНН&thinsp;2312182279</nobr>&nbsp;|&nbsp;<nobr>ОГРН&thinsp;1112312004716</nobr>
      </div>
      <div class="by-kontora-wrapper">
        <a class="by-kontora-link" href="https://kontora.cc">
          <svg class="kontora-logo-svg">
            <use xlink:href="~/static/sprite.svg#kontora-logo" />
          </svg>
        </a>
      </div>
    </div>
    <div class="section-gradient-bottom contacts-section-gradient-bottom" />
  </section>
</template>

<script>
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'ContactsSection',
  mixins: [sectionMixin],
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
    grid-template-columns: 25.6rem calc(100% - 47rem) 21.4rem;
    font-family: var(--font-serif);
    font-size: 2rem;
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
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .contacts-section-inner-address .working-hours {
    margin-top: 1.2rem;
  }

  .contacts-section-inner-address .working-hours>sup {
    font-size: 1.2rem;
    margin-left: 1px;
  }

  .contacts-section-inner-tel-email-wrapper:not(:first-child) {
    margin-top: 1.2rem;
  }

  .copyrights-cont {
    color: var(--White64);
    text-align: center;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .copyrights-cont a {
    color: var(--White64);
    border-bottom-color: var(--White36);
  }
  .copyrights-cont a:hover {
    color: var(--White84);
    border-bottom-color: var(--White84);
  }

  .kontora-logo-svg {
    fill: var(--White64);
    transition: transform .125s ease-in-out, fill .175s ease-in-out;
    will-change: transform, fill;
  }
  .by-kontora-link:hover .kontora-logo-svg {
    fill: var(--White84);
    transform: scale(1.25) rotate(-16deg);
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
      /*margin: 5.6rem auto 16rem;*/
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

    .working-hours {
      margin-top: 2.4rem;
    }

    .working-hours sup {
      font-size: 8px;
    }

    .contacts-section-inner-tel-email {
      text-align: center;
    }

    .contacts-section-inner-tel-email-wrapper {
      display: inline-block;
      margin: 0 .4rem;
    }

    .contacts-section-inner .link-underline-solid {
      border-bottom-color: var(--Black36);
    }

    .copyrights-cont {
      width: 100%;
    }
  }
</style>
