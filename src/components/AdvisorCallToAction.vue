<template>
<section class="advisor-call-to-action section bg-light" aria-labelledby="advisor-call-to-action">

    <div class="container px-4 py-5"  data-aos="fade" data-aos-duration="1000" data-aos-once="true">
       <div class="row justify-content-center">

            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Get Started Now!</h2>
                <p>Enrolling in classes with CSU Global Direct takes less than 15 minutes. Get started here:</p>
                    <router-link to="/get-started#register" class="btn btn-success mt-4">Register</router-link>
                <!-- <p>(Normal business hours: 7am-5pm M-F MST)</p> -->
            </div>
            
            <div class="col-sm-4 text-center" style="background-color:#f3f3f3; padding:20px;">

                <!-- <h2>Ready to learn more?</h2>
                    <p><strong>Simply fill out the form below and one of our Enrollment Counselors will be in touch!</strong></p>
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
                    <p class="disclaimer mt-3">By submitting this form, I agree that representatives of CSU Global may contact me about educational services via email, phone, or text message including automated technology. Message and data rates may apply.</p> -->
                <div id="rfifull" class="bl5 br5">
                    <h2>Ready To Learn More?</h2>
                    <p>If you have any questions about CSU Global Direct, please call <a class="link-success" href="tel:1-800-672-0624">1-800-672-0624</a> to speak with an advisor, or email:</p>
                    <a class="btn btn-outline-success mt-4" href="mailto:global.direct@csuglobal.edu"><i class="bi bi-envelope text-success" /> global.direct@csuglobal.edu</a>

                    
                </div>
            </div>

            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Prefer To Chat Online?</h2>
                
                        <p>Click the button below to chat with a CSU Global Direct advisor:</p>

                        <button class="btn btn-outline-success mt-4" onclick="window.open('https://home-c28.incontact.com/incontact/chatclient/chatclient.aspx?poc=fe583801-12a3-41b5-84b9-f949034df884&amp;bu=4598395&amp;P1=FirstName&amp;P2=LastName&amp;P3=first.last@company.com&amp;P4=555-555-5555','chatWindow','location=no,height=630,menubar=no,status=no,width=410',true); return false;" data-v-ec45c200="">Click Here to Chat Live</button>        
                    
            </div>
        </div><!--End Row-->

    </div><!--end container-->
</section><!--end section-->
</template>

<script>


export default {
  name: 'AdvisorCallToAction',
  props: {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-control {
  margin-bottom:5px;
}

</style>
