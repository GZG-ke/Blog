<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "./logo.vue";
// 折叠按钮组件
import Collapse from "./collapse.vue";
// 面包屑
import Breadcrumb from "./breadcrumb.vue";
// sidebarItem 项组件
import SideBarItem from "./sidebarItem.vue";
import { filteredRoutes } from "@/router";
// 拿到路由列表，过滤我们不想要的
//const router = useRouter();
//const routerList = router.getRoutes().filter((v) => v.meta && v.meta.isShow);
const routerList = filteredRoutes;
// menu菜单是否折叠
const isCollapse = ref(false);
/**
 * 点击菜单折叠按钮
 * @param val:当前菜单是否折叠  true-折叠， false-不折叠
 */
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<template>
  <el-container class="layout-container">
    <!-- 左侧菜单栏 -->
    <el-aside :class="isCollapse ? 'collapsed' : ''">
      <!-- 左侧-项目logo -->
      <Logo :collapse="isCollapse" />

      <!-- 左侧-左侧菜单栏 -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#001529"
        :default-active="$route.path"
        text-color="#fff"
        :unique-opened="false"
        router
        :collapse="false"
        :collapse-transition="false"
      >
        <SideBarItem :routerList="routerList" />
      </el-menu>

      <!-- 左侧-底部折叠 -->
      <Collapse @click="handleCollapse" />
    </el-aside>

    <!-- 右侧内容区 -->
    <el-container>
      <!-- 右侧-顶部导航栏 -->
      <el-header>
        <div class="flex-bc">
          <!-- 面包屑 -->
          <Breadcrumb />
        </div>
      </el-header>

      <!-- 右侧-内容主体区域 -->
      <el-main>
        <!-- 设置 sidebar 的路由出口 -->
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .el-header {
    height: 60px;
    padding: 0;
  }
  .el-aside {
    display: flex;
    flex-direction: column;
    width: 240px;
    flex-shrink: 0;
    background-color: #001529;
    transition: width 0.3s ease;
    &.collapsed {
      width: 80px;
    }
  }
  // 主体区域背景色
  .el-main {
    padding: 0;
    background-color: #f0f2f5;
    overflow-x: hidden;
  }
  .el-menu {
    height: calc(100% - 48px);
    overflow: auto;
    border-right: 0;
  }
}
</style>
