<template>
  <Navbar @scrollFix="scrollFix" />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    scrollFix: function(hashbang) {
      window.location.hash = hashbang;
    }
  },

  mounted() {
      setTimeout(() => this.scrollFix(this.$route.hash), 1);
    },
}
</script>

<style scoped lang="scss">

</style>