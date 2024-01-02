<script setup lang="ts">
import { ref } from "vue";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons-vue";
const emits = defineEmits(["handleCollapse"]);
// 翻转按钮
const collapsed = ref(false);
const handleCollapse = () => {
	collapsed.value = !collapsed.value;
  emits("handleCollapse", collapsed.value);
};
</script>

<template>
  <div
    class="collapse-container flex items-center justify-start"
    @click="handleCollapse"
  >
    <el-tooltip
      class="box-item"
      effect="light"
      content="点击折叠"
      placement="right"
    >
      <RightCircleOutlined v-if="collapsed" />
      <LeftCircleOutlined v-else />
    </el-tooltip>
  </div>
</template>

<style scoped lang="scss">
.collapse-container {
	flex-shrink: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    background-color: #03284a;
  // 水平镜像翻转--兼容多种浏览器
}
</style>
