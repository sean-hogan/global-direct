<template>
  <div class="about">
<Banner />
<SchoolFeature />
<Features />
<Staff />
<Footer />


  </div>
</template>


<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import Features from '@/components/Features.vue'
import Staff from '@/components/Staff.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'About',
  components: {
    Banner,
    SchoolFeature,
    Features,
    Staff,
    Footer
      }
}
</script>


