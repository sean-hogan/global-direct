<template>
<div class="catalog section" id="catalog">
    <div class="container px-4 py-5">
        <div class="row text-center justify-content-center mb-5">
        <h2 class="display-3 mb-5">Find Your Future</h2>
        <div class="col-4">
          <!--search-->
        <form class="d-flex">
            <input class="form-control me-2" type="search" v-model="filterText" placeholder="Search" aria-label="Search">
        </form>
        </div>
    </div><!--end row-->

    <div class="row card-wrapper row-cols-1 row-cols-3 g-4">
 <!--card-->
  <div v-for="course in filteredCourseList" class="col" :key="course.courseNumber">
    <div class="card h-100">
      <img :src="course.cardImageUrl" class="card-img-top" alt="">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{course.courseTitle}}</h5>
        <h6>${{course.coursePrice}}</h6>
        <p class="card-text">{{course.cardText}}</p>
      
        <router-link class="btn btn-outline-secondary mt-auto me-auto" :to="{ name: 'CourseTemplate', params: { id: course.courseNumber }}">More Info</router-link>
    
        

      </div>
    </div>
  </div><!--end card-->

        
    </div><!--end row-->


    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
import {fb, db} from '../firebase';

export default {
  name: 'Catalog',
  props: {
    
  },

  data(){
      return{
          courses: [],
          filterText:'',
      }
  },

   created(){
      db.collection("courses").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.courses.push(doc.data());
        });
      });
  },

  computed: {
   filteredCourseList() {
     return this.courses.filter(course => {
       return course.courseDescription.toLowerCase().includes(this.filterText.toLowerCase()) ||
              course.courseLevel.toLowerCase().includes(this.filterText.toLowerCase())       ||
              course.courseNumber.toLowerCase().includes(this.filterText.toLowerCase())      ||
              course.courseTitle.toLowerCase().includes(this.filterText.toLowerCase())

     })
   }
},
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}
.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
