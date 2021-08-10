<template>
  <div class="admin container">
    <div class="row">
      <AdminNavbar />
      <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="pt-3 pb-2 mb-3">
          <router-view />

        </div>

      </div>
      <!--end col other than navbar-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>


<script>
// @ is an alias to /src
import AdminNavbar from "@/components/AdminNavbar.vue";

export default {
  name: "Admin",
  components: {
    AdminNavbar,
  },
};
</script>

<style scoped lang="scss">


</style>
