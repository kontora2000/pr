 
<template>
  <li class="category-nav-row">
    <a class="category-nav-link" :class="{active:isCurrent}" :href="href" @click.prevent="select">
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: String,
    position: Number,
  },
  data () {
    return {
      isCurrent: false,
    }
  },
  mounted () {
    this.$root.$on('subsection-change', this.changeCurrent)
    if (this.position === 1) {
      this.isCurrent = true
    }
  },
  methods: {
    changeCurrent (current) {
      this.isCurrent = (current === this.position)
    },
    select () {
      const h = window.screen.height * 2
      const off = this.$el.closest('.category-block').offsetTop
      window.scrollTo(0, off + (this.position - 1) * h)
    },
  },
}
</script>
