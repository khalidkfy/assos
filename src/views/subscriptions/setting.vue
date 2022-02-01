<template>
	<container>
		<div v-for="item in informats" :key="item.id">
            <p>{{item.vlaue}}</p>
            <p>{{item.key}}</p>

            
        </div>

<router-link class="btn nw w-25"  :to="{name:'setting2', }">  تعديل</router-link>
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
                informats:[]
            };
		},

		created() {
			this.basicdata();
		},
		methods: {
        	basicdata() {
				const token = sessionStorage.getItem("token");

				axios
					.get(`api/setting/index`, {
						headers: {
							Authorization: "Bearer " + token,
						},
					})
					.then((res) => {
						console.log(res.data.data);
						this.informats = res.data;
					})
					.catch((e) => {
						console.log(e);
					});
			},

            
        },
	};
</script>
