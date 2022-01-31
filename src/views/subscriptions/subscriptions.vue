<template>
<container>
	
				<div class="d-flex flex-column align-items-center">
					<div class="row">
						<div class="col-md-6">
							<div class="m-3 mt-5 row">
								<label for="inputPassword" class="col-sm-4 col-form-label">
									الحالة
								</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" v-model="subscription_type" />
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-3 mt-5 row">
								<label for="inputPassword" class="col-sm-4 col-form-label">
									تاريخ الدفع
								</label>
								<div class="col-sm-8">
									<input type="date" class="form-control" v-model="subscription_date" />
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-3 mt-5 row">
								<label for="inputPassword" class="col-sm-4 col-form-label">
									تاريخ الطباعة
								</label>
								<div class="col-sm-8">
									<input type="date" class="form-control" v-model="printing_date" />
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-3 mt-5 row">
								<label for="inputPassword" class="col-sm-4 col-form-label">
									تاريخ الانتهاء
								</label>
								<div class="col-sm-8">
									<input type="date" class="form-control" v-model="end_date" />
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
import container from '@/components/containers/container.vue';
	export default {
          components: { container },

		name: "addemp",

		data() {
			return {
				subscription_type: "",
				subscription_date: "",
				printing_date: "",
				end_date: "",
				benid: this.$route.query.q,
			};
		},
		
		methods: {

			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subscription/store",
						{
							beneficiary_id: this.benid,
							subscription_type: this.subscription_type,
							subscription_date: this.subscription_date,
							printing_date: this.printing_date,
							end_date: this.end_date,
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
