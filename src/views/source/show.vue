<template>
	<container>
		<div class="d-flex justify-content-start">
			<div class="btn green mx-2 mt-3">
				<router-link :to="{ name: 'addsurce' }" style="color: white">اضافة مصدر</router-link
				>
			</div>
		</div>
		<div class="row align-items-center justify-content-center">
			
			<div class="col-12 my-5">

							<input type="text" v-model="search" placeholder="البحث" class="form-control m-1 w-25" @change="basicdata">

				<table class="table">
					<thead>
						<tr>
							<th scope="col">مصدر الدخل</th>
							<th scope="col">القيمة المالية للدخل</th>
							<th scope="col">تفصيل مصدر الدخل</th>
							<th scope="col">المساعدة العينية</th>
							<th scope="col">التقييم المالي للمساعدات</th>
							<th scope="col">ملاحظات</th>
							<th scope="col">#</th>
							<th scope="col">#</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center" v-for="item in informats" :key="item.id">
							<td>{{ item.source_of_income }}</td>
							<td>{{ item.financial_value }}</td>
							<td>{{ item.income_source_details }}</td>
							<td>{{ item.in_kind_assistance }}</td>
							<td>{{ item.financial_evaluation }}</td>
							<td>{{ item.notes }}</td>
							<td><router-link class="btn" :to="{ name: 'shwsorce' ,  query: { q: item.id } }"
					><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg> </router-link
				></td>
				<td><router-link class="btn" :to="{ name: 'addman' ,  query: { q: item.id } }"
					>اضافة </router-link
				></td>
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
				search : ""
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
		
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(`api/source/index?source_of_income=${this.search}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
						params: {
							per_page: 3500,
						},
					})
					.then((res) => {
						console.log(res.data.data[0]);
						this.informats = res.data.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
