export default {
  computed: {
    colorClass () {
      return this.$store.getters['system/colorClass']
    },
  },
}
