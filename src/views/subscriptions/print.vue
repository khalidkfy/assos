<template>
          <container>

		<div class="back">
			<div class="new"  id="printableArea">
				<div class="hd1 row" v-for="(item, index) in informats" :key="index" >
					<div v-if="nums[index]" class="cont col-5">
						<img src="../../assets/img/back.jpeg" alt="" />
						<p class="abs">{{ item.beneficiary_name }}</p>
						<p class="abs2">{{ item.affiliate_no }}</p>
						<p class="abs4">{{ item.birth_date }}</p>
						<p class="abs3">{{ item.printing_date }}</p>
						<p class="abs5">{{ item.printing_date }}</p>
					</div>
				</div>
			</div>
		</div>

		<button @click.prevent="printDiv('printableArea')" class="btn btn-primary">
			Print this page
		</button>
		          </container>

</template>
<style scoped>
	.cont {
		position: relative;
	}	

	.abs {
		position: absolute;
		top: 175px;
		right: 165px;
}
	.abs2 {
		position: absolute;
		top: 208px;
		right: 165px;
}
	.abs3 {
		position: absolute;
		top: 273px;
		right: 165px;
}
	.abs4 {
		position: absolute;
		top:240px;
		right: 165px;
}
	.abs5{
		position: absolute;
		top:305px;
		right: 165px;
}
</style>

<script>
	import axios from "axios";
	import container from '@/components/containers/container.vue';
	export default {
          components: { container },
		name: "personal",
		data() {
			return {
				year: "2022",
				informats: [],
				nums: this.$route.query.q,
			};
		},

		created() {
			this.basicdata();
		},
		methods: {

	printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
},
			basicdata() {
				const token = sessionStorage.getItem("token");

				axios
					.get(`api/subscription/index`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
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
