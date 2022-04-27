<template>
<section class="testimonials section bg-grey text-center" aria-labelledby="testimonials-header">
    <div class="container px-4 py-5">

    <div class="header" data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-offset="50">
        <h2 id="testimonials-header">Testimonials</h2>
    </div>
    

            <Carousel :autoplay="5000" :wrap-around="true" data-aos="fade" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" data-aos-offset="50">

            <Slide key="one">
            <div class="carousel__item" >
                <p class="quote">"CSU Global enables you to finish and further you education with a very flexible and workable platform. I am married with a full time job and a toddler at home and I have been able to go back to school so that I can further my professional career and truly achieve my educational dreams."</p>
                <p class="student">Shauna Carter</p>
                <p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="two">
            <div class="carousel__item" >
                <p class="quote">"My academic experience at CSU Global has been great. My academic advisor reaches out to me and is very responsive to my questions. The online format works well with my learning style and is easy to navigate."</p>
                <p class="student">Jennifer Vogel</p>
                <p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="three">
            <div class="carousel__item" >
                <p class="quote">"CSU Global made it incredibly easy to continue my education while still balancing a career, family, and personal life. The staff is supportive and knowledgeable and the course content is extremely interesting and relevant."</p>
                <p class="student">Melinda Livinston</p>
                <p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="four">
            <div class="carousel__item" >
                <p class="quote">"This university does not treat their students as numbers, but as individual people. The entire staff and professors go above and beyond their jobs to make CSU Global students feel like part of a great organization. I know they care about the students and our futures."</p>
                <p class="student">Charles Belote</p>
                <p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="five">
            <div class="carousel__item" >
                <p class="quote">"I chose CSU Global because it seemed like they understood who I was as a student and wanted to see me be successful without jumping through hoops like at traditional schools. The whole process from registration to classes was exactly what a working student needs."</p>
                <p class="student">Wesley Chapel</p>
                <p class="degree">Alumni</p>
            </div>
            </Slide>

            <Slide key="six">
            <div class="carousel__item" >
                <p class="quote">"CSU Global has allowed me the opportunity to expand my knowledge and focus on my future all from the comfort of my home."</p>
                <p class="student">Melissa Shields</p>
                <p class="degree">Student</p>
            </div>
            </Slide>

            <template #addons>
            </template>
        </Carousel>



    </div><!--end container-->
    </section><!--end section-->
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  name: 'Testimonials',
  components: {
    Carousel,
    Slide,
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.carousel {     box-shadow: 2px 5px 15px #ccc;
}
.carousel__slide {
    background-color:#fff;
    padding: 5rem 2rem;    
}

.carousel__item .quote {
    font-size: 24px;
}
.carousel__item .student {
    font-size: 18px;
    color: #18c9b9;
}

</style>
