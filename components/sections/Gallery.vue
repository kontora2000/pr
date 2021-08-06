<template>
  <div class="realised-gallery-grid gallery-grid">
    <picture v-for="(image, index) in gallery" :key="index" class="gallery-photo-wrapper">
      <img class="gallery-photo" :src="image.src" @click="$emit('openlightbox', image)">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      gallery: [
        {
          src: '/projects/1.jpg',
          a: [
            { name: 'Ольга Корчагина', pos: 'Визуализатор', url: 'https://instagram.com/olga.kor.7796', }
          ],
        },
        {
          src: '/projects/2.jpg',
          a: [
            { name: 'Ольга Корчагина', pos: 'Визуализатор', url: 'https://instagram.com/olga.kor.7796', }
          ],
        },
        {
          src: '/projects/3.jpg',
          a: [
            {
              name: 'Ольга Корчагина',
              pos: 'Визуализатор',
              url: 'https://instagram.com/olga.kor.7796',
            }
          ],
        },
        {
          src: '/projects/4.jpg',
          a: [
            {
              name: 'Ольга Корчагина',
              pos: 'Визуализатор',
              url: 'https://instagram.com/olga.kor.7796',
            }
          ],
        },
        {
          src: '/projects/13.jpg',
          a: [{
            name: 'CHEDES Interior',
            pos: 'Дизайн',
            url: 'https://instagram.com/chedes.interior',
          }],
        },
        {
          src: '/projects/5.jpg',
          a: [
            {
              name: 'Ольга Корчагина',
              pos: 'Визуализатор',
              url: 'https://instagram.com/olga.kor.7796',
            }],
        },
        {
          src: '/projects/7.jpg',
          a: [{
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          }],
        },
        {
          src: '/projects/9.jpg',
          a: [{
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          }],
        },
        {
          src: '/projects/8.jpg',
          a: [{
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          }],
        },
        {
          src: '/projects/15.jpg',
          a: [{
            name: 'CHEDES Interior',
            pos: 'Дизайн',
            url: 'https://instagram.com/chedes.interior',
          }],
        },
        {
          src: '/projects/11.jpg',
          a: [{
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          }],
        },
        {
          src: '/projects/12.jpg',
          a: [{
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          }],
        },
        {
          src: '/projects/6.jpg',
          a: [
            {
              name: 'Ольга Корчагина',
              pos: 'Визуализатор',
              url: 'https://instagram.com/olga.kor.7796',
            }
          ],
        },
        {
          src: '/projects/14.jpg',
          a: {
            name: 'CHEDES Interior',
            pos: 'Дизайн',
            url: 'https://instagram.com/chedes.interior',
          },
        },
        {
          src: '/projects/10.jpg',
          a: {
            name: 'Ольга Корчагина',
            pos: 'Визуализатор',
            url: 'https://instagram.com/olga.kor.7796',
          },
        }
      ], // end gallery
    }
  },
}
</script>

<style scoped>

.realised-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, calc((100% - 32.4rem) / 39));
  grid-column-gap: .8rem;
  grid-row-gap: 4.8rem;
  margin: 0 0 6.4rem;
  z-index: 2;
}

.gallery-photo-wrapper {
  grid-column: span 13;
  width: 100%;
}

.gallery-photo {
  height: auto;
  max-height: 88vh;
  width: inherit;
}

.project-photo {
    display: block;
    margin: 0 auto 1.5rem;
    width: auto;
    height: calc(100vh - 2rem);
    max-height: 88vh;
}

</style>
