<template>
<FAQBanner />
<main id="main-content" class="faq">
  <CategorizedFAQ />
</main>
<aside>
  <AdvisorCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import FAQBanner from '@/components/FAQBanner.vue'
import CategorizedFAQ from '@/components/CategorizedFAQ.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  name: 'FAQ',
  components: {
    FAQBanner,
    CategorizedFAQ,
    AdvisorCallToAction,
      },
      mounted() {
        document.title = 'Frequently Asked Questions | Online Prerequisite Classes';
        //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'Learn more about academic, admissions, and affordable costs for CSU Global Direct online prerequisite courses');

     //animate on scroll
    AOS.init()
      },
}
</script>


