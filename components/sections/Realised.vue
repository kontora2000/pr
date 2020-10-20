<template>
  <section class="realised-section">
    <div class="section-grid realised-section-grid">
      <div class="section-grid-header-sticky-cont-wrapper">
        <div class="section-grid-header-sticky-cont realised-section-grid-header-sticky-cont">
          <h1 class="section-header realised-section-header">Реализовали</h1>
        </div>
      </div>
      <div class="realised-gallery-grid gallery-grid">
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/1.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/2.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/3.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/4.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/5.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/6.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/7.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/8.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/9.jpg" />
        </picture>
        <picture class="gallery-photo-wrapper">
          <img class="gallery-photo" src="~/static/projects/10.jpg" />
        </picture>
      </div>
    </div>
    <div class="realised-section-link-instagram-wrapper">
      <div class="realised-section-link-instagram-comment">
        Больше контента у&nbsp;нас в&nbsp;инстаграме
      </div>
      <a class="button button-big realised-section-link-instagram" href="https://instagram.com/princess_mebel" target="_blank"><span class="realised-section-link-instagram-icon-wrapper"><svg class="icon-svg icon-instagram-svg"><use xlink:href="~/static/sprite.svg#icon-instagram-thin"></use></svg></span>@princess_mebel</a>
    </div>
    <div class="section-gradient-bottom realised-section-gradient-bottom" />
  </section>
</template>

<script>
import sectionMixin from '../../mixins/sectionMixin'

export default {
  name: 'RealisedSection',
  mixins: [sectionMixin],
}
</script>

<style scoped>
  .realised-section {
    background: var(--White100);
    padding-top: 0;
  }

  .realised-section-header,
  .realised-section-link-instagram-comment {
    color: var(--Gray100);
  }

  .realised-section-grid-header-sticky-cont {
    height: 62.1rem;
    margin-top: -2.2rem;
  }

  .realised-section-header {
    width: 62.1rem;
  }

  .realised-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((100% - 32.4rem) / 39));
    grid-column-gap: .8rem;
    grid-row-gap: 4.8rem;
    margin: 0 0 6.4rem;
  }

  .gallery-photo-wrapper {
    grid-column: span 13;
    width: 100%;
  }

  .gallery-photo {
    height: auto;
    width: inherit;
  }

  .realised-section-link-instagram-wrapper {
    position: relative;
    text-align: center;
    z-index: 1;
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
    padding: 1.4rem 1.9rem;
    will-change: transform;
  }

  .realised-section-link-instagram-icon-wrapper {
    display: inline-block;
    width: 3.2rem;
    height: 3.2rem;
    vertical-align: middle;
    margin-right: .8rem;
  }

  .realised-section-link-instagram-icon-wrapper .icon-instagram-svg>use{
    fill: var(--White100);
  }

  .realised-section-gradient-bottom {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E4D8D4 100%);
  }

  @media (min-width: 1460px) {
    .realised-section-grid-header-sticky-cont {
      width: 79.6rem;
    }

    .realised-section-header {
      width: 79.6rem;
    }
  }

  @media (max-width: 460px) {
    .realised-section>h1 {
      margin-left: .8rem;
      margin-right: .8rem;
      text-align: left;
    }

    .realised-gallery-grid {
      grid-template-columns: 1fr 1fr;
      margin: 4rem .4rem 6.4rem;
    }

    .gallery-photo-wrapper {
      grid-column: span 1;
    }
  }
</style>
