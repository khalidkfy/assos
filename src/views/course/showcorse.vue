<template>
	<container>				
			<div class="row justify-content-around">
	
			<input
				type="text"
				class="form-control m-2"
					style="width: 40%"
				aria-label="Default select example"
				v-model="nme"
				@change="basicdata"
				placeholder="الاسم"
			/>
				<input
				type="text"
				class="form-control m-2"
					style="width: 40%"
				aria-label="Default select example"
				v-model="affilt"
				@change="basicdata"
				placeholder="رقم المستفيد"
			/>
		
		</div>			
				
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
				nme:"",
				affilt:"",
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
						`api/course/show?course_id=${this.$route.query.q}&affiliate_no=${this.affilt}&name=${this.nme}`,
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
						this.informats = res.data.data.PersonCourse;
						this.name = res.data.data.Course.effectiveness_name;
						
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
