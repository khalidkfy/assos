<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="row fex-side-bar">
      <Sidebar />
      <!--begin::Dashboard-->
      <div class="dash">
        <div>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                معلومات شخصية
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                الاسرة والمنزل
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                العمل والتقييم
              </button>
            </li>
    
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >رقم المستفيد
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="affiliate_no"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >الاسم
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >الهوية
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="id_number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >التصنيف</label
                    >
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
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >العام</label
                    >
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
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >الجنس
                    </label>
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
							aria-label="Default select example" v-model="rec" @change="countr2">
							<option v-for="item in informats1" :key="item.id" :value="item.id">{{item.governorate}}</option>
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
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >الحي</label
                    >
                    <div class="col-sm-10">
                  <select
							class="form-select"
							aria-label="Default select example" v-model="district">
							<option v-for="items in informats2" :key="items.id" :value="items.id">{{items.district}}</option>
						</select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >تاريخ الميلاد</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="date"
                        class="form-control"
                        
                        v-model="birth_date"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >الهاتف</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="phone_number"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >العنوان</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="address"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >رقم القريب</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="near_number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >رقم الجوال</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="mobile_number"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >اسم الزوج - الزوجة</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="wife_name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >هوية الزوج - الزوجة
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="wife_identity"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >العدد
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="number_of_people"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >المؤهل</label
                    >
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
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >التخصص</label
                    >
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
			<button @click.prevent="editpersonal" class="btn w-25">اضافة</button>
                <!-- النهاية -->
              </div>
            </div>
        <home />
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >طبيعة العمل</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="work_nature"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >طبيعة العمل او الوظيفة
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="job_can_do"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >طبيعة المشروع</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="project_nature"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >في حال عدم القدرة على العمل</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="employment"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >التكلفة المتوقعة لتنفيذ المشروع</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="cost_of_project"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >المساعدة المادية</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="financial_assistance"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >المساعدة العينية</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="in_kind_assistance"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                      >حدد نوع التدريب</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="training_type"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label">
                      السكن بحاجة
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="housing_need"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label">
                      المسن بحاجة
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        
                        v-model="elderly_need"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-check form-check-inline mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      v-model="elderly_work"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      القدرة على العمل
                    </label>
                  </div>
                  <div class="form-check form-check-inline mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      v-model="need_training"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      هل يوجد حاجة للتدريب
                    </label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      v-model="income_generating_project"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      امكانية عمل مشروع مدر للدخل
                    </label>
                  </div>
                </div>
                <div class="col-md-12 row mt-1">
                  <div class="m-3 col row">
                    <label for="inputPassword" class="col-sm-6 col-form-label"
                      >التقييم الاجتماعي
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        v-model="social_assessment"
                      ></textarea>
                    </div>
                  </div>
                  <div class="m-3 col row">
                    <label for="inputPassword" class="col-sm-6 col-form-label"
                      >التقييم الاقتصادي
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        v-model="economic_evaluation"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              			<button @click.prevent="editwork" class="btn w-25">اضافة</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
     
</template>


