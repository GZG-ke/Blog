<template>
	<div class="main-container">
		<h1 v-for="index in 50" :key="index">这是home页面</h1>
	</div>
</template>
<style lang="scss" scoped>
.main-container {
	margin: 24px;
	background-color: #fff;
	overflow: auto; // 超出设定高度，出现滚动条
	height: 580px; // 给容器定一个高度
	text-align: center;

	/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
	// 滚动条整体部分
	&::-webkit-scrollbar {
		width: 6px;
		height: 8px;
	}
	// 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
	&::-webkit-scrollbar-button {
		display: none;
	}
	// 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
	&::-webkit-scrollbar-thumb {
		background: rgba(144, 147, 153, 0.3);
		cursor: pointer;
		border-radius: 4px;
	}
	// 边角，即两个滚动条的交汇处
	&::-webkit-scrollbar-corner {
		display: none;
	}
	// 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
	&::-webkit-resizer {
		display: none;
	}
}
</style>
