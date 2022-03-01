<template>
	<container>							
			<h5 class="text-secondary mx-5">{{name}}</h5>
			<hr class="mx-5">
		<div class="d-flex justify-content-center align-items-start mx-5 mt-2 h-100">
			<table class="table">
				<thead>
					<tr class="text-center">
						<th scope="col">#</th>
						<th scope="col">رقم المنتسب</th>
						<th scope="col">اسم المنتسب</th>
						<th scope="col">رقم الجوال </th>
						<th scope="col">اسم الدورة </th>
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
						<th>{{ informat.effectiveness_name }}</th>
						<th>{{ informat.effectiveness_number }}</th>
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
						`api/course/show?course_id=${this.$route.query.q}`,
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
						this.name = res.data.data[0].effectiveness_name;
						
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
