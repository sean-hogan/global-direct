<template>
   <main class="course-info section px-5 py-5" id="main-content">
    <div class="container">

    <div class="row g-5">


        <div class="col-sm-8 ps-sm-5">
                <header class="mb-3">
                    <p class="h5 mb-0"><a class="link-success text-decoration-none" href="https://csuglobal.edu/">Colorado State University Global</a> <span style="color:#9e1831;">|</span> {{course.courseNumber}}</p>
                    <p class="h5 mb-0"><span class="text-muted">100% Online</span> <span style="color:#9e1831;">|</span> <span class="text-muted">Accredited</span>  <span style="color:#9e1831;">|</span> <span class="text-muted">Transferable</span></p>
                    <h1 class="display-4 text-success">{{course.courseTitle}}</h1>
                    <p><strong>Course Level:</strong> {{course.courseLevel}}</p>

                </header>
                

                <p class="course-description">{{course.courseDescription}}</p>
                <p v-if="course.optionalNotes">{{course.optionalNotes}}</p>


            
              <h2 v-if="(prerequisites && prerequisites.length) || (nonCatalogPrerequisites && nonCatalogPrerequisites.length)" class="mt-4">Recommended Prerequisites</h2>
              <ul class="list-unstyled h5">
              <li v-for="prereqCourse in prerequisites" :key="prereqCourse.index" class="mb-2"><i class="bi bi-check-circle mx-3"></i>
              <router-link class="text-success" :to="'/courses/' + prereqCourse.courseNumber">{{prereqCourse.courseNumber}}</router-link>
               - {{prereqCourse.courseTitle}}
              </li>
              <li v-for="nonCatalogPrereqCourse in nonCatalogPrerequisites" :key="nonCatalogPrereqCourse.index" class="mb-2"><i class="bi bi-check-circle mx-3"></i>{{nonCatalogPrereqCourse}}
              </li>
              </ul>


            <h2 class="mt-4">Key Takeaways</h2>
            <p v-html="course.courseObjectives"></p>
            
            

            <h2 class="mt-4">What You'll Get</h2>
             <ul class="list-unstyled list-inline pb-3 course-features">

                <li><i class="bi bi-ui-checks" />Lecture Materials</li>
                <li><i class="bi bi-person-circle" />Instructor Assistance</li>
                <li><i class="bi bi-chat-dots" />Community of Peers</li>
                <li><i class="bi bi-columns" />Early Course Access</li>
                <li v-if="course.hasLabs"><i class="bi bi-clipboard-data" />Engaging Labs</li>
                <li><i class="bi bi-card-checklist" />Healthcare Admission Test Aligned</li>
                <li><i class="bi bi-bag-plus" />Access to Student Support Services</li>
                <li><i class="bi bi-bank" />Transferable College Credit<sup @click="showModal" class="" aria-hidden="true"><i class="bi bi-info-circle-fill ms-2"></i></sup></li>

              </ul>              


        </div><!--end col-->

         <div class="col-sm-4">
           <span class="visually-hidden"><h2>Course Information</h2></span>
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

                        <!---->
                        <span v-if="course.hasLabs && !course.hasFreeLabs">
                        <li><i class="bi bi-clipboard-check" />Lab Fees <span class="float-end">$69</span></li>
                        <hr />
                        <li><i class="bi bi-wallet2" />Total <span class="float-end">$1,469</span></li>
                        <hr />
                        </span>
                        <!---->

                        <li><i class="bi bi-calendar-check" />Starts 
                        <span v-if="course.term === 'Active'" class="float-end text-primary">{{dayjs(enrollmentDate).format('MMMM D, YYYY')}}</span>
                        <span v-else-if="course.term === 'SpringD'" class="float-end text-primary">June 13, 2022</span>

                        <span v-else-if="course.term === 'FallA'" class="float-end text-primary">July 18, 2022</span>

                        <span v-else-if="course.term === 'FallB'" class="float-end text-primary">August 15, 2022</span>

                        <span v-else-if="course.term === 'FallC'" class="float-end text-primary">September 12, 2022</span>

                        <span v-else-if="course.term === 'FallD'" class="float-end text-primary">October 10, 2022</span>
                        <span v-else-if="course.term === 'ComingSoon'" class="float-end text-primary">Coming Soon</span>
                        </li>
                        <hr />

                      
                    </ul>
                    <div class="text-center">

                    <router-link to="/get-started" class="btn btn-success my-3 px-5 py-2">Enroll Now</router-link>
                    </div>


                </div>
                </div><!--end card-->

                

                <p v-if="course.term === 'Active'" class="text-muted">Enroll by {{dayjs(enrollmentDate).subtract(6, 'day').format('MMMM D, YYYY')}} to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>

                <p v-else-if="course.term === 'SpringD'" class="text-muted">Enroll by June 6, 2022 to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>
                
                <p v-else-if="course.term === 'FallA'" class="text-muted">Enroll by July 12, 2022 to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>

                <p v-else-if="course.term === 'FallB'" class="text-muted">Enroll by August 9, 2022 to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>

                <p v-else-if="course.term === 'FallC'" class="text-muted">Enroll by September 6, 2022 to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>

                <p v-else-if="course.term === 'FallD'" class="text-muted">Enroll by October 4, 2022 to reserve your spot
                <br /><router-link to="/calendar">View The Term Schedule</router-link> for monthly start dates</p>
                <p>Please note that courses may be closed due to no or low enrollment</p>

                <p v-if="course.includesBook">Total course cost does include the required text</p>
                <p v-else>Total course cost does not include the required text</p>

                <!--some rfi stuff-->
                <div class="coursecta card">
                <h3>Ready To Learn More?</h3>
                  <p>If you have any questions about CSU Global Direct, please call <a class="link-success" href="tel:1-800-672-0624">1-800-672-0624</a> to speak with an advisor, or email:</p>
                  <a class="btn btn-outline-success" href="mailto:global.direct@csuglobal.edu"><i class="bi bi-envelope text-success" /> global.direct@csuglobal.edu</a>
                  <button class="btn btn-success mt-2" onclick="window.open('https://home-c28.incontact.com/incontact/chatclient/chatclient.aspx?poc=fe583801-12a3-41b5-84b9-f949034df884&amp;bu=4598395&amp;P1=FirstName&amp;P2=LastName&amp;P3=first.last@company.com&amp;P4=555-555-5555','chatWindow','location=no,height=630,menubar=no,status=no,width=410',true); return false;" data-v-ec45c200="">Click Here to Chat Live</button>
                </div>
                
             </div><!--end col-->

    </div><!--End row-->


    </div><!--end contain-->
  </main><!--End section-->
