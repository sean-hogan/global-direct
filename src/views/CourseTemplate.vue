<template>

  <div class="course container px-5 py-5">

    <div class="row g-5">

        <div class="col-sm-8">
            <article>
                <header class="mb-3">
                    <h3 class="display-4">{{course.courseTitle}}</h3>
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">Course ID: <strong>{{course.courseNumber}}</strong></li>
                        <li class="list-inline-item">Subjects: <span v-for="tag in course.courseSubjects" :key="tag.index" class="badge bg-primary text-wrap p-2 m-2 ">
                          {{ tag }}
                          </span></li>

                    </ul>
                    <div v-if="course.recommendedPrerequisites">Recommended Prerequisites: {{course.recommendedPrerequisites}}</div>

                </header>

                <p class="lead">{{course.cardText}}</p>
                <p>{{course.courseDescription}}</p>
            </article>

            <h2 class="my-3">Key Takeaways</h2>
            <div v-html="course.courseObjectives"></div>
            

            <h2>What You'll Get</h2>
             <ul class="list-unstyled list-inline pb-5">
                        <li v-if="course.hasLectures" class="list-inline-item me-3"><i class="bi bi-heart-fill me-1" />Lecture Materials</li>
                        <li v-if="course.hasLabs" class="list-inline-item"><i class="bi bi-arrow-down-right-circle me-1" />Labs</li>

                    </ul>

                    <hr />
                    <h5 class="my-3">Call to Social</h5>
                    <ul class="list-unstyled list-inline pb-5">
                        <li class="list-inline-item"><i class="bi bi-facebook me-1 h4" /></li>
                        <li class="list-inline-item"><i class="bi bi-instagram me-1 h4" /></li>
                        <li class="list-inline-item"><i class="bi bi-linkedin me-1 h4" /></li>

                    </ul>

                    


        </div><!--end col-->

         <div class="col-sm-4">
             <div class="card mb-4" style="width: 18rem;">
                <img :src="course.cardImageUrl" class="card-img-top" alt="">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li><i class="bi bi-arrow-right me-1 h4" />Level <span class="ms-5">{{course.courseLevel}}</span></li>
                        <li><i class="bi bi-arrow-right me-1 h4" />Credits <span class="ms-5">{{course.creditHours}}</span></li>
                        <li><i class="bi bi-arrow-right me-1 h4" />Tuition <span class="ms-5">{{course.coursePrice}}</span></li>
                        
                    </ul>

                </div>
                </div><!--end card-->

                <p>Classes are offered starting</p>
                <h5>{{dayjs(enrollmentDate).format('MMMM D, YYYY')}}</h5>

                <a href="/home" class="btn btn-primary my-5">Enroll Now</a>

                <p class="text-muted">Enroll by {{dayjs(enrollmentDate).subtract(7, 'day').format('MMMM D, YYYY')}} to reserve your spot
                <br /><a href="/get-started">Here is a link</a></p>

                <p v-if="course.includesBook">This course includes the book</p>
                <p v-else>This course does not include the book</p>
             </div><!--end col-->


    </div><!--End row-->


  </div><!--End Container-->

<div class="section bg-grey py-5">
  <div class="how-this-works container">

    <div class="row">
        

<h3 class="mb-4 text-center">How This Class Functions</h3>

<div class="col-sm-6">
    Duis nisi mi, ullamcorper quis nunc nec, blandit facilisis odio. Cras metus mauris, scelerisque vitae auctor quis, tristique ac orci. Aenean accumsan nibh ac arcu pellentesque rutrum. Nunc maximus libero et ultricies blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In commodo ligula urna, sed aliquam massa sodales a. Nulla eleifend sollicitudin interdum. Nam vel auctor purus, maximus vehicula nibh. Etiam porta vestibulum nulla, non venenatis dui venenatis eu. Sed semper metus sit amet sem imperdiet condimentum. Sed non egestas augue. Etiam vitae erat tempus, viverra lacus at, dapibus nunc. Mauris sit amet nibh in mi feugiat tincidunt. Sed varius pellentesque tellus a luctus.
</div>
<div class="col-sm-6">
    Duis nisi mi, ullamcorper quis nunc nec, blandit facilisis odio. Cras metus mauris, scelerisque vitae auctor quis, tristique ac orci. Aenean accumsan nibh ac arcu pellentesque rutrum. Nunc maximus libero et ultricies blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In commodo ligula urna, sed aliquam massa sodales a. Nulla eleifend sollicitudin interdum. Nam vel auctor purus, maximus vehicula nibh. Etiam porta vestibulum nulla, non venenatis dui venenatis eu. Sed semper metus sit amet sem imperdiet condimentum. Sed non egestas augue. Etiam vitae erat tempus, viverra lacus at, dapibus nunc. Mauris sit amet nibh in mi feugiat tincidunt. Sed varius pellentesque tellus a luctus.
</div>
    </div><!--End row-->

  </div><!--End Container-->
</div><!--end bg sections-->

<!--------------related courses------>
<div class="related-courses section bg-white">
    <div class="container px-4 py-5">
        <div class="row text-center">

<h4 class="display-2 mb-5">Related Courses</h4>
        </div><!--End Row-->

        <div class="row card-wrapper row-cols-1 row-cols-4 g-4">
            <!--course card-->
                <div v-for="course in relatedCourses" class="col" :key="course.courseNumber">
                  <div class="course card h-100">
                    <img :src="course.cardImageUrl" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{{course.courseTitle}}</h5>

                      <div class="d-flex flex-row">
                      <span v-for="tag in course.courseSubjects" :key="tag.index" class="badge bg-grey text-dark text-wrap p-2 m-1 ">
                          {{ tag }}
                          </span>
                          </div>
                      <p class="card-text">{{course.cardText}}</p>

                      <div class="mt-auto me-auto">

                        <h5>${{course.coursePrice}}</h5>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'CourseTemplate', params: { id: course.courseNumber }}">More Info</router-link>
                      </div>
                  
                    </div>
                  </div>
                </div><!--end course card-->
            
        </div><!--end row-->

    </div><!--end container-->
    </div><!--end related courses section-->
<AdvisorCallToAction />


  <Footer />
</template>


<script>
// @ is an alias to /src
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'
import {fb, db} from '../firebase';
import dayjs from 'dayjs'

export default {
  name: 'CourseTemplate',
  components: {
    AdvisorCallToAction,
    Footer
      },
  data(){
    return{
      course:{},
      relatedCourses:[],
      startDates:[],
      enrollmentDate:null,
      dayjs,
    }
  },
   created(){
     //get this course data
      db.collection("courses").where("courseNumber", "==", this.$route.params.id)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        this.course = doc.data();
        });
      });
      //get enrollment dates
      db.collection("startDates").get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              doc = new Date(doc.data().date.seconds*1000);
              this.startDates.push(doc);
                this.startDates.sort((a,b)=>a.getTime()-b.getTime());

          });
      });
      

     
    },
     updated(){
      this.$nextTick(function () {
        //related course function
        if (this.relatedCourses == "") {
          db.collection("courses").where("courseSubjects", "array-contains-any", this.course.courseSubjects)
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              if (doc.data().courseTitle !== this.course.courseTitle) {
              this.relatedCourses.push(doc.data());
              }
            });
          });
        }
        
        //iterate through sorted start dates and store the closest one after now
      this.startDates.forEach((date) => {
        if(dayjs(date).isAfter(dayjs()) && !this.enrollmentDate) {
          this.enrollmentDate = date;
        }
      });

      })
      
     
    },
  
     


}
</script>


    


