<template>
	<div class="heade">عرض المشتركين</div>
	<container>
		<h4 class="text-secondary mx-5">{{ code }}</h4>
		<hr />
		<a
			class="btn me-5"
			data-bs-toggle="collapse"
			href="#collapseExample"
			role="button"
			aria-expanded="false"
			aria-controls="collapseExample"
		>
			البحث<i class="fa fa-search mx-2" aria-hidden="true"></i>
		</a>
		<div class="collapse" id="collapseExample">
			<div class="card-body">
				<div class="container">
					<div class="row justify-content-around">
						<input
							type="text"
							class="form-control"
							style="width: 31%"
							aria-label="Default select example"
							v-model="nme"
							@change="basicdata"
							placeholder="الاسم"
						/>
						<input
							type="text"
							class="form-control"
							style="width: 31%"
							aria-label="Default select example"
							v-model="affilt"
							@change="basicdata"
							placeholder="رقم المستفيد"
						/>
						<input
							type="text"
							class="form-control"
							style="width: 31%"
							aria-label="Default select example"
							v-model="printed"
							@change="basicdata"
							placeholder="الطباعة"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="row align-items-center justify-content-center">
			<div class="col-11 my-4">
				<table class="table">
					<thead>
						<tr class="text-center">
							<th scope="col">#</th>

							<th scope="col"><input type="checkbox" v-model="selectAll" /></th>

							<th scope="col">رقم المستفيد</th>
							<th scope="col">الاسم</th>
							<th scope="col">التكلفة</th>
							<th scope="col">رقم الجوال</th>
							<th scope="col">العام</th>
							<th scope="col">الطباعة</th>
							<th scope="col">تاريخ الطباعة</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center" v-for="(item, index) in informats" :key="item.id">
							<td>{{ index + 1 }}</td>

							<input
								type="checkbox"
								class="mt-3"
								:value="item.affiliate_no"
								v-model="selcted"
							/>

							<td>{{ item.affiliate_no }}</td>
							<td>{{ item.beneficiary_name }}</td>
							<td>{{ item.cost }}</td>
							<td>{{ item.mobile_number }}</td>
							<td>{{ item.year }}</td>

							<td v-if="item.is_printed == 0"></td>
							<td v-else>
								<i class="fa fa-check" aria-hidden="true" style="color: green"></i>
							</td>
							<td>{{ item.printing_date }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="d-flex justify-content-start">
				<div>
					<router-link
						class="btn nw px-4 mx-5"
						:to="{ name: 'print', query: { q: selcted, c: $route.query.q ,  } }"
					>
						طباعة</router-link
					>
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
				year: "",
				name: "",
				affiliate: "",
				id_nu: "",
				informats: [],
				code: "",
				nme: "",
				start: "",
				printed: "",
				end: "",
				affilt: "",
				selcted: [],
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/subscriptionpeople/toggleprint",
						{
							subscription_people_id: this.selcted,
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
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(
						`api/subsc/show?subsc_id=${this.$route.query.q}&affiliate_no=${this.affilt}&name=${this.nme}&is_printed=${this.printed}`,

						{
							headers: {
								Authorization: "Bearer " + token,
							},
							params: {
								per_page: 3500,
							},
						}
					)
					.then((res) => {
						console.log(res.data.data);
						this.informats = res.data.data.SubscriptionPeople;
						this.code = res.data.data.Subsc.code;
						this.start = res.data.data.Subsc.start_subscription;
						this.end = res.data.data.Subsc.end_subscription;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},

		computed: {
			selectAll: {
				get() {
					if (this.informats && this.informats.length > 0) {
						// A informats array exists with at least one item
						let allChecked = true;
						for (const user of this.informats) {
							if (!this.selcted.includes(user.affiliate_no)) {
								allChecked = false; // If even one is not included in array
							}

							// Break out of loop if mismatch already found
							if (!allChecked) break;
						}
						return allChecked;
					}
					return false;
				},
				set(value) {
					const checked = [];
					if (value) {
						this.informats.forEach((user) => {
							checked.push(user.affiliate_no);
						});
					}
					this.selcted = checked;
				},
			},
		},
	};
</script>
