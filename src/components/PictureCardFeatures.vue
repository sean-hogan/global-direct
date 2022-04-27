<template>
<section class="features section bg-grey" aria-labelledby="card-features-label">
    <div class="container px-5 py-5">
    <div class="row g-5 p-5">
        <span class="visually-hidden" id="card-features-label">More Information on Global Direct</span>

        <div class="feature col-lg-4" data-aos="fade" data-aos-duration="1000" data-aos-once="true">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/0e57930e-69ed-4ebe-9ce3-0c4af66de93e_wb3_home_computer.jpg?auto=compress,format&rect=0,0,314,200&w=314&h=200" alt="" />
                    <h3>WHAT ARE CLASSES WITH GLOBAL DIRECT LIKE?</h3>
                    <p>CSU Global Direct offers science, math, business, and other classes on an individual basis, taught in a 100% online, asynchronous environment. You’ll have on-demand access to course materials, interactive lectures, videos, and learning exercises through the CSU Global Direct Student Portal, as well as the ability to connect with your peers and instructors through message boards and email.</p>
                    <!-- <a href="">Learn More</a> -->
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col-lg-4" data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/fa5b306a-2829-4923-9e2e-2fc7233b8be7_wb3_home_laptop.jpg?auto=compress,format&rect=0,0,314,200&w=314&h=200" alt="" />
                    <h3>HOW DO I REGISTER?</h3>
                    <p>Registration to CSU Global Direct is simple and quick! Because there are no admissions requirements or fees, you can complete the process in as little as 15 minutes. To register, follow these easy steps: visit the self-serve enrollment portal, select your courses, and submit your payment. <router-link to="/get-started#register">Click here to register for courses</router-link>.</p>
                    <!-- <a href="">Learn More</a> -->

                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col-lg-4" data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/f3921ccb-e298-4bc6-ab2e-1eb649dd068e_picture-feature-thumb.jpg?auto=compress,format" alt="" />

                    <h3>WILL MY CREDITS TRANSFER?</h3>
                    <p>All CSU Global Direct courses are accredited by the Higher Learning Commission and should be accepted by major learning institutions nationwide. We encourage prospective students to confirm with their institution that the courses they intend to take will transfer. All course credits are transferable to CSU Global undergraduate degree programs.</p>
                    <!-- <a href="">Learn More</a> -->

                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->
    </div><!--end container-->
</section><!--end section-->
</template>

<script>
export default {
    name: 'PictureCardFeatures',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.feature .card {
    line-height:1.7rem;
    transition: .3s box-shadow;
    box-shadow: 0 4px 8px rgba(0,0,0,.06);
}

.feature .card:hover {
    box-shadow: 2px 5px 30px #999;
}

.feature .card h3 {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 700;
}

.feature .card h3:after {
    content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #18c9b9;
}

.feature .card a {
    text-decoration: none;
    color:#9e1831;
}

.feature .card a:hover {
    color:#333;
}


</style>
