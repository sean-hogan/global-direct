<template>
<div class="advisor-call-to-action section bg-light">
    <div class="container px-4 py-5 text-center">
       <div class="row">
            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Get Started Now!</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text :</p>
                    <router-link to="/get-started" class="btn btn-outline-primary">Register</router-link>
                <!-- <p>(Normal business hours: 7am-5pm M-F MST)</p> -->
            </div>
            <div class="col-sm-4 text-center" style="background-color:#f3f3f3; padding:20px;">
                <div id="rfifull" class="bl5 br5">
                    <h2>Ready to learn more?</h2>
                    <p><strong>Simply fill out the form below and one of our Enrollment Counselors will be in touch!</strong></p>

                    <!--rfi form-->
                    <div id="wrapper_rfiformfull" class="tblr5">
                        <form id="rfiformfull" class="rfiquickform form" action="" method="POST" novalidate="novalidate">
                            <p id="rfiformfull-message" class="clr msg">* Required Fields</p>
                            <input type="hidden" name="url" value="/request-information">
                            <input type="hidden" name="lead_source" value="web_rfi">

                            <input id="gclid" name="gclid" type="hidden" value="">
                            <input type="hidden" name="how_did_you_hear" value="">
                            
                             <input type="text" class="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name">
                             <input type="text" class="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name">
                             <input type="email" class="form-control" id="rfiEmail" aria-describedby="rfiEmail" placeholder="Email">
                             <input type="phone" class="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Phone">


                            <button id="rfi_submit" class="btn btn-primary rfi-submit my-3" type="submit" >Learn More</button>
                        </form>
                        <div class="clr"></div>
                    </div><!--end form wrapper-->

                    <p class="disclaimer">By submitting this form, I agree that representatives of CSU Global may contact me about educational services via email, phone, or text message including automated technology. Message and data rates may apply.</p>
                </div>
            </div>

            <div class="col-sm-4 text-center" style="padding:20px;">
                <h2>Prefer to chat online?</h2>
                
                        <p>Click the button blow to chat with an Enrollment Counselor.</p>
                        <p><a href="#" class="btn btn-secondary" onclick="window.open('https://home-c28.incontact.com/incontact/chatclient/chatclient.aspx?poc=fe583801-12a3-41b5-84b9-f949034df884&amp;bu=4598395&amp;P1=FirstName&amp;P2=LastName&amp;P3=first.last@company.com&amp;P4=555-555-5555','chatWindow','location=no,height=630,menubar=no,status=no,width=410',true); return false;">Click Here to Chat Live</a></p>            
            </div>
        </div><!--End Row-->

    </div><!--end container-->
    </div><!--end section-->
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

.btn-outline-primary:hover {
    color:#eee;
}
</style>
