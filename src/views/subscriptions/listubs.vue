<template>
          <container>

  <div class="d-flex back mt-5 h-100 flex-column">
    <table class="table table-bordered">
      <thead>
        <tr>
          
          <th scope="col"> <input type="checkbox" v-model="selectAll"> </th>
          <th scope="col">الاسم</th>
          <th scope="col">رقم المستفيد</th>
          <th scope="col">نوع الاشتراك</th>
          <th scope="col">قيمة الاشتراك</th>
          <th scope="col">حالة الطباعة</th>
          <th scope="col">تاريخ الاشتراك</th>
          <th scope="col">تاريخ الطباعة</th>
       
        </tr>
      </thead>
      <tbody v-for="informat in informats" :key="informat.id">
        <tr>
          <input type="checkbox" class="mt-3" :value="informat.beneficiary_id" v-model="selcted">
          <th scope="row">{{informat.beneficiary_name}}</th>
          <th scope="row">{{informat.affiliate_no}}</th>
          <th v-if="informat.subscription_type == 1 ">غير مجاني</th>
          <th v-else-if="informat.subscription_type == 0 "> مجاني</th>
          <th> {{informat.price_subscription}}</th>
          <th scope="row" v-if="informat.is_printed == 1 "><svg width="22" height="22" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37 75C16.5649 75 0 58.2113 0 37.5C0 16.7888 16.5649 0 37 0C57.4351 0 74 16.7888 74 37.5C74 58.2113 57.4351 75 37 75ZM37 67.5C44.8504 67.5 52.3793 64.3393 57.9304 58.7132C63.4814 53.0871 66.6 45.4565 66.6 37.5C66.6 29.5435 63.4814 21.9129 57.9304 16.2868C52.3793 10.6607 44.8504 7.5 37 7.5C29.1496 7.5 21.6207 10.6607 16.0696 16.2868C10.5186 21.9129 7.4 29.5435 7.4 37.5C7.4 45.4565 10.5186 53.0871 16.0696 58.7132C21.6207 64.3393 29.1496 67.5 37 67.5ZM33.3111 52.5L17.612 36.5887L22.8438 31.2863L33.3111 41.895L54.2383 20.6812L59.4738 25.9838L33.3111 52.5Z" fill="#83A033 "/>
</svg>
</th>
          <th scope="row" v-if="informat.is_printed == 0 "></th>
          <th scope="row">{{informat.subscription_date}}</th>        
            <th scope="row">{{informat.printing_date}}</th>        
        </tr>
      </tbody>
    </table>
  
       <div><router-link class="btn nw w-25"  :to="{name:'print', query:{q:selcted }}">  طباعة</router-link></div>  
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
      selcted: [],  


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
          `api/subscription/index`, {
            headers: {
              Authorization: "Bearer " + token,
            },
             params:{
            per_page : 3500,
 
          }
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
      
  computed: {
    selectAll: {
      get() {
        if (this.informats && this.informats.length > 0) { // A informats array exists with at least one item
          let allChecked = true;
          for (const user of this.informats) {
            if (!this.selcted.includes(user.id)) {
              allChecked = false; // If even one is not included in array
            }
            
            // Break out of loop if mismatch already found
            if(!allChecked) break;
          }
          return allChecked;
        }
        return false;
      },
      set(value) {
        const checked = [];
        if (value) {
          this.informats.forEach((user) => {
            checked.push(user.id);
          });
        }
        this.selcted = checked;
      }
    },
  }
};
</script>
