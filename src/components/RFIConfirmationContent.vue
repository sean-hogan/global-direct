<template>
<div class="container">
<div class="get-started-steps section px-4 py-5">
      
    <div class="row justify-content-md-center mb-5">
      
      <div class="col-lg-6 text-center">
        <div>
            <i class="bi bi-check-circle display-1 text-success"></i>
        </div>

        <p class="lead mt-4">An enrollment counselor will be in touch right away to answer any questions you may have, and assist you with the enrollment process.</p>


         <router-link to="/courses"><button class="btn btn-outline-primary mt-4">View Courses </button></router-link>
        
      </div><!--End Col-->
    </div><!--End Row-->



</div><!--end section-->
    </div><!--end container-->

</template>

<script>
export default {
    name: 'RFIConfirmationContent',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-outline-primary:hover {
  color:#fff;
}

</style>
