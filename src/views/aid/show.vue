<template>
<div class="heade">
المساعدات	</div>
	<container>
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				aria-label="Default select example"
				v-model="project_number"
				@change="basicdata"
				placeholder="رقم المشروع"
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="project_name"
				@change="basicdata"
				placeholder="اسم المشروع"
			/>
		</div>
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="project_amount"
				@change="basicdata"
				placeholder="مبلغ المشروع "
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="funded_side"
				@change="basicdata"
				placeholder="الجهة الممولة"
			/>
		</div>

		<hr />
		<router-link v-if="hasPermission('helps_create')" class="btn ms-3" :to="{ name: 'addaid' }">
			اضافة مساعدة
		</router-link>
		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">رقم المشروع</th>
						<th scope="col">اسم المشروع</th>
						<th scope="col">الجهة الممولة</th>
						<th scope="col">تاريخ المشروع</th>
						<th scope="col">القيمة للشخص</th>
						<th scope="col">العدد المتبرع به</th>
						<th scope="col">مبلغ المشروع</th>
						<th scope="col">النوع</th>
						<th scope="col">الحالة</th>
						<th scope="col">الاجراءات</th>
						<th scope="col"></th>

					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.project_number }}</th>
						<th>{{ informat.project_name }}</th>
						<th>{{ informat.funded_side }}</th>
						<th>{{ informat.project_date }}</th>
						<th>{{ informat.value_per_person }}</th>
						<th>{{ informat.donated_number }}</th>
						<th>{{ informat.project_amount }}</th>
						<th>{{ informat.type ? informat.type.name : 'غير معروف' }}</th>
						<th v-if="informat.status == 2">تمت</th>
						<th v-if="informat.status == 1">مقترح</th>
						<th class="d-flex justify-content-between">
							<router-link
								class="icons"
								:to="{ name: 'showman', query: { q: informat.id , d:informat.status } }"
							>
																<i class="fa fa-user"></i>

							</router-link>

							<router-link
								class="icons"
								:to="{ name: 'addmanaid', query: { q: informat.id } }"
							>
						<i class="fa fa-user-plus" ></i>
							</router-link>

							<router-link v-if="hasPermission('courses_edit')"

								:to="{ name: 'upaid', query: { q: informat.id } }"
								class="icons"
								><i class="fa fa-pencil" aria-hidden="true"></i>


</router-link
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
					placeholder="رقم الهوية"
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
				project_number: "",
				project_name: "",
				funded_side: "",
				project_amount: "",
				informats: [],
				page: 1,
				nums: null,
				per: 10,
			};
		},
		created() {
			this.basicdata();
		},
		methods: {
							delt(id) {
				const token = sessionStorage.getItem("token");
				axios
					.get(
						`api/subscriptionpeople/destroy?subscription_people_id=`+ id ,

						{
							headers: {
								Authorization: "Bearer " + token,
							},

						}
					)
					.then((res) => {
						console.log(res);

					})
					.catch((e) => {
						console.log(e);
					});
			},
			basicdata() {
				const token = sessionStorage.getItem("token");
				axios
					.get(
						`api/aid/index?project_number=${this.project_number}&project_name=${this.project_name}&funded_side=${this.funded_side}&project_amount=${this.project_amount}`,
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
						console.log(res.data.data);
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
