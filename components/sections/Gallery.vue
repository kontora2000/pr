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
          a: {
            name: 'Автор 3',
            position: 'Поз 3',
            url: 'http://www.asd3.ru',
          },
        }
      ], // end gallery
    }
  },
}
</script>
