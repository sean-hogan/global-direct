<template>
<div class="related-courses section bg-white">
    <div class="container px-4 py-5 text-center">
        <div class="row">

<h4 class="display-2 mb-5">Related Courses</h4>
        </div><!--End Row-->
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div><!--end row-->

    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
import {fb, db} from '../firebase';

export default {
  name: 'RelatedCourses',
  props: {
 

  },
  data(){
    return{
      relatedCourses:[],

      }
  },
   updated(){
      this.$nextTick(function () {
          console.log(this.$parent)
        db.collection("courses").where("courseSubjects", "array-contains-any", this.$parent.course.courseSubjects)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.relatedCourses.push(doc.data());
        });
      });
      })
     
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
