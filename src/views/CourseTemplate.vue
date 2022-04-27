<template>
<CourseInfo :key="this.key" />
<aside>
<CoursePageFAQ />
<AdvisorCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import CourseInfo from '@/components/CourseInfo.vue'
import CoursePageFAQ from '@/components/CoursePageFAQ.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'CourseTemplate',
  components: {
    CourseInfo,
    CoursePageFAQ,
    AdvisorCallToAction,
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
    //aos haq
    window.addEventListener("scroll", AOS.refresh);
 
</script>