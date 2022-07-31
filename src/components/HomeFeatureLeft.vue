<template>
<section class="home-feature-left section" id="feature-left" aria-labelledby="feature-left-heading">

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center justify-content-center justify-content-lg-start g-5 py-5">

      <div class="col-lg-6 d-flex justify-content-center">
        <div class="d-grid gap-2 d-md-flex justify-content-center"><img src="https://info.csuglobal.edu/l/109362/2022-07-06/bzny6r/109362/1657129955PYGByL4Y/US0014_ONL_ColoradoStateUniv_GlobalCampus_UGrad_BOP_BACH_Bachelor_2022.svg" class="w-100" alt="">
        </div>
      </div>

      <div class="col-10 col-sm-8 col-lg-6 text-center text-lg-start">
       <h2>Top Ranked and Flexible</h2>
        <p>As part of Colorado State University Global, Direct students complete their courses online, and on their own schedules, while having the same access to student support services that degree-seeking students receive</p>
        <p><router-link class="btn btn-outline-secondary" to="/about">Learn more</router-link></p>
      </div>


    </div>
  </div>

   
</section>

</template>

<script>
export default {
  name: 'HomeFeatureLeft',
  props: {

      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin-bottom: 1.5rem;
}
.btn {
  margin-top: 1.5rem;;
}
</style>
