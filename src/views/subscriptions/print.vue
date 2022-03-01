<template>
		<div class="back">
			<div class="new" id="printableArea">
				<div class="hd1" style="width: 50%; " v-for="(item, index) in informats" :key="index">
					<div v-if="nums[index]" class="cont">
						<img src="../../assets/img/back.jpeg" class="amg" alt="" />
						<p class="abs0">{{ item.affiliate_no }}</p>
						<p class="abs">{{ item.beneficiary_name }}</p>
						<p class="abs2">{{ item.id_number }}</p>
						<p class="abs4">{{ item.birth_date }}</p>
						<p class="abs4">{{ item.start_subscription }}</p>
						<p class="abs4">{{ item.district }}</p>
						 <img :src="'https://associationapi.awtar-tech.com/' + item.image" class="imgs" alt="">
					</div>
				</div>
			</div>
		</div>

		<button
			@click.prevent="		
				printDiv();
				upload();
			"
			class="btn btn-primary d-print-none"
		>
			طباعة
		</button>
</template>
<style scoped>
	.cont {
		position: relative;
	}
	.new {
		display: flex;
		flex-wrap: wrap;
		font-size: 20px;
	}
	.imgs{
			position: absolute;
		top: 111px;
		right: 265px;
		width: 65px;
		height: 85px ;
		z-index: 999;
	}
	.amg {
		height: 260px;
		display: inline;
		width: 100%;
	}

	.abs {
		position: absolute;
		top: 111px;
		right: 110px;
		z-index: 999;
		font-size: 16px;
	}
	.abs0 {
		position: absolute;
		top: 80px;
		left: 30px;
		z-index: 999;
		font-size: 16px;
	}
	.abs2 {
		position: absolute;
		top: 133px;
		right: 110px;
		font-size: 16px;
		z-index: 999;
	}
	.abs3 {
		position: absolute;
		top: 177px;
		right: 110px;
		z-index: 999;	
		font-size: 16px;

	}
	.abs4 {
		position: absolute;
		z-index: 999;
		font-size: 16px;
		top: 155px;
		right: 110px;
	}
	.abs5 {
		position: absolute;
		z-index: 999;
		top: 199px;	
		font-size: 16px;
		right: 110px;
	}
</style>

<script>
	import axios from "axios";

	export default {
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
			upload() {
				const token = sessionStorage.getItem("token");
				axios.post(
						"api/subscription/toggleprint",
						{
							subscription_id: this.nums,
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
			printDiv() {
				window.print();
			},
			basicdata() {
				const token = sessionStorage.getItem("token");

				axios
					.get(`api/subsc/show?subsc_id=${this.nums}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
						  params:{
								per_page : 1500
      					    }
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
