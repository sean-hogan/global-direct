<template>
<section class="catalog section" id="catalog" aria-labelledby="catalog-label">
    <div class="container px-4 py-5">
        <div class="header row text-center justify-content-center mb-3">
                <h2 class="mb-5" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">Courses</h2>


                <div class="lead d-flex flex-column flex-md-row justify-content-md-center" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
                <span class="me-3">Need Assistance? </span>
                <a class="link-success me-3" href="tel:1-800-672-0624"><i class="bi bi-phone me-2"></i>1-800-672-0624</a>
                <div><a class="link-success" href="mailto:global.direct@csuglobal.edu"><i class="bi bi-envelope me-2"></i>global.direct@csuglobal.edu</a></div>
                </div>

        </div>
        <div class="card" id="catalog-top" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50"><!--big card-->
        <div class="card-header p-5">
                <form role="search">
                  <div class="row justify-content-center">

                    <div class="col-sm-12">

                  <!--search-->
                  <div class="input-group mb-3">
                    <input class="form-control" type="search" id="search-input" v-model="filterText" placeholder="Search" aria-label="Search" @keyup="zerothPage()">
                    <span class="input-group-text" id="search-icon"><i class="bi bi-search"></i></span>
                  </div>
                    

                    </div><!--end search bar col-->
                    </div><!--end search bar row-->
                  <div class="row">

                  <div class="col-md-4">

                    <!--subject select-->
                    <select class="form-select mb-3 mb-md-0" aria-label="Default select example" v-model="selectedSubject" @change="zerothPage()">
                      <option value="">All Subjects</option>
                      <option v-for="subject in $store.state.subjects" :key="subject" :value="subject">{{subject}}</option>
                    </select>
                  </div><!--end form col-->

                  <div class="col-md-4">

                    <!--subject select-->

                    <!-- <select class="form-select" aria-label="Default select example" v-model="selectedLevel" @change="zerothPage()">
                      <option value="">All Levels</option>
                      <option v-for="level in $store.state.levels" :key="level" :value="level">{{level}}</option>
                    </select> -->
                  </div><!--end form col-->

                  <div class="col-md-4">

                    <!--subject select-->
                    <!--<select class="form-select" aria-label="Default select example" v-model="selectedStart">
                      <option value="">All Start Dates</option>
                       <option v-for="subject in subjects" :key="subject" :value="subject">{{subject}}</option> 
                    </select>-->

                    <div>
                    <button tabindex="0" class="btn btn-link link-primary sort-link mx-4" 
                    @click.prevent="sort('courseTitle')"
                    @keyup.enter="sort('courseTitle')"
                    v-bind:class="[sortBy === 'courseTitle' ? sortDirection : '']">Sort by Name</button>

                    <button tabindex="0" class="btn btn-link link-primary sort-link" 
                    @click.prevent="sort('coursePrice')"    
                    @keyup.enter="sort('coursePrice')" 
                    v-bind:class="[sortBy === 'coursePrice' ? sortDirection : '']">Sort by Price</button>

                  </div><!--end sort buttons-->

                  </div><!--end form col-->
                  
                </div><!--end form header row-->
                </form>
                     </div><!--end card header-->
               
          <div class="card-body">

            <div class="row card-wrapper row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4"><!--course card row-->
              
                 <!--course card-->
                <div v-for="course in paginatedData" class="col" :key="course.courseNumber">
            <router-link class="text-decoration-none text-reset" :to="{ name: 'CourseTemplate', params: { id: course.courseNumber }}">

                  <div class="course card h-100">
                    <img :src="course.cardImageUrl" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column pb-1">
                      <h3 class="card-title">{{course.courseTitle}}</h3>
                      

                      <div class="d-flex flex-row">
                      <span aria-hidden="true" v-for="tag in course.courseSubjects" :key="tag.index" class="badge bg-grey text-dark text-wrap p-2 me-2 ">
                          {{ tag }}
                          </span>
                      </div>
                      <div class="mb-4">
                      <p v-if="course.hasLabs && !course.hasFreeLabs" class="mt-2 h5"><span class="visually-hidden">The price is </span>$1,469<small> | <span class="visually-hidden">The course is worth </span>{{course.creditHours}} Credits</small></p>

                      <p v-else class="mt-2 h5"><span class="visually-hidden">The price is </span>${{course.coursePrice}}<small> | <span class="visually-hidden">The course is worth </span>{{course.creditHours}} Credits</small></p>
                      </div>
                      <!-- <p class="card-text">{{course.cardText}}</p> -->

                      <div class="mt-auto d-flex">
                        <span v-if="course.hasLabs" class="text-muted my-auto includes-lab"><img class="img-fluid" width="13" src="../assets/flask-solid-grey.png" /> Includes Lab</span>
                        
                        <div class="ms-auto text-secondary fs-2" aria-hidden="true"><i class="bi bi-plus-circle"></i><span class="visually-hidden">select for more information</span></div>
                      </div>
                    </div>
                  </div><!--=end course card-->
                  </router-link>
                  

                
                </div><!--end col-->
            </div><!--end course card row-->

                  <div class="row mt-5">
              <div class="col">
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  
                  <li class="page-item">
                    <router-link custom to="/#catalog-top" v-slot="{navigate}">
                      <button tabindex="0" class="page-link" @click="prevPage(); navigate();" :disabled="pageNumber==0">Previous</button>
                    </router-link>
                  </li>

                  <li v-for="i in pageCount" :key="i" class="page-item">
                    <router-link custom to="/#catalog-top" v-slot="{navigate}">
                    <button tabindex="0" class="page-link" 
                    @click="setPage(i); navigate();"
                    @keyup.enter="setPage(i); navigate();">{{i}}</button>                    
                    </router-link>
                    </li>

                  <li class="page-item">
                    <router-link custom to="/#catalog-top" v-slot="{navigate}">
                    <button class="page-link" @click="nextPage(); navigate();" :disabled="pageNumber >= pageCount -1">
                      Next
                    </button>
                      </router-link>
                    </li>
                </ul>
              </nav>

            </div>
          </div><!--end pagination row-->




          </div><!--end card body-->
         
               </div><!---end big card-->

              


    </div><!--end container-->
    </section><!--end section-->
