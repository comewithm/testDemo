<template>
	<div>
		<!-- <mt-swipe :auto="3000">
			<mt-swipe-item v-for="item in lunbotuList" :key="item.url">
				<img :src="item.image" alt=""/>
			</mt-swipe-item>
			
		</mt-swipe> -->
		
		<swipe :LunboList="lunbotuList" :isfull="true"></swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<img :src="img" alt="" />
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<img :src="img2" alt="" />
		        <div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
					<img :src="img3" alt="" />
		        <div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img :src="img4" alt="" />
		        <div class="mui-media-body">留言反馈</div>
				</a>
			</li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img :src="img5" alt="" />
		        <div class="mui-media-body">视频专区</div>
				</a>
			</li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img :src="img6" alt="" />
		        <div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul> 
		
		
		
	</div>
</template>

<script>
	
	import {Toast} from 'mint-ui'
	import axios from 'axios'
	import img from '../../images/menu1.png'
	import img2 from '../../images/menu2.png'
	import img3 from '../../images/menu3.png'
	import img4 from '../../images/menu4.png'
	import img5 from '../../images/menu5.png'
	import img6 from '../../images/menu6.png'
	
	// 使用轮播子组件
	import swipe from '../subcomponents/LunboList.vue'
	export default {
		data(){
			return {
				lunbotuList:[],
				img : img,
				img2: img2,
				img3: img3,
				img4: img4,
				img5: img5,
				img6: img6
			}
		},
		created(){
			this.getlunbotu()
		},
		methods:{
			getlunbotu(){
				axios.get("/posts").then(res => {
				  // console.log(res.data);
				  if(res.data.code === 200){
					  this.lunbotuList = res.data.posts
				  }else{
					  Toast("轮播图加载失败")
				  }
				});
			}
		},
		components:{
			swipe : swipe
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
	
	.mui-grid-view.mui-grid-9{
		background-color: white;
		border: none;
		img{
			width: 60px;
			height: 60px;
		}
		
		.mui-media-body{
			font-size: 12px;
		}
	}
	
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: 0;
	}
	
</style>
