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
      <th scope="col" class="topless">Traditional Course</th>
      <th scope="col" class="text-success border border-success">Global Direct</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Cost Per Credit Hour</th>
      <td>$694 on average</td>
      <td class="border border-success">$350 on average*</td>
    </tr>
    <tr>
      <th scope="row">Credits</th>
      <td>3-5 credits from your school</td>
      <td class="border border-success">3-4 transferrable credits from Colorado State University Global*</td>
    </tr>
    <tr>
      <th scope="row">Time Commitment</th>
      <td>16 weeks</td>
      <td class="border border-success">8 weeks</td>
    </tr>
    <tr>
      <th scope="row">Availability</th>
      <td>2-3 starts per year</td>
      <td class="border border-success">Monthly starts</td>
    </tr>
    <tr>
      <th scope="row">Format</th>
      <td>in-person, zoom, or pre-recorded lecture</td>
      <td class="border border-success">fully online interactive experience</td>
    </tr>
    <tr>
      <th scope="row">Lectures/Labs</th>
      <td>Specific time and place</td>
      <td class="border border-success">On-demand, anywhere</td>
    </tr>
    <tr>
      <th scope="row">Exams</th>
      <td>Specific hour</td>
      <td class="border border-success">Flexible window</td>
    </tr>
        <tr class="bottomless">
      <td></td>
      <td></td>
      <td class="border border-success rounded-3"><router-link to="/courses" class="btn btn-success my-3">Register Now <i class="bi bi-arrow-right ms-2" /></router-link></td>
    </tr>
  </tbody>
</table>









           </div><!--end table col-->
         </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->

</template>

<script>
export default {
  name: 'HomeCompareValue',
  props: {

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

</style>
