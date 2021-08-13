<template>
  <div class="home">
  <Hero 
    title="Transform learning."
    body="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" 
    imgsrc="hello.svg" />
  <CardFeatures />
  <Features />
  <Catalog />
  <Testimonials />
  <SchoolFeature />
  <AdvisorCallToAction />
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Features from '@/components/Features.vue'
import CardFeatures from '@/components/CardFeatures.vue'
import Catalog from '@/components/Catalog.vue'
import Testimonials from '@/components/Testimonials.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    CardFeatures,
    Features,
    Catalog,
    Testimonials,
    SchoolFeature,
    AdvisorCallToAction,
    Footer
  }
}
</script>
