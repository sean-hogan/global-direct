<template>
  <div class="about">
<VideoBanner />
<CardFeatures />
<SchoolFeature />
<TopTenFeature />
<Features />
<AdvisorCallToAction />
<Footer />


  </div>
</template>


<script>
// @ is an alias to /src
import VideoBanner from '@/components/VideoBanner.vue'
import CardFeatures from '@/components/CardFeatures.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import TopTenFeature from '@/components/TopTenFeature.vue'
import Features from '@/components/Features.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'About',
  components: {
    VideoBanner,
    CardFeatures,
    SchoolFeature,
    TopTenFeature,
    Features,
    AdvisorCallToAction,
    Footer
      }
}
</script>


