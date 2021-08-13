<template>
<div class="footer section">
    <div class="container-fluid">
     <footer>
         <div class="row mx-5 p-5">
            <div class="col-sm-4">
                <img src="../assets/logo_csuglobal.png" alt="">
                <p class="mt-3"><strong>Colorado State University Global</strong>
                <br />585 Salida Way
                <br />Aurora, CO 80011</p>
                 
            </div><!--end col-->

            <div class="col-sm-4">
            <ul class="list-unstyled">
                <li><a class="link-secondary" href="https://csuglobal.edu/undergraduate/bachelors-degrees">Bachelor's Degrees</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/graduate/masters-degrees">Master's Degrees</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/undergraduate/general-education">General Education</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/cost/tuition/tuition-rates">Tuition Rates</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/cost/financial-options/financial-aid">Financial Aid</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/cost/financial-options/military-tuition-assistance">Military Tuition and Benefits</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/consumer-information">Consumer Information</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/blog/">Blog</a></li>
            </ul>
            
            
            </div><!--end col-->
            <div class="col-sm-4">
                <ul class="list-unstyled">
                <li><a class="link-secondary" href="https://csuglobal.edu/resources/frequently-asked-questions-faq">Common Questions</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/resources/frequently-asked-questions-faq/how-do-i-maintain-school-life-balance">Fit Your Schedule</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/about/our-university">Our University</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/resources/student-services">Student Services</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/about/partnerships">Partnerships</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/about/careers">Careers</a></li>
                <li><a class="link-secondary" href="https://csuglobal.edu/student-policies">Student Policies</a></li>
                <li><a class="link-secondary" @click="showModal">Login</a></li>
                <li><a class="link-secondary" @click="logout">Logout</a></li>
            </ul>
            
            
            
            
            </div><!--end col-->

         </div><!--end row-->
     </footer>
    </div><!--end container-->
    </div><!--end section-->
    
    <LoginModal @closeModal="closeModal()" />

</template>

<script>
import {fb} from '../firebase';
import LoginModal from './LoginModal.vue';
import { Modal } from 'bootstrap'

export default {
  name: 'Footer',
  props: {

  },
  
  data(){
    return {
      myModal: null,
    }
  },
  components: {
      LoginModal
  },
  methods:{
        showModal(){
        this.myModal = new Modal(document.getElementById('loginmodal'), {})
        this.myModal.show()
    },
        closeModal(){
        this.myModal.hide()
    },
    
    
      async logout(){
          fb.auth().signOut().then(() => {
            // Sign-out successful.
            alert('You have been logged out');
            this.$router.push('/');

            }).catch((error) => {
            // An error happened.
            alert('an error happened');
            });

      }

  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    border-top:1px solid #000;
    background-color:#f1f1f1;
}
</style>
