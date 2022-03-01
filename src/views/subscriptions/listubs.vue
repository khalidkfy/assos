<template>
	<container>
      <h5 class="mx-5 mt-3 text-secondary">{{name}} </h5>
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
		<hr>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">الكود</th>
						<th scope="col">نوع الاشتراك</th>
						<th scope="col">تاريخ البداية</th>
						<th scope="col">تاريخ النهاية</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
		
						<th scope="row">{{ informat.code }}</th>
						<th v-if="informat.subscription_type == 1">غير مجاني</th>
						<th v-else-if="informat.subscription_type == 0">مجاني</th>

						<th scope="row">{{ informat.start_subscription }}</th>
						<th scope="row">{{ informat.end_subscription }}</th>
						<th scope="row" v-if="informat.is_printed == 1">
							<svg
								width="22"
								height="22"
								viewBox="0 0 74 75"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M37 75C16.5649 75 0 58.2113 0 37.5C0 16.7888 16.5649 0 37 0C57.4351 0 74 16.7888 74 37.5C74 58.2113 57.4351 75 37 75ZM37 67.5C44.8504 67.5 52.3793 64.3393 57.9304 58.7132C63.4814 53.0871 66.6 45.4565 66.6 37.5C66.6 29.5435 63.4814 21.9129 57.9304 16.2868C52.3793 10.6607 44.8504 7.5 37 7.5C29.1496 7.5 21.6207 10.6607 16.0696 16.2868C10.5186 21.9129 7.4 29.5435 7.4 37.5C7.4 45.4565 10.5186 53.0871 16.0696 58.7132C21.6207 64.3393 29.1496 67.5 37 67.5ZM33.3111 52.5L17.612 36.5887L22.8438 31.2863L33.3111 41.895L54.2383 20.6812L59.4738 25.9838L33.3111 52.5Z"
									fill="#83A033 "
								/>
							</svg>
						</th>

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
