<template>
<Navbar />

  <div class="open-learning container">
    <div class="banner text-center">
<h1 class="display-3 my-4">Here is a Headline about Enrolling</h1>
<p class="lead">And then maybe a little bit of flavor text to make this page a little spicy</p>
    </div>
      </div><!--End Container -->


<OpenLearningFeature />
<OpenLearningSteps />
<OpenLearningFAQ />
<AdvisorCallToAction />

<Footer />


    

      

    

</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import OpenLearningFeature from '@/components/OpenLearningFeature.vue'
import OpenLearningSteps from '@/components/OpenLearningSteps.vue'
import OpenLearningFAQ from '@/components/OpenLearningFAQ.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'OpenLearning',
  components: {
    Navbar,
    OpenLearningFeature,
    OpenLearningSteps,
    OpenLearningFAQ,
    AdvisorCallToAction,
    Footer
      }
}
</script>


