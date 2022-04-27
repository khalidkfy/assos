<template>
  <div class="heade">
    الإعدادات | الأحداث
  </div>
  <container>
    <div class="d-flex justify-content-center align-items-start mt-5 h-100">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th>الموظف</th>
          <th>المكان</th>
          <th>الحدث</th>
          <th>الوقت</th>
        </tr>
        </thead>
        <tbody v-for="(log,index) in logs" :key="index">
        <tr>
          <th>{{ log.id }}</th>
          <th>{{ log.user ? log.user.name : 'غير معروف' }}</th>
          <th>{{ log.place }}</th>
          <th :class="log.event">{{ getEvent(log.event) }}</th>
          <th>{{ log.time }}</th>
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
      logs: [],
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
              `api/settings/logs`,
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
            this.logs = res.data.logs.data;
            this.nums = res.data.logs.last_page;
          })
          .catch((e) => {
            console.log(e);
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
            this.$router.push({name: "settings.logs.index"});
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
  .created {
    color: #009879;
  }
  .updated {
    color: #4992F2;
  }
  .deleted {
    color: crimson;
  }
</style>
