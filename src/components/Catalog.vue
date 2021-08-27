<template>
<div class="catalog section" id="catalog">
    <div class="container px-4 py-5">
        <div class="row text-center justify-content-center mb-5">
                <h2 class="display-3 mb-5">Find Your Future</h2>
                <p class="lead">Find your course, enroll using our portal. If you need any assitance, call 850-443-2200 to get help from an Enrollment Representative.</p>
        </div>
        <div class="card"><!--big card-->
        <div class="card-header p-5">
                <form>
                  <div class="row justify-content-center">

                    <div class="col-sm-12">

                  <!--search-->
                  <div class="input-group mb-3">
                    <input class="form-control" type="search" id="search-input" v-model="filterText" placeholder="Search" aria-label="Search">
                    <span class="input-group-text" id="search-icon"><i class="bi bi-search"></i></span>
                  </div>
                    

                    </div><!--end search bar col-->
                    </div><!--end search bar row-->
                  <div class="row">

                  <div class="col-md-4">

                    <!--subject select-->
                    <select class="form-select mb-3 mb-md-0" aria-label="Default select example" v-model="selectedSubject">
                      <option value="">All Subjects</option>
                      <option v-for="subject in subjects" :key="subject" :value="subject">{{subject}}</option>
                    </select>
                  </div><!--end form col-->

                  <div class="col-md-4">

                    <!--subject select-->
                    <select class="form-select" aria-label="Default select example" v-model="selectedLevel">
                      <option value="">All Levels</option>
                      <option v-for="level in levels" :key="level" :value="level">{{level}}</option>
                    </select>
                  </div><!--end form col-->

                  <div class="col-md-4">

                    <!--subject select-->
                    <!--<select class="form-select" aria-label="Default select example" v-model="selectedStart">
                      <option value="">All Start Dates</option>
                       <option v-for="subject in subjects" :key="subject" :value="subject">{{subject}}</option> 
                    </select>-->
                  </div><!--end form col-->
                  
                </div><!--end form header row-->
                </form>
                     </div><!--end card header-->
               
          <div class="card-body">

            <div class="row card-wrapper row-cols-1 row-cols-md-4 g-4"><!--course card row-->
              
              <!--course card-->
                <div v-for="course in filteredCourseList" class="col" :key="course.courseNumber">
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

                        <h5 class="mt-auto me-auto">${{course.coursePrice}}</h5>
                        <router-link class="btn btn-outline-secondary mt-auto me-auto" :to="{ name: 'CourseTemplate', params: { id: course.courseNumber }}">More Info</router-link>
                      </div>
                    </div>
                  </div>
                </div><!--end course card-->

                
            </div><!--end course card row-->
          </div><!--end card body-->
               </div><!---end big card-->


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
          subjects: [],
          levels: [],
          starts:[],

          selectedSubject: '',
          selectedLevel: '',
          selectedStart: '',

      }
  },

   created(){
      db.collection("courses").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.courses.push(doc.data());
        // while calling courses also populates subject & levels listing for filter
        this.courses.forEach(course => {
            if (this.levels.includes(course.courseLevel)) {
              //
            } else {
              this.levels.push(course.courseLevel)
            }

          course.courseSubjects.forEach((subject) => {
              if (this.subjects.includes(subject)) {
                //
              } else {
              this.subjects.push(subject);  

              }
          })
        });
      });
      

      })

      
  },

  computed: {
   filteredCourseList() {
     return this.courses.filter(course => {
       if (this.filterText && !this.selectedSubject) {
        return course.courseDescription.toLowerCase().includes(this.filterText.toLowerCase()) ||
               course.courseTitle.toLowerCase().includes(this.filterText.toLowerCase())
       } else if (this.selectedSubject) {
         return course.courseSubjects.includes(this.selectedSubject) && 
                (course.courseDescription.toLowerCase().includes(this.filterText.toLowerCase()) ||
                course.courseTitle.toLowerCase().includes(this.filterText.toLowerCase()))
       } else {
          return course

       }
     })
   },


},
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}
.course.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

#search-icon {
  background-color:#fff;
}

#search-input {
  border-right:none;
}
</style>
