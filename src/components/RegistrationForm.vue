<template>
    <div class="registration-form section" id="register">
          <div class="container">
                    <div class="row mt-sm-5 justify-content-center">
                        <div class="col-lg-8">
                            <h2>Register</h2>
                <form @submit.prevent="submitForm">
                    <div class="row">


                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" v-model="form.firstName">
                        </div>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" v-model="form.lastName">
                        </div>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Date of Birth" aria-label="Date of Birth" v-model="form.dob">
                        </div>

                    </div><!--end form row-->

                    <div class="row">
                        
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Email" aria-label="Email" v-model="form.email">
                        </div>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Telephone" aria-label="Telephone" v-model="form.telephone">
                        </div>
                        <div class="col-sm-4">

                        </div>
                    </div><!--end form row-->
                   
                    <div class="row">
                        <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="Address" aria-label="Address" v-model="form.address">
                        </div>
                    </div><!--end form row-->
                        


                    <div class="row">

                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="City" aria-label="City" v-model="form.city">
                        </div>
                        <div class="col-sm-4">
                        <select class="form-select" aria-label="State" v-model="form.state">
                            <option value="State" disabled>State</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                            <option value="">N/A</option>

                        </select>
                        </div>

                        
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Postal Code" aria-label="Postal Code" v-model="form.postalCode">
                        </div>

                    </div><!--end form row-->

                    <div class="row">
                        <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="Country" aria-label="Country" v-model="form.country">
                        </div>                        
                        <div class="col-sm-4">
                        </div>
                        <div class="col-sm-4">
                        </div>

                        </div><!--end form row-->

<!--                     
                    <div class="row">

                         <div class="col-sm-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="form.citizen" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    US Citizen
                                </label>
                                </div>
                        </div>

                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div> -->

                            <!--</div>--><!--end form row-->
                    <button class="btn btn-primary">Register For Portal</button>




                </form>

                        </div><!--end col-->



                </div><!--end row-->
            </div><!--end contain-->
        
    
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'RegistrationForm',
    props: {

  },
  data(){
        return{
            form: {
                firstName: null,
                lastName: null,
                telephone: null,
                email: null,
                dob: null,
                address: null,
                city: null,
                state: "State",
                country: null,
                postalCode: null,
                citizen: false,    
            }
        }
    },
    methods:{
        submitForm(){
            axios.post('/contact', this.form)
                 .then((res) => {
                     //Perform Success Action
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form .row {
  margin-bottom:1rem;
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
</style>
