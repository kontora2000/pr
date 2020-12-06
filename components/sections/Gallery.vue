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
            { name: 'Автор 1', pos: 'Поз 2', url: 'http://www.asd.ru', }
          ],
        },
        {
          src: '/projects/2.jpg',
          a: [
            { name: 'Автор 2', pos: 'Поз 2', url: 'http://www.asd.ru', },
            { name: 'Автор 22', pos: 'Поз 22', url: 'http://www.asd22.ru', }
          ],
        },
        {
          src: '/projects/3.jpg',
          a: [
            {
              name: 'Автор 3',
              pos: 'Поз 3',
              url: 'http://www.asd3.ru',
            }
          ],
        },
        {
          src: '/projects/4.jpg',
          a: [
            {
              name: 'Автор 4',
              pos: 'Поз 4',
              url: 'http://www.asd4.ru',
            }
          ],
        },
        {
          src: '/projects/13.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/5.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/7.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/9.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/8.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/15.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/11.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/12.jpg',
          a: [{
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          }],
        },
        {
          src: '/projects/6.jpg',
          a: {
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          },
        },
        {
          src: '/projects/14.jpg',
          a: {
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
          },
        },
        {
          src: '/projects/10.jpg',
          a: {
            name: 'Автор 4',
            pos: 'Поз 4',
            url: 'http://www.asd4.ru',
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
