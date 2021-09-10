<template>

  <div class="course section px-5 py-5">
    <div class="container">

    <div class="row g-5">

        <div class="col-sm-8 ps-sm-5">
                <header class="mb-3">
                    <p class="h5 mb-0">{{course.courseNumber}}</p>
                    <h2 class="display-4">{{course.courseTitle}}</h2>
                    <p><strong>Course Level: </strong>{{course.courseLevel}}</p>
                    <!-- <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">Subjects: <span v-for="tag in course.courseSubjects" :key="tag.index" class="badge bg-primary text-wrap p-2 m-2 ">
                          {{ tag }}
                          </span></li>

                    </ul> -->

                </header>
                

                <!-- <p class="lead">{{course.cardText}}</p> -->
                <p class="course-description">{{course.courseDescription}}</p>
                <p v-if="course.optionalNotes">{{course.optionalNotes}}</p>


            <div v-if="course.recommendedPrerequisites">
              <h3 class="mt-5">Recommended Prerequisites</h3>
              <p>{{course.recommendedPrerequisites}}</p>
            </div>


            <h3 class="mt-5">Key Takeaways</h3>
            <p v-html="course.courseObjectives"></p>
            
            

            <h3 class="mt-5">What You'll Get</h3>
             <ul class="list-unstyled list-inline pb-5 course-features">

                        <li v-if="course.hasLectures"><i class="bi bi-person-circle" />Lecture Materials</li>
                        <li v-if="course.hasLabs"><i class="bi bi-clipboard-data" />Labs</li>

                    </ul>

                    <!-- <hr />
                    <h5 class="my-3">Call to Social</h5>
                    <ul class="list-unstyled list-inline pb-5">
                        <li class="list-inline-item"><i class="bi bi-facebook me-1 h4" /></li>
                        <li class="list-inline-item"><i class="bi bi-instagram me-1 h4" /></li>
                        <li class="list-inline-item"><i class="bi bi-linkedin me-1 h4" /></li>

                    </ul> -->

                    


        </div><!--end col-->

         <div class="col-sm-4">
             <div class="card mb-4">
                <img :src="course.cardImageUrl" class="card-img-top" alt="">
                <div class="card-body">
                    <ul class="list-unstyled course-details">
                        <li><i class="bi bi-clock" />Course Length <span class="float-end">8 Weeks</span></li>
                        <hr />
                        <li><i class="bi bi-bank" />Credits <span class="float-end">{{course.creditHours}}</span></li>
                        <hr />
                        <li><i class="bi bi-credit-card" />Tuition <span class="float-end">${{course.coursePrice}}</span></li>
                        <hr />
                        <li><i class="bi bi-calendar-check" />Starts <span class="float-end text-primary">{{dayjs(enrollmentDate).format('MMMM D, YYYY')}}</span></li>
                        <hr />

                      
                    </ul>
                    <div class="text-center">

                    <a href="/home" class="btn btn-primary my-3 px-5 py-2">Enroll Now</a>
                    </div>


                </div>
                </div><!--end card-->

                

                <p class="text-muted">Enroll by {{dayjs(enrollmentDate).subtract(3, 'day').format('MMMM D, YYYY')}} to reserve your spot
                <br /><a href="/get-started">View The Term Schedule</a></p>

                <p v-if="course.includesBook">This course includes the book</p>
                <p v-else>This course does not include the book</p>
                
             </div><!--end col-->


    </div><!--End row-->


    </div><!--end contain-->
  </div><!--End section-->

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
<div class="related-courses section">
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


<style scoped lang="scss">
@media (min-width: 600px) {
  .course.section {
    background-image: url("../assets/red_circles3.jpg");
    background-repeat: repeat-y;
  }
  .related-courses.section {
    background-image: url("../assets/red_circles3.jpg");
    background-repeat: repeat-y;

  }
}

.course.section p {
  font-size:1.1rem;
}
.course.section h3:after {
    content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 3px;
    background-color: #ddd;
}

.course-details, .course-features {
  font-size:1.3rem;
}
.course-details li {
  line-height:2rem;
  padding:0px 1rem;;
}
.course-details li .float-end {
  font-weight:800;
}
.course-details .bi, .course-features .bi {
  margin-right:1rem;
}
.course-features li {
  margin-top:1rem;
}

</style>

    


