<template>
<div class="heade">
		اضافة دورة
	</div>
	<container>
		<div class="d-flex justify-content-end"></div>
		<div class="row">
				<div class="col-md-6">
				<div class="m-3 row">
				<label for="inputPassword" class="col-sm-12 col-form-label"
						>النشاط</label
					>
					<div class="col-sm-9">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="source_of_income"
						>
							<option value="1">دورة</option>
							<option value="2">رحلة</option>
					
				
						
						</select>
					</div>
		
				</div></div>
		
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>اسم الفعالية
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="effectiveness_name" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المشرف الممول
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="funded_side" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>التاريخ
					</label>
					<div class="col-sm-9">
						<input type="date" class="form-control" v-model="date" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>وقت البداية
					</label>
					<div class="col-sm-9">
						<input type="time" class="form-control" v-model="start" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>وقت النهاية
					</label>
					<div class="col-sm-9">
						<input type="time" class="form-control" v-model="end" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">المشرف </label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="supervisor" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>تكلفة المشرف
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="supervisor_cost" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>عدد المتفاعلين
					</label>
					<div class="col-sm-9">
						<input
							type="text"
							class="form-control"
							v-model="number_of_effectiveness"
						/>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>التكلفة
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="cost" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>التكلفة الإجمالية
					</label>
					<div class="col-sm-9">
						<input type="text" class="form-control" v-model="total_cost" />
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
				effectiveness_number: "",
				effectiveness_name: "",
				course: 0,
				trip: 0,
				funded_side: "",
				date: "",
				start: "",
				end: "",
				supervisor: "",
				supervisor_cost: "",
				number_of_effectiveness: "",
				cost: "",
				total_cost: "",
				notes: "",
				source_of_income:""
			};
		},

		methods: {
			source() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/course/store",
						{
							effectiveness_number: this.effectiveness_number,
							effectiveness_name: this.effectiveness_name,
							course: this.course ? 1 : 0,
							trip: this.trip ? 1 : 0,
							funded_side: this.funded_side,
							date: this.date,
							start: this.start,
							end: this.end,
							supervisor: this.supervisor,
							supervisor_cost: this.supervisor_cost,
							number_of_effectiveness: this.number_of_effectiveness,
							cost: this.cost,
							total_cost: this.total_cost,
							notes: this.notes,
							activity_type:this.source_of_income
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
						title: "تمت الاضافة  بنجاح ",
						showConfirmButton: false,
						timer: 1500,
					})
					.then(() => {
						this.$router.push({ name: "showcorse" });
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
