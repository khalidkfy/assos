<template>
<div class="heade">
		 اضافة مستفيد
	</div>
	<Container>
		<div>
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<button
						class="nav-link active"
						id="pills-home-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-home"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true"
					>
						معلومات شخصية
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-profile-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-profile"
						type="button"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false"
					>
						الاسرة والمنزل
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-contact"
						type="button"
						role="tab"
						aria-controls="pills-contact"
						aria-selected="false"
					>
						العمل والتقييم
					</button>
				</li>
					<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-income"
						type="button"
						role="tab"
						aria-controls="pills-income"
						aria-selected="false"
					>
						مصادر الدخل
			</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="pills-contact-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-fourth"
						type="button"
						role="tab"
						aria-controls="pills-fourth"
						aria-selected="false"
					>
						الاحتياجات
					</button>
				</li>

			</ul>

			<div class="tab-content" id="pills-tabContent">
				<personal />
								<Incoms />

				<home />
				<work />
				<Source />
			</div>
		</div>
	</Container>
</template>
<script>

	import personal from "@/views/beneficiary/add/personal.vue";
	import home from "@/views/beneficiary/add/home.vue";
	import work from "@/views/beneficiary/add/work.vue";
	import Container from "@/components/containers/container.vue";
	import Source from "./source.vue";
	import Incoms from "./income.vue";
  import axios from "axios";

	export default {
		name: "add",
    data() {
      return {
        categs:[],
      }
    },
    mounted() {
      const token = sessionStorage.getItem("token");
      axios.get('/api/beneficiary/data', {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then(res => {
        this.categs = res.data.categs;
      }).catch((err) => {
        console.log(err);
      })
    },
    components: {
			personal,
			home,
			work,
			Incoms,
			Container,
			Source,
		},
	};
</script>
