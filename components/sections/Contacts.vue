<template>
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
      <div class="license">
        ©&thinsp;2011&hairsp;–&hairsp;2020, ООО «ЛИОН»&thinsp;/&thinsp;Princess.furniture<span class="only-desktop"> —&nbsp;Все права защищены.</span><br><nobr>ИНН&thinsp;2312182279</nobr>&nbsp;|&nbsp;<nobr>ОГРН&thinsp;1112312004716</nobr>
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
