<template>
<header>

  <div class="confirmation-hero section">
    <div class="container">
    <div class="row">
        <div class="header-text col-10 col-xs-6 my-5 p-5">        
            <h1>We'll be in touch</h1>
            <!-- <p class="lead">Lorem Ipsum here is a little bit of text</p> -->
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
  </header>
</template>

<script>
export default {
    name: 'RFIConfirmationBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.confirmation-hero.section {
    background-image: url(https://images.prismic.io/csug/86044f3a-5631-417b-8261-1ce5c1743964_Direct-Confirmation-Header-1600x600-A.jpg?auto=compress,format);
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

</style>
