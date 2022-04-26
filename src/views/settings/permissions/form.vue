<template>
  <div class="heade">
    {{title}}
  </div>
  <container>
    <div class="row py-3">
      <div class="form-group col-md-6">
        <label for="name">الاسم</label>
        <input v-model="name" class="form-control" id="name" type="text">
      </div>
      <div class="col-md-12 mt-4">
        <label for="check_all">تحديد الكل</label>
        <input v-model="check_all" id="check_all" type="checkbox">
      </div>
      <div class="col-md-12 mt-1">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>عرض</th>
                <th>إضافة</th>
                <th>تعديل</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>المستفيدين</td>
                <td><input type="checkbox" v-model="rules.beneficiary_show"></td>
                <td><input type="checkbox" v-model="rules.beneficiary_create"></td>
                <td><input type="checkbox" v-model="rules.beneficiary_edit"></td>
                <td><input type="checkbox" v-model="rules.beneficiary_delete"></td>
              </tr>
              <tr>
                <td>2</td>
                <td>الاشتراكات</td>
                <td><input type="checkbox" v-model="rules.subscriptions_show"></td>
                <td><input type="checkbox" v-model="rules.subscriptions_create"></td>
                <td><input type="checkbox" v-model="rules.subscriptions_edit"></td>
                <td><input type="checkbox" v-model="rules.subscriptions_delete"></td>
              </tr>
              <tr>
                <td>3</td>
                <td>الدورات</td>
                <td><input type="checkbox" v-model="rules.courses_show"></td>
                <td><input type="checkbox" v-model="rules.courses_create"></td>
                <td><input type="checkbox" v-model="rules.courses_edit"></td>
                <td><input type="checkbox" v-model="rules.courses_delete"></td>
              </tr>
              <tr>
                <td>4</td>
                <td>المساعدات</td>
                <td><input type="checkbox" v-model="rules.helps_show"></td>
                <td><input type="checkbox" v-model="rules.helps_create"></td>
                <td><input type="checkbox" v-model="rules.helps_edit"></td>
                <td><input type="checkbox" v-model="rules.helps_delete"></td>
              </tr>
              <tr>
                <td>5</td>
                <td>التقارير</td>
                <td><input type="checkbox" v-model="rules.reports_show"></td>
                <td><input type="checkbox" v-model="rules.reports_create"></td>
                <td><input type="checkbox" v-model="rules.reports_edit"></td>
                <td><input type="checkbox" v-model="rules.reports_delete"></td>
              </tr>
              <tr>
                <td>6</td>
                <td>الإعدادات</td>
                <td><input type="checkbox" v-model="rules.settings_show"></td>
                <td><input type="checkbox" v-model="rules.settings_create"></td>
                <td><input type="checkbox" v-model="rules.settings_edit"></td>
                <td><input type="checkbox" v-model="rules.settings_delete"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="form-group col-md-12 mt-4">
        <button @click.prevent="save()" class="btn mx-2">حفظ</button>
        <router-link :to="{ name: 'settings.permissions.index'}" class="btn">رجوع</router-link>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/containers/container.vue";
import axios from "axios";

export default {
  mounted() {
    if (this.$route.query.q) {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/settings/permissions/show?id=${this.$route.query.q}`,
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
            this.name = res.data.permission.name;
            this.id = res.data.permission.id;

            let permission = res.data.permission;

            permission.rules.forEach((rule) => {
              this.rules[rule.name] = true;
            })

            this.title = "الإعدادات | تعديل صلاحية";
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  data() {
    return {
      name: null,
      check_all: false,
      rules: {
        beneficiary_show: false,
        beneficiary_create: false,
        beneficiary_edit: false,
        beneficiary_delete: false,
        subscriptions_show: false,
        subscriptions_create: false,
        subscriptions_edit: false,
        subscriptions_delete: false,
        courses_show: false,
        courses_create: false,
        courses_edit: false,
        courses_delete: false,
        helps_show: false,
        helps_create: false,
        helps_edit: false,
        helps_delete: false,
        reports_show: false,
        reports_create: false,
        reports_edit: false,
        reports_delete: false,
        settings_show: false,
        settings_create: false,
        settings_edit: false,
        settings_delete: false,
      },
      id: null,
      title: "الإعدادات | إضافة صلاحية",
    }
  },
  methods: {
    save() {
      const token = sessionStorage.getItem("token");

      axios
          .post(
              "api/settings/permissions/store",
              {
                name: this.name,
                id: this.id,
                rules: this.rules
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
            this.$router.push({name: "settings.permissions.index"});
          });
    },
    failed() {
      this.$swal.fire({
        icon: "error",
        title: "هناك خطأ ما !",
        text: "تأكد من المدخلات المطلوبة",
      });
    }
  },
  watch: {
    check_all(v) {
      for (let key in this.rules) {
        this.rules[key] = v;
      }
    }
  },
  components: {container},
}
</script>

<style scoped>

</style>
