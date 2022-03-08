<template>
	<container>
		
		<h4 class="text-secondary mx-5">{{code}}</h4>
				<hr>
  <a class="btn me-5" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   البحث<i class="fa fa-search mx-2" aria-hidden="true"></i>

  </a>
  <div class="collapse" id="collapseExample">
  <div class=" card-body">
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-1"
				style="width: 40%"
				aria-label="Default select example"
				v-model="nme"
				@change="basicdata"
				placeholder="الاسم"
			/>
			<input
				type="text"
				class="form-control m-1"
				style="width: 40%"
				aria-label="Default select example"
				v-model="affilt"
				@change="basicdata"
				placeholder="رقم المستفيد"
			/>
		</div>  </div>
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
						<tr class="text-center" v-for="(item , index  ) in informats" :key="item.id">
																				<td>{{ index + 1 }}</td>

							<input
								type="checkbox"
								class="mt-3"
								:value="item.beneficiary_id"
								v-model="selcted"
							/>

							<td>{{ item.affiliate_no }}</td>
							<td>{{ item.beneficiary_name }}</td>
							<td>{{ item.cost }}</td>
							<td>{{ item.mobile_number }}</td>
							<td>{{ item.year }}</td>
						
							<td v-if="item.is_printed == 0">

</td>
							<td v-else><i class="fa fa-check" aria-hidden="true" style="color:green"></i>
</td>
							<td>{{ item.printing_date }}</td>

						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<router-link
					class="btn nw w-25 mx-5"
					:to="{ name: 'print', query: { q: selcted , c:$route.query.q} }"
				>
					طباعة</router-link
				>
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
				start:"",
				end:"",
				affilt: "",
				selcted: [],
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(
						`api/subsc/show?subsc_id=${this.$route.query.q}&affiliate_no=${this.affilt}&name=${this.nme}`,
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
						this.start = res.data.data.Subsc.start_subscription
						this.end = res.data.data.Subsc.end_subscription
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
							if (!this.selcted.includes(user.id)) {
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
							checked.push(user.id);
						});
					}
					this.selcted = checked;
				},
			},
		},
	};
</script>
