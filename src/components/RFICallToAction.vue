<template>
<section class="advisor-call-to-action section mt-5">
    <div class="container px-4 py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-md-10 floaty-bg p-5">

<h4 class="display-3 mb-4 mt-5">Let's Get Started Together</h4>
<p class="lead mb-5">You don't even have to fill out your registration alone. Our Enrollment Counselors are standing by to help you if you need us.</p>
<div>
    <router-link to="/get-started" class="btn btn-lg btn-light rounded-pill px-5 me-4">Apply Now</router-link>
    <!-- <router-link to="/request-information" class="btn btn-lg btn-light rounded-pill px-5">Learn More</router-link> -->
</div>
</div><!--col-->


        </div><!--End Row-->

    </div><!--end container-->
    </section><!--end section-->
</template>

<script>
export default {
  name: 'RFICallToAction',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advisor-call-to-action {
  color:#111;
}
.floaty-bg{
  background-image: url(https://images.prismic.io/csug/f2f98746-f47b-46a6-b7d7-bed3cd9ef987_Appeals-Center-UI-Header-1600x600px-A2.jpg);
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
}

.section {
  background: linear-gradient(#fff 50%, #eee 50%);
}

.btn-light {
  color:#aa1d40;
  border:1px solid #aa1d40;
}

.btn-light:hover {
  color:#aa1d40;
  background-color: #eee;
}



</style>
