<template>
	<container>
		<div class="d-flex justify-content-end">
			<router-link class="btn float-left ms-3" :to="{ name: 'addman' }">
				اضافة شخص
			</router-link>
		</div>
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
							v-model="source_of_income"
						>
							<option selected>عمل خاص</option>
							<option>راتب تقاعد</option>
							<option>وزارة التنمية الاجتماعية</option>
							<option>وكالة الغوث للاجئين</option>
							<option>جمعية خيرية اهلية /دولية-1</option>
							<option>جمعية خيرية اهلية /دولية-2</option>
							<option>جمعية خيرية اهلية /دولية-3</option>
							<option>جمعية خيرية اهلية /دولية-4</option>
							<option>جمعية خيرية اهلية /دولية-5</option>
							<option>جمعية خيرية اهلية /دولية-6</option>
							<option>املاك وعقارات مدرة للدخل</option>
							<option>مساعدات شهرية/اسرى</option>
							<option>مساعدات شهرية/جرحى</option>
							<option>مساعدات شهرية/شهداء</option>
							<option>كفالات ايتام</option>
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
			};
		},

		methods: {
			source() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/source/store",
						{
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
						this.$router.push({ name: "showsource" });
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
<style scoped>
	.form-control,
	.form-select,
	textarea {
		background-color: #f5f8fa;
	}
</style>
