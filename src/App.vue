<template>
  <Navbar />
  <router-view v-slot="{ Component }">
  <keep-alive include="Home">
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
}
</script>