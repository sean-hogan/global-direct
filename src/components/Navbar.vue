<template>
    <nav class="navbar navbar-light bg-white sticky-top">
    <div class="container p-1">
      <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
        <router-link class="navbar-brand" to="/">
        <img src="https://csug.cdn.prismic.io/csug/ea5c1a09-3016-4122-be57-069770c6aa52_CSUG_Direct.svg" alt="CSU Global Direct Logo" height="60" class="me-2">
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/courses">Courses</router-link>
            </li>
        </ul>


        <div class="d-flex ms-auto">
        <ul class="navbar-nav d-flex flex-row">


         <li class="nav-item px-3">
            <router-link class="nav-link btn btn-success" to="/get-started">Register <i class="bi bi-arrow-right ms-2" /></router-link>
            </li>

            <li class="nav-item px-3">
            <a class="nav-link btn btn-outline-success" href="https://portal.csuglobal.edu/">Login </a>
            </li>
        </ul>
        
        <!-- hamburglar -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- offcanvas -->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

      <div class="offcanvas-header">
        <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/calendar">Calendar</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/about">About</router-link>
            </li>
        </ul>
        
      </div>
    </div><!--end ofc-->
    </div><!--end auto-->

       
    </div><!--end container-->
    </nav>  
</template>

<script>
 // import {Collapse} from 'bootstrap'
export default {
  name: 'Navbar',
  props: {
  },
  mounted() {
    /* FOR MOBILE ONLY */
    // if (window.matchMedia("(max-width: 991px)").matches) {
    //   const navLinks = document.querySelectorAll('.nav-link')
    //   const menuToggle = document.getElementById('offcanvasNavbar')
    //   const bsCollapse = new Collapse(menuToggle, {toggle: false})
    //   navLinks.forEach((l) => {
    //   l.addEventListener('click', () => { bsCollapse.toggle() })
    //   })
    // }
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

.btn-success {
  color:#fff!important;
  background:#9e1831;
}

.btn-success:hover{ 
  background: #941938;
}

.btn-success:focus, .btn-success {
  box-shadow:none!important;
}

.nav-link:not(.btn),
a.dropdown-item {
  font-size: 1.7rem;
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
.navbar .container {
  justify-content:start;
}

</style>
