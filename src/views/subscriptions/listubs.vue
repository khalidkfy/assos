<template>
          <container>

  <div class="d-flex back mt-5 h-100 flex-column">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">الاسم</th>
          <th scope="col">الرقم</th>
          <th scope="col">النوع</th>
          <th scope="col">الحالة</th>
          <th scope="col">السنة</th>
          <th scope="col">من</th>
          <th scope="col">الى</th>
        </tr>
      </thead>
      <tbody v-for="informat in informats" :key="informat.id">
        <tr>
          <input type="checkbox" class="mt-3" :value="informat.beneficiary_id" v-model="checkedNames">
          <th scope="row">{{informat.beneficiary_name}}</th>
          <th scope="row">{{informat.id}}</th>
          <th scope="row">{{informat.subscription_type}}</th>
          <th scope="row">{{informat.subscription_date}}</th>
          <th scope="row">{{informat.printing_date}}</th>
          <th scope="row">{{informat.end_date}}</th>        
        </tr>
      </tbody>
    </table>
       <div><router-link class="btn nw w-25"  :to="{name:'print', query:{q:checkedNames }}">  طباعة</router-link></div>  
  </div>
          </container>

</template>
<style scoped>
.btn{
  color: white !important;
   text-decoration: none;}
table {
  text-align: center;
}

</style>
<script>

import axios from "axios";
import container from '@/components/containers/container.vue';

	export default {
                  components: { container },
  name: "personal",
  data() {
    return {
      year: "2022",
      informats: [],
      checkedNames: []

    };
  },

  created() {
    this.basicdata();
  },
  methods: {
    basicdata() {
      const token = sessionStorage.getItem("token");

      axios
        .get(
          `api/subscription/index`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.informats = res.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
