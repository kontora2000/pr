<template>
  <section class="realised-section">
    <h1>Реализовали</h1>
    <div class="realised-gallery-grid gallery-grid">
      <picture class="gallery-photo-wrapper">
        <img class="gallery-photo" src="" />
      </picture>
    </div>
    <div class="realised-section-link-instagram-wrapper">
      <div class="realised-section-link-instagram-comment">
        Больше контента у&nbsp;нас в&nbsp;инстаграме
      </div>
      <a class="button button-big realised-section-link-instagram" href="https://instagram.com/princess_mebel" target="_blank">@princess_mebel</a>
    </div>
    <div class="section-gradient-bottom realised-section-gradient-bottom" />
  </section>
</template>

<style scoped>
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
</style>
