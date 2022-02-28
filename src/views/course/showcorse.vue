<template>
	<container>							

		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table">
				<thead>
					<tr class="text-center">
						<th scope="col">#</th>
						<th scope="col">رقم المنتسب</th>
						<th scope="col">اسم المنتسب</th>
						<th scope="col">رقم الجوال </th>
						<th scope="col">رقم الدورة </th>
						<th scope="col">العام </th>
				
					

					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id" class="text-center">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.beneficiary_id }}</th>
						<th>{{ informat.beneficiary_name }}</th>
						<th>{{ informat.mobile_number }}</th>
						<th>{{ informat.source_id }}</th>
						<th>{{ informat.year }}</th>
						
					
					
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
					.get(
						`api/source/show?source_id=${this.$route.query.q}`,
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
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
