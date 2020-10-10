<template>
  <section class="contacts-section">
    <h1>Оставайтесь <br><span class="only-desktop">с&nbsp;нами </span>на&nbsp;связи</h1>
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
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-telegram" href="https://t.me/princess_mebel" target="_blank">
            <svg class="icon-svg icon-telegram-svg">
              <use xlink:href="~/static/sprite.svg#icon-telegram"></use>
            </svg>
          </a>
        </div>
        <div class="contacts-section-inner-socials-link-wrapper">
          <a class="contacts-section-inner-socials-link contacts-section-inner-socials-link-whatsapp" href="https://whatsapp.com/princess_mebel" target="_blank">
            <svg class="icon-svg icon-whatsapp-svg">
              <use xlink:href="~/static/sprite.svg#icon-whatsapp"></use>
            </svg>
          </a>
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
      <div class="license">
        ©&thinsp;2011&hairsp;–&hairsp;2020, ООО «ЛИОН»&thinsp;/&thinsp;<a class="link-underline-solid" href="/">Princess.furniture</a><span class="only-desktop"> —&nbsp;Все права защищены.</span><br><nobr>ИНН&thinsp;2312182279</nobr>&nbsp;|&nbsp;<nobr>ОГРН&thinsp;1112312004716</nobr>
      </div>
      <div class="by-kontora-wrapper">
        Сделала <a class="link-underline-solid" href="https://kontora.cc">Контора</a>
      </div>
    </div>
    <div class="section-gradient-bottom contacts-section-gradient-bottom" />
  </section>
</template>

<style scoped>
  .contacts-section {
    background: #98CEFF;
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
    grid-template-columns: 1fr 2fr 1fr;
    grid-column-gap: 8rem;
    font-family: var(--font-serif);
    font-size: 3.6rem;
    margin: 16rem auto;
    max-width: 1248px;
    position: relative;
    z-index: 1;
  }

  .contacts-section-inner-socials {
    display: flex;
    justify-content: space-between;
  }

  .contacts-section-inner-socials-link {
    display: inline-block;
  }
</style>
