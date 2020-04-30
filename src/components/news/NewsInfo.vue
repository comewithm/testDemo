<template>
	<div class="newsinfo-container">
		<!-- 标题 -->
		<h3 class="titles">{{title}}</h3>
		<p class="subtitle">
			<span>发表时间: {{date}}</span><span>点击: {{click}}次</span>
		</p>
		<hr>
		<!-- 主要内容 -->
		<p class="content">{{paragraph}}</p>
		
		<!-- 评论内容  父组件传值给子组件-->
		<commentBox :id="this.id"></commentBox>
	</div>
</template>

<script>
	import axios from 'axios'
	// 导入评论子组件
	import comment from '../subcomponents/comment.vue'
	export default{
		data(){
			return {
				newsinfo: [],
				id: this.$route.params.id,
				title:'',
				date:'',
				click:'',
				paragraph:''
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				axios.get('/newsinfos').then(result => {
					if(result.data.code === 200){
						this.newsinfo = result.data.newsinfos
						this.title = this.newsinfo[this.id].title
						this.date = this.newsinfo[this.id].date
						this.click = this.newsinfo[this.id].click
						this.paragraph = this.newsinfo[this.id].paragraph
						
					}else{
						Toast("信息获取失败")
					}
				})
			}
		},
		components: {
			commentBox : comment
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.newsinfo-container{
		margin: 0 5px;
		.titles{
			margin: 18px 0;
			font-size: 16px;
			text-align: center;
		}
		.subtitle{
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			color: crimson;
		}
		.content{
			font-size: 16px;
		}
			
		
	}
	
</style>
