<template>
  <div class="heade">
    الإعدادات | الوظائف
  </div>
  <container>
    <router-link v-if="hasPermission('emps_create')" :to="{ name: 'settings.jobs.create'}" class="btn">إضافة وظيفة</router-link>
    <div class="d-flex justify-content-center align-items-start mt-5 h-100">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th>الاسم</th>
          <th scope="col">الإجراءات</th>
        </tr>
        </thead>
        <tbody v-for="(job,index) in jobs" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <th>{{ job.name }}</th>
          <th class="d-flex">
            <router-link v-if="hasPermission('emps_edit')" :to="{ name: 'settings.jobs.edit', query: { q: job.id } }" class="icons"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
            <a v-if="hasPermission('emps_delete')" @click.prevent="deleteItem(job.id)" href="#" class="icons"><i class="fa fa-trash" aria-hidden="true"></i></a>
          </th>

        </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <input
            type="number"
            class="form-control m-2"
            style="width: 40%"
            v-model="page"
            @change="basicdata"
        />
        <small class="mx-2">عدد الصفحات {{ nums }}</small>
      </div>
      <div class="d-flex align-items-center">
        <select
            type="number"
            class="form-control m-2"
            style="width: 100%"
            v-model="per"
            @change="basicdata"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/containers/container.vue";
import axios from "axios";

export default {
  mounted() {
    this.basicdata();
  },
  data() {
    return {
      jobs: [],
      row: null,
      page: 1,
      per: 10,
      nums: null,
    }
  },
  methods: {
    basicdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(
              `api/settings/jobs`,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
                params: {
                  page: this.page,
                  per_page: this.per,
                },
              }
          )
          .then((res) => {
            console.log(res.data);
            this.jobs = res.data.jobs.data;
            this.nums = res.data.jobs.last_page;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deleteItem(id) {
      const token = sessionStorage.getItem("token");

      axios
          .post(
              `api/settings/jobs/delete`,
              {
                id: id
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then(() => {
            this.basicdata();
          })
          .catch(() => {
            this.failed();
          });
    },
    show() {
      this.$swal
          .fire({
            position: "top-end",
            icon: "success",
            title: "تمت الحفظ  بنجاح ",
            showConfirmButton: false,
            timer: 1500,
          })
          .then(() => {
            this.$router.push({name: "settings.jobs.index"});
          });
    },
    failed() {
      this.$swal.fire({
        icon: "error",
        title: "هناك خطأ ما !",
        text: "",
      });
    },
  },
  components: {container},
}
</script>

<style scoped>

</style>
