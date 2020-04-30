<template>
	<div class="goodsdesc-container">
		<h1>{{info.title}}</h1>
		<hr>
		<p class="paragraph">{{info.paragraph}}</p>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				info:{}
			}
		},
		created(){
			this.getGoodsDesc()
		},
		methods:{
			getGoodsDesc(){
				axios.get('/goodsdescs').then(res => {
					if(res.data.code === 200){
						this.info = res.data.desc
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.goodsdesc-container{
		h1{
			color:cyan;
			font-size:30px;
			margin: 8px 0;
			padding:4px;
		}
		.paragraph{
			font-size:18px;
			margin: 3px;
			padding: 4px;
		}
	}
</style>
