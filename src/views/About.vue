<template>
  <div class="about">
<VideoBanner />
<CardFeatures />
<SchoolFeature />
<RecognitionFeature />
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
import RecognitionFeature from '@/components/RecognitionFeature.vue'
import Features from '@/components/Features.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'About',
  components: {
    VideoBanner,
    CardFeatures,
    SchoolFeature,
    RecognitionFeature,
    Features,
    AdvisorCallToAction,
    Footer
      }
}
</script>


