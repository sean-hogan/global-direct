<template>
 <div class="fullscreen-bg">
        <video loop muted autoplay class="fullscreen-bg_video">
            <source src="../assets/30-SEC-LOOP.mp4" type="video/mp4">
        </video>
</div>
<div class="header text-white text-center my-5">
    <h1 class="display-1">Here is a video banner</h1>
</div>

</template>

<script>
export default {
  name: 'VideoBanner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fullscreen-bg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
    background-color: #1c2333;
    position: absolute;
}

.header {
    height: 100vh
}
</style>
