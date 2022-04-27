<template>
    <CalendarBanner />
  <main id="main-content" class="calendar">
    <CalendarEmbed />
  </main>
  <aside>
    <AdvisorCallToAction />
  </aside>
</template>


<script>
// @ is an alias to /src
import CalendarBanner from '@/components/CalendarBanner.vue'
import CalendarEmbed from '@/components/CalendarEmbed.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  name: 'Calendar',
  components: {
    CalendarBanner,
    CalendarEmbed,
    AdvisorCallToAction,
      },
    mounted() {
     document.title = 'CSU Global Online Prerequisite Class Schedule | Classes Star Every 4 Weeks';
     
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'CSU Global Direct calendar of online prerequisite classes');

     //animate on scroll
    AOS.init()
    },
}
</script>


