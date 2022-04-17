<template>
  <div v-if="show_report" class="p-3">
    <div class="row">
      <div class="col-md-4 title"><h3>جمعية رعاية كبار السن</h3></div>
      <div class="col-md-4 text-center">
        <h3>{{report_title}}</h3>
      </div>
      <div class="col-md-4" style="text-align: left">
        <img v-if="show_logo" src="../../assets/img/log.jpeg" alt="" class="logos">
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
      <table v-if="report_type == 'helpers'" class="mt-3 table table-bordered">
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
          <td v-if="projects_cols.type">{{ project.type }}</td>
          <td v-if="projects_cols.status && project.status == 1">مقترح</td>
          <td v-if="projects_cols.status && project.status == 2">تمت</td>
        </tr>
        </tbody>
      </table>
      <table v-if="report_type == 'courses'" class="mt-3 table table-bordered">
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
        <div v-if="report_type === 'helpers'" class="row">
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
          </div>
          <div class="col-md-6">
            <div class="cols">
              <span>الأعمدة</span>
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
              <span>الأعمدة</span>
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
      show_logo: true,
      report_title: null,
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
      subs_code: null,
      subs_start_year: null,
      subs_end_year: null,
      project_number : null,
      project_name : null,
      project_price : null,
      project_funded : null,
      course_name : null,
      course_number : null,
      course_funded : null,
      activity_type : null,
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
        case "helpers":
          axios.post('/api/reports/helpers', {
            project_number: this.project_number,
            project_name: this.project_name,
            project_price: this.project_price,
            project_funded: this.project_funded,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then(res => {
            if (res.data.status) {
              this.show_report = true;
              this.projects = res.data.projects;
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
