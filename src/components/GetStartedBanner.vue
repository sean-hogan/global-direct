<template>
<header>
  <div class="get-started-hero section">
    <div class="container">
    <div class="row">
        <div class="header-text col-10 col-xs-6 my-5 p-5">        
            <h1>Get Started</h1>
            <p class="lead">Register for online prerequisites with CSU Global Direct</p>
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</header>
</template>

<script>
export default {
    name: 'GetStartedBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.get-started-hero.section {
    background-image: url(https://images.prismic.io/csug/4de4a93c-494f-42f2-97d9-82ccebf69946_header_studentLife_onlineRight.jpg);
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
