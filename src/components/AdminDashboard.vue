<template>
   <div class="dash">
       <Hero title="Admin Dashboard"
       body="Here is the admin dash"
       imgsrc="hello.svg" />

   </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'AdminDashboard',
  props: {
  },
  components: {
      'Hero': Hero
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

</style>
