<template>
  <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >حيازة سكن</label
          >
          <div class="col-sm-10">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="housing_possession"
            >
              <option>ملك</option>
              <option>ايجار</option>
              <option>ارض حكومة</option>
              <option>مع الاقارب</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label">
            اخر حيازة سكن</label
          >
          <div class="col-sm-10">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="other_housing_possession"
            >
              <option>يوجد</option>
              <option>لايوجد</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >نوع السكن
          </label>
          <div class="col-sm-10">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="accommodation_type">
              <option>باطون</option>
              <option>اسبست</option>
              <option>زينكو</option>
              <option>خص</option>
            </select></div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >نقص اثاث
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="lack_of_furniture"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >ملاحظات السكن</label
          >
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="housing_notes "/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >وصف حالة الاغطية</label
          >
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="description_of_case"/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label">العلاج</label>
          <div class="col-sm-10">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="treatment"
            >
              <option v-for="med in medicinals" :key="med.id" :value="med.name">{{ med.name }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label">التهوية</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="ventilation"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >حالة الأثاث</label
          >
          <div class="col-sm-10">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="furniture_case"
            >
              <option>سيء</option>
              <option>جيد</option>
              <option>ممتاز</option>
              <option>قديم</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              v-model="bed_and_mattress"
          />
          <label class="form-check-label" for="flexCheckDefault">
            وجود سرير وفرشة مناسبة
          </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asd"
              v-model="medicines"
          />
          <label class="form-check-label" for="asd"> يوجد مكان مخصص للأدوية </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asd1"
              v-model="maintenance"
          />
          <label class="form-check-label" for="asd1"> الغرفة بحاجة للصيانة </label>
        </div>

        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asd2"
              v-model="medication_notes"
          />
          <label class="form-check-label" for="asd2"> ملاحظات الادوية </label>
        </div>
      </div>
      <hr class="mt-5"/>
    </div>
    <div class="p-3">
      <p>علاقة المسن بالأسرة</p>
    </div>
    <div class="row">
      <div class="col-md-6 mt-4">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >متعاون مع الباحث
          </label>
          <div class="col-sm-9">
            <input
                type="text"
                class="form-control"
                v-model="collaborating_with_researcher"
            />
          </div>
        </div>
      </div>

      <div class="col-md-6 mt-4">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >يمكن الاستعانة
          </label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="can_used"/>
          </div>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asd4"
              v-model="mutual_respect"
          />
          <label class="form-check-label" for="asd4"> احترام متبادل </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              v-model="share_with_others"
              id="asd5"
          />
          <label class="form-check-label" for="asd5"> مشاركة الاخرين </label>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              v-model="interest"
              id="asd6"
          />
          <label class="form-check-label" for="asd6"> اهتمام </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asd7"
              v-model="caring_for_others"
          />
          <label class="form-check-label" for="asd7"> الاهتمام بالاخرين </label>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asde"
              v-model="psychological_support"
          />
          <label class="form-check-label" for="asde"> الدعم النفسي </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew"
              v-model="selfish_outcast"
          />
          <label class="form-check-label" for="asdew"> منبوذ اناني </label>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew1"
              v-model="needs"
          />
          <label class="form-check-label" for="asdew1"> توفير الاحتياجات </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              v-model="slick_outcast"
              id="asdew2"
          />
          <label class="form-check-label" for="asdew2"> منبوذ سليط اللسان </label>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew5"
              v-model="introvert"
          />
          <label class="form-check-label" for="asdew5"> انطوائي </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew6"
              v-model="sick_outcast"
          />
          <label class="form-check-label" for="asdew6"> منبوذ مريض </label>
        </div>
      </div>

      <div class="col-md-3 mt-4">
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew7"
              v-model="initiative"
          />

          <label class="form-check-label" for="asdew7"> مبادر </label>
        </div>
        <div class="form-check mt-2">
          <input
              class="form-check-input"
              type="checkbox"
              id="asdew8"
              v-model="outcast_awkward"
          />
          <label class="form-check-label" for="asdew8"> منبوذ صعب الحركة </label>
        </div>
      </div>

      <div class="col-md-12 mt-1">
        <div class="m-3 row">
          <label for="inputPassword" class="col-sm-12 col-form-label"
          >ملاحظات التعاون
          </label>
          <div class="col-sm-9">
						<textarea
                name=""
                id=""
                cols="30"
                rows="10"
                v-model="cooperation_notes"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <button @click.prevent="upload" class="btn w-25">اضافة</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      housing_possession: "",
      other_housing_possession: "",
      accommodation_type: "",
      furniture_case: "",
      lack_of_furniture: "",
      housing_notes: "",
      description_of_case: "",
      ventilation: "",
      bed_and_mattress: 0,
      medicines: false,
      maintenance: false,
      treatment: "",
      medication_notes: false,
      // new line
      mutual_respect: false,
      interest: false,
      psychological_support: false,
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
      medicinals:[],
    };
  },
  created() {
    this.homedata();
  },
  methods: {
    upload() {
      const token = sessionStorage.getItem("token");
      const af1 = sessionStorage.getItem("af1");

      axios
          .post(
              "api/home/update",
              {
                beneficiary_id: af1,
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

          })
          .catch((e) => {
            console.log(e);
          });
    },
    homedata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/home/show?beneficiary_id=${this.$route.query.q}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res.data);
            console.log('home');
            this.housing_possession = res.data.data.housing_possession;
            this.medicinals = res.data.data.medicinals;
            this.other_housing_possession = res.data.data.other_housing_possession;
            this.accommodation_type = res.data.data.accommodation_type;
            this.furniture_case = res.data.data.furniture_case;
            this.lack_of_furniture = res.data.data.lack_of_furniture;
            this.housing_notes = res.data.data.housing_notes;
            this.description_of_case = res.data.data.description_of_case;
            this.ventilation = res.data.data.ventilation;
            this.bed_and_mattress = res.data.data.bed_and_mattress;
            this.medicines = res.data.data.medicines;
            this.maintenance = res.data.data.maintenance;
            this.medication_notes = res.data.data.medication_notes;
            this.treatment = res.data.data.treatment;
            this.mutual_respect = res.data.data.mutual_respect;
            this.interest = res.data.data.interest;
            this.psychological_support = res.data.data.psychological_support;
            this.needs = res.data.data.needs;
            this.introvert = res.data.data.introvert;
            this.initiative = res.data.data.initiative;
            this.selfish_outcast = res.data.data.selfish_outcast;
            this.caring_for_others = res.data.data.caring_for_others;
            this.sick_outcast = res.data.data.sick_outcast;
            this.collaborating_with_researcher = res.data.data.collaborating_with_researcher;
            this.can_used = res.data.data.can_used;
            this.cooperation_notes = res.data.data.cooperation_notes;
            this.share_with_others = res.data.data.share_with_others;
            this.outcast_awkward = res.data.data.outcast_awkward;

          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};

</script>