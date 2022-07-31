<template>

<section class="school-feature section" id="feature-left" aria-labelledby="school-feature-heading">

    <div class="container col-xxl-10 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">

      <div class="col-lg-6 d-flex">
        <div class="d-grid d-md-flex justify-content-md-center">
          <img src="../assets/building.jpg" class="w-100" alt="" />
          <div class="white-box"></div>
        </div>
      </div>

      <div class="col-10 col-sm-8 col-lg-6">
       <h2>Why Affordable Education @ Global</h2>
        <p class="lead">As one of the fastest growing online universities in the nation, and the first independent, 100% online state university in the U.S., Colorado State University Global is a leader in online education, and since its inception has been designed to help learners move forward today with the skills they need for tomorrow.</p>
        <p>CSU Global Direct expands upon that mission by giving students an affordable, flexible way to complete individual course requirements to fill gaps in their academic transcripts or work towards completing their degrees sooner.</p>
        <p class="mt-4"><a class="btn btn-outline-secondary" href="https://csuglobal.edu/">Learn more</a></p>
      </div>


    </div>
  </div>

   
</section>

</template>

<script>
export default {
  name: 'AboutSchoolFeature',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app .section .header h2:after {
  margin: 20px 0px;
}
img {
  box-shadow: 0.5rem 0.5rem #ccc, -0.5rem -0.5rem #111;
}
</style>
