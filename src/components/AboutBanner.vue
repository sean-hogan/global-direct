<template>
<header>
  <div class="about-hero section">
    <div class="container">
    <div class="row">
      
        <div class="header-text col-sm-6 my-5 p-5">        
            <h1>About Us</h1>
            <p class="lead">Learn more about CSU Global </p>
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</header>
</template>

<script>
export default {
    name: 'AboutBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.about-hero.section {
    background-image: url(https://images.prismic.io/csug/6e114559-ab7e-42e6-b4b4-73451b21350c_direct-header-about-2.jpg?auto=compress,format);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.header-text {
    color: #1c2333;
    text-transform: uppercase;
    background-color: hsla(0,0%,100%,.7);
}

.header-text h1 {
    font-size: 4rem;
}

</style>
