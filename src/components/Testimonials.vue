<template>
<section class="testimonials section" aria-labelledby="testimonials-header">
    <div class="container col-xxl-8 px-4 py-5">

    <div class="header text-center" data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-offset="50">
        <h2 id="testimonials-header">Hear From Our Alumni</h2>
    </div>
    


      <div class="row g-3 py-5">
        <div class="feature col" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 h-100">
                <div class="card-body">
                    <div class="testimonial-profile">
                        <img src="https://livetorchlight.com/wp-content/uploads/2015/10/placeholder-circle-300x300.png" class="" />
                        <div class="mt-2">
                            <h3 class="card-title">Shauna Carter</h3>
                            <p class="card-subtitle">Student</p>
                        </div>
                    </div>
                    <p>CSU Global enables you to finish and further you education with a very flexible and workable platform. I am married with a full time job and a toddler at home and I have been able to go back to school so that I can further my professional career and truly achieve my educational dreams.</p>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 h-100">
                <div class="card-body">
                    <div class="testimonial-profile">
                        <img src="https://livetorchlight.com/wp-content/uploads/2015/10/placeholder-circle-300x300.png" class="" />
                        <div class="mt-2">
                            <h3 class="card-title">Jennifer Vogel</h3>
                            <p class="card-subtitle">Student</p>
                        </div>
                    </div>
                    <p>My academic experience at CSU Global has been great. My academic advisor reaches out to me and is very responsive to my questions. The online format works well with my learning style and is easy to navigate.</p>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 h-100">
                <div class="card-body">
                   <div class="testimonial-profile">
                    <img src="https://livetorchlight.com/wp-content/uploads/2015/10/placeholder-circle-300x300.png" class="" />
                    <div class="mt-2">
                    <h3 class="card-title">Melinda Livinston</h3>
                    <p class="card-subtitle">Student</p>
                    </div>
                    </div>
                    <p>CSU Global made it incredibly easy to continue my education while still balancing a career, family, and personal life. The staff is supportive and knowledgeable and the course content is extremely interesting and relevant.</p>
                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->




    </div><!--end container-->
    </section><!--end section-->
</template>

<script>

export default ({
  name: 'Testimonials',
  components: {

  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.testimonial-profile {
    display:flex;
    gap:1rem;
}

h3.card-title {
    font-size:1.2rem;
    font-weight:600;

}
.card-subtitle {
    color: #555;
    margin-bottom:2rem;
}

.card {
    border: 1px solid #9e1831;
    border-radius:20px;
    padding-inline: 1.5rem;
}
img {
    width:4rem;
    height:4rem;

}
</style>
