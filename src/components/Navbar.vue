<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-1">
        <a class="navbar-brand" href="/">
        <img src="../assets/direct-nav-logo.png" alt="" width="60" class="me-2">
        <span class="logo align-middle">GLOBAL DIRECT</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/#catalog">Catalog</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/#faq">FAQ</router-link>
            </li>
            <li class="nav-item px-3">
            <router-link class="nav-link" to="/about">About</router-link>
            </li>
            
            <li class="nav-item px-3">
            <router-link class="nav-link  btn btn-outline-success" to="/get-started">GET STARTED</router-link>
            </li>

        </ul>
        </div>
    </div>
    </nav>  
</template>

<script>
export default {
  name: 'Navbar',
  props: {
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
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 600;
}

</style>
