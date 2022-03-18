<template>
	<div
		class="tab-pane fade show active"
		id="pills-home"
		role="tabpanel"
		aria-labelledby="pills-home-tab"
	>
	
		<div class="row">
			<div class="separator">معلومات شخصية</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الهوية <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="id_number" required 
						@change="inform"
						/>
						<small class="text-danger">
							{{ errid }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 mt-4 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الاسم<span class="text-danger">*</span>
					</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="name" />
						<small class="text-danger">
							{{ errname }}
						</small>
					</div>
				</div>
			</div>
				<div class="col-md-6">
				<div class="m-3 mt-4 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم المستفيد <span class="text-danger">*</span>
					</label>
					<div class="col-sm-10">
						<input
							type="number"
							class="form-control"
							v-model="affiliate_no"
							required
						/>
						<small class="text-danger">
							{{ erraffili }}
						</small>
					</div>
				</div>
			</div>
		
					<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الجنس <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="gender"
						>
							<option value="1">ذكر</option>
							<option value="2">أنثى</option>
						</select>
						<small class="text-danger">
							{{ errgender }}
						</small>
					</div>
				</div>
			</div>
				<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>تاريخ الميلاد  <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="date" class="form-control" v-model="birth_date" />
						<small class="text-danger">
							{{ errbirth }}
						</small>
					</div>
				</div>
			</div>
				<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الحالة الاجتماعية <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="social_status"
						>
							<option>اعزب</option>
							<option>متزوج</option>
							<option>اخرى</option>
						</select>
						<small class="text-danger">
							{{ errsocial }}
						</small>
					</div>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>التصنيف <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="classe"
						>
							<option>A</option>
							<option>B</option>
							<option>C</option>
							<option>D</option>
							<option>متوفي</option>
							<option>منقطع A</option>
							<option>منقطع B</option>
							<option>منقطع C</option>
							<option>منقطع E</option>
							<option>اخرى</option>
						</select>
						<small class="text-danger">
							{{ errclass }}
						</small>
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
<div class="separator">العنوان</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المحافظة <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="rec"
							@change="countr2"
						>
							<option v-for="item in informats" :key="item.id" :value="item.id">
								{{ item.governorate }}
							</option>
						</select>
						<small class="text-danger">
							{{ errgovern }}
						</small>
					</div>
				</div>
			</div>
		
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الحي<span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="district"
						>
							<option v-for="items in informats2" :key="items.id" :value="items.id">
								{{ items.district }}
							</option>
						</select>
						<small class="text-danger">
							{{ errdistrict }}
						</small>
					</div>
				</div>
			</div>
				<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>العنوان<span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="address" />
						<small class="text-danger">
							{{ ereaddres }}
						</small>
					</div>
				</div>
			</div>
<div class="separator">معلومات الاتصال</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم الجوال <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="mobile_number" />
						<small class="text-danger">
							{{ errphone }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الهاتف<span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="phone_number" />
						<small class="text-danger">
							{{ errphone }}
						</small>
					</div>
				</div>
			</div>

		
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم القريب<span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="near_number" />
						<small class="text-danger">
							{{ errnear }}
						</small>
					</div>
				</div>
			</div>
<div class="separator">معلومات العامة</div>


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
							<option>اخرى</option>
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
							<option>اخرى</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المواطنة<span class="text-danger">*</span></label
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
						<small class="text-danger">
							{{ errcitizn }}
						</small>
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
							<option>اخرى</option>
						</select>
					</div>
				</div>
			</div>

			<div class="col-md-10">

			

					<div class=" row flex-row me-5 my-4">
					<label for="img2" class="col-sm-3 col-form-label btn"> اضف صورة البطاقة </label>
					<div class="col-sm-1">
						<input
							type="file"
							class="btn d-none"
							id="img2"
							@change="uploadFile2()
							
							"
							ref="file2"
						/>

					</div>



					<label for="img3" class="col-sm-4 btn col-form-label ">اضف صورة شخصية </label>
					<div class="col-sm-1">
						<input
							type="file"
							class="btn d-none"
							id="img3"
							@change="
							uploadFile3()
							
							
							"
							ref="file3"
						/>
					</div>
						<label for="img" class="col-sm-3 col-form-label btn"
						>اضف صورة الهوية </label
					>
					<div class="col-sm-1">
						<input
							type="file"
							class="btn d-none"
							id="img"
							@change="uploadFile()
							
							"
							ref="file"
						/>

					</div>
				
				</div>

			</div>
			<div class="container">
	<div class="row">
		<div class="col">
					<img v-if="show2" :src="show2" alt="" class="h-75  w-50 mx-4">
				</div>
				<div class="col">
					<img v-if="show3" :src="show3" alt="" class="h-75  w-50 mx-4">
				</div>
				
				<div class="col">
					<img v-if="show" :src="show" alt="" class="h-75  w-50 mx-4">
				</div>
			</div>
			</div>
		
			
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
				gender: 1,
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
				file2: null,
				file3: null,
				informats: [],
				informats2: [],
				rec: "",
				ereaddres: "",
				errbirth: "",
				errcitizn: "",
				errdistrict: "",
				erraffili: "",
				errclass: "",
				errgender: "",
				errgovern: "",
				errimage: "",
				errid: "",
				errname: "",
				errnear: "",
				errnumof: "",
				errphone: "",
				errqualification: "",
				errsocial: "",
				errspecialty: "",
				erryear: "",
				show:"",
				show2: "",
				show3: "",
			};
		},
		created() {
			this.countr();
			this.countr2();
		},
		methods: {

			uploadFile() {
				this.file = this.$refs.file.files[0];
				this.show  = URL.createObjectURL(this.file);
			},
			uploadFile2() {
				this.file2 = this.$refs.file2.files[0];
								this.show2  = URL.createObjectURL(this.file2);

			},
			uploadFile3() {
				this.file3 = this.$refs.file3.files[0];
								this.show3  = URL.createObjectURL(this.file3);

			},
		
			countr() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/dropdown/index`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data);
						this.informats = res.data;
						this.num_plac = res.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
			countr2() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/dropdown/show?governorate_id=${this.rec}&district_id=1`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data);
						this.informats2 = res.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
			inform(){
					const token = sessionStorage.getItem("token");
				axios
					.get(`api/return/returnid?id_number=${this.id_number}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data);
						this.birth_date = res.data.data.birth_date;
						this.name = res.data.data.name;
						this.gender = res.data.data.gender;
						this.address = res.data.data.address;
						
						
					})
					.catch((e) => {
						console.log(e);
					});
			},

			upload() {
				const token = sessionStorage.getItem("token");
				let formData = new FormData();
				formData.append("id_image", this.file);
				formData.append("affiliate_image", this.file2);
				formData.append("image", this.file3);
				formData.append("id_number", this.id_number);
				formData.append("name", this.name);
				formData.append("affiliate_no", this.affiliate_no);
				formData.append("mobile_number", this.mobile_number);
				formData.append("governorate_id", this.rec);
				formData.append("governorate", this.rec);
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
				formData.append("district_id", this.district);
				formData.append("address", this.address);
				formData.append("near_number", this.near_number);

				axios.post("api/beneficiary/store", formData, {
						headers: {

							Authorization: "Bearer " + token,

							"content-type": "multipart/form-data",
						},
					})
					.then((res) => {
						console.log(res.data);
						sessionStorage.setItem("af1", res.data.data.id);
						this.showtrue();
					})
					.catch((error) => {
						this.failed();
						console.log(error.response.data.errors);
						this.err = error.response.data.errors.name;
						this.errname = error.response.data.errors.name;
						this.ereaddres = error.response.data.errors.address;
						this.errbirth = error.response.data.errors.birth_date;
						this.errcitizn = error.response.data.errors.citizenship;
						this.errdistrict = error.response.data.errors.district_id;
						this.erraffili = error.response.data.errors.affiliate_no;
						this.errclass = error.response.data.errors.class;
						this.errgender = error.response.data.errors.gender;
						this.errgovern = error.response.data.errors.governorate_id;
						this.errimage = error.response.data.errors.id_image;
						this.errid = error.response.data.errors.id_number;
						this.errnear = error.response.data.errors.near_number;
						this.errnumof = error.response.data.errors.number_of_people;
						this.errphone = error.response.data.errors.phone_number;
						this.errqualification = error.response.data.errors.qualification;
						this.errsocial = error.response.data.errors.social_status;
						this.errspecialty = error.response.data.errors.specialty;
						this.erryear = error.response.data.errors.year;
					});
			},
			showtrue() {
				this.$swal
					.fire({
						position: "top-end",
						icon: "success",
						title: "تمت الاضافة بنجاح ",
						showConfirmButton: false,
						timer: 1500,
					})
					.then(() => {
																	this.$router.push({ name: "lists" });

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
		background-color: whitesmoke;
	}
</style>
