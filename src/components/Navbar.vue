<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
     <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
        <router-link class="navbar-brand" to="/">
        <img src="https://csug.cdn.prismic.io/csug/9c359755-468f-4eab-912e-f7711bbd5498_CSUG_Direct.svg" alt="CSU Global Direct Logo" height="60" class="me-2">
        </router-link>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-md-0 ms-3 ms-md-0">

        <li class="nav-item dropdown has-megamenu">

          <a class="nav-link dropdown-toggle d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <router-link class="nav-link d-lg-none" to="/courses">
            Courses
          </router-link>

          <ul class="dropdown-menu megamenu" aria-labelledby="navbarDropdown">
            <div class="container">
              <div class="row g-5">
                <div class="col-md-4 d-flex flex-column">
                  <div class="display-5 mb-2">Courses</div>
                  <p>Transferable college credit, direct to you.</p>
                  <div class="mt-5">
                  <router-link class="courses-link d-flex align-items-center pt-5" to="/courses">View All Courses <i class="ms-2 mt-1 bi bi-arrow-right"></i></router-link>
                  </div>
                </div>

                <div class="col-md-8 pop-courses">
                  <div class="h3 mb-3">Popular Courses</div>
                  <div class="row row-cols-2 g-3 mb-3">
                    <!---------------------->
                    <router-link to="/courses/microbiology">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-flower1"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">Microbiology</div>
                        <p>A course that contains a world in itself.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>

                        <!---------------------->
                    <router-link to="/courses/biochemistry">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-suit-heart"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">Biochemistry</div>
                        <p>Unlock the science of life.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>

                    <!---------------------->
                    <router-link to="/courses/organic-chemistry-i">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-stopwatch"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">Organic Chemistry I</div>
                        <p>Find the story in organic molecules.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>
                    
                    <!---------------------->
                    <router-link to="/courses/organic-chemistry-ii">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-sunset"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">Organic Chemistry II</div>
                        <p>Chapter 2 in Organic Molecules.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>

                    <!---------------------->
                    <router-link to="/courses/general-chemistry-i">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-node-minus"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">General Chemistry I</div>
                        <p>The science of the elements.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>

                    <!---------------------->
                    <router-link to="/courses/genetics">
                    <div class="col d-flex">
                      <div class="col-xs-4 pe-3"><i class="bi bi-flower2"></i></div>
                      <div class="col-xs-8">
                        <div class="h5">Genetics</div>
                        <p>Find the story in our genes.</p>
                      </div>
                    </div><!--/col-->
                    </router-link>


                  </div><!--pop courses row-->
                  

                </div><!--pop courses col-->

              </div><!--/row-->
            </div><!--/container-->

          </ul>
        </li>

        <li class="nav-item d-lg-none">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
        </li>
        <li class="nav-item d-lg-none">
            <router-link class="nav-link" to="/calendar">Calendar</router-link>
        </li>
        <li class="nav-item d-lg-none">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item d-lg-none">
            <router-link class="nav-link" to="/request-information">Contact Us</router-link>
        </li>

      </ul>
      <ul class="d-flex flex-row navbar-nav">
          <li class="nav-item me-3">
            <router-link class="nav-link btn btn-success" to="/get-started">Register <i class="bi bi-arrow-right ms-2" /></router-link>
          </li>

          <li class="nav-item me-3">
            <a class="nav-link btn btn-outline-success" href="https://portal.csuglobal.edu/">Login </a>
          </li>

           <!-- hamburglar -->
        <button class="navbar-toggler offcanvas-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>


      </ul>
      
    </div>
  </div>
          <!-- offcanvas -->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"  data-bs-scroll="true" data-bs-backdrop="false">

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
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/request-information">Contact Us</router-link>
            </li>
        </ul>
        
      </div>
    </div><!--end ofc-->
</nav>

<!--------------------------------->

</template>

<script>
 import {Collapse} from 'bootstrap'
export default {
  name: 'Navbar',
  props: {
  },
  mounted() {
    /* FOR MOBILE ONLY */
    if (window.matchMedia("(max-width: 767px)").matches) {
      const navLinks = document.querySelectorAll('.nav-link')
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, {toggle: false})
      navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
      })
    } else {
      const navLinks = document.querySelectorAll('.offcanvas-body .nav-link')
      const menuToggle = document.getElementById('offcanvasNavbar')
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

.nav-link:not(.btn),
a.dropdown-item {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1c2333!important;
}

.display-5 {
  font-weight:500;
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


.offcanvas-body ul {
  display:flex;
  flex-direction: column;
}

.megamenu {
  border:0px;
  border-radius:0px;
  background-color: #f1f2f4;
}

.megamenu::before {
  content: "";
  display: block;
  margin: 0px auto 1.5rem;
  position: relative;
  width: 98vw;
  height: 1px;
  background-color: #AA1D40;
}

.courses-link {
  color:#AA1D40;
  font-weight: 700;
  font-size: 1rem;
  text-decoration:none;
}
.courses-link:hover {
  color:#212529;
}
.pop-courses .h3 {
  color:#AA1D40;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom:1.5rem;
}

.pop-courses .h5 {
  color:#6d7588;
  font-weight: 700;
  font-size: 1rem;
}

.pop-courses p {
  color:#6d7588;
}


.pop-courses .bi {
  font-size:1.5rem;
  color:#AA1D40;
}

.pop-courses a {
  text-decoration: none;
}

.pop-courses a:hover,
.pop-courses .nav-link:hover {
  color:#AA1D40!important;
}
/* ============ desktop view ============ */
@media all and (min-width: 992px) {

  .navbar .has-megamenu{position:static!important;}
  .navbar .megamenu{left:0; right:0; width:100%; margin-top:0;  }
  .offcanvas-toggler {
  display:inline-block!important;
}

}	
/* ============ desktop view .end// ============ */

/* ============ mobile view ============ */
@media(max-width: 991px){
  .navbar.fixed-top .navbar-collapse, .navbar.sticky-top .navbar-collapse{
    overflow-y: auto;
      max-height: 90vh;
      margin-top:10px;
  }
  .offcanvas-toggler {
  display:none!important;
}
}
/* ============ mobile view .end// ============ */

</style>
