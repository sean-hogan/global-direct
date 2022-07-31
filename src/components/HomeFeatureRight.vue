<template>
<section class="home-feature-right section bg-grey" id="feature-right" aria-labelledby="feature-right-heading">

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row align-items-center justify-content-center g-5 py-5">

      <div class="col-lg-6 d-flex justify-content-center">
        <div class="d-grid gap-2 d-flex"><iframe style="border: 0px; margin: 0px; padding: 0px; backgroundcolor: transparent;" src="https://cdn.yoshki.com/iframe/54732.html" frameborder="0" scrolling="no" width="150" height="166" tabindex="-1"></iframe>
        </div>
      </div>

      <div class="col-10 col-sm-8 col-lg-6 text-center text-lg-start">
       <h2>Direct and Affordable</h2>
        <p>Affordable, reputable, and accredited by the Higher Learning Commission, CSU Global Direct has no application fees or pre-requisites, and you can enroll in as little as 15 minutes, for courses starting every four weeks.</p>
        <p><router-link class="btn btn-outline-secondary" to="/about">Learn more</router-link></p>
      </div>


    </div>
  </div>

   
</section>

</template>

<script>
export default {
  name: 'HomeFeatureRight',
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
  margin-top: 1.5rem;
}
</style>
