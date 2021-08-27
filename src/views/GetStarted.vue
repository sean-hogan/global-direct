<template>

<div id="get-started">

<GetStartedBanner />
<GetStartedBrief />
<GetStartedFeature />
<GetStartedSteps />
</div><!--End Container-->
<AdvisorCallToAction />





  

  <Footer />
</template>


<script>
// @ is an alias to /src

import GetStartedBanner from '@/components/GetStartedBanner.vue'
import GetStartedBrief from '@/components/GetStartedBrief.vue'
import GetStartedFeature from '@/components/GetStartedFeature.vue'
import GetStartedSteps from '@/components/GetStartedSteps.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'GetStarted',
  components: {
    GetStartedBanner,
    GetStartedBrief,
    GetStartedFeature,
    GetStartedSteps,
    AdvisorCallToAction,
    Footer,
      }
}
</script>


