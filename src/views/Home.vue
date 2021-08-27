<template>
  <div class="home">
  <HomeHero />
  <Features />
  <Catalog />
  <FAQ />
  <Testimonials />
  <SchoolFeature />
  <PictureCardFeatures />
  <AdvisorCallToAction />
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'
import Features from '@/components/Features.vue'
import Catalog from '@/components/Catalog.vue'
import FAQ from '@/components/FAQ.vue'
import Testimonials from '@/components/Testimonials.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import PictureCardFeatures from '@/components/PictureCardFeatures.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    Features,
    Catalog,
    FAQ,
    Testimonials,
    SchoolFeature,
    PictureCardFeatures,
    AdvisorCallToAction,
    Footer
  }
}
</script>
