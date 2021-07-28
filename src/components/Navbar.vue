<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-3">
        <a class="navbar-brand" href="/">GlobalDirect @ Global</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item px-3">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
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

        </ul>
        </div>
    </div>
    </nav>  
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
}

</style>
