<template>
	<container>
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
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-fifth"
						type="button"
						role="tab"
						aria-controls="pills-fifth"
						aria-selected="false"
					>
						الاحتياجات
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-fourth"
						type="button"
						role="tab"
						aria-controls="pills-fourth"
						aria-selected="false"
					>
						مصادر الدخل
					</button>
				</li>
        			<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-six"
						type="button"
						role="tab"
						aria-controls="pills-six"
						aria-selected="false"
					>
          الدورات
          
          					</button>
				</li>

		
    	<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-seven"
						type="button"
						role="tab"
						aria-controls="pills-seven"
						aria-selected="false"
					>
          المساعدات
          
          					</button>
				</li>

		
    	<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-eight"
						type="button"
						role="tab"
						aria-controls="pills-eight"
						aria-selected="false"
					>
          الاشتراكات
          
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
										disabled
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
									<input type="text" class="form-control" disabled v-model="name" />
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>الهوية
								</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" disabled v-model="id_number" />
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
									<input type="text" class="form-control" disabled v-model="district" />
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
										disabled
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
										disabled
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
									<input type="text" class="form-control" disabled v-model="address" />
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
										disabled
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
										disabled
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
									<input type="text" class="form-control" disabled v-model="wife_name" />
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
										v-model="previous_work"
									>
										<option>مزارع</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<button
								class="btn"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								صورة الهوية
							</button>

							<div
								class="modal fade"
								id="exampleModal"
								tabindex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<img :src="id_image" class="w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<button class="btn" data-bs-toggle="modal" data-bs-target="#ex">
								صورة الطلب
							</button>

							<div
								class="modal fade"
								id="ex"
								tabindex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<img :src="aflt" class="w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
				<div class="col-md-6 mt-4">
							<button class="btn" data-bs-toggle="modal" data-bs-target="#img3">
								صورة الشخصية
							</button>

							<div
								class="modal fade"
								id="img3"
								tabindex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<img :src="personimg" class="w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- النهاية -->
					</div>
				</div>
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
										v-model="housing_possession"
										class="form-select"
										aria-label="Default select example"
										disabled
									>
										<option></option>
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
										disabled
									>
										<option></option>
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
									<input
										type="text"
										class="form-control"
										v-model="accommodation_type"
										disabled
									/>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>نقص اثاث
								</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										v-model="lack_of_furniture"
										disabled
									/>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>ملاحظات السكن</label
								>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										v-model="housing_notes"
										disabled
									/>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>وصف حالة الاغطية</label
								>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										v-model="description_of_case"
										disabled
									/>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>العلاج</label
								>
								<div class="col-sm-10">
									<select
										class="form-select"
										aria-label="Default select example"
										v-model="treatment"
										disabled
									>
										<option></option>
									</select>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-3 row">
								<label for="inputPassword" class="col-sm-12 col-form-label"
									>التهوية</label
								>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										v-model="ventilation"
										disabled
									/>
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
										disabled
									>
										<option></option>
									</select>
								</div>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									وجود سرير وفرشة مناسبة
								</label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									يوجد مكان مخصص للأدوية
								</label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									الغرفة بحاجة للصيانة
								</label>
							</div>

							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									ملاحظات الادوية
								</label>
							</div>
						</div>
					</div>
					<hr class="mt-4" />
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
										disabled
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
									<input type="text" class="form-control" v-model="can_used" disabled />
								</div>
							</div>
						</div>
						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									احترام متبادل
								</label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									مشاركة الاخرين
								</label>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault"> اهتمام </label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									الاهتمام بالاخرين
								</label>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									الدعم النفسي
								</label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									منبوذ اناني
								</label>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									توفير الاحتياجات
								</label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									منبوذ سليط اللسان
								</label>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault"> انطوائي </label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									منبوذ مريض
								</label>
							</div>
						</div>

						<div class="col-md-4 mt-4">
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault"> مبادر </label>
							</div>
							<div class="form-check form-check-inline mt-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									منبوذ صعب الحركة
								</label>
							</div>
						</div>

						<div class="col-md-6 mt-1">
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
				</div>
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
										disabled
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
				</div>
				<div
					class="tab-pane fade"
					id="pills-fourth"
					role="tabpanel"
					aria-labelledby="pills-fourth-tab"
				>
					<table class="table ">
						<thead>
							<tr>
								<th scope="col">مصدر الدخل</th>
								<th scope="col">القيمة المالية للدخل</th>
								<th scope="col">تفصيل مصدر الدخل</th>
								<th scope="col">المساعدة العينية</th>
								<th scope="col">التقييم المالي للمساعدات</th>
								<th scope="col">ملاحظات</th>
							</tr>
						</thead>
						<tbody>
							<tr class="text-center" v-for="item in informats" :key="item.id">
								<td>{{ item.source_of_income }}</td>
								<td>{{ item.financial_value }}</td>
								<td>{{ item.income_source_details }}</td>
								<td>{{ item.in_kind_assistance }}</td>
								<td>{{ item.financial_evaluation }}</td>
								<td>{{ item.notes }}</td>
							</tr>
						</tbody>
					</table>

					<div
						class="d-flex justify-content-evenly"
						style="background: #009879; color: white"
					>
						<p class="mt-3">إجمالي الدخل المالي:</p>

						<div class="mt-3" v-for="(item, index) in informats2" :key="index">
							<a>{{ item.total_financial_income }}</a>
						</div>
						<p class="mt-3">التقييم المالي الإجمالي:</p>

						<div class="mt-3" v-for="(item, index) in informats2" :key="index">
							<a>{{ item.total_financial_evaluation }}</a>
						</div>
						<p class="mt-3">المجموع الكلي :</p>
						<div class="mt-3" v-for="(item, index) in informats2" :key="index">
							<a>{{ item.total_summation }}</a>
						</div>
					</div>
				</div>

				<div
					class="tab-pane fade"
					id="pills-fifth"
					role="tabpanel"
					aria-labelledby="pills-fifth-tab"
				>
					<table class="table ">
						<thead>
							<tr>
								<th scope="col">#</th>

								<th scope="col">النوع</th>
								<th scope="col">الملاحظات</th>
							</tr>
						</thead>
						<tbody>
							<tr class="text-center" v-for="item in informats3" :key="item.id">
								<td>{{ item.id }}</td>
								<td>{{ item.type }}</td>
								<td>{{ item.note }}</td>
							</tr>
						</tbody>
					</table>
				</div>
        	<div
					class="tab-pane fade"
					id="pills-six"
					role="tabpanel"
					aria-labelledby="pills-six-tab"
				>
				<table class="table ">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">اسم المشروع</th>
								<th scope="col">الجهة الممولة</th>
								<th scope="col">رقم المشروع</th>
								<th scope="col">تاريخ المشروع</th>
								<th scope="col">لمشرف</th>
								<th scope="col">الوقت</th>
								<th scope="col">الانتهاء</th>
								
							</tr>
						</thead>
						<tbody>
							<tr class="text-center" v-for="item in course" :key="item.id">
								<td>{{ item.id }}</td>
								<td>{{ item.effectiveness_name }}</td>
								<td>{{ item.funded_side }}</td>
								<td>{{ item.effectiveness_number }}</td>
								<td>{{ item.date }}</td>
								<td>{{ item.supervisor }}</td>
								<td>{{ item.start }}</td>
								<td>{{ item.end }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div
					class="tab-pane fade"
					id="pills-seven"
					role="tabpanel"
					aria-labelledby="pills-seven-tab"
				>
					<table class="table ">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">اسم المشروع</th>
								<th scope="col">الجهة الممولة</th>
								<th scope="col">رقم المشروع</th>
								<th scope="col">النوع</th>
								<th scope="col">تاريخ المشروع</th>
								<th scope="col">القيمة للشخص</th>
							</tr>
						</thead>
						<tbody>
							<tr class="text-center" v-for="item in aid" :key="item.id">
								<td>{{ item.id }}</td>
								<td>{{ item.project_name }}</td>
								<td>{{ item.funded_side }}</td>
								<td>{{ item.project_number }}</td>
								<td>{{ item.type }}</td>
								<td>{{ item.project_date }}</td>
								<td>{{ item.value_per_person }}</td>
							</tr>
							
						</tbody>
					</table>
					
					<div
						class="d-flex justify-content-evenly"
						style="background: #009879; color: white"
					>
						<p class="mt-3">إجمالي الدخل المالي:</p>

						<div class="mt-3" v-for="(item, index) in aid2" :key="index">
							<a>{{ item.total_number }}</a>
						</div>
						<p class="mt-3">التقييم المالي الإجمالي:</p>

						<div class="mt-3" v-for="(item, index) in aid2" :key="index">
							<a>{{ item.total_value }}</a>
						</div>
					
					</div>
				</div>
        		<div
					class="tab-pane fade"
					id="pills-eight"
					role="tabpanel"
					aria-labelledby="pills-eight-tab"
				>
			<table class="table ">
						<thead>
							<tr>
								<th scope="col">#</th>
									<th scope="col">الكود</th>
						<th scope="col">نوع الاشتراك</th>
						<th scope="col">تاريخ البداية</th>
						<th scope="col">تاريخ النهاية</th>
						<th scope="col">الاشتراك</th>
						<th scope="col">الطباعة </th>
							</tr>
						</thead>
						<tbody>
							<tr class="text-center" v-for="item in subscs" :key="item.id">
										<th scope="row">{{ item.id }}</th>
										<th scope="row">{{ item.code }}</th>
						<th v-if="item.subscription_type == 1">غير مجاني</th>
						<th v-else-if="item.subscription_type == 0">مجاني</th>

						<th scope="row">{{ item.start_subscription }}</th>
						<th scope="row">{{ item.end_subscription }}</th>
						<td v-if="item.is_payment == 0">غير مشترك</td>
							<td v-else>مشترك</td>
							<td v-if="item.is_printed == 0 ">غير مطبوع</td>
							<td v-else> مطبوع</td>
					
							</tr>
						</tbody>
					</table>
				</div>
      </div>
		</div>
	</container>
</template>

<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		name: "editpage",
		components: { container },

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
				ed: false,
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

				informats: [],
				informats2: [],
				informats3: [],
				id_image: "",
				aflt: "",
				personimg: "",
				typeneed: "",
				noteneed: "",
				aid:[],
				aid2:[],
				course:[],	
				subscs:[]	
						};
		},
		created() {
			this.basicdata();
			this.homedata();
			this.workdata();
			this.source();
			this.aids();
			this.courses();
			this.subsc();
		},
		methods: {
			needed() {
				const token = sessionStorage.getItem("token");
				console.log(this.informats);
				axios
					.get(`/api/need/show?beneficiary_id=700${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data);
						this.informats3 = res.data.data.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
				aids() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/aidpeople/show?beneficiary_id=${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						console.log("aid ");
						this.aid = res.data.data.aid;
						this.aid2 = res.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
				subsc() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/subscriptionpeople/show?beneficiary_id=${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						console.log("subscs ");
						this.subscs = res.data.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
					courses() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/personcourse/show?beneficiary_id=${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						console.log("cfdssdfdsfdfs ");
						this.course = res.data.data;
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
						(this.id_number = res.data.data.id_number),
							(this.affiliate_no = res.data.data.affiliate_no),
							(this.name = res.data.data.name),
							(this.mobile_number = res.data.data.mobile_number),
							(this.governorate = res.data.data.governorate),
							(this.citizenship = res.data.data.citizenship),
							(this.classe = res.data.data.class),
							(this.wife_identity = res.data.data.wife_identity),
							(this.wife_name = res.data.data.wife_name),
							(this.previous_work = res.data.data.previous_work),
							(this.number_of_people = res.data.data.number_of_people),
							(this.phone_number = res.data.data.phone_number),
							(this.gender = res.data.data.gender),
							(this.birth_date = res.data.data.birth_date),
							(this.year = res.data.data.year),
							(this.specialty = res.data.data.specialty),
							(this.qualification = res.data.data.qualification),
							(this.social_status = res.data.data.social_status),
							(this.id_image = res.data.data.id_image),
							(this.aflt = res.data.data.affiliate_image),
							(this.personimg = res.data.data.image),
							(this.district = res.data.data.district),
							(this.address = res.data.data.address),
							(this.near_number = res.data.data.near_number),
							(this.current_work = res.data.data.current_work);
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
						this.dataed = res.data.dataed;
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
						console.log(res);
						this.informats = res.data.data.data , 
						this.informats2 = res.data;
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
			// EDIT PERSONAL DATA
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
