<template>
	<container>
		<div class="d-flex justify-content-end"></div>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 row">
					<div class="col-sm-9">
						<label for="inputPassword" class="col-sm-12 col-form-label"
							>رقم الفعالية
						</label>
						<div class="col-sm-12">
							<input type="text" class="form-control" v-model="effectiveness_number" />
						</div>
					</div>
				</div>
			</div>

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
							<option value="0">دورة</option>
							<option value="1">رحلة</option>
					
				
						
						</select>
					</div>
		
				</div></div>
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
	created() {
			this.basicdata();
		},
		methods: {

		
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(
						`api/course/show?course_id=${this.$route.query.q}`,
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
						this.informats = res.data.data.PersonCourse;
							this.effectiveness_number = res.data.data.Course.effectiveness_number;				
							this.effectiveness_name = res.data.data.Course.effectiveness_name;				
							this.funded_side = res.data.data.Course.funded_side;				
							this.date = res.data.data.Course.date;				
							this.start = res.data.data.Course.start;				
							this.end = res.data.data.Course.end;				
							this.supervisor = res.data.data.Course.supervisor;				
							this.supervisor_cost = res.data.data.Course.supervisor_cost;				
							this.number_of_effectiveness = res.data.data.Course.number_of_effectiveness;				
							this.cost = res.data.data.Course.cost;				
							this.total_cost = res.data.data.Course.total_cost;				
							this.notes = res.data.data.Course.notes;				
							this.source_of_income = res.data.data.Course.activity_type;				
					})
					.catch((e) => {
						console.log(e);
					});
			},

			source() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/course/update",
						{
							course_id:this.$route.query.q,
							effectiveness_number: this.effectiveness_number,
							effectiveness_name: this.effectiveness_name,
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
