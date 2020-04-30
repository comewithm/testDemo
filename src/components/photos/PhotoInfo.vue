<template>
	<div class="photo-container">
		<!-- 标题区域 -->
		<h1>{{ data.title }}</h1>
		<p class="subtitle">
			<span class="sub-date">发表时间{{ data.time }}</span>
			<span class="sub-click">点击: {{ data.click }}次</span>
		</p>
		<hr />
		<!-- 缩略图区域 -->
		<div class="showImage">
			
			<vue-preview :slides="list" class="preview" ></vue-preview>
			
		</div>
		
		<!-- 内容区域 -->
		<div class="content">
			{{ data.content }}
		</div>
		
		<!-- 评论组件区域 -->
		<cmtbox :id="id"></cmtbox>
	</div>
</template>

<script>
	import axios from 'axios'
	import comment from '../subcomponents/comment.vue'
	
	export default{
		data(){
			return {
				id : this.$route.params.id,
				data : {},
				list : []	//存放缩略图
			}
		},
		created(){
			this.getphoto(),
			this.getImages()
		},
		methods:{
			getphoto(){
				axios.get('/photos').then(result => {
					if(result.data.code === 200){
						this.data = result.data.photos[0]
					} 
				})
			},
			
			getImages(){
				axios.get('/imgs').then(result => {
					if(result.data.code === 200){
						result.data.imgs.forEach(item => {
							item.w = 600
							item.h = 400
							item.src = item.image
							item.msrc = item.image;
						})
						this.list = result.data.imgs
					}
				});
			}
		},
		components:{
			cmtbox: comment
		}
	}
</script>


<!-- .
这个插件会生成1个嵌套很深的结构，你可以通过chrome的开发者工具，去审查运行时的页面结构。
<figure>标签是H5增加的标签，可以直接对其设置样式，与其他标签无异。
如果你对其设置样式无效，八成是因为你组件的<style scoped>部分，一定不要用scoped。 -->
<style  lang="scss" >
	.photo-container{
		padding: 3px;
		h1{
			margin: 15px auto;
			font-size: 16px;
			text-align: center;
			color: lightpink;
		}
		.subtitle{
			display: flex;
			justify-content: space-between;
			.sub-date{
				font-size: 14px;
			}
			.sub-click{
				font-size: 14px;
			}
		}
		
		.content{
			line-height: 30px;
		}
		
		.showImage{
				.my-gallery{
					display: flex;
					flex-wrap : wrap;
					figure{
						display: inline-block;
						margin: 8px;
					}
					img{
						box-shadow: 0 0 8px #999;
					}
				}
		}
			
	}
</style>
