<template>
  <div class="home-hero section">
    <div class="container">
    <div class="row">
        <div class="col text-white my-5 p-5">        
            <h1 class="mb-3"><strong>Transform learning.</strong></h1>
            <p class="lead">Lorem Ipsum here is a little bit of text</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <router-link type="button" class="btn btn-primary btn-lg px-4 me-md-2" to="/#catalog">Explore</router-link>
          <router-link type="button" class="btn btn-outline-primary btn-lg px-4" to="/get-started">Register</router-link>
        </div>
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</template>

<script>
export default {
  name: 'HomeHero',
  props: {
    
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-hero.section {
    background-image: url(https://images.prismic.io/csug/5aab757b-b459-487f-89d8-06c1f274010d_header_homepage_1500x338.jpg?auto=compress,format);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.btn-outline-primary:hover {
    color:#eee;
}
 
      

</style>
