<template>
	<div>
		<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
							<!-- 绑定连接地址,接收参数 -->
							<router-link :to="'/home/newsinfo/' + item.id" >
								<img class="mui-media-object mui-pull-left" :src="item.image">
								<div class="mui-media-body">
									<h4>{{item.title}}</h4>
									<p class='mui-ellipsis'>
										<!-- 管道符格式化时间 -->
										<span>发表时间 {{item.date | dataFormat}}</span>
										<span>点击: {{item.click}} 次</span>
									</p>
								</div>
							</router-link>
						</li>
						<!-- <li class="mui-table-view-cell mui-media">
							<a href="javascript:;">
								<img class="mui-media-object mui-pull-left" :src="img">
								<div class="mui-media-body">
									<h4>木屋</h4>
									<p class='mui-ellipsis'>
										<span>发表时间 2019-12-07 16:00:00</span>
										<span>点击: 1 次</span>
									</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a href="javascript:;">
								<img class="mui-media-object mui-pull-left" :src="img">
								<div class="mui-media-body">
									<h4>CBD</h4>
									<p class='mui-ellipsis'>
										<span>发表时间 2019-12-07 16:00:00</span>
										<span>点击: 1 次</span>
									</p>
								</div>
							</a>
						</li> -->
		
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import axios from 'axios'
	import img from '../../images/nature02.jpg'
	
	export default{
		data(){
			return {
				img:img,
				newslist:[]
			}
		},
		created(){
			this.getNewslist()
		},
		methods:{
			getNewslist(){
				axios.get('/indexs').then(result => {
					if(result.data.code === 200){
						this.newslist = result.data.indexs
					}else{
						Toast("新闻资讯信息失败")
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.mui-table-view{
		li{
			h4{
				font-size: 14px;
			}
			.mui-ellipsis{
				font-size: 12px;
				color: darkcyan;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
