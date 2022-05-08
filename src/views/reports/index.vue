<template>
  <div v-if="show_report" class="p-3">
    <div class="row">
      <div class="col-md-4 title"><h3>جمعية رعاية كبار السن {{ report_title ? "- " + report_title : ''}}</h3></div>
      <div class="col-md-4" style="text-align: center">
        <img v-if="show_logo" src="../../assets/img/log.jpeg" alt="" class="logos">
      </div>
      <div class="col-md-6">
        <button v-if="print_btn" @click="print()" class="btn btn-success mx-2">طباعة</button>
        <button v-if="print_btn" @click="exportTable()" class="btn btn-success mx-2">تصدير اكسل</button>
        <button v-if="print_btn" @click="show_report = false" class="btn btn-success">إلغاء</button>
      </div>
    </div>
    <div class="table-responsive">
      <table id="benefits_table" v-if="report_type == 'benefits'" class="mt-3 table table-bordered">
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
          <th v-if="benefits_cols.governorate">المحافظة</th>
          <th v-if="benefits_cols.district">المنطقة</th>
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
          <td v-if="benefits_cols.gender">{{ ben.gender == 1 ? "أنثى" : 'ذكر'}}</td>
          <td v-if="benefits_cols.birth_date">{{ ben.birth_date }}</td>
          <td v-if="benefits_cols.governorate">{{ ben.governorate ? ben.governorate.governorate : 'غير معروف' }}</td>
          <td v-if="benefits_cols.district">{{ ben.district ? ben.district.district : 'غير معروف' }}</td>
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
      <table id="subs_table" v-if="report_type == 'subs'" class="mt-3 table table-bordered">
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
        <tfoot>
          <table class="table table-bordered mt-2">
            <thead>
                <tr>
                  <th>#</th>
                  <th>المجموع</th>
                </tr>
             </thead>
            <tbody>
              <tr>
                <td>رسوم الاشتراك</td>
                <td>{{ subs_total_subs_fees }}</td>
              </tr>
              <tr>
                <td>رسوم الطلب</td>
                <td>{{ subs_total_order_fees }}</td>
              </tr>
            </tbody>
          </table>
        </tfoot>
      </table>
      <table id="helpers_table" v-if="report_type == 'helpers'" class="mt-3 table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th v-if="projects_cols.project_number">رقم المشروع</th>
          <th v-if="projects_cols.project_name">اسم المشروع</th>
          <th v-if="projects_cols.funded_side">الجهة الممولة</th>
          <th v-if="projects_cols.project_date">تاريخ المشروع</th>
          <th v-if="projects_cols.value_per_person">القيمة للشخص</th>
          <th v-if="projects_cols.donated_number">العدد المتبرع به</th>
          <th v-if="projects_cols.project_amount">مبلغ المشروع</th>
          <th v-if="projects_cols.type">النوع</th>
          <th v-if="projects_cols.status">الحالة</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="index">
          <td>{{++ index}}</td>
          <td v-if="projects_cols.project_number">{{ project.project_number }}</td>
          <td v-if="projects_cols.project_name">{{ project.project_name }}</td>
          <td v-if="projects_cols.funded_side">{{ project.funded_side }}</td>
          <td v-if="projects_cols.project_date">{{ project.project_date }}</td>
          <td v-if="projects_cols.value_per_person">{{ project.value_per_person }}</td>
          <td v-if="projects_cols.donated_number">{{project.donated_number}}</td>
          <td v-if="projects_cols.project_amount">{{ project.project_amount }}</td>
          <td v-if="projects_cols.type">{{ project.type ? project.type.name : 'غير معروف' }}</td>
          <td v-if="projects_cols.status && project.status == 1">مقترح</td>
          <td v-if="projects_cols.status && project.status == 2">تمت</td>
        </tr>
        </tbody>
        <tfoot>
        <table class="table table-bordered mt-2">
          <thead>
          <tr>
            <th>#</th>
            <th>المجموع</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>القيمة للشخص</td>
            <td>{{ aids_total_value_person }}</td>
          </tr>
          <tr>
            <td>العدد المتبرع به</td>
            <td>{{ aids_total_donated }}</td>
          </tr>
          <tr>
            <td>مبلغ المشروع</td>
            <td>{{ aids_total_project_amount }}</td>
          </tr>
          </tbody>
        </table>
        </tfoot>
      </table>
      <table id="courses_table" v-if="report_type == 'courses'" class="mt-3 table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th v-if="courses_cols.effectiveness_number">رقم الفعالية</th>
          <th v-if="courses_cols.effectiveness_name">اسم الفعالية</th>
          <th v-if="courses_cols.date">التاريخ</th>
          <th v-if="courses_cols.start">وقت البداية</th>
          <th v-if="courses_cols.end">وقت النهاية</th>
          <th v-if="courses_cols.funded_side">الجهة الممولة</th>
          <th v-if="courses_cols.supervisor">المشرف</th>
          <th v-if="courses_cols.supervisor_cost">تكلفة المشرف</th>
          <th v-if="courses_cols.number_of_effectiveness">عدد المتفاعلين</th>
          <th v-if="courses_cols.total_cost">التكلفة الإجمالية</th>
          <th v-if="courses_cols.activity_type">النشاط</th>
          <th v-if="courses_cols.notes">الملاحظات</th>

        </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in courses" :key="index">
          <td>{{++ index}}</td>
          <td v-if="courses_cols.effectiveness_number">{{ course.effectiveness_number }}</td>
          <td v-if="courses_cols.effectiveness_name">{{ course.effectiveness_name }}</td>
          <td v-if="courses_cols.date">{{ course.date }}</td>
          <td v-if="courses_cols.start">{{ course.start }}</td>
          <td v-if="courses_cols.end">{{ course.end }}</td>
          <td v-if="courses_cols.funded_side">{{ course.funded_side }}</td>
          <td v-if="courses_cols.supervisor">{{ course.supervisor }}</td>
          <td v-if="courses_cols.supervisor_cost">{{ course.supervisor_cost }}</td>
          <td v-if="courses_cols.number_of_effectiveness">{{ course.number_of_effectiveness }}</td>
          <td v-if="courses_cols.total_cost">{{ course.total_cost }}</td>
          <td v-if="courses_cols.activity_type && course.activity_type == 1">دورة</td>
          <td v-if="courses_cols.activity_type && course.activity_type !== 1">رحلة</td>
          <td v-if="courses_cols.notes">{{ course.notes }}</td>
        </tr>
        </tbody>
        <tfoot>
        <table class="table table-bordered mt-2">
          <thead>
          <tr>
            <th>#</th>
            <th>المجموع</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>تكلفة المشرف</td>
            <td>{{ courses_total_supervisor_cost }}</td>
          </tr>
          <tr>
            <td>عدد المتفاعلين</td>
            <td>{{ courses_total_number_of_effectiveness }}</td>
          </tr>
          <tr>
            <td>التكلفة الإجمالية</td>
            <td>{{ courses_total_total_cost }}</td>
          </tr>
          </tbody>
        </table>
        </tfoot>
      </table>
      <div v-if="report_type == 'achievements'" class="mt-3">
        <div class="my-3">
          <h4>الدورات</h4>
          <table class="mt-3 table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>رقم الفعالية</th>
              <th>اسم الفعالية</th>
              <th>وقت البداية</th>
              <th>وقت النهاية</th>
              <th>الجهة الممولة</th>
              <th>عدد المتفاعلين</th>
              <th>التكلفة الإجمالية</th>
              <th>النشاط</th>
              <th>التاريخ</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(course, index) in courses" :key="index">
              <td>{{++ index}}</td>
              <td>{{ course.effectiveness_number }}</td>
              <td>{{ course.effectiveness_name }}</td>
              <td>{{ course.start }}</td>
              <td>{{ course.end }}</td>
              <td>{{ course.funded_side }}</td>
              <td>{{ course.number_of_effectiveness }}</td>
              <td>{{ course.total_cost }}</td>
              <td v-if="course.activity_type == 1">دورة</td>
              <td v-if="course.activity_type !== 1">رحلة</td>
              <td>{{ course.date }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="my-3">
          <h4>المساعدات</h4>
          <table class="mt-3 table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>رقم المشروع</th>
              <th>اسم المشروع</th>
              <th>الجهة الممولة</th>
              <th>القيمة للشخص</th>
              <th>العدد المتبرع به</th>
              <th>مبلغ المشروع</th>
              <th>النوع</th>
              <th>الحالة</th>
              <th>تاريخ المشروع</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(project, index) in projects" :key="index">
              <td>{{++ index}}</td>
              <td>{{ project.project_number }}</td>
              <td>{{ project.project_name }}</td>
              <td>{{ project.funded_side }}</td>
              <td>{{ project.value_per_person }}</td>
              <td>{{project.donated_number}}</td>
              <td>{{ project.project_amount }}</td>
              <td>{{ project.type ? project.type.name : 'غير معروف' }}</td>
              <td v-if="project.status == 1">مقترح</td>
              <td v-if="project.status == 2">تمت</td>
              <td>{{ project.project_date }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="report_type == 'benefit_details'" class="mt-3">
        <div class="my-3">
          <h3>المستفيد: {{benefit ? benefit.name : ''}}</h3>
          <h4>الدورات</h4>
          <table class="mt-3 table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>رقم الفعالية</th>
              <th>اسم الفعالية</th>
              <th>وقت البداية</th>
              <th>وقت النهاية</th>
              <th>الجهة الممولة</th>
              <th>التكلفة الإجمالية</th>
              <th>النشاط</th>
              <th>التاريخ</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(course, index) in courses" :key="index">
              <td>{{++ index}}</td>
              <td>{{ course.course.effectiveness_number }}</td>
              <td>{{ course.course.effectiveness_name }}</td>
              <td>{{ course.course.start }}</td>
              <td>{{ course.course.end }}</td>
              <td>{{ course.course.funded_side }}</td>
              <td>{{ course.course.total_cost }}</td>
              <td v-if="course.course.activity_type == 1">دورة</td>
              <td v-if="course.course.activity_type !== 1">رحلة</td>
              <td>{{ course.course.date }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="my-3">
          <h4>المساعدات</h4>
          <table class="mt-3 table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>رقم المشروع</th>
              <th>اسم المشروع</th>
              <th>الجهة الممولة</th>
              <th>القيمة للشخص</th>
              <th>العدد المتبرع به</th>
              <th>مبلغ المشروع</th>
              <th>النوع</th>
              <th>الحالة</th>
              <th>تاريخ المشروع</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(project, index) in projects" :key="index">
              <td>{{++ index}}</td>
              <td>{{ project.aid.project_number }}</td>
              <td>{{ project.aid.project_name }}</td>
              <td>{{ project.aid.funded_side }}</td>
              <td>{{ project.aid.value_per_person }}</td>
              <td>{{project.aid.donated_number}}</td>
              <td>{{ project.aid.project_amount }}</td>
              <td>{{ project.aid.type ? project.aid.type.name : 'غير معروف' }}</td>
              <td v-if="project.aid.status == 1">مقترح</td>
              <td v-if="project.aid.status == 2">تمت</td>
              <td>{{ project.aid.project_date }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <table id="not_benefiting_table" v-if="report_type == 'not_benefiting'" class="mt-3 table table-bordered">
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
          <th v-if="benefits_cols.governorate">المحافظة</th>
          <th v-if="benefits_cols.district">المنطقة</th>
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
          <td v-if="benefits_cols.gender">{{ ben.gender == 1 ? "أنثى" : 'ذكر'}}</td>
          <td v-if="benefits_cols.birth_date">{{ ben.birth_date }}</td>
          <td v-if="benefits_cols.governorate">{{ ben.governorate ? ben.governorate.governorate : 'غير معروف' }}</td>
          <td v-if="benefits_cols.district">{{ ben.district ? ben.district.district : 'غير معروف' }}</td>
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
      <table id="aid_details_table" v-if="report_type == 'aid_details'" class="mt-3 table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">الاسم</th>
            <th rowspan="2">عدد</th>
            <th rowspan="2">مجموع المبلغ</th>
            <th v-for="aid in aids" colspan="2" :key="aid.id">{{ aid.project_name }}</th>
          </tr>
          <tr>
            <slot v-for="aid in aids" :key="aid.id">
              <th>المبلغ</th>
              <th>الكمية</th>
            </slot>
          </tr>

        </thead>
        <tbody>
          <tr v-for="person in benefits" :key="person.id">
            <td>{{person.name}}</td>
            <td>{{person.total_count}}</td>
            <td>{{person.total_amount}}</td>
            <slot v-for="aid in aids" :key="aid.id">
              <td>{{getAidDetailsForPerson(aid, person, 'amount')}}</td>
              <td>{{getAidDetailsForPerson(aid, person, 'count')}}</td>
            </slot>
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
        <div class="row mt-2 mb-3">
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="benefits" name="report" id="benefits">
              <label for="benefits" class="mx-2">المستفيدين</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="subs" name="report" id="subs">
              <label for="subs" class="mx-2">الاشتراكات</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="helpers" name="report" id="helpers">
              <label for="helpers" class="mx-2">المساعدات</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="courses" name="report" id="courses">
              <label for="courses" class="mx-2">الدورات</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="achievements" name="report" id="achievements">
              <label for="achievements" class="mx-2">إنجازات الجمعية</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="benefit_details" name="report" id="benefit_details">
              <label for="benefit_details" class="mx-2">تفاصيل المستفيد</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="not_benefiting" name="report" id="not_benefiting">
              <label for="not_benefiting" class="mx-2">المستفيدين غير المنتفعين</label>
            </div>
          </div>
          <div class="my-3 col-md-3">
            <div class="radio">
              <input type="radio" v-model="report_type" value="aid_details" name="report" id="aid_details">
              <label for="aid_details" class="mx-2">تفاصيل المساعدات</label>
            </div>
          </div>
        </div>
        <div class="row mt-2 mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <label for="report_title">عنوان التقرير</label>
              <input v-model="report_title" id="report_title" type="text" class="form-control my-2">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="show_logo" class="mx-2">عرض الشعار</label>
              <input v-model="show_logo" id="show_logo" type="checkbox">
            </div>
          </div>
        </div>


        <div v-if="report_type === 'benefits'" class="row">
          <span>البحث:</span>
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
            <input
                type="text"
                class="form-control my-2"
                placeholder="المدينة"
                v-model="benefits_city"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="الحي"
                v-model="benefits_district"
            />
            <select class="form-control my-2"  v-model="benefits_gender">
              <option disabled selected>الجنس</option>
              <option value="2">ذكر</option>
              <option value="1">أنثى</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="cols">
              <div class="d-flex justify-content-between p-3 mb-2">
                <div>الأعمدة</div>
                <div>
                  <input type="checkbox" v-model="benefits_cols_all" id="benefits_cols_all">
                  <label for="benefits_cols_all"  class="mx-2">تحديد الكل</label>
                </div>
              </div>
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
                  <input type="checkbox" v-model="benefits_cols.governorate"  id="governorate">
                  <label for="governorate" class="mx-2">المحافظة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.district"  id="district">
                  <label for="district" class="mx-2">المنطقة</label>
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
          <span>البحث:</span>
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
              <div class="d-flex justify-content-between p-3 mb-2">
                <div>الأعمدة</div>
                <div>
                  <input type="checkbox" v-model="subs_cols_all" id="subs_cols_all">
                  <label for="subs_cols_all"  class="mx-2">تحديد الكل</label>
                </div>
              </div>
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
        <div v-if="report_type === 'helpers'" class="row">
          <span>البحث:</span>
          <div class="col-md-6">
            <input
                type="text"
                class="form-control my-2"
                aria-label="Default select example"
                placeholder="رقم المشروع"
                v-model="project_number"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="اسم المشروع"
                v-model="project_name"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="مبلغ المشروع"
                v-model="project_price"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="الجهة الممولة"
                v-model="project_funded"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="نوع المساعدة"
                v-model="project_type"
            />
          </div>
          <div class="col-md-6">
            <div class="cols">
              <div class="d-flex justify-content-between p-3 mb-2">
                <div>الأعمدة</div>
                <div>
                  <input type="checkbox" v-model="projects_cols_all" id="projects_cols_all">
                  <label for="projects_cols_all"  class="mx-2">تحديد الكل</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.project_number" id="project_number">
                  <label for="project_number"  class="mx-2">رقم المشروع</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.project_name" id="project_name">
                  <label for="project_name"  class="mx-2">اسم المشروع</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.funded_side" id="funded_side">
                  <label for="funded_side"  class="mx-2">الجهة الممولة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.project_date" id="project_date">
                  <label for="project_date"  class="mx-2">تاريخ المشروع</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.value_per_person" id="value_per_person">
                  <label for="value_per_person"  class="mx-2">القيمة للشخص</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.donated_number" id="donated_number">
                  <label for="donated_number"  class="mx-2">العدد المتبرع به</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.project_amount" id="project_amount">
                  <label for="project_amount"  class="mx-2">مبلغ المشروع</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.type" id="type">
                  <label for="type"  class="mx-2">النوع</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="projects_cols.status" id="status">
                  <label for="status"  class="mx-2">الحالة</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="report_type === 'courses'" class="row">
          <span>البحث:</span>
          <div class="col-md-6">
            <input
                type="text"
                class="form-control my-2"
                aria-label="Default select example"
                placeholder="اسم الدورة"
                v-model="course_name"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="رقم الدورة"
                v-model="course_number"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="الجهة الممولة"
                v-model="course_funded"
            />
            <select
                type="number"
                class="form-control my-2"
                v-model="activity_type"
            >					<option></option>

              <option value="1">دورة</option>
              <option value="2">رحلة</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="cols">
              <div class="d-flex justify-content-between p-3 mb-2">
                <div>الأعمدة</div>
                <div>
                  <input type="checkbox" v-model="courses_cols_all" id="courses_cols_all">
                  <label for="courses_cols_all"  class="mx-2">تحديد الكل</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.effectiveness_number" id="effectiveness_number">
                  <label for="effectiveness_number"  class="mx-2">رقم الفعالية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.effectiveness_name" id="effectiveness_name">
                  <label for="effectiveness_name"  class="mx-2">اسم الفعالية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.date" id="date">
                  <label for="date"  class="mx-2">التاريخ</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.start" id="start">
                  <label for="start"  class="mx-2">وقت البداية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.end" id="end">
                  <label for="end"  class="mx-2">وقت النهاية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.funded_side" id="course_funded_side">
                  <label for="course_funded_side"  class="mx-2">الجهة الممولة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.supervisor" id="supervisor">
                  <label for="supervisor"  class="mx-2">المشرف</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.supervisor_cost" id="supervisor_cost">
                  <label for="supervisor_cost"  class="mx-2">تكلفة المشرف</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.number_of_effectiveness" id="number_of_effectiveness">
                  <label for="number_of_effectiveness"  class="mx-2">عدد المتفاعلين</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.cost" id="cost">
                  <label for="cost"  class="mx-2">التكلفة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.total_cost" id="total_cost">
                  <label for="total_cost"  class="mx-2">التكلفة الإجمالية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.activity_type" id="activity_type">
                  <label for="activity_type"  class="mx-2">النشاط</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="courses_cols.notes" id="notes">
                  <label for="notes"  class="mx-2">الملاحظات</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="report_type === 'benefit_details'" class="row">
          <div class="col-md-6">
            <label> المستفيد <span class="text-danger">*</span></label>
            <v-select v-model="benefit" class="form-control" :options="options" :value-by="option" label-by="name" clear-on-close close-on-select placeholder="اختر مستفيد" searchable search-placeholder="اكتب للبحث"> </v-select>

          </div>
        </div>
        <div v-if="report_type === 'not_benefiting'" class="row">
          <span>البحث:</span>
          <div class="col-md-6">
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
            <input
                type="text"
                class="form-control my-2"
                placeholder="المدينة"
                v-model="benefits_city"
            />
            <input
                type="text"
                class="form-control my-2"
                placeholder="الحي"
                v-model="benefits_district"
            />
            <select class="form-control my-2"  v-model="benefits_gender">
              <option disabled selected>الجنس</option>
              <option value="2">ذكر</option>
              <option value="1">أنثى</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="cols">
              <div class="d-flex justify-content-between p-3 mb-2">
                <div>الأعمدة</div>
                <div>
                  <input type="checkbox" v-model="benefits_cols_all" id="benefits_cols_all2">
                  <label for="benefits_cols_all2"  class="mx-2">تحديد الكل</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.id_number" id="id_number2">
                  <label for="id_number2"  class="mx-2">رقم الهوية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.name"  id="name2">
                  <label for="name2" class="mx-2">الاسم</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.affiliate_no"  id="affiliate_no2">
                  <label for="affiliate_no2" class="mx-2">رقم المستفيد</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.mobile_number"  id="mobile_number2">
                  <label for="mobile_number2" class="mx-2">رقم الجوال</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.phone_number"  id="phone_number2">
                  <label for="phone_number2" class="mx-2">رقم الهاتف</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.year"  id="year2">
                  <label for="year2" class="mx-2">السنة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.gender"  id="gender2">
                  <label for="gender2" class="mx-2">الجنس </label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.birth_date"  id="birth_date2">
                  <label for="birth_date2" class="mx-2">تاريخ الميلاد</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.governorate"  id="governorate2">
                  <label for="governorate2" class="mx-2">المحافظة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.district"  id="district2">
                  <label for="district2" class="mx-2">المنطقة</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.address"  id="address2">
                  <label for="address2" class="mx-2">العنوان</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.social_status"  id="social_status2">
                  <label for="social_status2" class="mx-2">الحالة الاجتماعية</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.near_number"  id="near_number2">
                  <label for="near_number2" class="mx-2">رقم القريب</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.qualification"  id="qualification2">
                  <label for="qualification2" class="mx-2">المؤهل</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.specialty"  id="specialty2">
                  <label for="specialty2" class="mx-2">التخصص</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.current_work"  id="current_work2">
                  <label for="current_work2" class="mx-2">العمل الحالي</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.previous_work"  id="previous_work2">
                  <label for="previous_work2" class="mx-2">العمل السابق</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.wife_name"  id="wife_name2">
                  <label for="wife_name2" class="mx-2">اسم الزوج</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.wife_identity"  id="wife_identity2">
                  <label for="wife_identity2" class="mx-2">هوية الزوج</label>
                </div>
                <div class="col-md-6 my-1">
                  <input type="checkbox" v-model="benefits_cols.citizenship"  id="citizenship2">
                  <label for="citizenship2" class="mx-2">المواطنة</label>
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
      options: [],
      aids: [],
      benefit: null,
      report_type: "benefits",
      show_report: false,
      show_logo: true,
      report_title: null,
      print_btn: true,
      loading: false,
      benefits_cols_all: true,
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
        governorate : true,
        district : true,
      },
      subs_cols_all: true,
      subs_cols: {
        start_subscription: true,
        end_subscription: true,
        code: true,
        last_year: true,
        subscription_fees: true,
        order_fees: true,
        description: true,
      },
      projects_cols_all: true,
      courses_cols_all: true,
      projects_cols: {
        project_number: true,
        project_name: true,
        funded_side: true,
        project_date: true,
        value_per_person: true,
        donated_number: true,
        project_amount: true,
        type: true,
        status: true,
      },
      courses_cols: {
        effectiveness_number: true,
        effectiveness_name: true,
        activity_type: true,
        funded_side: true,
        date: true,
        start: true,
        end: true,
        supervisor: true,
        supervisor_cost: true,
        number_of_effectiveness: true,
        cost: true,
        total_cost: true,
        notes: true,
      },
      benefits:[],
      subs:[],
      projects:[],
      courses:[],
      benefits_year: null,
      benefits_name: null,
      benefits_num: null,
      benefits_id: null,
      benefits_city: null,
      benefits_district: null,
      benefits_gender: null,
      subs_code: null,
      subs_start_year: null,
      subs_end_year: null,
      project_number : null,
      project_name : null,
      project_price : null,
      project_funded : null,
      project_type : null,
      course_name : null,
      course_number : null,
      course_funded : null,
      activity_type : null,
      subs_total_order_fees : 0,
      subs_total_subs_fees : 0,
      aids_total_value_person : 0,
      aids_total_donated : 0,
      aids_total_project_amount : 0,
      courses_total_supervisor_cost : 0,
      courses_total_number_of_effectiveness : 0,
      courses_total_total_cost : 0,
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
            benefits_gender: this.benefits_gender,
            benefits_city: this.benefits_city,
            benefits_district: this.benefits_district,
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
              this.subs_total_order_fees = res.data.total_order_fees;
              this.subs_total_subs_fees = res.data.total_subs_fees;
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "helpers":
          axios.post('/api/reports/helpers', {
            project_number: this.project_number,
            project_name: this.project_name,
            project_price: this.project_price,
            project_funded: this.project_funded,
            project_type: this.project_type,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.projects = res.data.projects;
              this.aids_total_value_person = res.data.total_value_person;
              this.aids_total_donated = res.data.total_donated;
              this.aids_total_project_amount = res.data.total_project_amount;
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "courses":
          axios.post('/api/reports/courses', {
            course_name: this.course_name,
            course_number: this.course_number,
            course_funded: this.course_funded,
            activity_type: this.activity_type,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.courses = res.data.courses;
              this.courses_total_supervisor_cost = res.data.total_supervisor_cost;
              this.courses_total_number_of_effectiveness = res.data.total_number_of_effectiveness;
              this.courses_total_total_cost = res.data.total_total_cost;
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "achievements":
          axios.post('/api/reports/achievements', {

          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.courses = res.data.courses;
              this.projects = res.data.projects
            }
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "benefit_details":
          axios.post('/api/reports/benefit_details', {
            benefit: this.benefit ? this.benefit.id : null
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.courses = res.data.courses;
              this.projects = res.data.projects
            }
          }).catch(() => {
           this.failed();
          }).finally(() => {
            this.loading = false;
          })
          break;
        case "not_benefiting":
          axios.post('/api/reports/not_benefiting', {
            benefits_name: this.benefits_name,
            benefits_num: this.benefits_num,
            benefits_id: this.benefits_id,
            benefits_gender: this.benefits_gender,
            benefits_city: this.benefits_city,
            benefits_district: this.benefits_district,
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
        case "aid_details":
          axios.post('/api/reports/aid_details', {}, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.aids = res.data.aids;
              this.benefits = res.data.benefits;
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
    },
    failed() {
      this.$swal.fire({
        icon: "error",
        title: "هناك خطأ ما !",
        text: "تأكد من المدخلات المطلوبة",
      });
    },
    getAidDetailsForPerson(aid, person, key) {
      let result = null;
      person.aid_people.forEach(a => {
        if (a.aid && (a.aid.id == aid.id)) {
          result = a;
        }
      })
      if (result) {
        return key == 'amount' ? result['aid']["value_per_person"] : result['count_of_aids'];
      }
      return "-";
    },
    exportTable() {

      let id = "benefits_table";
      switch (this.report_type) {
        case "benefits":
          id = "benefits_table";
          break;
        case "subs":
          id = "subs_table";
          break;
        case "helpers":
          id = "helpers_table";
          break;
        case "courses":
          id = "courses_table";
          break;
        case "not_benefiting":
          id = "not_benefiting_table";
          break;
        case "aid_details":
          id = "aid_details_table";
          break;
      }
      let elt = document.getElementById(id);
      console.log(elt)
      let XLSX = require("xlsx");
      let wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
      return XLSX.writeFile(wb, ((this.report_title || "report") + ".xlsx"));
    }
  },
  watch: {
    benefits_cols_all(v) {
      for (let key in this.benefits_cols) {
        this.benefits_cols[key] = v;
      }
    },
    subs_cols_all(v) {
      for (let key in this.subs_cols) {
        this.subs_cols[key] = v;
      }
    },
    projects_cols_all(v) {
      for (let key in this.projects_cols) {
        this.projects_cols[key] = v;
      }
    },
    courses_cols_all(v) {
      for (let key in this.courses_cols) {
        this.courses_cols[key] = v;
      }
    },
  },
  components: {container},
  mounted() {
    const token = sessionStorage.getItem("token");
    axios.get('/api/reports/data', {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(res => {
      this.options = res.data.beneficiaries;
    }).catch(() => {
      this.failed();
    }).finally(() => {
      this.loading = false;
    });
  }
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
