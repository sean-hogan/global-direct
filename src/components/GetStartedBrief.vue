<template>
  <div class="get-started-brief section">
    <div class="container">


      <div class="row justify-content-center">
        <div class="col-lg-8">

      <h2 class="mt-5 mb-3" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">Getting Started Made Easy</h2>
      <div class="h5 d-flex flex-column flex-md-row justify-content-md-between mb-3 text-muted">
      <span data-aos="fade" data-aos-delay="50" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" class="py-1"><i class="bi bi-clock-history me-2"></i>15 Minutes</span>
      <span data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" class="py-1"><i class="bi bi-cash-stack me-2"></i>No Application Fees</span>
      <span data-aos="fade" data-aos-delay="150" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" class="py-1"><i class="bi bi-eye-slash me-2"></i>No GPA Requirements</span>
      <span data-aos="fade" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" class="py-1"><i class="bi bi-file-earmark-excel me-2"></i>No Lengthy Admissions Process</span>
      </div>

      <!-- <p class="lead">We’ve made it easy for students to register and enroll in online prerequisite classes through CSU Global Direct. In as little as 15 minutes, with no application fees, GPA requirements, or lengthy admissions process to hold you back, you can get started on moving forward today.</p> -->

        </div>

      </div><!--End Row-->


      <!--brief row-->
      <div class="getting-started-steps row g-4 py-3 row-cols-1 justify-content-center">

        <div class="col-lg-8 d-flex" data-aos="fade" data-aos-delay="250" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" data-aos-anchor=".get-started-brief">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-pencil-square text-primary text-bottom h3" />
          </div>
            <div>
            <p>Register for our Enrollment Portal using the Registration Form below.</p>
            </div> 
        </div><!--end col-->

        <div class="col-lg-8 d-flex" data-aos="fade" data-aos-delay="300" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" data-aos-anchor=".get-started-brief">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-box-arrow-up-right text-primary text-bottom h3" />
          </div>
          <div>
            <p>A username and temporary password will be supplied to your personal email.</p>
          </div>  

        </div><!--end col-->
        <div class="col-lg-8 d-flex" data-aos="fade" data-aos-delay="350" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" data-aos-anchor=".get-started-brief">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-calendar2-week text-primary text-bottom h3" />
          </div>
          <div>
            <p>Log in to the Portal with your newly provided credentials to schedule your courses and pay to enroll.</p>
          </div>  
        </div><!--end col-->

        
        </div><!--End brief Row-->
    </div><!--end container-->
  </div><!--end section-->

</template>

<script>
export default {
    name: 'GetStartedBrief',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  color: #9e1831;
  font-weight: 700;
}

h2:before {
    content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: rgba(210,143,63,.6);
}

a {
  color:#9e1831;
}

a:hover {
  color:#333;
}

</style>
