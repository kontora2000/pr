<template>
  <a class="we-create-link" @mouseenter="showImg" @mouseleave="hideImg"><slot /><img v-show="showImage" ref="image" class="we-create-preview-img" :src="currentImageSrc"></a>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'WeCreateItem',
  props: {
    folder: {
      type: String,
      required: true,
      default: 'kitchens',
    },
    count: {
      type: Number,
      default: 3,
    },
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
      this.images.push(`/_img/wecreate/${this.folder}/${i + 1}.jpg`)
    }
  },
  mounted () {
    this.currentImage = 0
    this.currentImageSrc = this.images[this.currentImage]
    this.$refs.image.style.minWidth = this.$el.offsetWidth + 'px'
    this.$refs.image.style.maxWidth = this.$el.offsetWidth + 'px'

    const imageRef = this.$refs.image
    this.timeLine = gsap.timeline({
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
      gsap.to(this.$refs.image, 0.25, {
        top: '-200%',
        onComplete: () => {
          this.timeLine.resume()
        },
      })
    },
    hideImg () {
      this.showImage = false
      this.timeLine.pause()
      this.$refs.image.style.top = '-75%'
      // TweenLite.to(this.divRef, 0.25, {top:'75%', onComplete:()=>{
      // }});
    },
  },
}
</script>

<style>
  .we-create-link {
    cursor: default; /* стереть, при релизе полного сайта */
    display: inline-block;
    font-family: var(--font-transgender);
    font-size: 3.2rem;
    letter-spacing: .08em;
    line-height: 2.4rem;
    margin: 0 .4rem;
    position: relative;
    text-transform: uppercase;
  }
  .we-create-link:not(:last-child):not(:nth-child(3)):not(:nth-child(6))::after {
    content: '✹';
    display: inline-block;
    font-size: 2.8rem;
    margin-left: .8rem;
    vertical-align: top;
  }

  .we-create-preview {
    position: relative;
  }

  .we-create-preview-img {
    border-radius: 50%;
    max-width: 15rem;
    left: -50%;
    top:-75%;
    transform: translateX(50%);
    position: absolute;
  }

  .we-create {
    position: relative;
  }

  @media (min-width: 1460px) {
    .we-create-link {
      font-size: 5.6rem;
      line-height: 4.8rem;
    }
    .we-create-link:not(:last-child):not(:nth-child(3)):not(:nth-child(6))::after {
    font-size: 5rem;
    margin-left: 1.2rem;
    }
  }

  @media (max-width: 460px) {
    .we-create-link {
      display: inline-block;
      font-size: 1.7rem;
      line-height: 1.7rem;
      margin-left: .45rem;
      margin-right: .45rem;
    }
    .we-create-link:not(:last-child):not(:nth-child(3)):not(:nth-child(6))::after {
      font-size: 2rem;
      margin-left: .4rem;
    }
  }
</style>
