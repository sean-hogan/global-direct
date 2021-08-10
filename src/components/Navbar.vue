<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-1">
        <a class="navbar-brand" href="/">
        <img src="@/assets/direct-nav-logo.png" alt="" width="60" class="me-2">
        <span class="logo align-middle">GLOBAL DIRECT</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item px-3">
            <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>

            <li class="nav-item px-3">
            <a class="nav-link" href="/#catalog">Catalog</a>
            </li>

            <li class="nav-item px-3">
            <a class="nav-link" href="/open-learning">How To Enroll</a>
            </li>
            <li class="nav-item px-3">
            <a class="nav-link" href="/about">About</a>
            </li>
            
            <li class="nav-item px-3">
            <a class="nav-link  btn btn-outline-success" href="/get-started">GET STARTED</a>
            </li>
            <li class="nav-item px-3"><a class="btn btn-success" @click="showModal">Login</a></li>
            <li class="nav-item px-3"><a class="btn btn-outline-primary" @click="logout">Logout</a></li>

        </ul>
        </div>
    </div>
    </nav>  
    <LoginModal @closeModal="closeModal()" />
</template>

<script>
import LoginModal from './LoginModal.vue';
import {fb} from '../firebase';
import { Modal } from 'bootstrap'

export default {
  name: 'Navbar',
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
    
    
      logout(){
          fb.auth().signOut().then(() => {
            // Sign-out successful.
            alert('You have been logged out');
            //this.$router.push('/');

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
.navbar {
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
}
.logo {
  font-family: industry, sans-serif!important;
	font-weight: 700;
	font-style: normal;
	font-size: 1.7rem;
}

.btn {
  border-radius: 0;
}

</style>
