<template>
<div class="heade">
		الدورات
	</div>
	<container>
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				aria-label="Default select example"
				v-model="effectiveness_name"
				@change="basicdata"
				placeholder="اسم الدورة"
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="name"
				@change="effectiveness_number"
				placeholder="رقم الدورة"
			/>
		</div>
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="funded_side"
				@change="basicdata"
				placeholder="الجهة الممولة"
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="supervisor"
				@change="basicdata"
				placeholder="النشاط"
			/>
		</div>

		<hr />

		<th><router-link class="btn" to="addcourse">اضافة دورة</router-link></th>

		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">رقم الفعالية</th>
												<th scope="col">رقم الدورة</th>

						<th scope="col">اسم الدورة</th>
						<th scope="col">وقت البداية</th>
						<th scope="col">وقت النهاية</th>
						<th scope="col">التاريخ</th>
						<th scope="col">المشرف</th>
						<th scope="col">الجهة الممولة</th>
						<th scope="col">تكلفة المشرف</th>
						<th scope="col">المبلغ الاجمالي</th>
						<th scope="col">النشاط</th>
						<th scope="col">الاجراءات</th>
					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.number_of_effectiveness }}</th>
												<th>{{ informat.effectiveness_number }}</th>

						<th>{{ informat.effectiveness_name }}</th>
						<th>{{ informat.start }}</th>
						<th>{{ informat.end }}</th>
						<th>{{ informat.date }}</th>
						<th>{{ informat.supervisor }}</th>
						<th>{{ informat.funded_side }}</th>
						<th>{{ informat.supervisor_cost }}</th>
						<th>{{ informat.total_cost }}</th>
						<th v-if=" informat.activity_type == 1 ">دورة</th>
						<th v-else>رحلة</th>
						<th class="d-flex justify-content-between">
						
								<router-link
								:to="{ name: 'showpcorse', query: { q: informat.id } }"
								class="icons"
								>																<i class="fa fa-user"></i>
 </router-link
							>
				
							<router-link
								:to="{ name: 'addmanc', query: { q: informat.id } }"
								class="icons"
								>		<i class="fa fa-user-plus" ></i></router-link
							>
							
							<router-link
								:to="{ name: 'upcourse', query: { q: informat.id } }"
								class="icons"
								><i class="fa fa-pencil" aria-hidden="true"></i></router-link
							>
							
						</th>
						
					</tr>
				</tbody>
			</table>
			
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<div class="d-flex align-items-center">
				<input
					type="number"
					class="form-control m-2"
					style="width: 40%"
					v-model="page"
					@change="basicdata"
				/>
				<small class="mx-2">عدد الصفحات {{ nums }}</small>
			</div>

			<div class="d-flex align-items-center">
				<select
					type="number"
					class="form-control m-2"
					style="width: 100%"
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
				effectiveness_number: "",
				effectiveness_name: "",
				funded_side: "",
				supervisor: "",
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
						`api/course/index?effectiveness_number=${this.effectiveness_number}&effectiveness_name=${this.effectiveness_name}&funded_side=${this.funded_side}&activity_type=${this.supervisor}`,
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
	};
</script>
