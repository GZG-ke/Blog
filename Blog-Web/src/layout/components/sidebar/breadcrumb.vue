<!-- <script lang="ts" setup>
import { ref, watch } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { useRouter } from 'vue-router';
const { currentRoute } = useRouter();
const breadcrumbItems = ref();
// 监听当前路由的name变化
watch(
	() => currentRoute.value,
	(route: RouteLocationNormalizedLoaded) => {
		breadcrumbItems.value = route.matched;
	},

	{ immediate: true }
);
</script>

<template>
	<el-breadcrumb separator="/">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item
				:key="item.path"
				v-for="item in breadcrumbItems"
				:to="{ path: `${item.path}` }"
				class="breadcrumb-item">
				{{ (`menu.${String(item.name)}`) }}
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<style scoped lang="scss">
.el-breadcrumb {
	height: 48px;
	margin-left: 16px;
	line-height: 48px;
}

.el-breadcrumb__inner,
.el-breadcrumb__inner a {
	font-weight: 400 !important;
}
</style> -->


<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { RouteRecordNormalized } from 'vue-router';
import { useRouter } from 'vue-router';

const { currentRoute } = useRouter();
const breadcrumbItems = ref<RouteRecordNormalized[]>([]);

// 监听当前路由的 name 变化
watch(
  () => currentRoute.value,
  (route) => {
    breadcrumbItems.value = route.matched;
  },
  { immediate: true }
);
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path" :to="item.path">
      {{ item.meta.title || item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">
.el-breadcrumb {
  height: 48px;
  margin-left: 16px;
  line-height: 48px;
}

.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}
</style>
