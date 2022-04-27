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
                <li><router-link class="link-success text-decoration-none" to="/get-started">Get Started</router-link></li>
                <li><router-link class="link-success text-decoration-none" to="/#catalog">Catalog</router-link></li>
                <li><router-link class="link-success text-decoration-none" to="/faq">FAQs</router-link></li>
                <li><router-link class="link-success text-decoration-none" to="/calendar">Calendar</router-link></li>
                <li><router-link class="link-success text-decoration-none" to="/about">About</router-link></li>
            </ul>
            
            
            </div><!--end col-->
            <div class="col-sm-4">
                <ul class="list-unstyled">
                <li><a class="link-success text-decoration-none" href="https://csuglobal.edu/disclaimer">Disclaimer</a></li>
                <li><a class="link-success text-decoration-none" href="https://csuglobal.edu/web-privacy-policy">Web Privacy Policy</a></li>
                <li><a class="link-success text-decoration-none" href="https://csuglobal.edu/compliance-reporting">Compliance Reporting</a></li>
                <li><a class="link-success text-decoration-none" href="https://csuglobal.edu/student-policies/institutional-accessibility-policy">Accessibility</a></li>
                <li><a class="link-success text-decoration-none" href="https://csuglobal.edu/student-policies">Student Policies</a></li>
            </ul>
            
            
            
            
            </div><!--end col-->

         </div><!--end row-->
     </footer>
    </div><!--end container-->
    </div><!--end section-->
    

</template>

<script>
import {fb} from '../firebase';
//import LoginModal from './LoginModal.vue';
//import { Modal } from 'bootstrap'

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
      //LoginModal
  },
//   methods:{
//         showModal(){
//         this.myModal = new Modal(document.getElementById('loginmodal'), {})
//         this.myModal.show()
//     },
//         closeModal(){
//         this.myModal.hide()
//     },
    
    
//       async logout(){
//           fb.auth().signOut().then(() => {
//             // Sign-out successful.
//             alert('You have been logged out');
//             this.$router.push('/');

//             }).catch((error) => {
//             // An error happened.
//             alert('an error happened');
//             });

//       }

//   },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    border-top:1px solid #000;
    background-color:#f1f1f1;
}

ul {
    line-height:2rem;
}
</style>