<aside>
<section class="how-this-works section py-5">
  <div class="container">

    <div class="row">
        
          <div class="header text-center">
              <h2 class="mb-4">How This Class Functions</h2>
          </div>

         <p class="lead">
           CSU Global Direct is a convenient and affordable way for students to complete prerequisite courses. With courses offered year-round and monthly start dates, you can quickly and efficiently earn undergraduate credits, including prerequisite credits for medical, dental, nursing, PA, and graduate schools through CSU Global.
         </p>

         <h3>100% Online</h3>

         <p>
           Our 100% online courses provide an abundance of flexibility and convenience for your busy schedule. Asynchronous or “on-demand” courses allow you the freedom to learn when it works for you, whether that’s before the morning commute or after the kids go to bed at night; our courses are ready when you are.
         </p>

        <p>
          In CSU Global Direct classrooms, students interact with classmates and instructors every week through online discussion boards. Valuable conversations and discussions still occur, but at a pace that works for each student. The online format can allow for more thoughtful responses than you might get in a real-time classroom environment.
          </p>

        <p>
          The majority of courses include critical thinking assignments, portfolio projects, and required discussion contributions.
          </p>

         <h3>Set Yourself Up for Success</h3>

          <p>There are several factors that contribute to success within an online post-baccalaureate program. As you decide whether or not this type of program is right for you, consider the following details:</p>
          
          <div class="row gx-5 mb-3 mt-4">
            

          <div class="col-sm-6 d-flex">
            <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/659eb5df-1a28-4924-a2b1-abe675c16b45_direct_icon_technology.jpg?auto=compress,format" />
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>Technology</h4>
            <p>Students need a quiet workspace with access to a reliable computer and a stable internet connection.</p>
            </div>
            </div>

            
            
          <div class="col-sm-6 d-flex">
            <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/d712c82a-4412-48e8-b805-48b674b41006_direct_icon_resources.jpg?auto=compress,format" />
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>Resources</h4>
            <p>Numerous resources are available to CSU Global students at no extra cost, including 24/7 tech support, academic tutors, and online library access, as well as an online writing center, disability support services, and a variety of study tools and programs.
              </p>
            </div>
          </div>

         
            


          </div><!--end row-->

          <div class="row gx-5 mb-3">

             <div class="col-sm-6 d-flex">
          <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/ae2bd3f0-54b3-4183-aa52-c62d43129bab_direct_icon_course_materials.jpg?auto=compress,format" />
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>Course Materials</h4>
            <p>Course materials are available through a learning management system called Canvas. It’s a mobile-friendly, easy-to-navigate, one-stop shop for instruction and communication. Course materials may include interactive lectures, written materials, videos, critical thinking assignments, and mastery exercises that all work together to give students a comprehensive understanding of a particular subject area. Physical textbooks and lab kits may also be required for select courses.</p>
            </div>
            </div>


          <div class="col-sm-6 d-flex">
            <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/e90c365e-a6b0-4ac5-bcd7-7de9061b5c83_direct_icon_assessments.jpg?auto=compress,format" />
          </div>
          
          <div class="flex-grow-1 ms-3">
              <h4>Assessments</h4>
            <p>A path to successful course completion includes faculty-provided deadlines for both labs and assessments to ensure students stay on track and don’t fall behind. Most formal assessments are completed via a third-party, such as McGraw-Hill. Remember to review notes, study, and adequately prepare prior to each assessment.
              </p>
            </div>
            </div>

          </div><!--end row-->

          <div class="row gx-5 mb-3">

            

          <div class="col-sm-6 d-flex">
            <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/76620574-e514-441e-a981-6307fc55061a_direct_icon_stay_motivated.jpg?auto=compress,format" />
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>Stay Motivated</h4>
            <p>Because there is no set class schedule, it’s up to each student to complete the required coursework. It’s important for students to dedicate time to their education by allowing themselves to be fully focused and undisturbed.
              </p>
            </div>
            </div>

          <div class="col-sm-6 d-flex">
            <div class="flex-shrink-0">
              <img class="w-75" src="https://images.prismic.io/csug/7736f0b8-7742-424a-ba5c-a8858ca84152_direct_icon_stay_connected.jpg?auto=compress,format" />
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>Stay connected</h4>
            <p>Canvas makes connecting and communicating with instructors and classmates simple. CSU Global Direct faculty are experts in the industry they teach; students learn from professionals who’ve been there and done that. They are attentive, accessible, dedicated to student success, and are available by phone, email, and webform during normal business hours.
              </p>
            </div>
            </div>

          </div><!--end row-->


          <p class="lead">Students can also connect with classmates through email, course message boards, or group chats. Peers are a great sounding board to share ideas with, as well as to get and give feedback on assignments.</p>


         
     
      
    </div><!--End row-->

  </div><!--End Container-->
