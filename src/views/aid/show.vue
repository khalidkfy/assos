<template>
	<container>
		<router-link class="btn ms-3" :to="{ name: 'addaid' }">
			اضافة مساعدات
		</router-link>
		<hr />
		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">اسم المشروع</th>
						<th scope="col">العدد المتبرع به</th>
						<th scope="col">مبلغ المشروع</th>
						<th scope="col">تاريخ المشروع</th>
						<th scope="col">رقم المشروع</th>
						<th scope="col">النوع</th>
						<th scope="col">القيمة للشخص</th>
						<th scope="col">#</th>
						<th scope="col">#</th>

					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.project_name }}</th>
						<th>{{ informat.donated_number }}</th>
						<th>{{ informat.project_amount }}</th>
						<th>{{ informat.project_date }}</th>
						<th>{{ informat.project_number }}</th>
						<th>{{ informat.type }}</th>
						<th>{{ informat.value_per_person }}</th>
						<th>
							<router-link class="btn ms-3" :to="{ name: 'showman' ,  query: { q: informat.id } }">
								عرض
							</router-link>
						</th>
						<th>
							<router-link class="btn ms-3" :to="{ name: 'addmanaid' ,  query: { q: informat.id }  }">
								اضافة
							</router-link>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	</container>
</template>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";

	export default {
		components: { container },
		name: "personal",

		data() {
			return {
				year: "",
				name: "",
				affiliate: "",
				id_nu: "",
				informats: [],
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/aid/index`, {
						headers: {
							Authorization: "Bearer " + token,
						},
						params: {
							per_page: 3500,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						this.informats = res.data.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
