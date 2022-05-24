<template>
<div class="features section">
    <div class="container px-5 py-5">
        <div class="text-center header" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
        <h2 class="my-5">Accredited, Affordable, 100% Online</h2>
        <p>CSU Global is committed to student success and helping modern learners achieve their academic and professional goals through high-quality, career-relevant, low-cost education. Whether transferring from another institution, earning a bachelor's degree or master's degree, or taking individual courses with us, CSU Global offers affordable tuition, a flexible and convenient learning model, and is backed by regional accreditation through the HLC.</p>
        </div>
    <div class="row g-5 p-5">
        <div class="feature col" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>PUBLIC, NOT-FOR-PROFIT UNIVERSITY</h3>
                    <p>CSU Global has the best interests of our students in mind. As a public, not-for-profit state institution (and a part of the distinguished Colorado State University System), education is our first priority, and our primary focus is on support. CSU Global offers bachelors, graduate, and certificate programs, as well as non-degree offerings, all designed to help students move forward.</p>
                        <!-- <ul class="">
                        <li><a href="/">What makes a dynamic online education?</a></li>
                        <li><a href="/">What should I know about learning online?</a></li>
                        <li><a href="/">How to be a successful online student?</a></li>
                        <li><a href="/">GI Bill approved schools for military students active duty, veterans, and their families</a></li>
                        </ul> -->
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>FLEXIBLE AND CONVENIENT</h3>
                    <p>The CSU Global model inherently has flexibility and convenience for students, allowing them to take classes and earn a degree at their own pace, on their own terms. We understand that not every student can put his or her life on hold when making the decision to go back to college. That's why, at CSU Global, our classes are 100% online, without fixed schedules.</p>
                        <!-- <ul>
                        <li><a href="/">Customized and personalized learning paths</a></li>
                        <li><a href="/">Free and low-cost non-credit options based on your specific career needs and personal interests through Global Learn</a></li>
                        </ul> -->
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>AFFORDABLE TUITION</h3>
                    <p>At CSU Global, we pride ourselves on making education affordable and accessible for people from all walks of life. Our tuition rates for our degree and non-degree programs are lower than many comparable online Universities, and we also have no out-of-state tuition fees or additional costs, and our tuition rates have remained the same for the past ten years. </p>
                        <!-- <ul>
                        <li><a href="/">How we work to ensure value and return on your educational investment</a></li>
                        <li><a href="/">Sharing what we learn in online faculty and course development best practices</a></li>
                        </ul> -->
                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'CardFeatures',
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

.feature .card li a {
    text-decoration: none;
    color:#9e1831;
}

.feature .card li a:hover {
    color:#333;
}


</style>
