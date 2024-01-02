<script lang="ts" setup>
const props = defineProps({
	collapse: Boolean
});
</script>
<template>
	<div class="sidebar-login-container">
		<div class="sidebar-logo flex-c" v-if="props.collapse">
			<svg-icon icon-class="logo" />
		</div>
		<div class="sidebar-logo flex-c" v-else>
			<svg-icon icon-class="logo" />
			<span>Zark</span>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.sidebar-login-container {
	.sidebar-logo {
		height: 48px;
		font-size: 20px;
		font-weight: 700;
		color: #fff;
		background-color: #002140;
		text-align: center;
	}
}
</style>
