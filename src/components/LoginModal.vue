<template>

<!-- Modal -->
<div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

                        <!-- Nav tabs -->
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected="false">Sign-Up</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            </li>
                    
            <button type="button" class="btn-close ms-auto pt-4 pe-4" data-bs-dismiss="modal" aria-label="Close"></button>

          </ul>


        <!-- Tab panels -->
        <div class="tab-content" id="pills-tabContent">
          <!--Panel Login-->
          <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">


      <div class="modal-header">
        <h5 class="modal-title" id="LoginLabel">Login</h5>
      </div>
      <div class="modal-body">
       <form>
        <div class="mb-3">
            <label for="exampleInputEmail2" class="form-label">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword2">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck2">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <a class="btn btn-primary" @click="login">Login</a>
        </form>


      </div><!--End Modal Body 1-->
      </div><!--end tab pane-->
                <!--Panel signup-->
          <div class="tab-pane fade in" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">


      <div class="modal-header">
        <h5 class="modal-title" id="signup">Sign Up</h5>
      </div>
      <div class="modal-body">
       <form>
         <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name" id="namesignup" aria-describedby="NameHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <a class="btn btn-primary" @click="register">Register</a>
        </form>


      </div><!--End Modal Body 1-->
      </div><!--end tab pane-->

     </div><!--End Tab Content-->
    </div>
  </div>
</div>
</template>

<script>
import {fb} from '../firebase';
export default {
  name: 'LoginModal',
  props: {
    
  },
  data(){
    return {
      name:null,
      email:null,
      password:null,
    }
  },
  
  methods:{

    login() {
    fb
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('Successfully logged in');
        this.$emit('closeModal');
        //this.$router.push('/admin');

      })
      .catch(error => {
        alert(error.message);
      });
  },

    register(){
      fb
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        this.$emit('closeModal');
        alert('You have Been Registered')
        //this.$router.push('/admin');

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

    },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
