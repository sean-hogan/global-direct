<template>
<section class="school-feature section" aria-labelledby="school-feature-label">
    <div class="container px-4 py-5">
        <div class="row pt-5 px-5">


    <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="50"> <img  class="w-100" src="../assets/building.jpg" alt="Colorado State University Global building in Aurora"/></div>

      <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="50" data-aos-delay="50">

        <div class="header">
          <h2 class="mb-3" id="school-feature-label"><span class="visually-hidden" >Why </span>Colorado State University Global</h2>
        </div>
        
          <p class="mb-3">As one of the fastest growing online universities in the nation, and the first independent, 100% online state university in the U.S., Colorado State University Global is a leader in online education, and since its inception has been designed to help learners move forward today with the skills they need for tomorrow. </p>
          <p class="mb-3">CSU Global Direct expands upon that mission by giving students an affordable, flexible way to complete individual course requirements to fill gaps in their academic transcripts or work towards completing their degrees sooner.</p>

          <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a type="button" class="btn btn-primary btn-lg px-4 me-md-2" href="/about">Read More</a>
                <a type="button" class="btn btn-outline-secondary btn-lg px-4" href="/about">Play Video <i class="bi-play-circle" /></a>
              </div> -->

      </div>

        </div><!--End Row-->

    </div><!--end container-->
</section><!--end section-->
</template>

<script>
export default {
  name: 'SchoolFeature',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app .section .header h2:after {
  margin: 20px 0px;
}
</style>
