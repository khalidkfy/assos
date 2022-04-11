<template>
  <div v-if="show_report" class="p-3">
    <div class="row">
      <div class="col-md-6 title"><h3>جمعية رعاية كبار السن</h3></div>
      <div class="col-md-6" style="text-align: left">
        <img src="../../assets/img/log.jpeg" alt="" class="logos">
      </div>
      <div class="col-md-6">
        <button v-if="print_btn" @click="print()" class="btn btn-success mx-2">طباعة</button>
        <button v-if="print_btn" @click="show_report = false" class="btn btn-success">إلغاء</button>
      </div>
    </div>
    <div class="table-responsive">
      <table v-if="report_type == 'benefits'" class="mt-3 table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th v-if="benefits_cols.id_number">رقم الهوية</th>
          <th v-if="benefits_cols.name">الاسم</th>
          <th v-if="benefits_cols.affiliate_no">رقم المستفيد</th>
          <th v-if="benefits_cols.mobile_number">رقم الجوال</th>
          <th v-if="benefits_cols.phone_number">رقم الهاتف</th>
          <th v-if="benefits_cols.year">السنة</th>
          <th v-if="benefits_cols.gender">الجنس</th>
          <th v-if="benefits_cols.birth_date">تاريخ الميلاد</th>
          <th v-if="benefits_cols.address">العنوان</th>
          <th v-if="benefits_cols.social_status">الحالة الاجتماعية</th>
          <th v-if="benefits_cols.near_number">رقم القريب</th>
          <th v-if="benefits_cols.qualification">المؤهل</th>
          <th v-if="benefits_cols.specialty">التخصص</th>
          <th v-if="benefits_cols.current_work">العمل الحالي</th>
          <th v-if="benefits_cols.previous_work">العمل السابق</th>
          <th v-if="benefits_cols.wife_name">اسم الزوج</th>
          <th v-if="benefits_cols.wife_identity">هوية الزوج</th>
          <th v-if="benefits_cols.citizenship">المواطنة</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(ben, index) in benefits" :key="index">
          <td>{{++ index}}</td>
          <td v-if="benefits_cols.id_number">{{ ben.id_number }}</td>
          <td v-if="benefits_cols.name">{{ ben.name }}</td>
          <td v-if="benefits_cols.affiliate_no">{{ ben.affiliate_no }}</td>
          <td v-if="benefits_cols.mobile_number">{{ ben.mobile_number }}</td>
          <td v-if="benefits_cols.phone_number">{{ ben.phone_number }}</td>
          <td v-if="benefits_cols.year">{{ben.year}}</td>
          <td v-if="benefits_cols.gender">{{ ben.gender }}</td>
          <td v-if="benefits_cols.birth_date">{{ ben.birth_date }}</td>
          <td v-if="benefits_cols.address">{{ ben.address }}</td>
          <td v-if="benefits_cols.social_status">{{ ben.social_status }}</td>
          <td v-if="benefits_cols.near_number">{{ ben.near_number }}</td>
          <td v-if="benefits_cols.qualification">{{ ben.qualification }}</td>
          <td v-if="benefits_cols.specialty">{{ ben.specialty }}</td>
          <td v-if="benefits_cols.current_work">{{ ben.current_work }}</td>
          <td v-if="benefits_cols.previous_work">{{ ben.previous_work }}</td>
          <td v-if="benefits_cols.wife_name">{{ ben.wife_name }}</td>
          <td v-if="benefits_cols.wife_identity">{{ ben.wife_identity }}</td>
          <td v-if="benefits_cols.citizenship">{{ ben.citizenship }}</td>
        </tr>
        </tbody>
      </table>
      <table v-if="report_type == 'subs'" class="mt-3 table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th v-if="subs_cols.start_subscription">تاريخ البداية</th>
          <th v-if="subs_cols.end_subscription">تاريخ النهاية</th>
          <th v-if="subs_cols.code">الكود</th>
          <th v-if="subs_cols.last_year">السنة السابقة</th>
          <th v-if="subs_cols.subscription_fees">رسوم الاشتراك</th>
          <th v-if="subs_cols.order_fees">رسوم الطلب</th>
          <th v-if="subs_cols.description">الوصف</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(sub, index) in subs" :key="index">
          <td>{{++ index}}</td>
          <td v-if="subs_cols.start_subscription">{{ sub.start_subscription }}</td>
          <td v-if="subs_cols.end_subscription">{{ sub.end_subscription }}</td>
          <td v-if="subs_cols.code">{{ sub.code }}</td>
          <td v-if="subs_cols.last_year">{{ sub.last_year }}</td>
          <td v-if="subs_cols.subscription_fees">{{ sub.subscription_fees }}</td>
          <td v-if="subs_cols.order_fees">{{sub.order_fees}}</td>
          <td v-if="subs_cols.description">{{ sub.description }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <div class="heade">
      التقارير
    </div>
    <container>
      <div class="card p-3">
        <span>البحث عن:</span>
        <div class="row mt-2 mb-5">
          <div class="col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="benefits" name="report" id="benefits">
              <label for="benefits" class="mx-2">المستفيدين</label>
            </div>
          </div>
          <div class="col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="subs" name="report" id="subs">
              <label for="subs" class="mx-2">الاشتراكات</label>
            </div>
          </div>
          <div class="col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="helpers" name="report" id="helpers">
              <label for="helpers" class="mx-2">المساعدات</label>
            </div>
          </div>
          <div class="col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="courses" name="report" id="courses">
              <label for="courses" class="mx-2">الدورات</label>
            </div>
          </div>
        </div>
        <span>البحث:</span>

        <div v-if="report_type === 'benefits'" class="row">
          <div class="col-md-6">
            <input
                type="text"
                class="form-control my-2"
                aria-label="Default select example"
                placeholder="السنة"
                v-model="benefits_year"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="الاسم"
                v-model="benefits_name"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="رقم المستفيد"
                v-model="benefits_num"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="رقم الهوية"
                v-model="benefits_id"
            />
          </div>
          <div class="col-md-6">
            <div class="cols">
              <span>الأعمدة</span>
              <div class="row">
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.id_number" id="id_number">
                  <label for="id_number"  class="mx-2">رقم الهوية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.name"  id="name">
                  <label for="name" class="mx-2">الاسم</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.affiliate_no"  id="affiliate_no">
                  <label for="affiliate_no" class="mx-2">رقم المستفيد</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.mobile_number"  id="mobile_number">
                  <label for="mobile_number" class="mx-2">رقم الجوال</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.phone_number"  id="phone_number">
                  <label for="phone_number" class="mx-2">رقم الهاتف</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.year"  id="year">
                  <label for="year" class="mx-2">السنة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.gender"  id="gender">
                  <label for="gender" class="mx-2">الجنس </label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.birth_date"  id="birth_date">
                  <label for="birth_date" class="mx-2">تاريخ الميلاد</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.address"  id="address">
                  <label for="address" class="mx-2">العنوان</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.social_status"  id="social_status">
                  <label for="social_status" class="mx-2">الحالة الاجتماعية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.near_number"  id="near_number">
                  <label for="near_number" class="mx-2">رقم القريب</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.qualification"  id="qualification">
                  <label for="qualification" class="mx-2">المؤهل</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.specialty"  id="specialty">
                  <label for="specialty" class="mx-2">التخصص</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.current_work"  id="current_work">
                  <label for="current_work" class="mx-2">العمل الحالي</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.previous_work"  id="previous_work">
                  <label for="previous_work" class="mx-2">العمل السابق</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.wife_name"  id="wife_name">
                  <label for="wife_name" class="mx-2">اسم الزوج</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.wife_identity"  id="wife_identity">
                  <label for="wife_identity" class="mx-2">هوية الزوج</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.citizenship"  id="citizenship">
                  <label for="citizenship" class="mx-2">المواطنة</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="report_type === 'subs'" class="row">
          <div class="col-md-6">
            <input
                type="text"
                class="form-control my-2"
                aria-label="Default select example"
                placeholder="الكود"
                v-model="subs_code"
            />
            <input
                type="date"
                class="form-control my-2"
                placeholder="تاريخ البداية"
                v-model="subs_start_year"
            />
            <input
                type="date"
                class="form-control my-2"
                placeholder="تاريخ النهاية"
                v-model="subs_end_year"
            />
          </div>
          <div class="col-md-6">
            <div class="cols">
              <span>الأعمدة</span>
              <div class="row">
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.start_subscription" id="start_subscription">
                  <label for="start_subscription"  class="mx-2">تاريخ البداية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.end_subscription"  id="end_subscription">
                  <label for="end_subscription" class="mx-2">تاريخ النهاية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.code"  id="code">
                  <label for="code" class="mx-2">الكود</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.last_year"  id="last_year">
                  <label for="last_year" class="mx-2">السنة السابقة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.subscription_fees"  id="subscription_fees">
                  <label for="subscription_fees" class="mx-2">رسوم الاشتراك</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.order_fees"  id="order_fees">
                  <label for="order_fees" class="mx-2">رسوم الطلب</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="subs_cols.description"  id="description">
                  <label for="description" class="mx-2">وصف الاشتراك</label>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row justify-content-center mt-4">
          <button @click.prevent="save()" class="btn w-25">
            إصدار
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import axios from "axios";
import container from "@/components/containers/container.vue";

export default {
  data() {
    return {
      report_type: "benefits",
      show_report: false,
      print_btn: true,
      loading: false,
      benefits_cols: {
        id_number : true,
        name : true,
        affiliate_no : true,
        mobile_number : true,
        phone_number : true,
        year : true,
        gender : true,
        birth_date : true,
        address : true,
        social_status : true,
        near_number : true,
        qualification : true,
        specialty : true,
        current_work : true,
        previous_work : true,
        wife_name : true,
        wife_identity : true,
        citizenship : true,
      },
      subs_cols: {
        start_subscription: true,
        end_subscription: true,
        code: true,
        last_year: true,
        subscription_fees: true,
        order_fees: true,
        description: true,
      },
      benefits:[],
      subs:[],
      benefits_year: null,
      benefits_name: null,
      benefits_num: null,
      benefits_id: null,
      subs_code: null,
      subs_start_year: null,
      subs_end_year: null,
    }
  },
  methods: {
    save() {
      this.loading = true;
      const token = sessionStorage.getItem("token");

      switch (this.report_type) {
        case "benefits":
          axios.post('/api/reports/benefits', {
            benefits_year: this.benefits_year,
            benefits_name: this.benefits_name,
            benefits_num: this.benefits_num,
            benefits_id: this.benefits_id,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.benefits = res.data.benefits;
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "subs":
          axios.post('/api/reports/subs', {
            subs_code: this.subs_code,
            subs_start_year: this.subs_start_year,
            subs_end_year: this.subs_end_year,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.subs = res.data.subs;
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
      }

    },
    print() {
      this.print_btn = false;
      setTimeout(function () {
        window.print();
      }, 2000);
    }
  },
  components: {container},
}
</script>

<style scoped>
.card {
  font-weight: bold;
}

.radio {
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 3px;
  border-radius: 7px;
  text-align: center;
}
.cols {
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 5px;
}
.logos {
  width: 100px;
  height: 100px;
}
.title {
  display: flex;
  align-items: center;
}
.table {
  border-color: initial !important;
  box-shadow: none !important;
}
.table thead {
  color: unset !important;
  background-color: initial !important;
}
.table > :not(caption) > * > * {
  padding: 5px !important;
}
</style>
