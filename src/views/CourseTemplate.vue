<template>

  <div v-for="course in courses" :key="course.courseNumber" class="course container">

    <div class="row">
        <div class="col-sm-2 text-end">
            <i class="bi bi-keyboard h1" />
        </div><!--end col-->

        <div class="col-sm-6">
            <article>
                <header>
                    <h3 class="display-4">{{course.courseTitle}}</h3>
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">Course ID: <strong>{{course.courseNumber}}</strong></li>
                        <li class="list-inline-item">Subjects: <strong>Cybersecurity, Typing</strong></li>

                    </ul>

                </header>

                <p>Keep practicing each lesson until you get all five stars. It really doesn't take much to learn, a few minutes a day for one to two weeks and you will be a pro! Here you'll find an expanded set of free online typing lessons and typing exercises for beginning typists, and frustrated hunt-and-peckers who want to move from four-finger typing to full-blown touch typing.</p>
                <p>Here is a second shorter paragraph pehaps about SWBAT or learning objectives or something</p>
            </article>

            <h5 class="my-3">What You'll Get</h5>
             <ul class="list-unstyled list-inline pb-5">
                        <li class="list-inline-item me-3"><i class="bi bi-heart-fill me-1" />Lecture Materials</li>
                        <li class="list-inline-item"><i class="bi bi-arrow-down-right-circle me-1" />Interactives</li>

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
                <img src="../assets/t1.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li><i class="bi bi-arrow-right me-1 h4" />Level <span class="ms-5">Over 9000</span></li>
                        <li><i class="bi bi-arrow-right me-1 h4" />Credits <span class="ms-5">Also over 9000</span></li>
                        <li><i class="bi bi-arrow-right me-1 h4" />Tuition <span class="ms-5">{{course.price}}</span></li>
                        
                    </ul>

                </div>
                </div><!--end card-->

                <p>Classes are offered starting::</p>
                <h5>13 Fevrier 2021</h5>

                <a href="/home" class="btn btn-primary my-5">Enroll Now</a>

                <p class="text-muted">Enroll by 6 Fevrier 2021 to reserve your spot
                <br /><a href="/home">Here is a link</a></p>
             </div><!--end col-->


    </div><!--End row-->


  </div><!--End Container-->

<div class="section bg-primary py-5">
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

<CourseRFI />
<RelatedCourses />

  <Footer />
</template>


<script>
// @ is an alias to /src
import CourseRFI from '@/components/CourseRFI.vue'
import RelatedCourses from '@/components/RelatedCourses.vue'
import Footer from '@/components/Footer.vue'
import {fb, db} from '../firebase';

export default {
  name: 'CourseTemplate',
  components: {
    CourseRFI,
    RelatedCourses,
    Footer
      },
  data(){
    return{
      courses:[],

      }
  },
   created(){
      db.collection("courses").where("courseNumber", "==", this.$route.params.id)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.courses.push(doc.data());
        console.log(this.courses);
    });
});
  }
}
</script>


