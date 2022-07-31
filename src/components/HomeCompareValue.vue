<template>
<section class="home-compare section" id="compare" aria-labelledby="compare-heading">

<div class="container px-4 py-5" data-aos="fade" data-aos-duration="500" data-aos-once="true">
  <div class="header text-center">
  <h2 id="compare-heading">Compare Value</h2>

  </div>
         <div class="row justify-content-center">
           <div class="col-md-9">

       

<table class="table mt-5">
  <thead>
    <tr class="topless">
      <th scope="col"></th>
      <th scope="col" class="topless border border-success">Traditional Course</th>
      <th scope="col" class="text-success border border-success topless">Global Direct</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Tuition Per Credit Hour</th>
      <td class="border border-success">$694 on average, plus credit card fees</td>
      <td class="border border-success">$350, and no credit card fees</td>
    </tr>
    <tr>
      <th scope="row">Credits</th>
      <td class="border border-success">3-5 credits from your school</td>
      <td class="border border-success">3-4 transferrable credits from Colorado State University Global<sup @click="showModal" aria-hidden="true"><i class="bi bi-info-circle-fill"></i></sup></td>
    </tr>
    <tr>
      <th scope="row">Time Commitment</th>
      <td class="border border-success">16 weeks</td>
      <td class="border border-success">8 weeks</td>
    </tr>
    <tr>
      <th scope="row">Availability</th>
      <td class="border border-success">2-3 starts per year</td>
      <td class="border border-success">Monthly starts</td>
    </tr>
    <tr>
      <th scope="row">Format</th>
      <td class="border border-success">in-person, zoom, or pre-recorded lecture</td>
      <td class="border border-success">fully online interactive experience</td>
    </tr>
    <tr>
      <th scope="row">Lectures/Labs</th>
      <td class="border border-success">Specific time and place</td>
      <td class="border border-success">On-demand, anywhere</td>
    </tr>
    <tr>
      <th scope="row">Exams</th>
      <td class="border border-success">Specific hour</td>
      <td class="border border-success">Flexible window</td>
    </tr>
       
  </tbody>
</table>

      <div class="text-center mt-5">
        <p>Now Enrolling for {{dayjs(enrollmentDate).format('MMMM D, YYYY')}}</p>
        <router-link to="/get-started" class="btn btn-success">Register Now <i class="bi bi-arrow-right ms-2" /></router-link>
    </div>









           </div><!--end table col-->
         </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->

    
<!-- Modal -->
<div class="modal fade" id="transferableCreditModal" tabindex="-1" aria-labelledby="transferableCreditModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content px-4 pb-2">
      <div class="modal-header border-0 pb-1">
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
      </div>
<p class="pt-3">
CSU Global Direct courses are accredited through the <a class="link-success" href="https://www.hlcommission.org/" target="_blank">Higher Learning Commission</a>.</p>

<p class="pt-3">
We recommend that you also check with your selected institution regarding the transfer credit.</p>


    </div>
  </div>
</div><!---end modal-->

</template>
<script>
import dayjs from 'dayjs';
import { Modal } from 'bootstrap';


export default {
  name: 'HomeCompareValue',
  props: {

},
data(){
    return{
      dayjs,
    }
  },
computed: {
    enrollmentDate() {
       //compute the closest start date after now from start dates in store
       return this.$store.state.startDates.find(date => dayjs(date).isAfter(dayjs().add(3, 'day')));      
    },
},
 methods:{
        showModal(){
            this.myModal = new Modal(document.getElementById('transferableCreditModal'), {})
            this.myModal.show()
        },
        closeModal(){
            this.myModal.hide()
        },
    },
      
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
    line-height: 2.5rem;
    border-radius: 20px;
}
table {
    border-block: 1px solid #9e1831;
}

table .bottomless {
    border-bottom:1px solid #fff!important;
}
table .topless {
    border-top:1px solid #fff!important;
    border-bottom-color: #9e1831!important;
}

.border-success {
  padding-left:2rem;
}

.text-center p {
  font-size: 1.25rem;
  font-weight:600;
}

.bi-info-circle-fill {
    cursor:pointer;
}
</style>
