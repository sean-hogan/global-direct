<template>
<Navbar />

  <div class="get-started container">
    <div class="row justify-content-center">
      <div class="col-lg-8">

    <h1 class="mt-5 mb-3">Getting Started is Hard, We Make It Easier</h1>

    <p class="lead">Vivamus at tortor viverra, volutpat erat nec, fermentum tortor. Praesent eu felis quam.</p>
      </div>

    </div><!--End Row-->

<div class="getting-started-steps row g-4 py-5 row-cols-1 justify-content-center">

<div class="col-lg-8 d-flex my-3">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-heart-fill text-primary text-bottom h2" />
            </div>
            <div>
            <p>Praesent eu felis quam. <a href="/">Nunc eu nisi</a> in erat blandit aliquet.</p>
            
            </div>
        </div>

        <div class="col-lg-8 d-flex my-3">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-arrow-right-circle text-primary text-bottom h2" />
            </div>
            <div>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            
            </div>
        </div>


<div class="col-lg-8 d-flex my-3">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-emoji-smile-upside-down text-primary text-bottom h2" />
            </div>
            <div>
            <p>Suspendisse nunc justo, dapibus id lectus at, commodo iaculis diam. Integer a massa augue. In et tempus augue, in mattis ex.</p>
            
            </div>
        </div>


<div class="col-lg-8 d-flex my-3">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-house text-primary text-bottom h2" />
            </div>
            <div>
            <p>Ut et molestie velit, eget volutpat enim. Nunc quis ultrices dolor.</p>
            
            </div>
        </div>


<div class="col-lg-8 d-flex my-3">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-patch-exclamation-fill text-primary text-bottom h2" />
            </div>
            <div>
            <p>Quisque accumsan scelerisque enim, eget ornare eros cursus eu. </p>
            
            </div>
        </div>

        <div class="col-lg-8 d-flex my-3"><a href="/" class="btn btn-primary">Enroll Nowish</a></div>





</div><!--End Row-->





  </div><!--End Container-->

  <Footer />
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'GetStarted',
  components: {
    Navbar,
    Footer
      }
}
</script>


