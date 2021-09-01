<template>
 <div class="fullscreen-bg">
        <video loop muted autoplay class="fullscreen-bg_video">
            <source src="https://csuglobal.edu/campus-tour/assets/images/30-SEC-LOOP.mp4" type="video/mp4">
        </video>
</div>
<div class="header text-white text-center mt-4">
    <h1 class="display-1">Experience the Global Difference</h1>
    <p class="h3">Born from tradition, evolved for modern learners</p>
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
    bottom: 100px;
    left: 0;
    overflow: hidden;
    z-index: -100;
    background-color: #1c2333;
    position: absolute;
}

.header {
    height: 60vh;
}

.fullscreen-bg_video {
    opacity : .2;
}
</style>
