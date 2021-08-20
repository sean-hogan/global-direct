<template>


<h3>Add A Course:</h3>
<form id="addCourseForm">
 

<div class="row">
  <div class="col-sm-4">

    <input type="text" class="form-control" v-model="courseInfo.courseTitle" id="courseTitle" placeholder="Course Title" />

    <input type="text" class="form-control" v-model="courseInfo.courseNumber" id="courseNumber" placeholder="Course Number" />

    <input type="text" class="form-control" v-model="courseInfo.coursePrice" id="price" placeholder="Price" />

    <input type="text" class="form-control" v-model="courseInfo.cardText" id="cardText" placeholder="Card Text" />

    <input type="text" class="form-control" v-model="courseInfo.creditHours" id="creditHours" placeholder="Credit Hours" />

    <input type="text" class="form-control" v-model="courseInfo.courseLevel" id="courseLevel" placeholder="Level" />

    <input type="text" class="form-control" v-model="tag" @keyup.,="addTag" id="courseSubjects" placeholder="Subject Tags" />
    <span v-for="tag in courseInfo.courseSubjects" :key="tag.index" class="badge bg-primary text-wrap p-2 m-2 ">
     {{ tag }}
    </span>

      <div class="form-check form-switch my-3">
      <input class="form-check-input" v-model="courseInfo.hasLectures" type="checkbox" id="hasLectures" checked>
      <label class="form-check-label" for="hasLectures">Has Lectures</label>
    </div>

    <div class="form-check form-switch mb-3">
      <input class="form-check-input" v-model="courseInfo.hasLabs" type="checkbox" id="hasLabs">
      <label class="form-check-label" for="hasLabs">Has Labs</label>
    </div>
  <label for="formFile" class="form-label mt-3">Card Image</label>
<input class="form-control mb-5" type="file" @change="uploadImage" id="formFile">
</div><!--end col-->

  <div class="col-sm-8">

    <textarea type="text" class="form-control" v-model="courseInfo.courseDescription" id="courseDescription" placeholder="Course Page Description" />

<div class="h-50">

    <quill-editor v-model:value="courseInfo.courseObjectives" id="courseObjectives" />
</div>


</div><!--end col-->
</div><!--end row-->

  <button @click.prevent="addCourse" class="btn btn-primary">Save</button>
  <button @click.prevent="clearForm" class="btn btn-secondary mx-4">Clear</button>

</form>

<!--------------------->

<h2 class="my-5">Catalog View::</h2>
<!--------------------->
 <div class="row text-center justify-content-center mb-5">
        <h2 class="display-3 mb-5">Find Your Future</h2>
        <div class="col-4">
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div><!--end row-->

<!--------------------->
    <div class="row card-wrapper row-cols-1 row-cols-3 g-4">
 <!--card-->
  <div v-for="course in courses" class="col" :key="course.courseNumber">
    <div class="card">
      <img :src="course.data().cardImageUrl" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{course.data().courseTitle}}</h5>
        <h6>${{course.data().coursePrice}}</h6>
        <p class="card-text">{{course.data().cardText}}</p>
        <router-link class="btn btn-outline-secondary mt-auto me-auto" :to="{ name: 'CourseTemplate', params: { id: course.data().courseNumber }}">More Info</router-link>
      </div>
    </div><!--end card-->
  <button @click="showModal(course)" class="btn btn-primary mt-3 me-3">Edit</button>
  <button @click="deleteCourse(course.id)" class="btn btn-danger mt-3">Delete</button>
  </div><!--end col-->
  

        
  </div><!--end card row-->

