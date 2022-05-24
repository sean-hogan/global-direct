<template>
<section>

  <div class="rfi-form section">
    <div class="container col-lg-8 text-center">
    <div class="row justify-content-center">

                <h2>Get In Touch</h2>
        <div class="lead d-flex flex-column flex-md-row justify-content-md-center aos-init aos-animate" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50" data-v-4e551842=""><span class="me-3" data-v-4e551842=""></span><a class="link-success me-3" href="tel:1-800-672-0624" data-v-4e551842=""><i class="bi bi-phone me-2" data-v-4e551842=""></i>1-800-672-0624</a><div data-v-4e551842=""><a class="link-success" href="mailto:global.direct@csuglobal.edu" data-v-4e551842=""><i class="bi bi-envelope me-2" data-v-4e551842=""></i>global.direct@csuglobal.edu</a></div></div>

        <h2 class="mt-5">Request Information</h2>
        <p class="lead"><strong>Simply fill out the form below and one of our Enrollment Counselors will be in touch!</strong></p>
        <div class="col-lg-6">
                        <form id="rfiformfull" class="form" action="https://csuglobal.edu/handle_leads" method="POST">

                            <input type="hidden" name="LeadSource" value="GlobalDirect" />
                            
                            <input type="hidden" name="00NF0000008WZsI" value="GlobalDirect" />
                            <div class="mb-3">


                            <label class="form-label visually-hidden" for="FirstName">First Name</label>
                                <input type="text" name="FirstName" class="form-control" placeholder="First Name" value="" required />
                            </div>
                            <div class="mb-3">


                            <label class="form-label visually-hidden" for="LastName">Last Name</label>
                                <input type="text" name="LastName" class="form-control" placeholder="Last Name" value="" required />
                            </div>
                            <div class="mb-3">


                            <label class="form-label visually-hidden" for="Email">Email</label>
                                <input type="text" name="Email" class="form-control" placeholder="Email" value="" required />
                            </div>
                            <div class="mb-3">


                            <label class="form-label visually-hidden" for="Phone">Phone</label>
                                <input type="text" name="Phone" class="form-control" placeholder="Phone" value="" required />
                            </div>

                            <div class="text-center">

                            <button id="rfi_submit" class="btn btn-primary rfi-submit" type="submit">Learn More </button>
                            </div>
                        </form>
                    <p class="disclaimer mt-3">By submitting this form, I agree that representatives of CSU Global may contact me about educational services via email, phone, or text message including automated technology. Message and data rates may apply.</p>
        </div>
    </div><!--end row-->
  </div><!--end container -->
  </div><!--end section-->
</section>
</template>

<script>
export default {
    name: 'RFIForm',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form,
.section {
    margin-top:2rem;
}

</style>
