<template>
	<container>
		<div class="row justify-content-around">
	
			<input
				type="text"
				class="form-control m-2"
					style="width: 40%"
				aria-label="Default select example"
				v-model="year"
				@change="basicdata"
				placeholder="السنة"
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="name"
				@change="basicdata"
				placeholder="الاسم"
			/>
		</div>
		<div class="row justify-content-around">
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="affiliate"
				@change="basicdata"
				placeholder="رقم المستفيد"
			/>
			<input
				type="text"
				class="form-control m-2"
				style="width: 40%"
				v-model="id_nu"
				@change="basicdata"
				placeholder="رقم الهوية"
			/>
		</div>

		<hr />
		<div class="d-flex justify-content-center align-items-start mt-5 h-100">
			<table class="table ">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">الاسم</th>
						<th scope="col">الحالة</th>
						<th scope="col">رقم الهوية</th>
						<th scope="col">رقم المنتسب </th>
						<th scope="col">السنة</th>
						<th scope="col">عرض البيانات</th>
						<th scope="col">الاجراء</th>
					</tr>
				</thead>
				<tbody v-for="informat in informats" :key="informat.id">
					<tr>
						<th>{{ informat.id }}</th>
						<th>{{ informat.name }}</th>
						<th>{{ informat.class }}</th>
						<th>{{ informat.id_number }}</th>
						<th>{{ informat.affiliate_no }}</th>
						<th>{{ informat.year }}</th>
						<th>
							<router-link
								class="links"
								:to="{ name: 'show', query: { q: informat.id } }"
								style="color: black"
							>
								عرض</router-link
							>
						</th>
						<th>
							<router-link
								class="links"
								:to="{ name: 'edit', query: { q: informat.id } }"
								style="color: black"
							>
								تعديل</router-link
							>
						</th>

						
					</tr>
				</tbody>

			</table>

		</div>
		<div class="d-flex align-items-center justify-content-between">
			<div class="d-flex align-items-center ">
<input
				type="number"
				class="form-control m-2"
				style="width: 40%"
				v-model="page"
				@change="basicdata"
				placeholder="رقم الهوية"
			/>
						<small class="mx-2">عدد الصفحات {{nums}}</small>

			</div>

				<div class="d-flex align-items-center">
<select
				type="number"
				class="form-control m-2"
				style="width:100%"
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
		components: { container
		
		},
		name: "personal",

		data() {
			return {
				year: "",
				name: "",
				affiliate: "",
				id_nu: "",
				informats: [],
				page: 1,
				nums:null,
				per:10
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
						`api/beneficiary/index?year=${this.year}&name=${this.name}&affiliate_no=${this.affiliate}&id_number=${this.id_nu}`,
						{
							headers: {
								Authorization: "Bearer " + token,
							},
							params: {
								page: this.page,
								 per_page:this.per
							},
						}
					)
					.then((res) => {
						console.log(res.data.paging.last_page);
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
