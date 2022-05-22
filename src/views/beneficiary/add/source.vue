<template>
	<div
		class="tab-pane fade"
		id="pills-fourth"
		role="tabpanel"
		aria-labelledby="pills-fourth-tab"
	>
		<div class="row">
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label">النوع </label>
					<div class="col-sm-9">
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="type"
            >
              <option v-for="ty in types" :key="ty.id" :value="ty.name">{{ty.name}}</option>
            </select>
          </div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="m-3 row">
					<label for="inputPassword" class="col-sm-12 col-form-label"
						>الملاحظات
					</label>
					<div class="col-sm-9">
						<textarea class="form-control" v-model="notes" />
					</div>
				</div>
			</div>

			<div class="row justify-content-center mt-4">
				<button @click.prevent="source" class="btn w-25">اضافة</button>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				notes: "",
				type: "",
				types: [],
			};
		},
    mounted() {
      const token = sessionStorage.getItem("token");
      axios
          .get(
              "api/settings/need_types/data",
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
          )
          .then((res) => {
            this.types = res.data.types
          })
    },
    methods: {
			source() {
				const token = sessionStorage.getItem("token");
				const af1 = sessionStorage.getItem("af1");
				axios
					.post(
						"api/need/store",
						{
							beneficiary_id: af1,
							notes: this.notes,
							type: this.type,
						},
						{
							headers: {
								Authorization: "Bearer " + token,
							},
						}
					)
					.then(() => {
						this.show();
					})
					.catch(() => {
						this.failed()
					});
			},
			show() {
				this.$swal
					.fire({
						position: "top-end",
						icon: "success",
						title: "تمت الاضافة بنجاح ",
						showConfirmButton: false,
						timer: 1500,
					})

			},
			failed() {
				this.$swal.fire({
					icon: "error",
					title: "هناك خطأ ما !",
					text: "تأكد من المدخلات المطلوبة",
				});
			},
		},
	};
</script>
<style scoped>
	.form-control,
	.form-select,
	textarea {
		background-color: #f5f8fa;
	}
</style>
