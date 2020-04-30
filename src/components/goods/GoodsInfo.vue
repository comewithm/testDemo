<template>
	<div class="goodsinfo-container">
		<!-- 半场动画效果用函数来实现 -->
		<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter">
			<div class="ball" v-show="ballflag" ref="ball"></div>
		</transition>
		<!-- 商品轮播区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!-- <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1562056090.0423593.jpg" /> -->
					<swipe :LunboList="lunbolist" :isfull="false"></swipe>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">小米note3</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价&nbsp;&nbsp;<del>{{goodsinfo.oldPrice}}</del>&nbsp;&nbsp;&nbsp;&nbsp;销售价&nbsp;&nbsp;<span class="new">{{goodsinfo.newPrice}}</span>
						</p>
						<!-- 购买的商品数量最大值为库存数量 -->
						<p>购买数量<numbox @getCount="getcount" :max="goodsinfo.sell"></numbox></p>
							<!-- <span class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
									<input id="test" class="mui-input-numbox" type="number" value="1" />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</span> -->
						<!-- </p> -->
						<p>
							<mt-button type="primary" size="small">购买</mt-button>
							<mt-button type="danger" size="small" @click="addtoshopcar">加入购物车</mt-button>
						</p>
					</div>
				</div>
		</div>
		<!-- 商品参数区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号&nbsp;&nbsp;{{goodsinfo.number}}</p>
						<p>库存情况&nbsp;&nbsp;{{goodsinfo.sell}}</p>
						<p>上架时间&nbsp;&nbsp;{{goodsinfo.date}}</p>
					</div>
				</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="godesc()">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="gocomment()">商品评论</mt-button>
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import swipe from '../subcomponents/LunboList.vue'
	import numbox from '../subcomponents/numbox.vue'
	export default{
		data(){
			return{
				lunbolist:[],
				goodsinfo:{},
				ballflag: false,
				selectedcount: 1
			}
		},
		created(){
			this.getlunbotu(),
			this.getGoodsInfos()
		},
		methods:{
			getlunbotu(){
				axios.get('/posts').then(res => {
					if(res.data.code === 200){
						this.lunbolist = res.data.posts
					}
				})
			},
			getGoodsInfos(){
				axios.get('/goodsinfos').then(res => {
					if(res.data.code === 200){
						this.goodsinfo = res.data.goodsinfo
					}
				})
			},
			godesc(){
				// this.$router.push({name:'',params{id:id}})
				this.$router.push({name:'goodsdesc'})
			},
			gocomment(){
				this.$router.push({name:'goodscomment'})
			},
			addtoshopcar(){
				this.ballflag = !this.ballflag;
				
				var goodsinfo = {
					price: goodsinfo.newPrice,
					count: this.selectedcount,
					selected: true
				}
				this.$store.commit('addtocar',goodsinfo)
			},
			
			beforeEnter(el){
				el.style.transform="translate(0,0)";
			},
			enter(el,done){
				el.offsetWidth;
				
				//获取小球的动态位置 console.log(ballposition)
				const ballposition = this.$refs.ball.getBoundingClientRect();
				// DOM操作可以获取整个页面的元素
				const badge = document.getElementById('badge').getBoundingClientRect();
				
				const x = badge.left - ballposition.left;
				const y = badge.top - ballposition.top;
				// 设置为模板字符串
				el.style.transform = `translate(${x}px, ${y}px)`;
				el.style.transition = "all 1s ease";
				done();	//done表示对after-enter的引用
			},
			afterEnter(el){
				this.ballflag = !this.ballflag;
			},
			
			getcount(count){
				// 子组件传过来的值用data接收
				this.selectedcount = count;
				console.log("父组件接收到的值为:"+this.selectedcount)
			}
		},
		components:{
			swipe:swipe,
			numbox:numbox
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.goodsinfo-container{
		
		.ball{
			width:20px;
			height:20px;
			border-radius:50%;
			background-color:blue;
			z-index:99;
			position:absolute;
			top:390px;
			left:153px;
			
		}
		
		background-color: #eee;
		overflow: hidden;
		
		.price{
			.new{
				color:red;
				font-size:16px;
				font-weight:bold;
			}
		}
		
		.mui-card{
			p{
				font-size:16px;
			}
			.mui-card-footer{
				display: block;
				button{
					margin: 15px 0;
				}
			}
			
		}
		
	}
</style>
