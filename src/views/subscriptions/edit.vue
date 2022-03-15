<template>
<div class="heade">
تعديل الاشتراكات
	</div>
	<container>
	
		<div class="d-flex flex-column align-items-center">
			<div class="row">
				<div class="col-md-6">
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

	
		
			</div>
			<button class="w-25 btn btn-primary mt-5" @click.prevent="upload">
				اضافة مشترك
			</button>
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
				benid: this.$route.query.q,
			};
		},

		methods: {
			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subscription/update",
						{
							subscription_id: this.benid,
							subscription_type: this.subscription_type,
						
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
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