<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit {{courseInfo.courseTitle }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!------->
        <form>
<div class="row">
  <div class="col-sm-4">
  
    <input type="text" class="form-control" v-model="courseInfo.courseTitle" id="courseTitle" placeholder="Course Title" />
  
  
    <input type="text" class="form-control" v-model="courseInfo.courseNumber" id="courseNumber" placeholder="Course Number" />
  
  
    <input type="text" class="form-control" v-model="courseInfo.coursePrice" id="price" placeholder="Price" />
  
  
    <input type="text" class="form-control" v-model="courseInfo.cardText" id="cardText" placeholder="Card Text" />
  
  
    <input type="text" class="form-control" v-model="courseInfo.creditHours" id="creditHours" placeholder="Credit Hours" />
  
  
    <input type="text" class="form-control" v-model="courseInfo.courseLevel" id="courseLevel" placeholder="Level" />
  
  
<!-- <input type="text" class="form-control" v-model="tag" @keyup.,="addTag" id="courseSubjects" placeholder="Subject Tags" /> -->
    <span v-for="tag in courseInfo.courseSubjects" :key="tag.index" class="badge bg-primary text-wrap p-2 m-2 ">
     {{ tag }}
    </span>

      <div class="form-check form-switch mb-3">
      <input class="form-check-input" v-model="courseInfo.hasLectures" type="checkbox" id="hasLectures" checked>
      <label class="form-check-label" for="hasLectures">Has Lectures</label>
    </div>

    <div class="form-check form-switch mb-3">
      <input class="form-check-input" v-model="courseInfo.hasLabs" type="checkbox" id="hasLabs">
      <label class="form-check-label" for="hasLabs">Has Labs</label>
    </div>
  
    <label for="formFile" class="form-label">Card Image I guess</label>
    <input class="form-control" type="file" id="formFile">

  </div><!--end col-->


  
  <div class="col-sm-8">

  
    <textarea type="text" class="form-control" v-model="courseInfo.courseDescription" id="courseDescription" placeholder="Course Page Description" />
  
    <div class="h-50">
    <quill-editor v-model:value="courseInfo.courseObjectives" id="courseObjectives" />
    </div>
  
  </div><!--end col-->


</div><!--end row-->
      </form>

<!--------------->

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateCourse()" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div><!--End Edit Modal-->


</template>

<script>
import {fb, db} from '../firebase';
import { Modal } from 'bootstrap'
import { quillEditor, Quill } from 'vue3-quill'



export default {
    name: 'CatalogEdit',
    components: {
      quillEditor,
      },
    props: {

  },
  data(){
      return{
          courses: [],

          courseInfo: {
            courseTitle:null,
            courseNumber:null,
            coursePrice:null,
            cardText:null,
            cardImageUrl:null,
            creditHours:null,
            courseLevel:null,
            courseSubjects:[],
            courseDescription:null,
            courseObjectives:null,
            hasLectures:null,
            hasLabs:null,

          },
          activeItem:null,
          tag:null,

      }
  },
  methods: {
      //dbwatcher
      watcher(){
        db.collection("courses").onSnapshot((querySnapshot) => {
            this.courses = [];
            querySnapshot.forEach((doc) => {
                this.courses.push(doc);
            });
         });
      },
      //add course function
      addCourse(){
          db.collection("courses").add(this.courseInfo)
        .then((docRef) => {
            this.watcher();
            console.log("Document written with ID: ", docRef.id);
            this.clearForm();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
      },
      //reset button
      clearForm() {
        Object.assign(this.$data, this.$options.data.apply(this));
             },
      //delete btn
      deleteCourse(doc) {
        if(confirm('Are you super-sure ?')){
          db.collection("courses").doc(doc).delete().then(() => {
              console.log("Document successfully deleted!");
              this.watcher();
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
        }else{
      //my linter doesn't like this empty function
        }
      },
      //edit modal functions
       showModal(course){
        this.myModal = new Modal(document.getElementById('editModal'), {})
        this.myModal.show()
        this.courseInfo = course.data();
        this.activeItem = course.id;
    },
        
        updateCourse() {
            db.collection("courses").doc(this.activeItem).update(this.courseInfo)
            .then(() => {
                this.myModal.hide()
                console.log("Document successfully updated!");
                this.watcher();
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        addTag() {
          this.courseInfo.courseSubjects.push(this.tag.slice(0, -1));
          this.tag = "";

        },

        uploadImage(e) {
          let file = e.target.files[0];
          // Create a root reference
          var storageRef = fb.storage().ref('courses/' + file.name);
          let uploadTask = storageRef.put(file);

          uploadTask.on('state_changed', 
              (snapshot) => {
                //observing progress
               
              }, 
              (error) => {
                // Handle unsuccessful uploads
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                  this.courseInfo.cardImageUrl = downloadURL;
                  console.log('File available at', downloadURL);
                });
              }
            ); //end uploadtask

        },


  },
  created(){
      db.collection("courses").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.courses.push(doc);
    });
});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.modal-dialog {
  max-width:80%
}

input, textarea {
  margin-bottom:10px;
}
</style>
