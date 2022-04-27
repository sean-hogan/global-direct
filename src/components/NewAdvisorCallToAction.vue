<template>
<section class="advisor-call-to-action section bg-light" aria-labelledby="advisor-call-to-action">

    <div class="container px-4 py-5 text-center"  data-aos="fade" data-aos-duration="1000" data-aos-once="true">
       <div class="row justify-content-center">
            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Get Started Now!</h2>
                <p>Enrolling in classes with CSU Global Direct takes less than 15 minutes. Get started here:</p>
                    <router-link to="/get-started#register" class="btn btn-success mt-4">Register</router-link>
                <!-- <p>(Normal business hours: 7am-5pm M-F MST)</p> -->
            </div>
            
            <div class="col-sm-4 text-center" style="background-color:#f3f3f3; padding:20px;">
                <div id="rfifull" class="bl5 br5">
                    <h2>Ready To Learn More?</h2>
                    <p>If you have any questions about CSU Global Direct, please call <a class="link-success" href="tel:1-800-672-0624">1-800-672-0624</a> to speak with an advisor, or email:</p>
                    <a class="btn btn-outline-success mt-4" href="mailto:global.direct@csuglobal.edu"><i class="bi bi-envelope text-success" /> global.direct@csuglobal.edu</a>

                    
                </div>
            </div>

            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Prefer To Chat Online?</h2>
                
                        <p>Click the button below to chat with a CSU Global Direct advisor:</p>

                        <button class="btn btn-outline-success mt-4" onclick="window.open('https://home-c28.incontact.com/incontact/chatclient/chatclient.aspx?poc=ee9f5f2d-2bdc-41ed-8eaf-15961d11471c&bu=4598395&amp;P1=FirstName&amp;P2=LastName&amp;P3=first.last@company.com&amp;P4=555-555-5555','chatWindow','location=no,height=630,menubar=no,status=no,width=410',true); return false;">Click Here to Chat Live</button>           
                    
            </div>
        </div><!--End Row-->

    </div><!--end container-->
</section><!--end section-->
</template>

<script>


export default {
  name: 'NewAdvisorCallToAction',
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
