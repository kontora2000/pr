<template>
  <span class="pseudolink" @mouseenter="showImg" @mouseleave="hideImg">
    <slot />
    <div v-show="showImage" ref="imgContainer" class="material-image">
      <img ref="image" :src="currentImageSrc">
    </div>
  </span>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Material',
  props: {
    folder: String,
    count: Number,
  },
  data () {
    return {
      duration: 2000,
      currentImage: 0,
      currentImageSrc: '',
      showImage: false,
      timeLine: null,
      timer: 0,
      images: [],
    }
  },
  created () {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.count; i++) {
      this.images.push(`/mat/${this.folder}/${i + 1}.jpg`)
    }
  },
  mounted () {
    this.currentImage = 0
    this.currentImageSrc = this.images[this.currentImage]
    const imageRef = this.$refs.image
    this.timeLine = new gsap.timeline({
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      paused: true,
    })
      .to(imageRef, 0.25, {
        autoAlpha: 0.1,
        onComplete: () => {
          this.currentImage = this.currentImage + 1
          if (this.currentImage === this.count) {
            this.currentImage = 0
          }
          this.currentImageSrc = this.images[this.currentImage]
        },
      })
      .to(imageRef, 0.25, {
        autoAlpha: 1,
        minWidth: window.getComputedStyle(imageRef).width,
      })
  },
  methods: {
    showImg () {
      this.showImage = true
      gsap.to(this.$refs.imgContainer, 0.25, {
        top: '50%',
        onComplete: () => {
          this.timeLine.resume()
        },
      })
    },
    hideImg () {
      this.showImage = false
      this.timeLine.pause()
      this.$refs.imgContainer.style.top = '75%'
      // TweenLite.to(this.divRef, 0.25, {top:'75%', onComplete:()=>{
      // }});
    },
  },
}
</script>

<style scoped>
  .pseudolink {
    cursor: default;
    border-bottom: 1px dotted var(--Black32);
    position: relative;
    z-index: 5;
  }
  .pseudolink:hover {
    color: var(--White100);
    border-bottom-color: var(--White64) !important;
    z-index: 6;
  }

  .material-image {
    /*max-width: 600px;
    max-height: 600px;*/
    position: absolute;
    top:75%;
    left: 50%;
      transform: translate(-50%, -50%);
    background-origin: border-box;
    z-index: -1000;
    transition: width 0.2s;
    padding: 0px;
    margin:0px;
    transition: width 0.5s ease;
  }

  /*.pseudolink:hover .show-onhover {
    display: block;
  }*/
  .show-onhover {
    display: none;
    color: var(--White100);
    min-width: 320px;
    background: var(--Black100);
    padding: 1.75rem .25rem .25rem;
    position: absolute;
    margin-top: -1.8rem;
    margin-left: -.25rem;
    z-index: -1;
  }
</style>