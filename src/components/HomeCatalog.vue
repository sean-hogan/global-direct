<template>
<section class="catalog section" id="catalog" aria-labelledby="catalog-label">
    <div class="container py-5">
        <div class="header row text-center justify-content-center mb-3">
                <h2 class="mb-5" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-delay="250" data-aos-offset="50">Courses</h2>


                <div class="lead d-flex flex-column flex-md-row justify-content-md-center" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
                  <p class="lead">Achieve your academic and career goals faster, for less.</p>

                </div>

        </div><!--end .header-->

              <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">

            <Slide key="microbiology">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'microbiology' }}">

                  <div class="course card h-100">
                    <img src="https://images.prismic.io/csug/8db6fcb6-ff10-423d-aa14-a04e70bb5d02_direct-bio204.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Microbiology</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Biology
                          </span>

                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="biochemistry">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'biochemistry' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/9165e72b-1bd8-4c7e-af3d-e2493af04a4b_direct-che351.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Biochemistry</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Biology
                          </span>
                          <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Chemistry
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="organic-chemistry-one">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'organic-chemistry-i' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/623341dc-4ed3-46aa-a14e-804d2451f6f2_direct-che345.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Organic Chemistry I</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Chemistry
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                                               
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                
                <Slide key="general-chemistry-one">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'general-chemistry-i' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/de7f12aa-73a3-45f4-8164-57de173af627_direct-che121.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">General Chemistry I</h3>
                      

                      <div class="d-flex flex-row">
                          <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Chemistry
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,400<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="organic-chemistry-two">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'organic-chemistry-ii' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/ab18028c-dd79-49f6-b97e-040b874b5495_direct-che346.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Organic Chemistry II</h3>
                      

                      <div class="d-flex flex-row">

                          <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Chemistry
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="genetics">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'genetics' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/35e28090-7dec-4f24-9874-c0fe0cdc32ea_direct-bio350.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Genetics</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Health
                          </span>

                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,050<small> | <span class="visually-hidden">The course is worth </span>3 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="college-biology-one">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'college-biology-i' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/45691fbe-39f9-4715-b50b-5e102934cf9c_direct-bio181.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">College Biology I</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Biology
                          </span>

                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="general-chemistry-two">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'general-chemistry-ii' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/03086e2a-2c5c-41da-a9f8-972019b28619_direct-che122.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">General Chemistry II</h3>
                      

                      <div class="d-flex flex-row">

                          <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Chemistry
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,400<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="introduction-to-physics">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'introduction-to-physics' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/2b0fe4bf-0055-4e0f-8349-2a79317594bd_direct-phy101.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Introduction to Physics</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Physics
                          </span>

                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>4 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">
                        <span class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>

                <Slide key="abnormal-psychology">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: 'abnormal-psychology' }}">

                  <div class="course card h-100" key="one">
                    <img src="https://images.prismic.io/csug/e9f1ec2f-b0fb-4607-b1a5-f694e870329c_direct-psy362.jpg?auto=compress,format" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">Abnormal Psychology</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Health
                          </span>
                          <span aria-hidden="true" class="badge text-dark text-wrap p-2 me-2 ">
                          Psychology
                          </span>
                      </div>
                      <div class="mb-4">
                      <p class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,050<small> | <span class="visually-hidden">The course is worth </span>3 Credits</small></p>

                      
                      </div>
                     

                      <div class="mt-auto d-flex">

                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  
                  </div> <!--=end course card-->
                  </router-link>
                </Slide>


            <template #addons>
              <Navigation />
            </template>


        </Carousel>
        <div class="my-5 text-center">

        <router-link class="btn btn-success" to="/courses">View All Courses <i class="bi bi-arrow-right ms-2" /></router-link>
        </div>
              


    </div><!--end container-->
    </section><!--end section-->
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

//:wrap-around="true" :itemsToShow="3"
export default defineComponent({
  name: 'HomeCatalog',
  components: {
    Carousel,
    Navigation,
    Slide,
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

.header h2, .header h2:after {
  margin-bottom:1rem!important;
}
.card {
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  border: 1px solid #9e1831;
}

.card-header {
  border-bottom:none;
}

.card-body {
  background-color: #f1f2f4;
}

.course.card {
  border:none;
}

.course.card h3 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .5px;
  color: #9e1831;
}

.badge {
  background-color: #fff;
  border-left:1px solid #aaa;
  border-bottom:1px solid #aaa;
}


.course.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.carousel {
  text-align:left;
}
.carousel__slide {
  padding-block: 1rem;
}

.carousel__slide--active {
  margin-inline: 1rem;
}

.link-success{
  text-decoration: none;
}

.includes-lab {
  font-size:.9rem;
}

</style>
