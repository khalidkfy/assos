<template>
  <div class="heade">
    تعديل المساعدات
  </div>
  <container>
    <div class="d-flex justify-content-end">
      <!-- <router-link class="btn float-left ms-3" :to="{ name: 'addman' }">
        اضافة شخص
      </router-link> -->
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >رقم المشروع
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="project_number"/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label">النوع </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="type" >
              <option v-for="(t, index) in types" :key="index" :value="t.id">{{t.name}}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >اسم المشروع
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="project_name"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >الجهة الممولة
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="funded_side"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >تاريخ المشروع
          </label>
          <div class="col-sm-9">
            <input type="date" class="form-control" v-model="project_date"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >القيمة للشخص
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="value_per_person"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >العدد المتبرع به
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="donated_number"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >مبلغ المشروع
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="project_amount"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >الملاحظات
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="notes"/>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <button @click.prevent="source" class="btn w-25">اضافة</button>
      </div>
    </div>
  </container>
</template>
<script>
import axios from "axios";
import container from "@/components/containers/container.vue";

export default {
  components: {container},
  data() {
    return {
      project_number: "",
      project_name: "",
      funded_side: "",
      project_date: "",
      value_per_person: "",
      donated_number: "",
      project_amount: "",
      notes: "",
      type: "",
      types: [],
    };
  },

  created() {
    this.basicdata();
  },
  methods: {
    basicdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/aid/show?aid_id=${this.$route.query.q}`, {
            headers: {
              Authorization: "Bearer " + token,
            },

          })
          .then((res) => {
            this.project_number = res.data.data.Aid.project_number;
            this.project_name = res.data.data.Aid.project_name;
            this.funded_side = res.data.data.Aid.funded_side;
            this.project_date = res.data.data.Aid.project_date;
            this.value_per_person = res.data.data.Aid.value_per_person;
            this.donated_number = res.data.data.Aid.donated_number;
            this.project_amount = res.data.data.Aid.project_amount;
            this.notes = res.data.data.Aid.notes;
            this.type = res.data.data.Aid.type ? res.data.data.Aid.type.id : null;
            this.types = res.data.data.types;

          })
          .catch((e) => {
            console.log(e);
          });
    },

    source() {
      const token = sessionStorage.getItem("token");
      axios
          .post(
              "api/aid/update",
              {
                aid_id: this.$route.query.q,
                project_number: this.project_number,
                project_name: this.project_name,
                funded_side: this.funded_side,
                project_date: this.project_date,
                value_per_person: this.value_per_person,
                donated_number: this.donated_number,
                project_amount: this.project_amount,
                notes: this.notes,
                type: this.type,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then(() => {
            this.show();
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
            title: "تمت الاضافة بنجاح ",
            showConfirmButton: false,
            timer: 1500,
          })
          .then(() => {
            this.$router.push({name: "showaid"});
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
};
</script>
<style scoped>
.form-control,
.form-select,
textarea {
  background-color: #f5f8fa;
}
</style>
