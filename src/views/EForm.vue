<template>

<div id="eform">
    
    <iframe src="https://fbrendertest.csuglobal.edu/#/renderer/NdsAppEnroll" class="w-100" />


</div><!--End Container-->
<AdvisorCallToAction />
<Footer />
</template>


<script>
// @ is an alias to /src

import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'EForm',
  components: {
    AdvisorCallToAction,
    Footer,
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#eform iframe {
  min-height:100vh;
}
</style>


