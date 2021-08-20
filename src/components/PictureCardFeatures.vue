<template>
<div class="features section bg-grey">
    <div class="container px-5 py-5">
    <div class="row g-5 p-5">
        <div class="feature col-sm-4">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/0e57930e-69ed-4ebe-9ce3-0c4af66de93e_wb3_home_computer.jpg?auto=compress,format&rect=0,0,314,200&w=314&h=200" />
                    <h3>HOW DOES ONLINE LEARNING WORK?</h3>
                    <p>In the CSU Global online classroom, students access course materials, interactive lectures, videos, and learning exercises through their Student Portal. They connect with peers and instructors through message boards and email, and access student success resources such as online tutoring, library, technical support, career center, and disability services.</p>
                    <a href="">Learn More</a>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col-sm-4">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/fa5b306a-2829-4923-9e2e-2fc7233b8be7_wb3_home_laptop.jpg?auto=compress,format&rect=0,0,314,200&w=314&h=200" />
                    <h3>EXPERIENCE IT FOR YOURSELF</h3>
                    <p>We invite you to check out our course demo at the link below where you will be able to see the interactive environment for yourself. We have also posted some sample coursework to see the types of assignments you will be doing. Check out our <a href="https://csuglobal.edu/resources/online-education/sample-schedule">sample schedule</a> to see the typical week of a CSU Global. </p>
                    <a href="">Learn More</a>

                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col-sm-4">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <img class="img-fluid mb-3" src="https://images.prismic.io/csug/4b7b17a2-6436-4737-88ea-1ee0028590f1_wb3_home_mom.jpg?auto=compress,format&rect=0,0,314,200&w=314&h=200" />

                    <h3>WHAT IT TAKE TO BE A SUCCESSFUL ONLINE STUDENT</h3>
                    <p>Deciding to pursue an online degree may mean changing the way you think about your education. In order to succeed in the online environment, students need to utilize technology and support services, connect with your instructor and peers, set aside time to accomplish your goals, and have reasonable expectations.</p>
                    <a href="">Learn More</a>

                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
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

.feature .card li a {
    text-decoration: none;
    color:#9e1831;
}

.feature .card li a:hover {
    color:#333;
}


</style>
