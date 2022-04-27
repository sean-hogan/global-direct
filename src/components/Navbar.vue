<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-1">
      <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
        <router-link class="navbar-brand" to="/">
        <img src="https://csug.cdn.prismic.io/csug/ea5c1a09-3016-4122-be57-069770c6aa52_CSUG_Direct.svg" alt="CSU Global Direct Logo" height="60" class="me-2">
        <!-- <span class="logo align-middle">CSU GLOBAL DIRECT</span> -->
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/#catalog">Courses</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/calendar">Calendar</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/about">About</router-link>
            </li>
            
            <li class="nav-item px-3">
            <router-link class="nav-link btn btn-success" to="/get-started">Get Started <i class="bi bi-arrow-right" /></router-link>
            </li>

        </ul>
        </div><!--end collapse-->
    </div><!--end container-->
    </nav>  
</template>

<script>
  import {Collapse} from 'bootstrap'
export default {
  name: 'Navbar',
  props: {
  },
  mounted() {
    /* FOR MOBILE ONLY */
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navLinks = document.querySelectorAll('.nav-link')
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, {toggle: false})
      navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
      })
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #ddd;
}
.logo {
  font-family: industry, sans-serif!important;
	font-weight: 700;
	font-style: normal;
	font-size: 1.7rem;
}

.btn {
  border-radius: 0;
  color:#fff!important;
  background:#aa1d40;
}

.btn:hover{ 
  background: #941938;
}

.btn:focus, .btn {
  box-shadow:none!important;
}

.nav-link:not(.btn),
a.dropdown-item {
  font-size: 16px;
  font-weight: 600;
  color: #1c2333!important;
}

.visually-hidden-focusable {
  position:absolute;
  left:10%;
  padding:2rem;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.visually-hidden-focusable:focus {
  transform: translateY(0%);
}

</style>
