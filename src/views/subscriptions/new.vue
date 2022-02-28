<template>
	<container>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 my-2">
					<button type="button" @click="addRow" class="btn">اضف مستفيد</button>
				</div>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>رقم المستفيد</th>
							<th>النوع</th>
							<th>حذف مستفيد</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(input, index) in people" :key="index" class="text-center">
							<!-- <th>
									<input
										type="text"
										v-model="people[index]['beneficiary_id']"
										class="form-control "
										placeholder="اي دي المستفيد"
									/>
								</th> -->
							<th>
								<input
									type="text"
									v-model="people[index]['beneficiary_id']"
									class="form-control"
									placeholder="رقم المستفيد "
								/>
							</th>
							<th>
								<input
									type="text"
									v-model="people[index]['subscription_type']"
									class="form-control"
									placeholder="النوع"
								/>
							</th>
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
			};
		},
		created() {
			this.addRow();
		},

		methods: {
			addRow() {
				this.people.push({
					beneficiary_id: "",
					cost: "",
				});
			},
			deleteRow(index) {
				this.people.splice(index, 1);
			},
			save() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subscriptionpeople/store",
						{
							peploe: this.people,
							subsc_id: this.$route.query.q,
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
					.catch((error) => {
						console.log(error.data);
						this.err = error.message;
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