</template>

<script>
export default {
  name: 'Catalog',
  props: {
    
  },

  data(){
      return{
          filterText:'',
          starts:[],
          selectedSubject: '',
          selectedLevel: '',
          selectedStart: '',
          pageNumber: 0,
          perPage: 15,
          sortBy: 'courseTitle',
          sortDirection: 'asc',

      }
  },


  computed: {
   filteredCourseList() {
     return this.$store.state.courses.filter(course => {
       if (this.filterText && !this.selectedSubject) {
        return course.courseDescription.toLowerCase().includes(this.filterText.toLowerCase()) ||
               course.courseTitle.toLowerCase().includes(this.filterText.toLowerCase());
       } else if (this.selectedSubject) {
         return course.courseSubjects.includes(this.selectedSubject) && 
                (course.courseDescription.toLowerCase().includes(this.filterText.toLowerCase()) ||
                course.courseTitle.toLowerCase().includes(this.filterText.toLowerCase()));
       } else {
          return course;

       }
     }).sort((p1,p2) => {
                    let modifier = 1;
                    if(this.sortDirection === 'desc') modifier = -1;
                    if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                    return 0;
                });
    },

    pageCount(){
      let l = this.filteredCourseList.length,
          s = this.perPage;
      return Math.ceil(l/s);
    },
    
    paginatedData(){
      const start = this.pageNumber * this.perPage,
            end = start + this.perPage;
      return this.filteredCourseList.slice(start, end);
    },
  },
  methods:{
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      },
      setPage(i){
        this.pageNumber = i - 1;
      },
      zerothPage(){
        this.pageNumber = 0;
      },
      sort(s){
        if(s === this.sortBy) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        this.sortBy = s;
        console.log('sort');
      }, 
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header h2, .header h2:after {
  margin-bottom:1rem!important;
}
.card {
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}

.card-header {
  border-bottom:none;
}

.card-body {
  background-color:rgba(0, 0, 0, 0.03);
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

.course .card-body {
  background-color:#fff;
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

.page-link {
  color:#000;
}

.page-link:hover {
  cursor:pointer;
  background-color:#fff;
}

.sort-link {
  font-weight:400!important;
}
.sort-link:hover {
  cursor:pointer;
}

.asc:after{
  content: "\25B2"
}

.desc:after{
  content: "\25BC"
}

.link-success{
  text-decoration: none;
}

.includes-lab {
  font-size:.9rem;
}

</style>