</section><!--end bg sections-->

<!--------------related courses------>

<related-courses :relatedCoursesList="relatedCourses"/>

</aside>


<!-- Modal -->
<div class="modal fade" id="transferableCreditModal" tabindex="-1" aria-labelledby="transferableCreditModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content px-4 pb-2">
      <div class="modal-header border-0 pb-1">
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
      </div>
<p class="pt-3">
CSU Global Direct courses are accredited through the <a class="link-success" href="https://www.hlcommission.org/" target="_blank">Higher Learning Commission</a>.</p>

<p class="pt-3">
We recommend that you also check with your selected institution regarding the transfer credit.</p>


    </div>
  </div>
</div><!---end modal-->

</template>

<script>
import dayjs from 'dayjs';
import { Modal } from 'bootstrap';
import RelatedCourses from '@/components/RelatedCourses.vue'


export default {
  name: 'CourseInfo',

  components: {
    RelatedCourses,
      },

  data(){
    return{
      dayjs,
      prerequisites:[],
      nonCatalogPrerequisites:[],
    }
  },

  computed: {
    course() {
      // get the course info that matches the id of this route
      return this.$store.state.courses.find(course => course.courseTitle.replace(/\s+/g, '-').toLowerCase() === this.$route.params.id);
    },
    enrollmentDate() {
       //compute the closest start date after now from start dates in store
       return this.$store.state.startDates.find(date => dayjs(date).isAfter(dayjs().add(3, 'day')));      
    },
    relatedCourses() {
      //sick one-liner to get related courses
      return this.$store.state.courses.filter(course => (course.courseTitle.replace(/\s+/g, '-').toLowerCase() !== this.$route.params.id) ? course.courseSubjects.some(subject => this.course.courseSubjects.includes(subject)) : console.log(''));
    },

  },
  mounted() {
    this.$nextTick(function () {
      //compare the course prereqs to the courses in store, and when they match put that course object in prerequisites
      //else if there's a prereq that isn't found in the store, then put it in a different list for optional render
      this.course.recommendedPrerequisites.forEach(prereq =>
      this.$store.state.courses.forEach(course => (course.courseNumber === prereq) ? this.prerequisites.push(course) :
      (this.nonCatalogPrerequisites.indexOf(prereq) === -1 && !this.$store.state.courses.find(course => course.courseNumber === prereq) ) ? this.nonCatalogPrerequisites.push(prereq) : console.log('') 
      ));
      //dynamic title
     document.title = 'Online College Courses: ' + this.course.courseTitle + ' | CSU Global Direct';
     //dynamic meta desc
     const descEl = document.querySelector('head meta[name="description"]');
     descEl.setAttribute('content', 'Need to complete ' + this.course.courseTitle + '? CSU Global Direct offers convenient and affordable prerequisite courses. Find out why you should study with us!');



    
  });

  },
  methods:{
        showModal(){
            this.myModal = new Modal(document.getElementById('transferableCreditModal'), {})
            this.myModal.show()
        },
        closeModal(){
            this.myModal.hide()
        },
    },
    

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.course-info.section p {
  font-size:1.1rem;
}
.course-info.section h2, .how-this-works h3{
    text-transform: uppercase;
    letter-spacing: .5px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5em;
    margin-top: 20px;
    margin-bottom: 10px;

}
.course-info.section h2:after, .how-this-works h3:after {
    content: "";
    display: block;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #192246;
    margin-top: 10px;
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
  

.how-this-works h4 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .5px;
  color: #9e1831;
  text-transform: uppercase;

}

.bi-info-circle-fill {
    font-size:.8rem;
    cursor:pointer;
}

#app .coursecta.card {
  padding:1rem 2rem;
  border:1px solid #9e1831;
}

</style>
