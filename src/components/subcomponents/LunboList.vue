<template>
	<div>
		<mt-swipe :auto="3000">
			<!-- 使用父组件homecontainer传过来的值LunboList -->
			<mt-swipe-item v-for="item in LunboList" :key="item.url">
				<!-- class对图片的宽高做处理 -->
				<img :src="item.image" alt="" class="[full: isfull]"/>
			</mt-swipe-item>
			
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		props:["LunboList","isfull"]
	}
</script>

<style lang="scss" scoped="scoped">
	.mint-swipe{
		// 设置高度
		height: 200px;
		
		.mint-swipe-item{
			// scss中&设置为交集选择器
			// &:nth-child(1){
			// 	background-color: darkcyan;
			// }
			// &:nth-child(2){
			// 	background-color: lightseagreen;
			// }
			// &:nth-child(3){
			// 	background-color: lightcoral;
			// }
			text-align:center;
			img{
				width:100%;
				height: 100%;
			}
			
			.full{
				width:100%;
			}
		}
	}
	
</style>
