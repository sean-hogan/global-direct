<template>
    <div class="registration-form section" id="register" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
          <div class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                        <h2 id="registration-form-header">Register</h2>
                        <p class="lead">All fields are required to register</p>


                <form @submit.prevent="submitForm" aria-labelledby="registration-form-header">
                    <div class="form-block">
                    <h3>Account Information</h3>
                    <p class="text-muted">We'll use this to set up your account</p>
                    <div class="row">


                        <div class="col-sm-4">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control" placeholder="e.g. Terry" aria-label="First name"  id="firstName" v-model="form.firstName" required aria-required="true">
                        </div>
                        <div class="col-sm-4">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" placeholder="e.g. Pratchett" aria-label="Last name" id="lastName" v-model="form.lastName" required aria-required="true">
                        </div>
                        <div class="col-sm-4">
                        <label for="dateOfBirth" class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" id="dateOfBirth" aria-label="Date of Birth" v-model="form.dob" required aria-required="true">
                        </div>

                    </div><!--end form row-->

                    <div class="row">
                        
                        <div class="col-sm-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="e.g. terry@example.com" aria-label="Email" id="email" v-model="form.email" required aria-required="true">
                        </div>

                        <div class="col-sm-4">
                        <label for="confirmEmail" class="form-label">Confirm Email</label>
                        <input @blur="validateEmail" type="confirmEmail" class="form-control" placeholder="e.g. terry@example.com" aria-label="Email" id="confirmEmail" v-model="confirmEmail" required aria-required="true" aria-describedby="email-confirm-error-desc">
                        <small class="text-danger" v-if="emailError" id="email-confirm-error-desc"><span class="visually-hidden">Error: </span>Email does not match</small>
                        </div>

                        <div class="col-sm-4">
                        <label for="telephone" class="form-label">Telephone</label>
                        <input type="tel" class="form-control" placeholder="###-###-####" aria-label="Telephone" id="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="form.phone" required aria-required="true" v-maska="'###-###-####'">
                        </div>
                        
                    </div><!--end form row-->
                    </div>


    <div class="form-block">

                    <h3>Location Information</h3>
                    <p class="text-muted">To make sure you get your transcripts</p>
                   
                    <div class="row">
                        <div class="col-sm-8">
                            <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" placeholder="e.g. 123 Martin Luther King Blvd." aria-label="Address" id="address" v-model="form.address" required aria-required="true">
                        </div>
                    </div><!--end form row-->
                        


                    <div class="row">

                    <div class="col-sm-4">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" placeholder="Your City" aria-label="City" id="city" v-model="form.city" required aria-required="true">
                        </div>
                        <div class="col-sm-4">
                            <label for="state" class="form-label">State</label>
                        <select class="form-select" aria-label="State" id="state" v-model="form.state" required aria-required="true">
                            <option v-for="state in states" :value="state.id" :key="state.id">{{state.description}}</option>
                        </select>
                        </div>

                        
                        <div class="col-sm-4">
                        <label for="postalCode" class="form-label">Postal Code</label>
                        <input type="text" class="form-control" placeholder="#####" aria-label="Postal Code" id="postalCode" v-model="form.zip" required aria-required="true" v-maska="'#####'">
                        </div>

                    </div><!--end form row-->
                        

                    </div>
                    <div class="form-block">


                    <h3>Demographic Information</h3>
                    <p class="text-muted">We want to make sure we are doing a good job supporting diversity, equity, and inclusion</p>

                    <div class="row">
                        <div class="col-sm-4">
                            <label for="country" class="form-label">Country</label>
                            <select class="form-select" aria-label="Country" id="country" v-model="form.country" required aria-required="true">
                                <option v-for="country in countries" :value="country.id" :key="country.id">{{country.description}}</option>
                            </select>
                        </div>                        
                        <div class="col-sm-4">

                            <label for="citizenship" class="form-label">Citizenship</label>                             
                            <select class="form-select" aria-label="Citizen" id="citizenship" v-model="form.citizenship" required aria-required="true">
                                <option v-for="citizenshipStatus in citizenshipStatuses" :value="citizenshipStatus.id" :key="citizenshipStatus.id">{{citizenshipStatus.description}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            
                             <label for="gender" class="form-label">Gender</label>                             
                            <select class="form-select" aria-label="gender" id="gender" v-model="form.gender" required aria-required="true">
                                <option v-for="gender in genders" :value="gender.id" :key="gender.id">{{gender.description}}</option>
                            </select>
                            


                        </div>

                        </div><!--end form row-->

                        <div class="row">
                        <div class="col-sm-4">
                            <label for="ethnicity" class="form-label">Ethnicity</label>
                            <select class="form-select" aria-label="ethnicity" id="ethnicity" v-model="form.ethnicity" required aria-required="true">
                                <option v-for="ethnicity in ethnicities" :value="ethnicity.id" :key="ethnicity.id">{{ethnicity.description}}</option>
                            </select>
                        </div>                        
                        <div class="col-sm-4">

                            <label for="isHispanic" class="form-label">Hispanic/Latino</label>                             
                            <select class="form-select" aria-label="Citizen" id="isHispanic" v-model="form.isHispanic" required aria-required="true">
                                <option :value='true'>I am of Hispanic or Latino origins</option>
                                <option :value='false'>I am NOT of Hispanic or Latino origins</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            
                           

                        </div>

                        </div><!--end form row-->

                    </div>
           
                    <div class="text-center text-md-start">
                    <button :disabled="loading" class="btn btn-success">
                        <span v-if="loading" class="spinner mx-5"></span>
                        <span v-else>Submit Registration</span>
                        </button></div>




                </form>

                        </div><!--end col-->



                </div><!--end row-->
            </div><!--end contain-->
        
    
    </div><!---end section-->
    
<!-- Modal -->
<div class="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="registrationModalLabel">Error</h5>
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
      </div>
      <div class="p-3">

        There was an error with your submission
           <br />{{errorMessage}}
      </div>


      <div class="modal-footer">
          <!-- <a href="https://portal.csuglobal.edu/site/index"><button class="btn btn-primary">Log In to Portal</button></a> -->
        <button class="btn btn-secondary" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</div><!---end modal-->
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';
import { maska } from 'maska'



export default {
    name: 'RegistrationForm',
    directives: { maska },
    props: {

  },
  data(){
    return{
        form: {
            firstName: null,
            lastName: null,
            phone: null,
            email: null,
            dob: null,
            address: null,
            city: null,
            state: null,
            country: null,
            zip: null,
            citizenship: null,
            gender: null,
            ethnicity: null,
            isHispanic: null,
            startDate: null,    
        },
        states: [],
        countries: [],
        citizenshipStatuses: [],
        genders: [],
        ethnicities: [],
        startDates: [],
        myModal: null,
        tempUserData: null,
        loading: false,
        confirmEmail:null,
        emailError:null,
        displayValidationError:null,
        errorMessage:"",
        }
    },

    methods:{
        submitForm(){
            if (this.emailError) {
                this.errorMessage = `Your Emails don't match`;
                this.showModal();
            } else {
            this.loading = true;
            const headers = { "Content-Type": "application/json" };
            axios.post('https://portal.csuglobal.edu/direct-api/v1/student/create', this.form, {headers})
                 .then((res) => {
                     //Perform Success Action
                    console.log(res.data);
                    if (res.data.ok) {
                    this.tempUserData = res.data;
                    this.$router.push('/confirmation');
                    } else {
                        console.log("error!")
                        this.errorMessage = res.data.error;
                        this.loading=false;
                        this.showModal();
                    }                   
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                    console.log(error);
                    this.errorMessage = error;
                    this.loading=false;
                    this.showModal();
                 }).finally(() => {
                     //Perform action in always
                     this.loading=false;
                 });
            }
        },
        showModal(){
            this.myModal = new Modal(document.getElementById('registrationModal'), {})
            this.myModal.show()
        },
        closeModal(){
            this.myModal.hide()
        },
        validateEmail() {
           if(this.form.email === this.confirmEmail) {
               this.emailError = false;
           } else {
            this.emailError = true;
           }
        },
        
    },
    computed: {
        
    },
    
    created() {
        // get states from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/states")
        .then(response => this.states = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });

        // get countries from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/countries")
        .then(response => this.countries = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });

        // get citizenship statuses from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/citizenship-statuses")
        .then(response => this.citizenshipStatuses = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });

        // get enrollment dates from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/start-dates")
        .then(response => this.startDates = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });

        // get genders (lol)  from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/genders")
        .then(response => this.genders = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
        // get ethnicities lol (lol)  from portal api
        axios.get("https://portal.csuglobal.edu/direct-api/v1/options/ethnicities")
        .then(response => this.ethnicities = response.data)
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form .row {
  margin-bottom:2rem;
}
h2 {
  color: #9e1831;
  font-weight: 700;
}

h2:after {
    content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #dedede;
}

form .form-label {
    font-weight:600;
}

.spinner {
    content: url('../assets/833.gif');
    width:15px;
}

h3 {
    margin-top:2rem;
    font-size: 1.2rem;
    color:#18c9b9;
}

.form-block {
    margin-bottom:4rem;
}

</style>
