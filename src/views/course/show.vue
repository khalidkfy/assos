<template>
	<container>							<th><router-link class="btn" to="addcourse">اضافة دورة</router-link></th>

		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table ">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">المشرف</th>
						<th scope="col">الدورة</th>
						<th scope="col">اسم الدورة</th>
						<th scope="col">رقم الدورة</th>
						<th scope="col">التاريخ</th>
						<th scope="col">وقت البداية</th>
						<th scope="col">وقت النهاية</th>
						<th scope="col">عدد المشتركين </th>
						<th scope="col">تكلفة المشرف</th>
												<th scope="col">المبلغ الاجمالي</th>
												<th scope="col">*</th>
												<th scope="col">*</th>

					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.supervisor }}</th>
						<th>{{ informat.course }}</th>
						<th>{{ informat.effectiveness_name }}</th>
						<th>{{ informat.effectiveness_number }}</th>
						<th>{{ informat.date }}</th>
						<th>{{ informat.start }}</th>
						<th>{{ informat.end }}</th>
						<th>{{ informat.number_of_effectiveness }}</th>
						<th>{{ informat.supervisor_cost }}</th>
						<th>{{ informat.total_cost }}</th>
						<th>
							<router-link :to="{name:'showpcorse' , query: { q: informat.id }}" class="btn">عرض</router-link>						</th>
						<th>

						<router-link  :to="{name:'addmanc' , query: { q: informat.id }}"  class="btn">اضافة</router-link>
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
					.get(
						`api/course/index?effectiveness_number&effectiveness_name&funded_side&supervisor`,
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
