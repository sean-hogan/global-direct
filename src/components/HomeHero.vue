<template>
<header>
  <div class="home-hero section">
    <div class="container">
    <div class="row">
        <div class="col text-white my-5 p-5">        
            <h1 class="mb-3" data-aos="fade" data-aos-duration="1000" data-aos-once="true">Global Education.
              <br/>Hometown Price.
              <br />Direct to You.
            </h1>
            <p class="lead" data-aos="fade" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">Complete your prerequisites 100% online</p>
            <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-5"> -->
          <router-link class="btn btn-success" to="/courses" data-aos="fade" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true">Explore Courses <i class="bi bi-arrow-right ms-2" /></router-link>
          <!-- <router-link class="btn btn-primary btn-lg px-4" to="/get-started" data-aos="fade" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">REGISTER <span class="visually-hidden"> with a quick form</span></router-link> -->
        <!-- </div> -->
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</header>
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
    background-image: url(https://images.prismic.io/csug/86ca9b70-4473-485a-9c41-fdd15b0433f1_direct-header-1-gradient.jpg?auto=compress,format);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.home-hero h1 {
  font-size:38px;
  font-weight:700;
}

// .btn, .btn:focus, .btn:active {
//   width: 180px;
//   text-align: center;
//   color: #fff;
//   font-size: 18px;
//   font-weight: 700;
//   letter-spacing: 2px;
//   text-decoration: none;
//   padding: 10px 0;
//   margin-right: 15px;
//   background-repeat: no-repeat;
//   background-position: 90%;
//   background-color: #18c9b9;
//   border-radius: 5px;
// }

// .btn-primary:hover {
//   border-color:#fff;
// }

</style>
