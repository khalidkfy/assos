<template>
       
<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <div class="row">
      
        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">طبيعة العمل</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="work_nature" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">طبيعة العمل او الوظيفة </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="job_can_do" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">طبيعة المشروع</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="project_nature" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">في حال عدم القدرة على العمل</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="employment" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">التكلفة المتوقعة لتنفيذ المشروع</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="cost_of_project" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">المساعدة المادية</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="financial_assistance" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">المساعدة العينية</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="in_kind_assistance" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">حدد نوع التدريب</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="training_type" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">
                    السكن بحاجة
                </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="housing_need" />
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">
                    المسن بحاجة
                </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="elderly_need" />
                </div>
            </div>
        </div>
  <div class="col-md-12">
            <div class="form-check form-check-inline mt-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="elderly_work" />
                <label class="form-check-label" for="flexCheckDefault">
                    القدرة على العمل
                </label>
            </div>
            <br>
            <div class="form-check form-check-inline mt-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="need_training" />
                <label class="form-check-label" for="flexCheckDefault">
                    هل يوجد حاجة للتدريب
                </label>
            </div>
            <br>
            <div class="form-check form-check-inline mt-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="income_generating_project" />
                <label class="form-check-label" for="flexCheckDefault">
                    امكانية عمل مشروع مدر للدخل
                </label>
            </div>
        </div>
        <div class="col-md-12 mt-1 row">
            <div class=" col-6 row">
                <label for="inputPassword" class="col-sm-6 col-form-label">التقييم الاجتماعي </label>
                <div class="col-sm-12">
                    <textarea name="" id="" cols="30" rows="10" v-model="social_assessment"></textarea>
                </div>
            </div>
            <div class=" col-6 row">
                <label for="inputPassword" class="col-sm-6 col-form-label">التقييم الاقتصادي </label>
                <div class="col-sm-12">
                    <textarea name="" id="" cols="30" rows="10" v-model="economic_evaluation"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center mt-4">
    <button @click.prevent="upload" class="btn  w-25">اضافة</button>
    </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "work",
  data() {
    return {
      elderly_work: false,
      work_nature: "",
      employment: "",
      job_can_do: "",
      need_training: false,
      training_type: "",
      social_assessment: "",
      income_generating_project: false,
      project_nature: "",
      cost_of_project: "",
      financial_assistance: "",
      in_kind_assistance: "",
      housing_need: "",
      elderly_need: "",
      economic_evaluation: "",
    };
  },

  methods: {
    upload() {
      const token = sessionStorage.getItem("token");
      const af1 = sessionStorage.getItem("af1");
      axios
        .post(
          "api/work/update",
          {  
              beneficiary_id :af1,
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
          // const token = res.data.data.token;
          // sessionStorage.setItem("token", token);
          // this.$router.push({ name: "dashboard" });
          location.reload();
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