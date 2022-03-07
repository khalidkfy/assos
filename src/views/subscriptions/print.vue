<template>
		<div class="back">
			<div class="new" id="printableArea">
				<div class="hd1" style="width: 50%; " v-for="(item, index) in informats" :key="index">
					<div v-if="nums[index]" class="cont">
						<img src="../../assets/img/bacg.jpeg" class="amg" alt="" />
						<p class="abs0">{{ item.affiliate_no }}</p>
						<p class="abs">{{ item.beneficiary_name }}</p>
						<p class="abs2">{{ item.id_number }}</p>
						<p class="abs4">{{ item.birth_date }}</p>
						<p class="abs3">{{ item.start_subscription }}</p>
						<p class="year">{{ item.year }}</p>
							<div v-for="(s, index) in item.district " :key="index">
															<p class="abs5">{{ s }}</p>

							</div>
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
		font-size: 3px;
	}
	.imgs{
			position: absolute;
		top: 117px;
		right: 269px;
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
		top: 115px;
		right: 103px;
		z-index: 999;
		font-size: 13px;
	}
	.year {
		position: absolute;
		top: 70px;
		right: 60px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #4992F2;
		font-weight: 700;
		z-index: 999;
		font-size: 30px;
	}
	.abs0 {
		position: absolute;
		top: 85px;
		left: 28px;
		z-index: 999;
		font-size: 13px;
	}
	.abs2 {
		position: absolute;
		top: 140px;
		right: 95px;
		font-size: 13px;
		z-index: 999;
	}
	.abs3 {
		position: absolute;
		top: 183px;
		right: 100px;
		z-index: 999;	
		font-size: 13px;

	}
	.abs4 {
		position: absolute;
		z-index: 999;
		font-size: 13px;
		top: 160px;
		right: 100px;
	}
	.abs5 {
		position: absolute;
		z-index: 999;
		top: 205px;	
		font-size: 13px;
		right: 100px;
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
						"api/subscriptionpeople/toggleprint",
						{
								subscription_people_id: this.nums	,
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
					.get(`api/subsc/show?subsc_id=${this.$route.query.q}`, {
						headers: {
							Authorization: "Bearer " + token,
						},
						params: {
							per_page: 3500,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						this.informats = res.data.data.SubscriptionPeople;
					})
					.catch((e) => {
						console.log(e);
					});
			},
		},
	};
</script>
