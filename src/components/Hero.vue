<template>
  <div class="big-damb-hero section">
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img :src="require('../assets/' + imgsrc)" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">{{ title }}</h1>
        <p class="lead">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a type="button" class="btn btn-primary btn-lg px-4 me-md-2" href="/#catalog">Explore</a>
          <a type="button" class="btn btn-outline-secondary btn-lg px-4" href="/about">About</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    body: String,
    imgsrc: String,
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

 
      

</style>
