<template>

<!--------------------->

<div class="container">

<h2 class="my-5">Add A Start Date::</h2>
<div class="row">
<div class="col">

<DatePicker v-model="selectedDate.date" />
  <button @click.prevent="addDate" class="btn btn-primary ms-3">Add +</button>
</div>

<div class="col">
  <h3>Enrollment Dates</h3>
  <div v-for="date in startDates" :key="date.index">
    {{dayjs(date).format('YYYY-MM-DD')}}
      <a @click="deleteDate(date)" class="mx-3">Delete</a>

  </div>
        <a @click="deleteDates()" class="btn btn-danger mt-3">Delete ALL</a>
</div><!--end col-->
</div><!--end row-->
</div><!--end container-->

</template>

<script>
import {fb, db} from '../firebase';
import { DatePicker } from 'v-calendar';
import dayjs from 'dayjs'




export default {
    name: 'EnrollmentEdit',
    components: {
      DatePicker,
      },
    props: {

  },
  data(){
      return{
          dayjs,
          startDates: [],          
          selectedDate:{
            date: null,
          },     
      }
  },
  methods: {
      //dbwatcher
      watcher(){
         db.collection("startDates").onSnapshot((querySnapshot) => {
            this.startDates = [];
            querySnapshot.forEach((doc) => {
                doc = new Date(doc.data().date.seconds*1000);
                this.startDates.push(doc);
             this.startDates.sort((a,b)=>a.getTime()-b.getTime());

            });
         });
      },
        //add enrollment date from datepicker
        addDate() {
          db.collection("startDates").add(this.selectedDate)
        .then((docRef) => {
            this.watcher();
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        },

        //delete btn
      deleteDate(date) {
        db.collection("startDates").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let datedoc = new Date(doc.data().date.seconds*1000);
                if (datedoc.getTime() == date.getTime()){
                    doc.ref.delete();
                    console.log("Doc Deleted ID:", doc.id);
                    this.watcher();
                }

            });
        });
      },

        //delete all btn
      deleteDates() {
           if(confirm('Are you super-sure ?')){
               db.collection("startDates").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                        this.watcher();

                    });
                });
           }
      },



  },
  created(){
      db.collection("startDates").get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
              doc = new Date(doc.data().date.seconds*1000);
              this.startDates.push(doc);
                this.startDates.sort((a,b)=>a.getTime()-b.getTime());

          });
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
