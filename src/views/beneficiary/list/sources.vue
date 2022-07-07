<template>
	<container>
	
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>مصدر الدخل</label
					>
					<div class="col-sm-9">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="income_id"
						>
              <option v-for="inc in incomes" :key="inc.id" :value="inc.id">{{inc.income}}</option>
						</select>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>القيمة المالية للدخل
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="financial_value" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>تفصيل مصدر الدخل
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="income_source_details" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المساعدة العينية
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="in_kind_assistance" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>التقييم المالي
						
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="financial_evaluation" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الملاحظات


					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="notes" />
					</div>
				</div>
			</div>

			<div class="row justify-content-center mt-4">
				<button @click.prevent="source" class="btn w-25">اضافة</button>
			</div>
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
				fllat: "",
				source_of_income: "",
				financial_value: "",
				income_source_details: "",
				in_kind_assistance: "",
				financial_evaluation: "",
				notes: "",
        income_id: null,
        incomes: [],
			};
		},

		methods: {
			source() {
				const token = sessionStorage.getItem("token");

				axios
					.post(
						"api/sourcesofincome/store",
						{
							beneficiary_id: this.$route.query.q,
							source_of_income: this.source_of_income,
							financial_value: this.financial_value,
							income_source_details: this.income_source_details,
							in_kind_assistance: this.in_kind_assistance,
							financial_evaluation: this.financial_evaluation,
							notes: this.notes,
              income_id: this.income_id,
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
						title: "تمت الاضافة بنجاح ",
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
    mounted() {

      const token = sessionStorage.getItem("token");

      axios
          .get(
              "api/sourcesofincome/data",
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then((res) => {
            this.incomes =res.data.incomes
          })
          .catch(() => {
            this.failed();
          });
    }
  };
</script>
<style scoped>
	.form-control,
	.form-select,
	textarea {
		background-color: #f5f8fa;
	}
</style>
