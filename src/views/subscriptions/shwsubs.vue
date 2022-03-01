<template>
	<container>

		<div class="row align-items-center justify-content-center">
			<div class="col-11 my-5">
				<table class="table ">
					<thead>
						<tr class="text-center">
							          <th scope="col"> <input type="checkbox" v-model="selectAll"> </th>

							<th scope="col" >رقم المستفيد</th>
							<th scope="col">الرقم</th>
							<th scope="col">الاسم</th>
							<th scope="col"> التكلفة</th>
							<th scope="col">رقم الجوال</th>
							<th scope="col">العام</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center" v-for="item in informats" :key="item.id">
							<input type="checkbox" class="mt-3" :value="item.beneficiary_id" v-model="selcted">
							<td>{{ item.affiliate_no }}</td>
							<td>{{ item.beneficiary_id }}</td>
							<td>{{ item.beneficiary_name }}</td>
							<td>{{ item.cost}}</td>
							<td>{{ item.mobile_number }}</td>
							<td>{{ item.year }}</td>
			
						</tr>
					</tbody>
				</table>
				
			</div>
			       <div><router-link class="btn nw w-25 mx-5"  :to="{name:'print', query:{q:selcted }}">  طباعة</router-link></div>  

		</div>
	</container>
</template>

<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		components: { container },
		data() {
			return {
				year: "",
				name: "",
				affiliate: "",
				id_nu: "",
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
					.get(`api/subsc/show?subsc_id=${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
						params: {
							per_page: 3500,
						},
					})
					.then((res) => {
						console.log(res.data.data);
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
