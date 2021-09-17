<template>
  <div class="get-started-brief section">
    <div class="container">


      <div class="row justify-content-center">
        <div class="col-lg-8">

      <h2 class="mt-5 mb-3">Getting Started is Hard, We Make It Easier</h2>

      <p class="lead">Vivamus at tortor viverra, volutpat erat nec, fermentum tortor. Praesent eu felis quam.</p>
        </div>

      </div><!--End Row-->


      <!--brief row-->
      <div class="getting-started-steps row g-4 py-3 row-cols-1 justify-content-center">

        <div class="col-lg-8 d-flex">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-pencil-square text-primary text-bottom h3" />
          </div>
            <div>
            <p>Register for our Enrollment Portal using the <router-link to="#register">Registration Form</router-link> below.</p>
            
            </div> 
        </div><!--end col-->

        <div class="col-lg-8 d-flex">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-box-arrow-up-right text-primary text-bottom h3" />
          </div>
          <div>
            <p>You'll be taken to our <a href="">Enrollment Portal</a>. A temporary password will be supplied to your email.</p>
          </div>  

        </div><!--end col-->
        <div class="col-lg-8 d-flex">
          <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi bi-calendar2-week text-primary text-bottom h3" />
          </div>
          <div>
            <p>Log in to the Portal to schedule your courses and pay to enroll.</p>
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


</style>
