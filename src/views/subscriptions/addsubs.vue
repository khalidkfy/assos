<template>
	<container>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>تاريخ البداية
						</label>
						<div class="col-sm-12">
							<input type="date" class="form-control" v-model="start_subscription" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>تاريخ الانتهاء
						</label>
						<div class="col-sm-12">
							<input type="date" class="form-control" v-model="end_subscription" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label">الكود </label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="code" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row m-2">
					<label for="flexCheckDefault2" class="col-sm-5 col-form-label"
						>نوع الاشتراك
					</label>
					<div class="col-sm-9 mt-2">
						<select v-model="subscription_type" class="form-select">
							<option value="1">مجاني</option>
							<option value="0">غير مجاني</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<button @click.prevent="upload" class="btn mx-4">تسجيل اشتراك</button>
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
				subscription_type:"" ,
				start_subscription: "",
				end_subscription: "",
				code: "",
			};
		},
		methods: {
			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subsc/store",
						{
							start_subscription: this.start_subscription,
							subscription_type: this.subscription_type,
							end_subscription: this.end_subscription,
							code: this.code,
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
