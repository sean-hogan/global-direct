<template>
<RFIBanner />
<main id="main-content" class="rfi">
  <RFIForm />
</main>
<aside>
  <RFICallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import RFIBanner from '@/components/RFIBanner.vue'
import RFIForm from '@/components/RFIForm.vue'
import RFICallToAction from '@/components/RFICallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  name: 'FAQ',
  components: {
    RFIBanner,
    RFIForm,
    RFICallToAction,
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


