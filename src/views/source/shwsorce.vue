<template>

	<container>
			<h5 class="my-3 mx-5 text-secondary">{{name}}</h5>
			<hr class=" mx-5">
		<div class="row align-items-center justify-content-center">
			<div class="col-11 my-2">
				<table class="table ">
					<thead>
						<tr class="text-center">
							<th scope="col" >رقم المستفيد</th>
							<th scope="col">الرقم</th>
							<th scope="col">الاسم</th>
							<th scope="col">رقم المصدر</th>
							<th scope="col">رقم الجوال</th>
							<th scope="col">العام</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center" v-for="item in informats" :key="item.id">
							<td>{{ item.affiliate_no }}</td>
							<td>{{ item.beneficiary_id }}</td>
							<td>{{ item.beneficiary_name }}</td>
							<td>{{ item.source_id }}</td>
							<td>{{ item.mobile_number }}</td>
							<td>{{ item.year }}</td>
			
						</tr>
					</tbody>
				</table>
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
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
		
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/source/show?source_id=${this.$route.query.q}`, {
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
						this.name = res.data.data[0].source_of_income;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
