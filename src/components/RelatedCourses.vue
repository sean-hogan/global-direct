<template>
<section class="related-courses section bg-grey" aria-labelledby="related-courses-header">
    <div class="container px-4 py-5">

    <div class="header text-center" data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-offset="50">
        <h2 id="related-courses-header">Related Courses</h2>
    </div>
    <div v-if="relatedCoursesList.length > 4" class="row g-0">

            <Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true" data-aos="fade" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" data-aos-offset="50">
              
            <Slide v-for="relatedCourse in relatedCoursesList" :key="relatedCourse.index">
                <!--course card-->

                  <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: relatedCourse.courseTitle.replace(/\s+/g, '-').toLowerCase() }}">
                  
                  <div class="course card h-100 text-start">
                    <img :src="relatedCourse.cardImageUrl" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">{{relatedCourse.courseTitle}}</h3>

                      <div class="d-flex flex-row">
                      <span v-for="tag in relatedCourse.courseSubjects" :key="tag.index" class="badge bg-grey text-dark text-wrap p-2 me-2">
                          {{ tag }}
                          </span>
                          </div>

                      <div class="mb-4">

                      <p v-if="relatedCourse.hasLabs" class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,498<small> | <span class="visually-hidden">The course is worth </span>{{relatedCourse.creditHours}} Credits</small></p>

                      <p v-else class="mt-2 h5"><span class="visually-hidden">The price is </span>${{relatedCourse.coursePrice}}<small> | <span class="visually-hidden">The course is worth </span>{{relatedCourse.creditHours}} Credits</small></p>
                      </div>

                      <div class="mt-auto d-flex">
                        <span v-if="relatedCourse.hasLabs" class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                  
                    </div>
                  </div>
                  </router-link>
                <!--end course card-->
            </Slide>
            <template #addons>
                <navigation />
            </template>
        </Carousel>



    </div><!--end if row-->

    <div v-else class="row row-cols-sm-4">
      <div v-for="relatedCourse in relatedCoursesList" class="col" :key="relatedCourse.courseNumber">

            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: relatedCourse.courseNumber }}">
            
            <div class="course card h-100 text-start">
              <img :src="relatedCourse.cardImageUrl" class="card-img-top" alt="">
              <div class="card-body d-flex flex-column pb-1">
                <h3 class="card-title">{{relatedCourse.courseTitle}}</h3>

                <div class="d-flex flex-row">
                <span v-for="tag in relatedCourse.courseSubjects" :key="tag.index" class="badge bg-grey text-dark text-wrap p-2 me-2">
                    {{ tag }}
                    </span>
                    </div>

                <div class="mb-4">

                <p v-if="relatedCourse.hasLabs" class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,498<small> | <span class="visually-hidden">The course is worth </span>{{relatedCourse.creditHours}} Credits</small></p>

                <p v-else class="mt-2 h5"><span class="visually-hidden">The price is </span>${{relatedCourse.coursePrice}}<small> | <span class="visually-hidden">The course is worth </span>{{relatedCourse.creditHours}} Credits</small></p>
                </div>

                <div class="mt-auto d-flex">
                  <span v-if="relatedCourse.hasLabs" class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                  
                  <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                </div>
            
              </div>
            </div>
            </router-link>
      </div>

    </div><!--end else row-->
    </div><!--end container-->
    </section><!--end section-->
</template>

<script>

import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  name: 'RelatedCourses',
  props: 
      ['relatedCoursesList']  
  ,
  components: {
    Carousel,
    Slide,
    //Pagination,
    Navigation,
  },
  
  mounted() {
    this.$nextTick(function () {
      document.documentElement.style.setProperty('--carousel-color-primary', '#18c9b9');

    })
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      992: {
        itemsToShow: 2,
      },
      // 1024 and up
      1200: {
        itemsToShow: 3,
      },
    },
  }),


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.carousel {     
    box-shadow: 2px 5px 15px #ccc;
}
.carousel__slide {
    background-color:#fff;
    padding: 5rem 2rem;    
}

.carousel__next {
    background-color: red!important;
}

.card {
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}
.card-body {
  background-color:rgba(0, 0, 0, 0.03);
}

.course.card {
  border:none;
}

.card-body h3 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .5px;
  color: #9e1831;
}
.course .card-body {
  background-color:#fff;
}

.course.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.carousel__prev, .carousel__next {
    background-color: #f13f13!important;
}

</style>
