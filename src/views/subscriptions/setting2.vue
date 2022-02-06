<template>
	<container>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 mt-5 row">
					<label for="inputPassword" class="col-sm-4 col-form-label">
			النوع		</label>
					<div class="col-sm-8">
							<select	class="form-select "	aria-label="Default select example" v-model="setting_id"	>
			<option value="1" >رسوم الاشتراك</option>
			<option value="2" >رسوم الطلب</option>
		</select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 mt-5 row">
					<label for="inputPassword" class="col-sm-4 col-form-label">
القيمة					</label>
					<div class="col-sm-8">
						<input type="number" class="form-control" v-model="value" />
					</div>
				</div>
					
			</div>
            <div class="row justify-content-center">
                    <button class="w-25 btn btn-primary mt-5" @click.prevent="upload">
						تحديث 
					</button>
            </div>
            	
		</div>
	</container>
</template>
<script>
	import axios from "axios";
	import container from "@/components/containers/container.vue";
	export default {
		components: { container },

		name: "addemp",

		data() {
			return {
				setting_id: "1",
				value: "0",
			};
		},

		methods: {
			upload() {
				const token = sessionStorage.getItem("token");
				axios
					.post(
						"api/setting/update",
						{
							setting_id: this.setting_id,
							value: this.value,
						},
						{
							headers: {
								Authorization: "Bearer " + token,
							},
						}
					)
					.then((res) => {
						console.log(res.data);
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
