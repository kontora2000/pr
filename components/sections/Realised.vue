<template>
  <section class="realised-section">
    <div class="section-grid realised-section-grid">
      <div class="section-grid-header-sticky-cont-wrapper">
        <div class="section-grid-header-sticky-cont realised-section-grid-header-sticky-cont">
          <h1 class="section-header realised-section-header">Реализовали</h1>
        </div>
      </div>
      <gallery @openlightbox="openLightBox" />
    </div>
    <div class="realised-section-link-instagram-wrapper">
      <div class="realised-section-link-instagram-comment">
        <span class="realised-section-link-instagram-comment-star star-plus-svg-wrapper">
          <svg class="star-plus-svg">
            <use xlink:href="~/static/sprite.svg#star-plus" />
          </svg>
        </span>Больше контента<span class="realised-section-link-instagram-comment-star star-x-svg-wrapper">
          <svg class="star-x-svg">
            <use xlink:href="~/static/sprite.svg#star-x" />
          </svg>
        </span><br class="only-desktop">у&nbsp;нас в&nbsp;инстаграме
      </div>
      <a class="button button-big realised-section-link-instagram" href="https://instagram.com/princess_mebel" target="_blank"><span class="realised-section-link-instagram-icon-wrapper"><svg class="icon-svg icon-instagram-svg"><use xlink:href="~/static/sprite.svg#icon-instagram-thin" /></svg></span>@princess_mebel</a>
    </div>
    <div class="section-gradient-bottom realised-section-gradient-bottom" />
    <!-- LIGHTBOX -->
    <div ref="galleryWindow" class="project-window" :style="{overflowY: overflow}" @click.passive="closeLightBox">
      <div class="project-photos-block">
        <img
          :src="currentImageSrc"
          class="project-photo"
        >
      </div>
      <div v-if="currentA.length > 0" class="author-info">
        <div v-for="(author, index) in currentA" :key="index">
          <!-- тут авторы -->
          <Author :author="author" />
        </div>
      </div>
      <div v-else class="author-info">
        <Author :author="currentA" />
      </div>
      <div class="close-project" @click.passive="closeLightBox">
        <div class="close-project-icon-cross">
          <div class="close-project-icon-cross-line first-line" />
          <div class="close-project-icon-cross-line second-line" />
        </div>
      </div>
    </div>
    <div ref="galleryOverlay" class="overlay" @click.passive="closeProjectGallery" />
  </section>
</template>

<script>
import gsap from 'gsap'
import sectionMixin from '../../mixins/sectionMixin'

import Gallery from '@/components/sections/Gallery.vue'
import Author from '@/components/Author.vue'

