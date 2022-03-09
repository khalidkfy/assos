<template>
	<container>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="d-flex">
					<table class="bg-none shadow-none">
					
						<tbody>
							<tr class="text-center d-flex justify-content-between">
		
								<th class="mx-4 my-3">
									<input
										type="text"
										v-model="nums"
										class="form-control ms-5"
										placeholder="رقم المستفيد "
																	/>
								</th>
								<th class="mx-4 my-3">
									<input
										type="date"
										v-model="date"
										class="form-control  ms-5"
										placeholder="تاريخ الاستلام "
									/>
								</th>
								<th class="mx-4 my-3">
									<input
										type="text"
										v-model="count"
										class="form-control  ms-5"
										placeholder="عدد المساعدات  "
									/>
								</th>
								
								<th>
									
								</th>
							</tr>
						</tbody>
					</table>
										<button type="button" @click="addRow() , ret()" class="btn h-25 mt-3">اضف مستفيد</button>

					</div>
							<table class="table">
						<thead>
							<tr>
								<th>#</th>
								<th>رقم المستفيد</th>
								<th>اسم المستفيد</th>
								<th>رقم الجوال</th>
								<th>حذف </th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(ins, index) in informats" :key="index" class="text-center">
								<th>{{ index + 1 }}</th>
								<th>{{ ins.affiliate_no }}</th>
								<th>{{ ins.name }}</th>
								<th>{{ ins.phone_number }}</th>
														<th>
									<button
										type="button"
										@click="deleteRow(index)"
										style="background: none; border: none"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											class="mt-1"
											viewBox="0 0 16 16"
										>
											<g
												id="Group_3408"
												data-name="Group 3408"
												transform="translate(-1443 -326)"
											>
												<g
													id="Group_2461"
													data-name="Group 2461"
													transform="translate(1411 -152)"
												>
													<g
														id="Ellipse_127"
														data-name="Ellipse 127"
														transform="translate(32 478)"
														fill="#ff5746"
														stroke="#ff5746"
														stroke-width="1"
													>
														<circle cx="8" cy="8" r="8" stroke="none" />
														<circle cx="8" cy="8" r="7.5" fill="none" />
													</g>
													<g
														id="Group_608"
														data-name="Group 608"
														transform="translate(36.571 482.571)"
													>
														<line
															id="Line_141"
															data-name="Line 141"
															y2="9.697"
															transform="translate(6.857 0) rotate(45)"
															fill="none"
															stroke="#fff"
															stroke-linecap="round"
															stroke-width="1.2"
														/>
														<line
															id="Line_142"
															data-name="Line 142"
															y2="9.697"
															transform="translate(0.001) rotate(-45)"
															fill="none"
															stroke="#fff"
															stroke-linecap="round"
															stroke-width="1.2"
														/>
													</g>
												</g>
											</g>
										</svg>
									</button>
								</th>
							</tr>
						</tbody>
					</table>
					<div class="form-group row">
						<div class="col-lg-12">
							<button class="btn btn-primary" @click="save">حفظ</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</container>
</template>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		components: { container },
		data() {
			return {
				informats: [],
				people: [],
				nums : "" , 
				date : "" , 
				count : ""
			};
		},


		methods: {
			addRow() {
				this.people.push({
					beneficiary_id: this.nums,
					received_date: this.date,
					count_of_aids: this.count,
				});
			},
			deleteRow(index) {

				this.informats.splice(index, 1);
								this.people.splice(index, 0);
		},
			save() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"/api/aidpeople/store",
						{
							aid_id: this.$route.query.q,
							peploe: this.people,
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
						this.failed();
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
					.then(() => {
						this.$router.push({ name: "showaid" });
					});
			},
			failed() {
				this.$swal.fire({
					icon: "error",
					title: "هناك خطأ ما !",
					text: "تأكد من المدخلات المطلوبة",
				});
			},
			ret(){
						
				const token = sessionStorage.getItem("token");
			
				
				axios
					.get(
						`api/return/returndata?affiliate_no=${this.nums}`,
						{
							headers: {
								Authorization: "Bearer " + token,
							},
						
						}
					)
					.then((res) => {
						console.log(res.data);
						this.informats.push(res.data.data);

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
