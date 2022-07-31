<template>
  <HomeHero />
  <SubHero />
  <main id="main-content">
    <HomeCatalog />
    <HomeCompareValue />
    <HomeFeatureLeft />
    <HomeFeatureRight />
  </main>
  <aside>
    <SchoolFeature />
    <Testimonials />
    <HomeFAQ />  
    <!-- <PictureCardFeatures /> -->
    <AdvisorCallToAction />
  </aside>
  <!-- <Features /> -->
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'
import SubHero from '@/components/SubHero.vue'
// import Features from '@/components/Features.vue'
import HomeCatalog from '@/components/HomeCatalog.vue'
import HomeCompareValue from '@/components/HomeCompareValue.vue'
import HomeFeatureLeft from '@/components/HomeFeatureLeft.vue'
import HomeFeatureRight from '@/components/HomeFeatureRight.vue'
import Testimonials from '@/components/Testimonials.vue'
import SchoolFeature from '@/components/SchoolFeature.vue'
import HomeFAQ from '@/components/HomeFAQ.vue'
// import PictureCardFeatures from '@/components/PictureCardFeatures.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Home',
  components: {
    HomeHero,
    SubHero,
    // Features,
    HomeCatalog,
    HomeFAQ,
    HomeCompareValue,
    HomeFeatureLeft,
    HomeFeatureRight,
    Testimonials,
    SchoolFeature,
    // PictureCardFeatures,
    AdvisorCallToAction,
  },
   mounted() {
     document.title = 'Best Online Prerequisite Courses for Pre Health Students | CSU Global Direct';
     
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'CSU Global Direct is the most convenient and affordable way to complete prerequisite classes online. Get ready for medical, dental, nursing, or PA school with us!');

    //animate on scroll
    AOS.init()
   },

}
    //aos haq
    window.addEventListener("scroll", AOS.refresh);


</script>
