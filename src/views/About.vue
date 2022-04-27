<template>
<AboutBanner />
<main id="main-content" class="about">
<CardFeatures />
<SchoolFeature />
<RecognitionFeature />
</main>
<aside>
<AdvisorCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import AboutBanner from '@/components/AboutBanner.vue'
import CardFeatures from '@/components/CardFeatures.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import RecognitionFeature from '@/components/RecognitionFeature.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'About',
  components: {
    AboutBanner,
    CardFeatures,
    SchoolFeature,
    RecognitionFeature,
    AdvisorCallToAction,
      },
      mounted() {
        document.title = 'Affordable Online Prerequisite Courses | CSU Global Direct';
        
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'CSU Global is a fully accredited, 100% online University that offers health, science, and other courses to fulfill prerequisite needs.');

     //animate on scroll
    AOS.init()
    
      },
}
</script>


