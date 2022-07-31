<template>
<header>

  <div class="rfi-hero section">
    <div class="container">
    <div class="row">
        <div class="header-text col-10 col-xs-6 my-5 p-5">        
            <h1>We're Here to Help</h1>
            <!-- <p class="lead">Anything CSU Global-related, our enrollment counselors got you covered</p> -->
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</header>
</template>

<script>
export default {
    name: 'RFIBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.rfi-hero.section {
    background-image: url(https://images.prismic.io/csug/97a62da7-3dc6-45d1-aec6-7a89af3d75f3_direct-FAQ-Header-1600x600.jpg?auto=compress,format);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.header-text {
    color: #1c2333;
    background-color: hsla(0,0%,100%,.7);
}

.header-text h1 {
    font-size: 4rem;
}
.lead {
  font-Weight: 600;
  font-Size: 1.5rem;
}
</style>
