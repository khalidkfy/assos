<template>
	<div
		class="tab-pane fade"
		id="pills-fourth"
		role="tabpanel"
		aria-labelledby="pills-fourth-tab"
	>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">مصدر الدخل</label>
					<div class="col-sm-9">
						<select
						class="form-select"
						aria-label="Default select example"
						v-model="source_of_income">
							<option selected>عمل خاص</option>
							<option>راتب تقاعد </option>
							<option>وزارة التنمية الاجتماعية </option>
							<option>وكالة الغوث للاجئين</option>
							<option>جمعية خيرية اهلية /دولية-1 </option>
							<option>جمعية خيرية اهلية /دولية-2 </option>
							<option>جمعية خيرية اهلية /دولية-3 </option>
							<option>جمعية خيرية اهلية /دولية-4 </option>
							<option>جمعية خيرية اهلية /دولية-5 </option>
							<option>جمعية خيرية اهلية /دولية-6 </option>
							<option>املاك وعقارات مدرة للدخل </option>
							<option>مساعدات شهرية/اسرى </option>
							<option>مساعدات شهرية/جرحى </option>
							<option>مساعدات شهرية/شهداء </option>
							<option>كفالات ايتام </option>
							<option>اعالة الابناء الاقارب</option>
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
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				fllat: "",
				source_of_income: "",
				financial_value: "",
				income_source_details: "",
				in_kind_assistance: "",
				financial_evaluation: "",
				notes: "",
			};
		},

		methods: {
			source() {
				const token = sessionStorage.getItem("token");
				const af1 = sessionStorage.getItem("af1");
				axios
					.post(
						"api/sourcesofincome/store",
						{
							beneficiary_id: af1,
							source_of_income: this.source_of_income,
							financial_value: this.financial_value,
							income_source_details: this.income_source_details,
							in_kind_assistance: this.in_kind_assistance,
							financial_evaluation: this.financial_evaluation,
							notes: this.notes,
						},
						{
							headers: {
								Authorization: "Bearer " + token,
							},
						}
					)
					.then((res) => {
						console.log(res.data);
						// const token = res.data.data.token;
						// sessionStorage.setItem("token", token);
						// this.$router.push({ name: "dashboard" });
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
<style scoped>
	.form-control,
	.form-select,
	textarea {
		background-color: #f5f8fa;
	}
</style>
