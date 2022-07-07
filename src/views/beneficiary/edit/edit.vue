<template>
  <div class="heade d-flex justify-content-around">
    <div>
      الاسم :
      {{ name }}

    </div>
    <div>
      رقم المستفيد :
      {{ affiliate_no }}
    </div>
    <div>
      رقم الهوية :
      {{ id_number }}

    </div>
    <div>
      العام :
      {{ year }}

    </div>
  </div>
  <Container>
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
        <li class="nav-item" role="presentation">
          <button
              class="nav-link"
              id="pills-income-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-income"
              type="button"
              role="tab"
              aria-controls="pills-income"
              aria-selected="false"
          >
            مصادر الدخل
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
              class="nav-link"
              id="pills-needs-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-needs"
              type="button"
              role="tab"
              aria-controls="pills-needs"
              aria-selected="false"
          >
            الاحتياجات
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

            <div class="line row	">
              <div class="fieldset row ">
                <p class="title">معلومات شخصية</p>
                <div class="col-md-6">
                  <div class="m-3 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                    >الهوية <span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input type="text" maxlength="9" class="form-control" v-model="id_number"
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
                      <input type="text" class="form-control" v-model="name"/>
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
                          type="text"
                          maxlength="5"
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
                        <option value="2">ذكر</option>
                        <option value="1">أنثى</option>
                      </select>
                      <small class="text-danger">
                        {{ errgender }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="m-3 mt-4 row">
                    <label for="inputPassword" class="col-sm-12 col-form-label"
                    >العام<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="year"/>
                      <small class="text-danger">
                        {{ errname }}
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
                      <input type="date" class="form-control" v-model="birth_date"/>
                      <small class="text-danger">
                        {{ errbirth }}
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


              </div>
            </div>
            <div class="fieldset row ">
              <p class="title">معلومات الاسرة</p>
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
                  >هوية الزوج
                  </label>
                  <div class="col-sm-10">
                    <input type="text" maxlength="9" class="form-control" v-model="wife_identity"/>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="m-3 row">
                  <label for="inputPassword" class="col-sm-12 col-form-label"
                  >اسم الزوج
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="wife_name"/>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="m-3 row">
                  <label for="inputPassword" class="col-sm-12 col-form-label"
                  >عدد الافراد
                  </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="number_of_people"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="fieldset row ">
              <p class="title">العنوان</p>
              <div class="col-md-6">
                <div class="m-3 row">
                  <label for="inputPassword" class="col-sm-12 col-form-label"
                  >المحافظة <span class="text-danger">*</span></label
                  >
                  <div class="col-sm-10">
                    <div class="col-sm-10">
                      <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="rec"
                          @change="countr2"
                      >
                        <option v-for="item in informats1" :key="item.id" :value="item.id">
                          {{ item.governorate }}
                        </option>
                      </select>
                    </div>
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
                      <option v-for="items in districts" :key="items.id" :value="items.id">
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
                    <input type="text" class="form-control" v-model="address"/>
                    <small class="text-danger">
                      {{ ereaddres }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="fieldset row ">
              <p class="title">معلومات الاتصال</p>

              <div class="col-md-6">
                <div class="m-3 row">
                  <label for="inputPassword" class="col-sm-12 col-form-label"
                  >رقم الجوال <span class="text-danger">*</span></label
                  >
                  <div class="col-sm-10">
                    <input type="text" maxlength="10" class="form-control" v-model="mobile_number"/>
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
                    <input type="text" maxlength="9" class="form-control" v-model="phone_number"/>
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
                    <input type="text" maxlength="10" class="form-control" v-model="near_number"/>
                    <small class="text-danger">
                      {{ errnear }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="fieldset row ">
              <p class="title">معلومات عامة</p>


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
                      <option v-for="type in work_types" :key="type.id" :value="type.name">{{ type.name }}</option>

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
                      <option v-for="type in work_types" :key="type.id" :value="type.name">{{ type.name }}</option>

                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-10">
              <div class="row flex-row me-5 my-4">
                <label for="img2" class="col-sm-4 col-form-label btn">
                  اضف صورة البطاقة
                </label>
                <div class="col-sm-1">
                  <input
                      type="file"
                      class="btn d-none"
                      id="img2"
                      @change="uploadFile2"
                      ref="file2"
                  />
                </div>

                <label for="img3" class="col-sm-3 btn col-form-label"
                >اضف صورة شخصية
                </label>
                <div class="col-sm-1">
                  <input
                      type="file"
                      class="btn d-none"
                      id="img3"
                      @change="uploadFile3"
                      ref="file3"
                  />
                </div>
                <label for="img" class="col-sm-3 col-form-label btn"
                >اضف صورة الهوية <span class="text-danger">*</span></label
                >
                <div class="col-sm-1">
                  <input
                      type="file"
                      class="btn d-none"
                      id="img"
                      @change="uploadFile"
                      ref="file"
                  />
                </div>

                <div class="row justify-content-center mt-2" style="height: 70px">
                  <div class="col-4 row justify-content-center">
                    <img :src="affiliate_image" alt="" class="amgs"/>
                  </div>
                  <div class="col-4 row justify-content-center">
                    <img :src="image" alt="" class="amgs me-5"/>
                  </div>
                  <div class="col-4 row justify-content-center">
                    <img
                        :src="id_image"
                        alt=""
                        class="amgs"
                        style="margin-right: 150px !important"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button @click.prevent="editpersonal" class="btn w-25 mt-5">اضافة</button>
            <!-- النهاية -->
          </div>
        </div>
        <home/>
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
                  <input type="text" class="form-control" v-model="work_nature"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label"
                >طبيعة العمل او الوظيفة
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="job_can_do"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label"
                >طبيعة المشروع</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="project_nature"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label"
                >في حال عدم القدرة على العمل</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="employment"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label"
                >التكلفة المتوقعة لتنفيذ المشروع</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="cost_of_project"/>
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
                  <input type="text" class="form-control" v-model="in_kind_assistance"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label"
                >حدد نوع التدريب</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="training_type"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">
                  السكن بحاجة
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="housing_need"/>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="m-3 row">
                <label for="inputPassword" class="col-sm-12 col-form-label">
                  المسن بحاجة
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="elderly_need"/>
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

        <div
            class="tab-pane fade"
            id="pills-income"
            role="tabpanel"
            aria-labelledby="pills-income-tab"
        >
          <table class="table">
            <thead>
            <tr>
              <th>مصدر الدخل</th>
              <th>المساعدة العينية</th>
              <th>تفصيل مصدر الدخل</th>
              <th>الملاحظات</th>
              <th>#</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="inco in incomes " :key="inco.id">
              <th>{{ inco.source_of_income }}</th>
              <th>{{ inco.in_kind_assistance }}</th>
              <th>{{ inco.income_source_details }}</th>
              <th>{{ inco.notes }}</th>
              <th>
                <router-link
                    class="links"
                    :to="{ name: 'incoedit', query: { q: inco.id } }"
                    style="color: black"
                >
                  تعديل
                </router-link
                >
              </th>

            </tr>
            </tbody>
          </table>
        </div>
        <div
            class="tab-pane fade"
            id="pills-needs"
            role="tabpanel"
            aria-labelledby="pills-income-tab"
        >
          <div class="row">
            <div class="col-md-12">
              <button @click="addNeed" class="btn btn-success my-2">
                اضافة
              </button>
              <table class="table">
                <thead>
                <tr>
                  <th>النوع</th>
                  <th>الملاحظات</th>
                  <th>#</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(need, index) in needss " :key="need.id">
                  <th>
                    <select class="form-select" aria-label="Default select example" v-model="need.type">
                      <option v-for="type in need_types" :key="type.id" :value="type.name">{{type.name}}</option>
                    </select>
                  </th>
                  <th><input type="text" class="form-control" v-model="need.notes"></th>
                  <th>
                    <a @click.prevent="deleteItem(index)" href="#" class="icons"><i class="fa fa-trash" aria-hidden="true"></i></a>

                  </th>

                </tr>
                </tbody>
              </table>
            </div>

            <div class="row justify-content-center mt-4">
              <button @click.prevent="saveNeed()" class="btn w-25">اضافة</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import axios from "axios";
import home from "./home.vue";
import Container from "@/components/containers/container.vue";

export default {
  name: "editpage",
  components: {home, Container},
  data() {
    return {
      id_number: "",
      need_types: [],
      needss: [],
      work_types: [],
      name: "",
      affiliate_no: "",
      mobile_number: "",
      affiliate_image: null,
      id_image: null,
      image: null,
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
      districts: [],
      address: "",
      near_number: "",
      file: null,
      file2: null,
      file3: null,
      // home page

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

      // work page

      elderly_work: true,
      work_nature: "",
      employment: "",
      job_can_do: "",
      need_training: true,
      training_type: "",
      social_assessment: "",
      income_generating_project: true,
      project_nature: "",
      cost_of_project: "",
      financial_assistance: "",
      in_kind_assistance: "",
      housing_need: "",
      elderly_need: "",
      economic_evaluation: "",
      rec: "",
      incomes: [],
      informats: [],
      informats1: [],
      informats2: [],
      need_type: null,
      need_type_id: null,
      need_type_notes: null,
    };
  },
  created() {
    this.basicdata();
    this.homedata();
    this.workdata();
    this.source();
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
      this.file3 = this.$refs.file3.files[0];
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
            console.log('dsasdasdasdasdasdasdasdasdasdsad');
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
    show() {
      this.$swal
          .fire({
            position: "top-end",
            icon: "success",
            title: "تمت الاضافة بنجاح ",
            showConfirmButton: false,
            timer: 1500,
          })

    },
    failed() {
      this.$swal.fire({
        icon: "error",
        title: "هناك خطأ ما !",
        text: "تأكد من المدخلات المطلوبة",
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
          .then((res) =>  {
            // console.log(res.data);
            // console.log("البيانات الاساسية");
            // console.log(1222222);
            // console.log(res.data.data.need_types);
            this.need_types = res.data.data.need_types;
            this.needss = res.data.data.needss;
            this.rec = res.data.data.governorate_id;
            this.district = res.data.data.district_id;
            this.districts = res.data.data.districts;
            this.id_number = res.data.data.id_number;
            this.affiliate_no = res.data.data.affiliate_no;
            this.name = res.data.data.name;
            this.image = res.data.data.image;
            this.affiliate_image = res.data.data.affiliate_image;
            this.id_image = res.data.data.id_image;
            this.mobile_number = res.data.data.mobile_number;
            this.governorate = res.data.data.governorate;
            this.citizenship = res.data.data.citizenship;
            this.classe = res.data.data.class;
            this.wife_identity = res.data.data.wife_identity;
            this.wife_name = res.data.data.wife_name;
            this.previous_work = res.data.data.previous_work;
            this.number_of_people = res.data.data.number_of_people;
            this.phone_number = res.data.data.phone_number;
            this.gender = res.data.data.gender;
            this.birth_date = res.data.data.birth_date;
            this.year = res.data.data.year;
            this.specialty = res.data.data.specialty;
            this.qualification = res.data.data.qualification;
            this.social_status = res.data.data.social_status;
            // this.district = res.data.data.district;
            this.address = res.data.data.address;
            this.near_number = res.data.data.near_number;
            this.current_work = res.data.data.current_work;
            this.need_type = res.data.data.need.type;
            this.need_type_notes = res.data.data.need.notes;
            this.need_type_id = res.data.data.need.id;
            this.work_types = res.data.data.work_types;

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
            console.log("home");
            this.housing_possession = res.data.data.housing_possession;
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
            this.collaborating_with_researcher =
                res.data.data.collaborating_with_researcher;
            this.can_used = res.data.data.can_used;
            this.cooperation_notes = res.data.data.cooperation_notes;
            this.share_with_others = res.data.data.share_with_others;
            this.outcast_awkward = res.data.data.outcast_awkward;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    source() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/sourcesofincome/show?beneficiary_id=${this.$route.query.q}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res.data.data.data);
            (this.incomes = res.data.data.data) (this.informats2 = res.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    workdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/work/show?beneficiary_id=${this.$route.query.q}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res.data.data);
            (this.elderly_work = res.data.data.elderly_work),
                (this.work_nature = res.data.data.work_nature),
                (this.employment = res.data.data.employment),
                (this.job_can_do = res.data.data.job_can_do),
                (this.need_training = res.data.data.need_training),
                (this.training_type = res.data.data.training_type),
                (this.social_assessment = res.data.data.social_assessment),
                (this.income_generating_project =
                    res.data.data.income_generating_project),
                (this.project_nature = res.data.data.project_nature),
                (this.cost_of_project = res.data.data.cost_of_project),
                (this.financial_assistance = res.data.data.financial_assistance),
                (this.in_kind_assistance = res.data.data.in_kind_assistance),
                (this.housing_need = res.data.data.housing_need),
                (this.elderly_need = res.data.data.elderly_need),
                (this.economic_evaluation = res.data.data.economic_evaluation);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    // EDIT DATA

    // EDIT HOME DATA
    editwork() {
      // Edit Home page

      const token = sessionStorage.getItem("token");
      axios
          .post(
              "api/work/update",
              {
                beneficiary_id: this.$route.query.q,
                elderly_work: this.elderly_work ? 1 : 0,
                work_nature: this.work_nature,
                employment: this.employment,
                job_can_do: this.job_can_do,
                need_training: this.need_training ? 1 : 0,
                training_type: this.training_type,
                social_assessment: this.social_assessment,
                income_generating_project: this.income_generating_project ? 1 : 0,
                project_nature: this.project_nature,
                cost_of_project: this.cost_of_project,
                financial_assistance: this.financial_assistance,
                in_kind_assistance: this.in_kind_assistance,
                housing_need: this.housing_need,
                elderly_need: this.elderly_need,
                economic_evaluation: this.economic_evaluation,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then((res) => {
            console.log(res.data);
            location.reload();
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

            location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
    }, // EDIT PERSONAL DATA
    editpersonal() {
      const token = sessionStorage.getItem("token");
      let formData = new FormData();
      formData.append("beneficiary_id", this.$route.query.q);
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
      axios
          .post(
              "api/beneficiary/update",
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
            this.show()
          })
          .catch((e) => {
            console.log(e);
            this.failed()
          });
    },
    saveNeed() {
      const token = sessionStorage.getItem("token");

      axios
          .post(
              "api/need/update",
              {
                needs: this.needss,
                benf_id: this.$route.query.q
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
            this.failed()
          });
    },
    addNeed() {
      this.needss.push({
        type:null,
        notes:null
      })
    },
    deleteItem(index) {
      this.needss.splice(index, 1);
    }
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

.amgs {
  width: 100px !important;
  height: 100px;
}
</style>
