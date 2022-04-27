<template>
<GetStartedBanner />
<main id="main-content" class="get-started">
  <GetStartedBrief />
  <RegistrationForm />
</main>
<aside>
  <GetStartedCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src

import GetStartedBanner from '@/components/GetStartedBanner.vue'
import GetStartedBrief from '@/components/GetStartedBrief.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import GetStartedCallToAction from '@/components/GetStartedCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'GetStarted',
  components: {
    GetStartedBanner,
    GetStartedBrief,
    RegistrationForm,
    GetStartedCallToAction,
    },
    mounted() {
     document.title = 'Register Now for Online Prerequisite Classes with CSU Global Direct';
     
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'CSU Global is a fully accredited, 100% online University that offers health, science, and other courses to fulfill prerequisite needs.');

     //animate on scroll
    AOS.init()
    },

}
</script>