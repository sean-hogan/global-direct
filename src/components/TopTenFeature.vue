<template>
<div class="top-ten-feature section">
    <div class="container px-5 py-5">

    <div class="row mx-5">
        <div class="card mx-5 pt-3">
            <div class="card-body">
                <div class="row">

                    <div class="col-sm-5 d-flex justify-content-end">
                        <img class="pt-3 pe-3 h-75" src="../assets/top-10.png" />

                    </div>

                    <div class="col-sm-7 feature-col px-5">
                        <p>U.S. News & World Report Ranks CSU Global Among Top 10 Online Bachelor's Programs for 2021</p>
                        <a class="btn btn-primary px-4 py-2 my-5">LEARN MORE</a>



                    </div>

                </div><!--end card row-->
            </div>
        </div><!--end card -->


    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'TopTenFeature',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.top-ten-feature .card {
    line-height:1.7rem;
    transition: .3s box-shadow;
    box-shadow: 0 4px 8px rgba(0,0,0,.06);
}

.top-ten-feature .card:hover {
    box-shadow: 2px 5px 30px #999;
}

.feature-col {
    border-left: 1px solid #48afea;
    line-height:1.5em;
    font-size: 30px;
}
</style>
