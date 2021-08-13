<template>
  <div class="about">
<VideoBanner />
<SchoolFeature />
<Features />
<Staff />
<Footer />


  </div>
</template>


<script>
// @ is an alias to /src
import VideoBanner from '@/components/VideoBanner.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import Features from '@/components/Features.vue'
import Staff from '@/components/Staff.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'About',
  components: {
    VideoBanner,
    SchoolFeature,
    Features,
    Staff,
    Footer
      }
}
</script>


