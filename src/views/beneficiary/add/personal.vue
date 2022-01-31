<template>
	<div
		class="tab-pane fade show active"
		id="pills-home"
		role="tabpanel"
		aria-labelledby="pills-home-tab"
	>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 mt-4 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم المستفيد
					</label>
					<div class="col-sm-10">
						<input
							type="number"
							class="form-control"
							v-model="affiliate_no"
							required
						/>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 mt-4 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الاسم </label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="name" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الهوية </label>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="id_number" required />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">التصنيف</label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="classe"
						>
							<option>A</option>
							<option>B</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">العام</label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="year"
						>
							<option>2021</option>
							<option>2022</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الجنس </label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="gender"
						>
							<option>ذكر</option>
							<option>أنثى</option>
						</select>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المحافظة</label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="governorate"
						>
							<option>غزة</option>
							<option>الشمال</option>
							<option>خانيونس</option>
							<option>دير البلح</option>
							<option>رفح</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الحالة الاجتماعية</label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="social_status"
						>
							<option>اعزب</option>
							<option>متزوج</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الحي</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="district" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>تاريخ الميلاد</label
					>
					<div class="col-sm-10">
						<input type="date" class="form-control" v-model="birth_date" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الهاتف</label>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="phone_number" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">العنوان</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="address" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم القريب</label
					>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="near_number" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم الجوال</label
					>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="mobile_number" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>اسم الزوج
					</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="wife_name" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>هوية الزوج
					</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="wife_identity" />
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>عدد الافراد
					</label>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="number_of_people" />
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row flex-column">
					<label for="inputPassword" class="col-sm-12 col-form-label">المؤهل</label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="qualification"
						>
							<option>اقل من ثانوي</option>
							<option>ثانوي</option>
							<option>دبلوم</option>
							<option>بكالوريس</option>
							<option>دراسات عليا</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">التخصص</label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="specialty"
						>
							<option>عربي</option>
							<option>انجليزي</option>
							<option>صحة</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المواطنة</label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="citizenship"
						>
							<option>مواطن</option>
							<option>لاجئ</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>العمل الحالي
					</label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="current_work"
						>
							<option>مزارع</option>
							<option>حكومة</option>
							<option>خاص</option>
							<option>أخرى</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>العمل السابق</label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="previous_work"
						>
							<option>مزارع</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>اضف صورة</label
					>
					<div class="col-sm-10">
						<input type="file" @change="uploadFile" ref="file" />
					</div>
				</div>
			</div>
			{{ file }}

			<div class="row justify-content-center">
				<button type="submit" class="btn w-25 mt-4" v-on:click.prevent="upload">
					اضافة
				</button>
			</div>

			<!-- النهاية -->
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "personal",
		data() {
			return {
				id_number: "",
				name: "",
				affiliate_no: "",
				mobile_number: "",
				governorate: "",
				phone_number: "",
				gender: "",
				year: "",
				birth_date: "",
				number_of_people: "",
				citizenship: "",
				classe: "",
				wife_identity: "",
				wife_name: "",
				previous_work: "",
				current_work: "",
				specialty: "",
				qualification: "",
				social_status: "",
				district: "",
				address: "",
				near_number: "",
				file: null,
			};
		},

		methods: {
			uploadFile() {
				this.file = this.$refs.file.files[0];
			},

			upload() {
				const token = sessionStorage.getItem("token");
				let formData = new FormData();
				formData.append("id_image", this.file);
				formData.append("id_number", this.id_number);
				formData.append("name", this.name);
				formData.append("affiliate_no", this.affiliate_no);
				formData.append("mobile_number", this.mobile_number);
				formData.append("governorate", this.governorate);
				formData.append("phone_number", this.phone_number);
				formData.append("gender", this.gender);
				formData.append("birth_date", this.birth_date);
				formData.append("number_of_people", this.number_of_people);
				formData.append("citizenship", this.citizenship);
				formData.append("class", this.classe);
				formData.append("wife_identity", this.wife_identity);
				formData.append("wife_name", this.wife_name);
				formData.append("current_work", this.current_work);
				formData.append("specialty", this.specialty);
				formData.append("qualification", this.qualification);
				formData.append("year", this.year);
				formData.append("social_status", this.social_status);
				formData.append("district", this.district);

				formData.append("address", this.address);
				formData.append("near_number", this.near_number);

				axios
					.post(
						"api/beneficiary/store",
						formData,
						{
							headers: {
								Authorization: "Bearer " + token,
								"content-type": "multipart/form-data",
							},
						}
					)
					.then((res) => {
						console.log(res.data);
						// const token = res.data.data.token;
						sessionStorage.setItem("af1", res.data.data.id);
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
		background-color: whitesmoke;
	}
</style>
