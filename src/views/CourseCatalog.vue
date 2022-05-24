<template>
  <main id="main-content" class="courses">
    <Catalog />
  </main>
  <aside>
    <AdvisorCallToAction />
  </aside>
</template>


<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  name: 'CourseCatalog',
  components: {
    Catalog,
    AdvisorCallToAction,
      },
    mounted() {
     document.title = 'CSU Global Online Courses';
     
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'CSU Global Direct classes');

     //animate on scroll
    AOS.init()
    },
}
</script>


