<template>
<header>

  <div class="calendar-hero section">
    <div class="container">
    <div class="row">
        <div class="header-text col-10 col-xs-6 my-5 p-5">        
            <h1>Direct Course Calendar</h1>
            <p class="lead">Classes Start Every 4 Weeks</p>
        </div>
        
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
  </header>

</template>

<script>
export default {
    name: 'CalendarBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.calendar-hero.section {
    background-image: url(https://images.prismic.io/csug/f3f1b618-f32c-426c-b165-94c05fdf7dbd_direct-Calendar-Header-1600x600.jpg?auto=compress,format);
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
