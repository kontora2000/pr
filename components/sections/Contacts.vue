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
        <a class="by-kontora-link" href="https://kontora.cc">
          <svg class="kontora-logo-svg">
            <use xlink:href="~/static/sprite.svg#kontora-logo"></use>
          </svg>
        </a>
      </div>
    </div>
    <div class="section-gradient-bottom contacts-section-gradient-bottom" />
  </section>
</template>

<style scoped>
  .contacts-section {
    background: #98CEFF;
    padding-bottom: 1rem;
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
    font-family: var(--font-serif);
    font-size: 3.2rem;
    margin: 10rem auto 20rem;
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

  .copyrights-cont {
    color: var(--White64);
    text-align: center;
    position: absolute;
    bottom: 4rem;
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
</style>
