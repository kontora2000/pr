import axios from 'axios'

export default {
  methods: {
    loadCategory (catname) {
      const loaded = this.$store.loadedCategories
      if (!loaded.includes(catname)) {
        axios.get(`/${catname}`)
          .then((response) => {
            console.log(response)
            this.$store.commit('putCatname', catname)
          })
      }
    },
  },
}
