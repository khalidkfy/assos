<template>
	<div
		class="tab-pane fade"
		id="pills-fourth"
		role="tabpanel"
		aria-labelledby="pills-fourth-tab"
	>
		<div class="row">
			<div class="col-md-12">
        <button @click="addNeed" class="btn btn-success my-2">
          اضافة
        </button>
        <table class="table">
          <thead>
          <tr>
            <th>النوع</th>
            <th>الملاحظات</th>
            <th>#</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(need, index) in needs " :key="need.id">
            <th>
              <select class="form-select" aria-label="Default select example" v-model="need.type">
                <option v-for="type in types" :key="type.id" :value="type.name">{{type.name}}</option>
              </select>
            </th>
            <th><input type="text" class="form-control" v-model="need.notes"></th>
            <th>
              <a @click.prevent="deleteItem(index)" href="#" class="icons"><i class="fa fa-trash" aria-hidden="true"></i></a>

            </th>

          </tr>
          </tbody>
        </table>
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
        needs:[],
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
						"api/need/store-needs",
						{
							beneficiary_id: af1,
							needs: this.needs
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
      addNeed() {
        this.needs.push({
          type:null,
          notes:null
        })
      },
      deleteItem(index) {
        this.needs.splice(index, 1);
      }
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
