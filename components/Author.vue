<template>
  <a :href="author.url">
    Имя {{ author.name }} {{ author.pos }}
  </a>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
