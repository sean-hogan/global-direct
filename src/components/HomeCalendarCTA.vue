<template>
<section class="home-calendar-cta section" id="calendar-cta" aria-labelledby="calendar-cta-heading">

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center py-5">
        <div class="red-border p-5 d-flex align-items-center">
            <div class="me-auto">
                <p class="lead">Now Enrolling for {{dayjs(enrollmentDate).format('MMMM D, YYYY')}}</p>
            </div>
            <div>
                <router-link class="btn btn-success" to="/get-started">Reserve My Seat <i class="bi bi-arrow-right ms-2" /></router-link>
            </div>

        </div>



    </div>
  </div>

   
</section>

</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'HomeCalendarCTA',
  props: {

},
data(){
    return{
      dayjs,
      prerequisites:[],
      nonCatalogPrerequisites:[],
    }
  },
computed: {
    enrollmentDate() {
       //compute the closest start date after now from start dates in store
       return this.$store.state.startDates.find(date => dayjs(date).isAfter(dayjs().add(3, 'day')));      
    },
},
      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.red-border {
    border: 1px solid #9e1831;
    border-radius: 40px;
}

.lead {
    font-weight:650;
    margin-bottom:0px;
}
</style>
