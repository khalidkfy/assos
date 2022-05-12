<template>
  <div class="heade">
    {{title}}
  </div>
  <container>
    <div class="row py-3">
      <div class="form-group col-md-4 my-3">
        <label for="name">الاسم</label>
        <input v-model="name" class="form-control" id="name" type="text">
      </div>
      <div class="form-group col-md-4 my-3">
        <label>اسم المستخدم</label>
        <input v-model="username" class="form-control" type="text">
      </div>
      <div class="form-group col-md-4 my-3">
        <label>كلمة المرور</label>
        <input v-model="password" class="form-control" type="password">
      </div>
      <div class="form-group col-md-6 my-3">
        <label>تاريخ الميلاد</label>
        <input v-model="birth_date" class="form-control" type="date">
      </div>
      <div class="form-group col-md-6 my-3">
        <label>الجنس</label>
        <select class="form-select" aria-label="Default select example" v-model="gender">
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>
      </div>
      <div class="form-group col-md-6 my-3">
        <label>بداية العمل</label>
        <input v-model="beginning_work" class="form-control" type="date">
      </div>
      <div class="form-group col-md-6 my-3">
        <label>نهاية العمل</label>
        <input v-model="ending_work" class="form-control" type="date">
      </div>
      <div class="form-group col-md-6 my-3">
        <label>الصلاحية</label>
        <select class="form-select" aria-label="Default select example" v-model="permission">
          <option v-for="(rule,index) in rules" :key="index" :value="rule.id">{{rule.name}}</option>
        </select>
      </div>
      <div class="form-group col-md-6 my-3">
        <label>الوصف</label>
        <select class="form-select" aria-label="Default select example" v-model="desc">
          <option v-for="(job,index) in descs" :key="index" :value="job.name">{{job.name}}</option>
        </select>
      </div>
      <div class="form-group col-md-12 mt-4">
        <button @click.prevent="save()" class="btn mx-2">حفظ</button>
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
                params: {
                  per_page: 3500,
                },
              }
          )
          .then((res) => {
            this.name = res.data.emp.name;
            this.id = res.data.emp.id;
            this.username = res.data.emp.username;
            this.password = res.data.emp.password;
            this.birth_date = res.data.emp.birth_date;
            this.gender = res.data.emp.gender;
            this.beginning_work = res.data.emp.beginning_work;
            this.ending_work = res.data.emp.ending_work;
            this.permission = res.data.emp.permission_id;
            this.desc = res.data.emp.description;
            this.title = "الإعدادات | تعديل موظف";
          })
          .catch((e) => {
            console.log(e);
          });
    }
    axios.get("api/settings/employees/data", {
      headers: {
        Authorization: "Bearer " + token,
      },

    }).then(res => {
      this.rules = res.data.rules;
      this.descs = res.data.descs;
    })
  },
  data() {
    return {
      name: null,
      id: null,
      username: null,
      password: null,
      birth_date: null,
      gender: null,
      beginning_work: null,
      ending_work: null,
      permission: null,
      desc: null,
      rules: [],
      descs: [],
      title: "الإعدادات | إضافة موظف",
    }
  },
  methods: {
    save() {
      const token = sessionStorage.getItem("token");

      let url = "api/settings/employees/store";

      if (this.$route.query.q) {
        url = `api/settings/employees/${this.$route.query.q}/update`;
      }

      axios
          .post(
              url,
                        {
                name: this.name,
                id: this.id,
                username: this.username,
                password: this.password,
                birth_date: this.birth_date,
                gender: this.gender,
                beginning_work: this.beginning_work,
                ending_work: this.ending_work,
                permission: this.permission,
                desc: this.desc,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then((res) => {
            if (res.data.status) {
              this.show();
            }
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
            this.$router.push({name: "settings.employees.index"});
          });
    },
    failed() {
      this.$swal.fire({
        icon: "error",
        title: "هناك خطأ ما !",
        text: "تأكد من المدخلات المطلوبة",
      });
    },
  },
  components: {container},
}
</script>

<style scoped>

</style>
