<template>
	<div class="goodslist">
		<!-- 标签式导航 -->
		<!-- <router-link class="goods-item" v-for="(item,i) in goods" :key="i" to="/home/goodsinfo">
			<img :src="item.image" />
			<h1 class="title">{{ item.title }}</h1>
			<div class="info">
				<p class="price">
					<span class="new-price">{{item.newPrice}}</span>
					<span class="old-price">{{item.oldPrice}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.sell}}件</span>
				</p>
			</div>
			
		</router-link> -->
		<!-- 编程式导航 -->
		<div class="goods-item" v-for="(item,i) in goods" :key="i" @click="getDetail()">
			<img :src="item.image" >
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="new-price">{{item.newPrice}}</span>
					<span class="old-price">{{item.oldPrice}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.sell}}件</span>
				</p>
			</div>
			
		</div>
		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
		<!-- <div class="goods-item">
			<img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1562056090.0423593.jpg" >
			<h1 class="title">小米CC9</h1>
			<div class="info">
				<p class="price">
					<span class="new-price">￥800</span>
					<span class="old-price">￥1000</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩70件</span>
				</p>
			</div>
			
		</div> -->
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				goods: []
			}
		},
		created(){
			this.getGoods()
		},
		methods:{
			getGoods(){
				axios.get('/goods').then(res => {
					if(res.data.code === 200){
						// this.goods = res.data.goods
						this.goods = this.goods.concat(res.data.goods)
					}
				})
			},
			getMore(){
				this.getGoods()
			},
			getDetail(){
				// 编程式导航
				// 1.最简单的
				// this.$router.push('/home/goodsinfo' + id)
				//2. 传递对象
				// this.$router.push({path:'/home/goodsinfo' + id})
				// this.$router.push({path:'/home/goodsinfo' })
				// 3.传递命名的路由
				// this.$router.push({name: "goodsinfo", params:{id:id}})
				this.$router.push({name: "goodsinfo"})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.goodslist{
		display: flex;
		flex-wrap : wrap;
		padding:8px;
		justify-content: space-between;
		.goods-item{
			width:49%;
			min-height: 303px;
			margin-bottom:10px;
			border: 1px solid #999;
			box-shadow: 0 0 8px #999;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			img{
				width:100%;
			}
			.title{
				font-size: 16px;
				padding-left:3px;
			}
			
			.info{
				background-color:#ddd;
				p{
					margin: 0;
					padding:3px;
				}
				.price{
					line-height:35px;
					.new-price{
						color: red;
						font-size:18px;
						font-weight: bold;
					}
					.old-price{
						margin-left:10px;
						text-decoration:line-through;
					}
				}
				.sell{
					display:flex;
					justify-content:space-between;
					font-size: 16px;
				}
			}
		}
	}
</style>
