<template>
	<sidebar />

	<div class="home">
		<div class="row fex-side-bar">
				<div class="header">
					<slot name="header"></slot>
				</div>
			<!--begin::Dashboard-->
			<div class="dash">
				<slot> </slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from "../layouts/sidebar.vue";

	export default {
		name: "personal",

		components: {
			Sidebar,
		},
	};
</script>
