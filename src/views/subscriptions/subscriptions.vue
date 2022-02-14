	
<template>
	<container>
	
		<div class="d-flex flex-column ">
			<!-- <router-link
			class="links btn"
			:to="{ name: 'editsub', query: { q: benid} }"
			style="color: black"
		>
			تعديل</router-link
		> -->
			<div class="row">
				<div class="col-md-12">
					<div class="m-3 mt-5 row">
						<label for="inputPassword" class="col-sm-4 col-form-label">
							حالة الاشتراك
						</label>
						<div class="col-sm-8">
								<select
							class="form-select"
							aria-label="Default select example"
							v-model="subscription_type"
						>
							<option value="0">مجاني</option>
							<option value="1">مدفوع</option>
						
						</select>

						</div>
					</div>
				</div>

		<small>
			  {{ err }}
</small>
			</div>
			<div class="row justify-content-center">

	<button class="w-25 btn btn-primary mt-5" @click.prevent="upload(); upload2();">
				اضافة مشترك
			</button>
			</div>
		
		</div>
	</container>
</template>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";
	export default {
		components: { container },

		name: "addemp",

		data() {
			return {
				subscription_type: "",
				subscription_date: "",
				printing_date: "",
				end_date: "",
				err: "",
				
				benid: this.$route.query.q,
			};
		},

		methods: {
			upload() {
				const token = sessionStorage.getItem("token");
				axios .post(
						"api/subscription/store",
						{
							beneficiary_id: this.benid,
							subscription_type: this.subscription_type,
							subscription_date: this.subscription_date,
							printing_date: this.printing_date,
							end_date: this.end_date,
						},
						{
							headers:{
								Authorization: "Bearer " + token,
							},
						}
					)
					.then((res) => {
						console.log(res.data);
					})
					.catch((error) => {
							console.log(error.data);
												this.err = error.message;

					});
			},

				upload2() {
				const token = sessionStorage.getItem("token");
				axios.post(
						"api/subscription/togglepayment",
						{
							subscription_id: this.benid,
						},
						{
							headers: {
								Authorization: "Bearer " + token,
							},
						}
					)
					.then((res) => {
						console.log(res.data);
					})
					.catch(() => {
					});
			},
			
		},
	};
</script>
