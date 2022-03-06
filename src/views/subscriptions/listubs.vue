<template>
	<container>
		<div class="d-flex back mt-5 h-100 flex-column">
			<div class="row me-1">
				<input
					type="text"
					v-model="search"
					placeholder="البحث عن مشترك"
					class="form-control m-1 w-25"
					@change="basicdata"
				/>

				<input
					type="text"
					v-model="search1"
					placeholder="تاريخ الاشتراك"
					class="form-control m-1 w-25"
					@change="basicdata"
				/>

				<input
					type="text"
					v-model="search2"
					placeholder="الكود"
					class="form-control m-1 w-25"
					@change="basicdata"
				/>
			</div>
			<hr />
			<table class="table">
				<thead>
					<tr>
						<th scope="col">الكود</th>
						<th scope="col">السنة السابقة</th>
						<th scope="col">تكلفة الطلب</th>
						<th scope="col">الوصف</th>
						<th scope="col">تكلفة الاشتراك</th>
						<th scope="col">تاريخ البداية</th>
						<th scope="col">تاريخ النهاية</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th scope="row">{{ informat.code }}</th>

						<th scope="row">{{ informat.last_year }}</th>

						<th scope="row">{{ informat.order_fees }}</th>
						<th scope="row">{{ informat.description }}</th>
						<th scope="row">{{ informat.subscription_fees }}</th>
						<th scope="row">{{ informat.start_subscription }}</th>

						<th scope="row">{{ informat.end_subscription }}</th>

						<th scope="row">
							<router-link
								class="btn"
								:to="{ name: 'adds', query: { q: informat.id } }"
							>
								اضافة
							</router-link>
						</th>
						<th scope="row">
							<router-link
								class="btn"
								:to="{ name: 'shwsubs', query: { q: informat.id } }"
							>
								عرض</router-link
							>
						</th>
					</tr>
				</tbody>
			</table>
			<router-link class="btn w-25" :to="{ name: 'addsubs' }">
				اضافة اشتراك</router-link
			>
		</div>
	</container>
</template>
<style scoped>
	.btn {
		color: white !important;
		text-decoration: none;
	}
	table {
		text-align: center;
	}
</style>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		components: { container },
		name: "personal",
		data() {
			return {
				year: "2022",
				name: "",
				informats: [],
				selcted: [],
				search: "",
				search1: "",
				search2: "",
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
						`api/subsc/index?subscription_type=${this.search}&start_subscription&end_subscription${this.search1}&code=${this.search2}`,
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
						console.log(res.data);
						this.informats = res.data.data;
						this.name = res.data.data[0].code;
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
