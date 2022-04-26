<template>
  <div class="heade">
    الإعدادات | المناطق
  </div>
  <container>
    <router-link :to="{ name: 'settings.districts.create'}" class="btn">اضافة منطقة</router-link>
    <div class="d-flex justify-content-center align-items-start mt-5 h-100">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th>الاسم</th>
          <th>المحافظة</th>
          <th scope="col">الاجراءات</th>
        </tr>
        </thead>
        <tbody v-for="(district , index ) in districts" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <th>{{ district.district }}</th>
          <th>{{ district.governorate ? district.governorate.governorate : '' }}</th>
          <th class="d-flex justify-content-between">
            <router-link :to="{ name: 'settings.districts.edit', query: { q: district.id } }" class="icons"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
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
      districts: [],
      row: null,
      page: null,
      per: null,
    }
  },
  methods: {
    basicdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(
              `api/settings/districts`,
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
            this.districts = res.data.districts.data;
            this.nums = res.data.districts.last_page;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  components: {container},
}
</script>

<style scoped>

</style>
