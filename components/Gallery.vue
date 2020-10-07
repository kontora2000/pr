/* eslint-disable no-plusplus */
<template>
  <section class="category-block" style="min-height:auto" @keydown.esc="closeProjectGallery">
    <div id="our-kitchens" class="subcategory-content">
      <slot name="header" />
      <div id="gallery" class="projects-gallery">
        <div v-for="(project,index) in projects" :key="index" class="project-link-block">
          <a href="#" class="project-link" @click.prevent="openProjectGallery(index)">
            <img class="project-thumb" :src="project.images.standard_resolution.url">
          </a>
        </div>
      </div>
      <div ref="galleryWindow" class="project-window" :style="{overflowY: overflow}" @click.passive="closeProjectGallery">
        <div class="project-photos-block">
          <img
            v-for="(img,index) in currentProject.carousel_media"
            :key="index"
            class="project-photo"
            :src="img.images.standard_resolution.url"
          >
        </div>
        <div class="close-project" @click.passive="closeProjectGallery">
          <div class="close-project-icon-cross">
            <div class="close-project-icon-cross-line first-line" />
            <div class="close-project-icon-cross-line second-line" />
          </div>
        </div>
      </div>
      <div ref="galleryOverlay" class="overlay" @click.passive="closeProjectGallery" />
    </div>
  </section>
</template>
<style>
  .overlay {
    will-change: opacity;
  }

  .project-window {
    will-change: opacity;
  }

</style>

<script>
import gsap from 'gsap'
import $ from 'jquery'
import sectionMixin from '../mixins/sectionMixin'

const token = '7088217297.5f5af50.3bf1fa14be6141bb9500d14f3fb12661'
// const userid = '5f5af50ee6024912935b38b34df5f861';
// const num_photos = 10;

export default {
  name: 'Gallery',
  mixins: [sectionMixin],
  props: {
    hashtag: String,
  },
  data () {
    return {
      currentProject: 0,
      showGallery: false,
      overflow: '',
      projects: [],
      files: [],
    }
  },
  mounted () {
    this.updateData()
    this.timeline = gsap.timeline()
  },
  methods: {
    openProjectGallery (index) {
      if (this.showGallery === true) { return }
      document.body.style.overflowY = 'hidden'
      this.currentProject = this.projects[index]
      const { galleryWindow, galleryOverlay, } = this.$refs
      galleryWindow.style.display = 'block'
      this.timeline
        .to(galleryOverlay, 0.3, { autoAlpha: 1, })
        .to(galleryWindow, 0.3, { autoAlpha: 1, delay: 0.1, })
      this.overflow = 'scroll' 
      this.showGallery = true
    },
    closeProjectGallery () {
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
          }, 
        })
    },
    updateData () {
      $.ajax({
        method: 'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        data: {
          access_token: token,
        },
        dataType: 'jsonp',
        success: (response) => {
          this.projects = response.data
          const l = this.projects.length
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < l; i++) {
            if (this.projects[i].carousel_media === undefined) {
              this.projects[i].carousel_media = []
              this.projects[i].carousel_media.push({})
              this.projects[i].carousel_media[0].images = this.projects[
                i
              ].images
            }
          }
        },
        error (error) {
          console.log(error)
        },
      })
    },
  },
}
</script>
