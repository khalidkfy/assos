<template>
<div class="heade">
تعديل الاشتراكات
	</div>
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
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>السنة السابقة
						</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="last_year" />
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>رسوم الاشتراك
						</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="subscription_fees" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>رسوم الطلب
						</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="order_fees" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>وصف الاشتراك
						</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="description" />
						</div>
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
				start_subscription: "",
				end_subscription: "",
				code: "",
				last_year: "",
				subscription_fees: "",
				order_fees: "",
				description: "",
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
						`api/subsc/show?subsc_id=${this.$route.query.q}`,
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
						console.log(res.data.data);
						this.start_subscription = res.data.data.Subsc.start_subscription;
						this.end_subscription = res.data.data.Subsc.end_subscription;
						this.code = res.data.data.Subsc.code;
						this.last_year = res.data.data.Subsc.last_year;
						this.subscription_fees = res.data.data.Subsc.subscription_fees;
						this.order_fees = res.data.data.Subsc.order_fees;
						this.description = res.data.data.Subsc.description;
					
					})
					.catch((e) => {
						console.log(e);
					});
			},
			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subsc/update",
						{
							subsc_id:this.$route.query.q,
							start_subscription: this.start_subscription,
							end_subscription: this.end_subscription,
							code: this.code,
							last_year: this.last_year,
							subscription_fees: this.subscription_fees,
							order_fees: this.order_fees,
							description: this.description,
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
						title: "تمت اضافة اشتراك بنجاح ",
						showConfirmButton: false,
						timer: 1500,
					})
					.then(() => {
						this.$router.push({ name: "listSubs" });
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
	};
</script>
