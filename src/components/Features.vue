<template>
<section class="features section" aria-labelledby="global-direct-features">


<div class="bg-light py-5">

    <div class="container">



    <div class="row text-center mb-4 justify-content-sm-center gx-4">
        <div data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">

         <h3 class="mb-4 text-uppercase bar-centered" >Are you looking to complete college courses to fulfill prerequisites or to get a head start on your degree? 
             <br />We offer a suite of college courses that:</h3>
           

                <div class="list-unstyled mb-3 row">

                <div class="col-sm-4"><i class="bi bi-card-checklist h2"></i><p class="mt-3">Can be taken individually on our flexible schedule</p></div>

                <div class="col-sm-4"><i class="bi bi-clipboard-check h2"></i><p class="mt-3">Have no complicated admissions process</p></div>

                <div class="col-sm-4"><i class="bi bi-currency-dollar h2"></i><p class="mt-3">Cost a fraction of a traditional college program</p></div>

             </div><!--end mini row-->
         <hr class="mb-5" />
        </div>
         
        <div class="col-sm-5 text-start" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <h3 class="text-uppercase bar-left">The Global Advantage</h3>

        <p>Students have the ability to take individual or multiple courses as needed in a 100% online learning environment to satisfy:</p>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item me-3"><i class="bi bi-lightbulb"></i> Science</li>
                <li class="list-inline-item me-3"><i class="bi bi-life-preserver"></i> Health</li>
                <li class="list-inline-item me-3"><i class="bi bi-people"></i> Business</li>
                <li class="list-inline-item me-3"><i class="bi bi-check-circle"></i> And Other Credits</li>
            </ul>
            <p>Affordable, reputable, and accredited by the Higher Learning Commission, CSU Global Direct has no application fees or pre-requisites, and you can enroll in as little as 15 minutes, for courses starting every four weeks.</p>

        </div><!--end col-->
        <div class="col-sm-5 text-start" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" data-aos-delay="100">
            <h3 class="text-uppercase bar-left">Student Support</h3>
        <p>As part of Colorado State University Global, Direct students complete their courses online, and on their own schedules, while having the same access to student support services that degree-seeking students receive, including:</p>
        <ul class="list-unstyled ps-3">
          <li><i class="bi bi-check pe-1"></i>24/7 IT Support</li>
          <li><i class="bi bi-check pe-1"></i>Tutoring</li>
          <li><i class="bi bi-check pe-1"></i>Writing Center Services</li>
          <li><i class="bi bi-check pe-1"></i>Career Support Services</li>
        </ul>
            <!-- <p>All at no additional cost.</p> -->
            </div><!--end col-->



            </div><!--end row-->
        </div><!--end container-->
    </div><!---end bglight-->
</section>
</template>

<script>
export default {
    name: 'Features',
    props: {

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
    margin-bottom:1rem;
}


h3 {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 700;
}

.bar-centered:after {

    content: "";
    display: block;
    margin: 20px auto;
    position: relative;
    width: 100px;
    height: 5px;
    background-color: #18c9b9;
}

.bar-left:after {
        content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #18c9b9;
}

</style>
