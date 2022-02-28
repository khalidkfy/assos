<template>
	<container>

		<hr />
		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table ">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">رقم المستفيد</th>
						<th scope="col">اسم المستفيد </th>
						<th scope="col">رقم الهاتف</th>
						<th scope="col">رقم المشروع</th>
												<th scope="col">تاريخ الاستلام</th>

						<th scope="col">العام</th>
					

					</tr>
				</thead>
				<tbody>
					<tr class="text-center" v-for="item in informats" :key="item.id">
													<td>{{ item.beneficiary_id }}</td>

							<td>{{ item.affiliate_no }}</td>
							<td>{{ item.beneficiary_name }}</td>
							<td>{{ item.mobile_number}}</td>

							<td>{{ item.project_number}}</td>
														<td>{{ item.received_date}}</td>

							<td>{{ item.year}}</td>
			
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
				title : ""
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/aid/show?aid_id=${this.$route.query.q}`, {
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
						this.title = res.data.data.project_name;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
