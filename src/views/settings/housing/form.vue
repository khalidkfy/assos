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
      <div class="form-group col-md-12 mt-4">
        <button @click.prevent="save()" class="btn mx-2">حفظ</button>
        <router-link :to="{ name: 'settings.housings.index'}" class="btn">رجوع</router-link>
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
          .get(`api/settings/housings/show?id=${this.$route.query.q}`,
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
            this.name = res.data.housing.name;
            this.id = res.data.housing.id;
            this.title = "الإعدادات | تعديل حيازة السكن";
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  data() {
    return {
      name: null,
      id: null,
      title: "الإعدادات | إضافة حيازة السكن",
    }
  },
  methods: {
    save() {
      const token = sessionStorage.getItem("token");

      axios
          .post(
              "api/settings/housings/store",
              {
                name: this.name,
                id: this.id
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
            this.$router.push({name: "settings.housings.index"});
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
