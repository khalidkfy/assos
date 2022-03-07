<template>
	<container>
		<div class="d-flex back mt-2 h-100 flex-column">
			<div class="row me-1 justify-content-around">
				<input
					type="date"
					v-model="search"
					placeholder="تاريخ البداية"
					class="form-control m-1 w-25"
					@change="basicdata"
				/>

				<input
					type="date"
					v-model="search1"
					placeholder="تاريخ النهاية"
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
			<router-link class="btn my-2 w-25" :to="{ name: 'addsubs' }">
				اضافة اشتراك</router-link
			>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">الكود</th>
						<th scope="col">السنة السابقة</th>
						<th scope="col">تاريخ البداية</th>
						<th scope="col">تاريخ النهاية</th>
						<th scope="col">تكلفة الطلب</th>
						<th scope="col">تكلفة الاشتراك</th>
						<th scope="col">الوصف</th>
						<th scope="col">الاجراءات</th>
			
					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th scope="row">{{ informat.code }}</th>
						<th scope="row">{{ informat.last_year }}</th>
						<th scope="row">{{ informat.start_subscription }}</th>
						<th scope="row">{{ informat.end_subscription }}</th>
						<th scope="row">{{ informat.order_fees }}</th>
						<th scope="row">{{ informat.subscription_fees }}</th>
						<th scope="row">{{ informat.description }}</th>

						<th scope="row">
							<router-link
								class="icons"
								:to="{ name: 'adds', query: { q: informat.id } }"
							>
								<i class="fas fa-user-plus"></i>
							</router-link>
							<router-link
								class="icons"
								:to="{ name: 'shwsubs', query: { q: informat.id } }"
							>
																<i class="fas fa-user"></i>
</router-link
							>
						
							<router-link
								class="icons"
								:to="{ name: 'update', query: { q: informat.id } }"
							>
								<i class="fas fa-pen"></i></router-link
							>
												</th>

					</tr>
				</tbody>
			</table>
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<div class="d-flex align-items-center ">
<input
				type="number"
				class="form-control m-2"
				style="width: 40%"
				v-model="page"
				@change="basicdata"
				placeholder="رقم الهوية"
			/>
						<small class="mx-2">عدد الصفحات {{nums}}</small>

			</div>

				<div class="d-flex align-items-center">
<select
				type="number"
				class="form-control m-2"
				style="width:100%"
				v-model="per"
				@change="basicdata"
			>		
				<option value="10">10</option>
			<option value="20">20</option>
			<option value="50">50</option>
			<option value="100">100</option>
			</select>

			</div>

			
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
				page: 1,
				nums:null,
				per:10

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
						`api/subsc/index?&start_subscription=${this.search}&end_subscription=${this.search1}&code=${this.search2}`,
						{
							headers: {
								Authorization: "Bearer " + token,
							},
							params: {
								page: this.page,
								per_page: this.per,
							},
						}
					)
					.then((res) => {
						console.log(res.data);
						this.informats = res.data.data;
												this.nums = res.data.paging.last_page;

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
