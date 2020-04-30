<template>
	<div>
			<!-- 无论购买数量加或减，只要改变就传值给父组件 -->
			<!-- :data-numbox-max='max'中max为空是因为max来自goodsinfo,而then是一个异步操作 -->
			<!-- 总有一刻max可以确定，因此可以用watch来监听max -->
		<div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' >
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
				<input id="test" class="mui-input-numbox" type="number" value="1" 
				@change="getchanged()" ref="numbox"/>
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
		<!-- <div class="mui-numbox">
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
				<input class="mui-input-numbox" type="number" @change="getchanged()" ref="numbox"/>
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div> -->
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'
	export default{
		mounted(){
			// 初始化数字选择框组件
			mui(".mui-numbox").numbox()
		},
		methods:{
			getchanged(){
				// 调用父组件函数
				// 用this.$refs.numbox.value来获取文本框的值
				// console.log(this.$refs.numbox.value)
				this.$emit("getCount", parseInt(this.$refs.numbox.value))
			}
		},
		props:["max"],
		watch:{
			max : function(newVal, oldVal){
				// 使用js api 来设置max的最大值
				mui(".mui-numbox").numbox().setOption("max", newVal)
				
			}
		}
	}
</script>

<style>
</style>
