<template>
	<div>
		<!-- mui-fullscreen去除,不占全屏 -->
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==99?'mui-active':'']" v-for="item in photoinfos" :key="item.id" @click="getPhotoListById(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
		</div>
		
		<!-- 图片列表区域 -->
		<!-- 指定router-link的标签 -->
		<ul class="photo-list">
			<router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li">
				<img v-lazy="item.image"  />
				<!-- <img :src="item.image" v-lazy="item.image" /> -->
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-sentence">{{item.sentence}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'
	import axios from 'axios'
	
	export default{
		data(){
			return {
				photoinfos: [],
				list: []
			}
		},
		created(){
			this.getPhotoInfo(),
			this.getPhotoListById(99)
		},
		//在组件的DOM元素被渲染好后执行该钩子函数(解决了已进入滑动条不能被滑动的问题)
		mounted(){	
			//flick减速系数,系数越大,滑动速度越慢,滑动距离越小,默认值0.0006
			mui(".mui-scroll-wrapper").scroll({
				deceleration: 0.0005	
			})
		},
		methods:{
			getPhotoInfo(){
				axios.get('/photoinfos').then(result => {
					if(result.data.code === 200){
						result.data.photoinfos.unshift({title:"全部",id:99})
						this.photoinfos = result.data.photoinfos
						console.log(this.photoinfos)
					}else{
						Toast("获取照片信息失败")
					}
				});
			},
			getPhotoListById(id){
				axios.get('/photolists/' + id).then(result => {
					if(result.data.code === 200){
						this.list = result.data.photolists
						console.log(this.list)
					}
				});
			}
		}
	}
	
</script>

<style scoped="scoped" lang="scss">
	*{
		touch-action: pan-y;
	}
	.photo-list{
		margin: 0;
		padding: 10px;
		list-style: none;
		padding-bottom: 0;
		li{
			position: relative;
			background-color: #ccc;
			text-align: center;
			margin-bottom: 5px;
			img{
				width: 100%;
				vertical-align: middle;
			}
			
			img[lazy="loading"]{
				width:40px;
				height : 300px;
				margin: auto;
			}
			
			.info{
				position: absolute;
				color: white;
				text-align: left;
				bottom: 0;
				background-color: rgba(0,0,0,0.4);
				height: 80px;
				.info-title{
					font-size: 14px;
				}
				.info-sentence{
					font-size: 13px;
				}
			}
		}
	}
</style>
