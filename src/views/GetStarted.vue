<template>

<div id="get-started">
<GetStartedBanner />
<GetStartedBrief />
<RegistrationForm />

<AdvisorCallToAction />
</div><!--End --> 

  <Footer />
</template>


<script>
// @ is an alias to /src

import GetStartedBanner from '@/components/GetStartedBanner.vue'
import GetStartedBrief from '@/components/GetStartedBrief.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'GetStarted',
  components: {
    GetStartedBanner,
    GetStartedBrief,
    RegistrationForm,
    AdvisorCallToAction,
    Footer,
      }
}
</script>