export default {
  name: 'RealisedSection',
  components: {
    Gallery,
    Author,
  },
  mixins: [sectionMixin],
  data () {
    return {
      timeline: gsap.timeline(),
      currentImageSrc: '/projects/1.jpg',
      currentA: [],
      overflow: '',
      showGallery: false,
    }
  },
  methods: {
    openLightBox (image) {
      if (this.showGallery === true) { return }
      document.querySelector('.logo-wrapper').style.display = 'none'
      document.body.style.overflowY = 'hidden'
      this.currentImageSrc = image.src
      this.currentA = image.a
      const { galleryWindow, galleryOverlay, } = this.$refs
      galleryWindow.style.display = 'block'
      this.timeline
        .to(galleryOverlay, 0.3, { autoAlpha: 1, })
        .to(galleryWindow, 0.3, { autoAlpha: 1, delay: 0.1, })
      this.overflow = 'scroll'
      this.showGallery = true
    },
    closeLightBox () {
      if (this.showGallery === false) { return }
      const { galleryWindow, galleryOverlay, } = this.$refs
      this.showGallery = false

      this.timeline
        .to(galleryWindow, 0.3, { autoAlpha: 0, })
        .to(galleryOverlay, 0.3, {
          autoAlpha: 0,
          onComplete () {
            galleryWindow.style.display = 'none'
            this.overflow = 'hidden'
            document.body.style.overflowY = 'scroll'
            document.querySelector('.logo-wrapper').style.display = ''
          },
        })
    },
  },
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

.realised-section-link-instagram-wrapper {
  padding-top: 8rem;
  position: relative;
  text-align: center;
  z-index: 1;
}

.realised-section-link-instagram-comment {
  font-family: var(--font-serif);
  font-size: 5.6rem;
  font-weight: 300;
  letter-spacing: .12em;
  line-height: 7.2rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
}

.realised-section-link-instagram-comment-star {
  display: inline-block;
  width: 5.2rem;
  height: 5.2rem;
  margin: 0 4rem;
  position: relative;
  top: .8rem;
}
.realised-section-link-instagram-comment-star:nth-child(2) {
  width: 3.8rem;
}
.realised-section-link-instagram-comment-star>svg>use {
  fill: var(--Gray100);
}

.realised-section-link-instagram {
  background: linear-gradient(180deg, #CAD4DE 0%, #A1B2C5 100%);
  border: none;
  color: var(--White100);
  font-size: 3.2rem;
  padding: 1.4rem 1.9rem;
  will-change: transform;
}

.realised-section-link-instagram-icon-wrapper {
  display: inline-block;
  width: 5.6rem;
  height: 5.6rem;
  vertical-align: middle;
  margin-right: 1.2rem;
}

.realised-section-link-instagram-icon-wrapper .icon-instagram-svg>use{
  fill: var(--White100);
}

.realised-section-gradient-bottom {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E4D8D4 100%);
}

.project-window {
  display: none;
  opacity: 0;
  visibility: hidden;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 1003;
}

.close-project {
    cursor: pointer;
    left: 1.6rem;
    position: fixed;
    top: 1.2rem;
}

.close-project-icon-cross {
    height: 4rem;
    width: 4rem;
}

.close-project-icon-cross-line {
    background: var(--White64);
    border-radius: 4px;
    height: 3px;
    margin-bottom: 0;
    position: relative;
    transition: all .15s ease-in-out;
    width: 5.6rem;
}
.close-project-icon-cross:hover .close-project-icon-cross-line {
  background: var(--White100);
}

.close-project-icon-cross-line.first-line {
    transform: rotate(45deg);
    top: 1.8rem;
    left: -.8rem;
}

.close-project-icon-cross-line.second-line {
    transform: rotate(-45deg);
    top: 1.55rem;
    left: -.8rem;
}

.project-photos-block {
    margin: 1.2rem auto;
    width: 100%;
    max-width: 900px;
}

.project-photo {
    display: block;
    margin: 0 auto 1.5rem;
    width: auto;
    height: calc(100vh - 2rem);
    max-height: 88vh;
}

.overlay {
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    background: rgba(0,0,0,.72);
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    min-width: 100vw;
    transition: -webkit-backdrop-filter .25s,
          backdrop-filter .25s;
    z-index: 1002;
    visibility: hidden;
    opacity: 0;
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
  .realised-section {
    overflow-x: hidden;
    width: 100vw;
  }

  .realised-section h1 {
    margin-left: .8rem;
    margin-right: .8rem;
    text-align: left;
    width: 100%;
  }

  .realised-gallery-grid {
    grid-template-columns: 1fr 1fr;
    margin: 4rem .4rem 6.4rem;
  }

  .gallery-photo-wrapper {
    grid-column: span 1;
  }

  .realised-section-link-instagram-wrapper {
    margin: 0 .8rem;
  }

  .realised-section-link-instagram-comment {
    font-size: 2.8rem;
    letter-spacing: .08em;
    line-height: 4rem;
    margin-bottom: 3.2rem;
    text-transform: uppercase;
    }

  .realised-section-link-instagram-comment-star {
    width: 2rem;
    height: 2rem;
    margin: 0 .8rem;
    top: 0rem;
  }

  .realised-section-link-instagram-comment-star:nth-child(2) {
    width: 1.8rem;
  }

  .realised-section-link-instagram {
    font-size: 2.4rem;
  }

  .realised-section-link-instagram-icon-wrapper {
    width: 4.4rem;
    height: 4.4rem;
  }
}



@media (max-width: 380px) {
  .realised-section-link-instagram-comment {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }

  .realised-section-link-instagram-comment-star {
    width: 1.8rem;
    height: 1.8rem;
  }
  .realised-section-link-instagram-comment-star:nth-child(2) {
    width: 1.6rem;
  }

  .realised-section-link-instagram {
    font-size: 2.2rem;
  }
}



@media (max-width: 340px) {
  .realised-section-link-instagram-comment {
    font-size: 2.2rem;
  }

  .realised-section-link-instagram-comment-star {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 .6rem;
  }
  .realised-section-link-instagram-comment-star:nth-child(2) {
    width: 1.4rem;
  }

  .realised-section-link-instagram {
    font-size: 1.8rem;
  }
  .realised-section-link-instagram-icon-wrapper {
    width: 4rem;
    height: 4rem;
    margin-right: .8rem;
  }
}

</style>
