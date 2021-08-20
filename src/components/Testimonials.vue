<template>
<div class="testimonials section bg-grey">
    <div class="container px-4 py-5">

            <Carousel :autoplay="5000" :wrap-around="true">

            <Slide key="one">
            <div class="carousel__item" >
                <p class="quote">"My academic experience at CSU Global has been great My academic advisor reaches out to me and is very responsive to my questions. The online format works well with my learning style and is easy to navigate."</p><p class="student">Jennifer Vogel</p><p class="degree">B.S. in Accounting Student</p>
            </div>
            </Slide>

            <Slide key="two">
            <div class="carousel__item" >
                <p class="quote">"The pride I have in achieving a Masters Degree from CSU Global provided me with the confidence to attain the career plan I had envisitwood."</p><p class="student">Scott Ryder</p><p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="three">
            <div class="carousel__item" >
                <p class="quote">"CSU Global enables you to finish and further your education with a very flexible and workable platform. I am married with a full time job and a toddler at home and I have been able to go back to school so that I can further my professional career and truly achieve my educational dreams."</p><p class="student">Shauna Carter</p><p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="four">
            <div class="carousel__item" >
                <p class="quote">"Completing a college degree has been one of my life goals for a very long time. CSU Global offered a great education with a respected Colorado-based university and an online format that allowed me to continue working a demanding job that required significant travel."</p><p class="student">Maria Clark</p><p class="degree">Student</p>
            </div>
            </Slide>

            <Slide key="five">
            <div class="carousel__item" >
                <p class="quote">"This university does not treat their students as numbers, but as individual people. The entire staff and professors go above and beyond their jobs to make CSU Global students feel like part of a great organization. I know they care about the students and our futures."</p><p class="student">Charles Belote</p><p class="degree">M.S. in Organizational Leadership Student</p>
            </div>
            </Slide>

            <template #addons>
            </template>
        </Carousel>



    </div><!--end container-->
    </div><!--end section-->
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
