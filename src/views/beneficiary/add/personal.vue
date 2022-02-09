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
						>رقم المستفيد <span class="text-danger">*</span>
					</label>
					<div class="col-sm-10">
						<input
							type="number"
							class="form-control"
							v-model="affiliate_no"
							required
						/>
						<small class="text-danger ">
							 {{ erraffili }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 mt-4 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الاسم<span class="text-danger">*</span> </label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="name" />
						<small class="text-danger">
							 {{ errname }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الهوية <span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="id_number" required />
							<small class="text-danger">
							 {{ errid }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">التصنيف <span class="text-danger">*</span></label>
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
							<option> منقطع B</option>
							<option> منقطع C</option>
							<option> منقطع E</option>
						</select>
							<small class="text-danger">
							 {{ errclass }}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">العام <span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="year"
						>
							<option>2021</option>
							<option>2022</option>
						</select>
							<small class="text-danger">
							 {{ erryear}}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الجنس <span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example"
							v-model="gender"
						>
							<option>ذكر</option>
							<option>أنثى</option>
						</select>
							<small class="text-danger">
							 {{ errgender}}
						</small>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>المحافظة <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example" v-model="rec" @change="countr2">
							<option v-for="item in informats" :key="item.id" :value="item.id">{{item.governorate}}</option>
						</select>
							<small class="text-danger">
							 {{ errgovern}}
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
						</select>
							<small class="text-danger">
							 {{ errsocial}}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الحي<span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<select
							class="form-select"
							aria-label="Default select example" v-model="district">
							<option v-for="items in informats2" :key="items.id" :value="items.id">{{items.district}}</option>
						</select>
						<small class="text-danger">
							 {{ errdistrict}}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>تاريخ الميلاد <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="date" class="form-control" v-model="birth_date" />
						<small class="text-danger">
							 {{ errbirth}}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">الهاتف<span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="phone_number" />
							<small class="text-danger">
							 {{ errphone}}
						</small>
					</div>
				</div>
			</div>

			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">العنوان<span class="text-danger">*</span></label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="address" />
						<small class="text-danger">
							 {{ ereaddres}}
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
						<input type="number" class="form-control" v-model="near_number" />
						<small class="text-danger">
							 {{ errnear}}
						</small>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>رقم الجوال <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="number" class="form-control" v-model="mobile_number" />
												<small class="text-danger">
							 {{ errphone}}
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
							 {{ errcitizn}}
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
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>اضف صورة الهوية <span class="text-danger">*</span></label
					>
					<div class="col-sm-10">
						<input type="file" @change="uploadFile" ref="file" />
													      <img :src="show2" class="w-50 h-50 mt-3" />

					</div>
								<small class="text-danger">
							 {{ errimage}}
						</small>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>اضف صورة </label
					>
					<div class="col-sm-10">
						<input type="file" @change="uploadFile2" ref="file2" />
					</div>
							      <img :src="show" class="w-50 h-50 mt-3" />

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
				file2: null,
				informats:[],	
				informats2:[],
				rec:"",		
				ereaddres:'',			
				errbirth:'',			
				errcitizn:'',			
				errdistrict:'',			
				erraffili:'',			
				errclass:'',			
				errgender:'',			
				errgovern:'',			
				errimage:'',			
				errid:'',			
				errname:'',			
				errnear:'',			
				errnumof:'',			
				errphone:'',			
				errqualification:'',			
				errsocial:'',			
				errspecialty:'',			
				erryear:'',			
				show:'',			
				show2:'',			
			};
		},
	created() {
			this.countr();
			this.countr2();
		},
		methods: {
			uploadFile() {
				this.file = this.$refs.file.files[0];
			},
				uploadFile2() {
				this.file2 = this.$refs.file2.files[0];
			},
				uploadFile3() {
				this.show = URL.createObjectURL(this.$refs.file2.files[0]);
								this.show2 = URL.createObjectURL(this.$refs.file.files[0]);

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

			upload() {
				const token = sessionStorage.getItem("token");
				let formData = new FormData();
				formData.append("id_image", this.file);
				formData.append("affiliate_image", this.file2);
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
				formData.append("district", this.district);
				formData.append("district_id", this.district);
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
						location.reload();
					})
					.catch((error) => {
						console.log(error.response.data.errors);
						this.err = error.response.data.errors.name[0];
							this.errname = error.response.data.errors.name[0];			
							this.ereaddres = error.response.data.errors.address[0];		
							this.errbirth = error.response.data.errors.birth_date[0];		
							this.errcitizn = error.response.data.errors.citizenship[0];		
							this.errdistrict = error.response.data.errors.district_id[0];		
							this.erraffili = error.response.data.errors.affiliate_no[0];		
							this.errclass = error.response.data.errors.class[0];		
							this.errgender = error.response.data.errors.gender[0];		
							this.errgovern = error.response.data.errors.governorate_id[0];		
							this.errimage = error.response.data.errors.id_image[0];		
							this.errid = error.response.data.errors.id_number[0];		
							this.errnear = error.response.data.errors.near_number[0];		
							this.errnumof = error.response.data.errors.number_of_people[0];		
							this.errphone = error.response.data.errors.phone_number[0];		
							this.errqualification = error.response.data.errors.qualification[0];		
							this.errsocial = error.response.data.errors.social_status[0];		
							this.errspecialty = error.response.data.errors.specialty[0];		
							this.erryear = error.response.data.errors.year[0];		



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