<script>
    import axios from "axios";
     import home from "./home.vue";

    export default {
        name: "editpage",
          components:{home},
        data() {
            return{
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
      near_number:"",
        // home page 

      housing_possession: "",
      other_housing_possession: "",
      accommodation_type: "",
      furniture_case: "",
      lack_of_furniture: "",
      housing_notes: "",
      description_of_case: "",
      ventilation: "",
      bed_and_mattress: 0 ,
      medicines: false,
      maintenance: false,
      treatment: "",
      medication_notes: false,
      // new line
      mutual_respect: false,
      interest: false,
      psychological_support:false,
      needs: false,
      introvert: false,
      initiative: false,
      share_with_others: false,
      caring_for_others: false,
      selfish_outcast: false,
      slick_outcast: false,
      sick_outcast: false,
      outcast_awkward: false,
      collaborating_with_researcher: "",
      can_used: "",
      cooperation_notes: "",

// work page 

   elderly_work: true,
      work_nature: "",
      employment: "",
      job_can_do: "",
      need_training: true,
      training_type: "",
      social_assessment: "",
      income_generating_project: true ,
      project_nature: "",
      cost_of_project: "",
      financial_assistance: "",
      in_kind_assistance: "",
      housing_need: "",
      elderly_need: "",
      economic_evaluation: "",
      rec: "",

      informats: [],  
      informats1: [],
      informats2: [],




    };
        },
        created() {
            this.basicdata();
            this.homedata();
            this.workdata(); this.source();
            this.countr();
            this.countr2();
        },
        methods: {
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
						this.informats1 = res.data;
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

            // SHOW DATA 
            basicdata() {
                const token = sessionStorage.getItem("token");
                console.log(this.informats);
                axios
                    .get(`/api/beneficiary/show?beneficiary_id=${this.$route.query.q}`, {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.id_number = res.data.data.id_number,
                        this.affiliate_no = res.data.data.affiliate_no,
                        this.name = res.data.data.name,
                        this.mobile_number = res.data.data.mobile_number,
                        this.governorate = res.data.data.governorate,
                        this.citizenship = res.data.data.citizenship,
                        this.classe = res.data.data.class,
                        this.wife_identity = res.data.data.wife_identity,
                        this.wife_name = res.data.data.wife_name,
                        this.previous_work = res.data.data.previous_work,
                        this.number_of_people = res.data.data.number_of_people,
                        this.phone_number = res.data.data.phone_number,
                        this.gender = res.data.data.gender,
                        this.birth_date = res.data.data.birth_date,
                        this.year = res.data.data.year,
                        this.specialty = res.data.data.specialty,
                        this.qualification = res.data.data.qualification,
                        this.social_status = res.data.data.social_status,
                        this.district = res.data.data.district,
                        this.address = res.data.data.address,
                        this.near_number = res.data.data.near_number
                        this.current_work = res.data.data.current_work
                        





                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },

             homedata(){
                const token = sessionStorage.getItem("token");
                axios
                    .get(`api/home/show?beneficiary_id=${this.$route.query.q}`, {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);  console.log('home');
                  this.housing_possession = res.data.data.housing_possession ;
                  this.other_housing_possession  = res.data.data.other_housing_possession ;
                  this.accommodation_type  = res.data.data.accommodation_type ;
                  this.furniture_case  = res.data.data.furniture_case ;
                   this.lack_of_furniture  = res.data.data.lack_of_furniture ;
                   this.housing_notes  = res.data.data.housing_notes ;
                    this.description_of_case  = res.data.data.description_of_case ;
                    this.ventilation  = res.data.data.ventilation ;
                    this.bed_and_mattress  = res.data.data.bed_and_mattress ;
                    this.medicines  = res.data.data.medicines ;
                    this.maintenance  = res.data.data.maintenance ;
                        this.medication_notes  = res.data.data.medication_notes ;
                  this.treatment  = res.data.data.treatment ;
                      this.mutual_respect  = res.data.data.mutual_respect ;
                this.interest  = res.data.data.interest ;
                            this.psychological_support  = res.data.data.psychological_support ;
              this.needs  = res.data.data.needs ;
                  this.introvert  = res.data.data.introvert ;
                  this.initiative  = res.data.data.initiative ;
                        this.selfish_outcast  = res.data.data.selfish_outcast ;
                          this.caring_for_others  = res.data.data.caring_for_others ;
                    this.sick_outcast  = res.data.data.sick_outcast ;
                            this.collaborating_with_researcher  = res.data.data.collaborating_with_researcher ;
                this.can_used = res.data.data.can_used ;
                      this.cooperation_notes = res.data.data.cooperation_notes ;
                        this.share_with_others = res.data.data.share_with_others ;
                      this.outcast_awkward = res.data.data.outcast_awkward ;

                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },
                 source(){
                                const token = sessionStorage.getItem("token");
                                axios
                                    .get(`api/sourcesofincome/show?beneficiary_id=${this.$route.query.q}`, {
                                        headers: {
                                            Authorization: "Bearer " + token,
                                        },
                                    })
                                    .then((res) => {
                                        console.log(res.data.data);
                                            this.informats = res.data.data
                                              
                                                                    
                                
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
            },

             workdata(){
                                const token = sessionStorage.getItem("token");
                                axios
                                    .get(`api/work/show?beneficiary_id=${this.$route.query.q}`, {
                                        headers: {
                                            Authorization: "Bearer " + token,
                                        },
                                    })
                                    .then((res) => {
                                        console.log(res.data.data);
                                            this.elderly_work = res.data.data.elderly_work,
                                                this.work_nature = res.data.data.work_nature,
                                                this.employment= res.data.data.employment,
                                                this.job_can_do= res.data.data.job_can_do,
                                                this.need_training= res.data.data.need_training,
                                                this.training_type= res.data.data.training_type,
                                                this.social_assessment= res.data.data.social_assessment,
                                                this.income_generating_project= res.data.data.income_generating_project,
                                                this.project_nature= res.data.data.project_nature,
                                                this.cost_of_project= res.data.data.cost_of_project,
                                                this.financial_assistance= res.data.data.financial_assistance,
                                                this.in_kind_assistance= res.data.data.in_kind_assistance,
                                                this.housing_need= res.data.data.housing_need,
                                                this.elderly_need= res.data.data.elderly_need,
                                                this.economic_evaluation= res.data.data.economic_evaluation
                                                                    
                                
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
            },
            // EDIT DATA 
                // EDIT PERSONAL DATA 
            editpersonal() {
      const token = sessionStorage.getItem("token");

      axios
        .post(
          "api/beneficiary/update",
          {
            id_number:this.$route.query.q,
            beneficiary_id:this.$route.query.q,
            
            name: this.name,
            affiliate_no: this.affiliate_no,
            mobile_number: this.mobile_number,
            governorate: this.governorate,
            phone_number: this.phone_number,
            gender: this.gender,
            year: this.year,
            birth_date: this.birth_date,
            number_of_people: this.number_of_people,
            citizenship: this.citizenship,
            class: this.classe,
            wife_identity: this.wife_identity,
            wife_name: this.wife_name,
            previous_work: this.previous_work,
            current_work: this.current_work,
            specialty: this.specialty,
            qualification: this.qualification,
            social_status: this.social_status,
            district: this.district,
            address: this.address,
            near_number:this.near_number
            
          },
        {
          headers:{
            'Authorization': 'Bearer '+token
          }}
        )
        .then((res) => {
          console.log(res.data);
        
        })
        .catch((e) => {
          console.log(e);
        });
    },
            // EDIT HOME DATA  
             editwork() {            // Edit Home page 

      const token = sessionStorage.getItem("token");
      axios
        .post(
          "api/work/update",
          {  
              beneficiary_id :this.$route.query.q,
              elderly_work :this.elderly_work ? 1 : 0 ,
              work_nature :this.work_nature,
              employment :this.employment,  
              job_can_do :this.job_can_do,  
              need_training :this.need_training ? 1 : 0,  
              training_type :this.training_type,  
              social_assessment :this.social_assessment,  
              income_generating_project :this.income_generating_project ? 1 : 0,  
              project_nature :this.project_nature,  
              cost_of_project :this.cost_of_project,  
              financial_assistance :this.financial_assistance,  
              in_kind_assistance :this.in_kind_assistance,  
               housing_need :this.housing_need,  
                elderly_need :this.elderly_need,  
                 economic_evaluation :this.economic_evaluation,  
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
                    //  NEW LINE

edithome() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/home/update",
						{
							beneficiary_id: this.$route.query.q,
							housing_possession: this.housing_possession,
							other_housing_possession: this.other_housing_possession,
							accommodation_type: this.accommodation_type,
							furniture_case: this.furniture_case,
							lack_of_furniture: this.lack_of_furniture,
							housing_notes: this.housing_notes,
							description_of_case: this.description_of_case,
							ventilation: this.ventilation,
							bed_and_mattress: this.bed_and_mattress ? 1 : 0,
							medicines: this.medicines ? 1 : 0,
							maintenance: this.maintenance ? 1 : 0,
							medication_notes: this.medication_notes ? 1 : 0,
							treatment: this.treatment,
							mutual_respect: this.mutual_respect ? 1 : 0,
							interest: this.interest ? 1 : 0,
							psychological_support: this.psychological_support ? 1 : 0,
							needs: this.needs ? 1 : 0,
							introvert: this.introvert ? 1 : 0,
							initiative: this.initiative ? 1 : 0,
							selfish_outcast: this.selfish_outcast ? 1 : 0,
							caring_for_others: this.caring_for_others ? 1 : 0,
							slick_outcast: this.slick_outcast ? 1 : 0,
							sick_outcast: this.sick_outcast ? 1 : 0,
							collaborating_with_researcher: this.collaborating_with_researcher,
							can_used: this.can_used,
							cooperation_notes: this.cooperation_notes,
							share_with_others: this.share_with_others ? 1 : 0,
							outcast_awkward: this.outcast_awkward ? 1 : 0,
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
    .home {
        background-color: whitesmoke;
        padding: 35px;
    }
    .dash {
        background-color: white;
        padding: 10px;
        border-radius: 5px;
    }
    .nav {
        padding: 20px 10px;
        border-radius: 5px;
    }
    .form-control,
    .form-select,
    textarea {
        background-color: #f5f8fa;
    }

</style>

