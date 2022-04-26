<template>
  <div class="heade">
    {{title}}
  </div>
  <container>
    <div class="row py-3">
      <div class="form-group col-md-6">
        <label for="name">الاسم</label>
        <input v-model="district" class="form-control" id="name" type="text">
      </div>
      <div class="form-group col-md-6">
        <label>المحافظة</label>
        <!--<input v-model="governorate_id" class="form-control" id="gover" type="text">-->
        <select v-model="governorate_id" class="form-control">
          <option selected disabled>اختر</option>
          <option v-for="(gov, index) in governorates" :key="index" :value="gov.id">{{gov.governorate}}</option>
        </select>
      </div>
      <div class="form-group col-md-12 mt-4">
        <button @click.prevent="save()" class="btn mx-2">حفظ</button>
        <router-link :to="{ name: 'settings.districts.index'}" class="btn btn-danger">رجوع</router-link>
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
          .get(`api/settings/districts/show?id=${this.$route.query.q}`,
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
            this.district = res.data.district.district;
            this.id = res.data.district.id;
            this.governorate_id = res.data.district.governorate_id;
            this.title = "الإعدادات | تعديل منطقة";
          })
          .catch((e) => {
            console.log(e);
          });
    }

    axios.get('/api/settings/districts/data', {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(res => {
      this.governorates = res.data.governorates;
    }).catch(err => {
      console.log(err)
    })
  },
  data() {
    return {
      district: null,
      governorate_id: null,
      governorates: [],
      id: null,
      title: "الإعدادات | اضافة منطقة",
    }
  },
  methods: {
    save() {
      const token = sessionStorage.getItem("token");

      axios
          .post(
              "api/settings/districts/store",
              {
                district: this.district,
                governorate_id: this.governorate_id,
                id: this.id,

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
            title: "تمت الحفظ  بنجاح ",
            showConfirmButton: false,
            timer: 1500,
          })
          .then(() => {
            this.$router.push({name: "settings.districts.index"});
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
