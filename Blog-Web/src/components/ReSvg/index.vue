<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	/* icon 图标名称 */
	iconClass: {
		type: String,
		required: true
	},
	/* icon 图标类名 */
	className: {
		type: String,
		default: ''
	},
	/* icon 图标颜色 */
	iconColor: {
		type: String,
		default: 'CurrentColor'
	}
});
const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => {
	if (props.className) {
		return 'svg-icon ' + props.className;
	} else {
		return 'svg-icon';
	}
});
</script>
<template>
	<svg :class="svgClass" aria-hidden="true" :fill="iconColor">
		<use :xlink:href="iconName" />
	</svg>
</template>

<style scoped>
.svg-icon {
	width: 18px;
	height: 18px;
	overflow: hidden;
	fill: currentcolor;
}
</style>
