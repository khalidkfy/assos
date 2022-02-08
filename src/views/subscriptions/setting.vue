<template>
	<container>
	
<div class="mt-3">

	<div class="d-flex justify-content-center mt-1">
          
        	<table class="table table-bordered w-50">
		
				<tbody v-for="item in informats" :key="item.id">
					
					<tr><th v-if="item.id == 1">رسوم الاشتراك</th>
						<th v-if="item.id == 2">رسوم الطلب</th>
						<th scope="row">{{item.value}}</th>
						

						
					</tr>
				
				</tbody>
				
			</table>
        </div>
		

</div>
	<div class="d-flex justify-content-end mt-5">
			<router-link class="btn w-25"  :to="{name:'setting2', }">  تعديل</router-link>
		
		</div>
	</container>
</template>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		components: { container },
		name: "personal",
		data() {
			return {
                informats:[]
            };
		},

		created() {
			this.basicdata();
		},
		methods: {
        	basicdata() {
				const token = sessionStorage.getItem("token");

				axios
					.get(`api/setting/index`, {
						headers: {
							Authorization: "Bearer " + token,
						}, params:{
            per_page : 150
          }
					})
					.then((res) => {
						console.log(res.data);
						this.informats = res.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},

            
        },
	};
</script>
