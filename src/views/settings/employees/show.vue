<template>
  <div class="heade">
    الإعدادات | عرض موظف
  </div>
  <container>
    <div class="row py-3">
      <div class="col-md-7">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
                class="nav-link active"
                id="show-emp-tab"
                data-bs-toggle="pill"
                data-bs-target="#show-emp"
                type="button"
                role="tab"
                aria-controls="show-emp"
                aria-selected="true"
            >
              عرض الموظف
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
                class="nav-link"
                id="actions-tab"
                data-bs-toggle="pill"
                data-bs-target="#actions"
                type="button"
                role="tab"
                aria-controls="actions"
                aria-selected="true"
            >
              الأحداث
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active"
               id="show-emp"
               role="tabpanel"
               aria-labelledby="show-emp-tab">
            <div class="table-responsive">
              <table class="table">
                <tr>
                  <td>الاسم</td>
                  <td>{{ emp.name }}</td>
                </tr>
                <tr>
                  <td>اسم المستخدم</td>
                  <td>{{ emp.username }}</td>
                </tr>
                <tr>
                  <td>تاريخ الميلاد</td>
                  <td>{{ emp.birth_date }}</td>
                </tr>
                <tr>
                  <td>الجنس</td>
                  <td>{{ emp.gender }}</td>
                </tr>
                <tr>
                  <td>بداية العمل</td>
                  <td>{{ emp.beginning_work }}</td>
                </tr>
                <tr>
                  <td>نهاية العمل</td>
                  <td>{{ emp.ending_work }}</td>
                </tr>
                <tr>
                  <td>الوصف</td>
                  <td>{{ emp.description }}</td>
                </tr>
                <tr>
                  <td>الصلاحية</td>
                  <td>{{ emp.permission ? emp.permission.name : '' }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="tab-pane fade"
               id="actions"
               role="tabpanel"
               aria-labelledby="actions-tab">
            aactions
          </div>
        </div>
      </div>
      <div class="col-md-5 text-center">
        <div>
          <img src="../../../assets/img/no-user.png" alt="" class="img-fluid ">
          <h3>{{ emp.name }}</h3>
          <p class="mt-3">{{ emp.description }}</p>
        </div>
      </div>
      <div class="form-group col-md-12 mt-4">
        <router-link :to="{ name: 'settings.employees.index'}" class="btn">رجوع</router-link>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/containers/container.vue";
import axios from "axios";

export default {
  mounted() {
    const token = sessionStorage.getItem("token");
    if (this.$route.query.q) {
      axios
          .get(`api/settings/employees/show?id=${this.$route.query.q}`,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then((res) => {
            this.emp = res.data.emp;
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  data() {
    return {
      emp: {
        name: null,
        username: null,
        birth_date: null,
        gender: null,
        beginning_work: null,
        ending_work: null,
        description: null,
        permission: null,
      }
    }
  },
  methods: {

  },
  components: {container},
}
</script>

<style scoped>

</style>
