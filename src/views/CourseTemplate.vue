<template>
<CourseInfo :key="key" />
<AdvisorCallToAction />
<Footer />
</template>


<script>
// @ is an alias to /src
import CourseInfo from '@/components/CourseInfo.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'CourseTemplate',
  components: {
    CourseInfo,
    AdvisorCallToAction,
    Footer
      },
    data(){
      return{
        key: this.$route.fullPath,
      }
    },
     updated(){
      this.$nextTick(function () {
        this.key = this.$route.fullPath;
      })
      
     
    },

}
 
</script>