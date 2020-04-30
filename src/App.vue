<template>
	<div class="app-container">
		
		<!-- 顶部header 区域 -->
		<!-- <p class="top" fixed> -->
			<!-- <mt-button  type="primary" class="btn"><</mt-button> -->
			<mt-header fixed title="vue 项目" ></mt-header>
			<!-- <mt-header  title=" vue 项目" ></mt-header> -->
		<!-- </p> -->
		<!-- 中间的路由router-view区域 -->
		<!-- 设置动画效果transition -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- 底部Tabbar区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-i" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-i" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-i" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
				<!-- {{this.$store.getters.getAllCount}} -->
			</router-link>
			<router-link class="mui-tab-item-i" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template> 

<script>
	
</script>

<style scoped="scoped" lang="scss">
	.app-container{
		position:relative;
		padding-top: 40px;
		padding-bottom: 50px;
		//隐藏滚动条
		overflow: hidden;
		
		mt-header{
			z-index: 99;
		}
		// p{
		// 	z-index:99;
		// 	position:absolute;
		// 	// display:flex;
		// 	// justify-content:space-around;
		// 	mt-header{
		// 		flex:10%;
		// 	}
		// 	mt-header{
		// 		flex:90%;
		// 	}
		// }
	}
	
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}
	
	//修改mui-tab-item类名，解决tabbar无法切换的问题
	.mui-bar-tab .mui-tab-item-i .mui-active {
	    color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-i {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-i .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-i .mui-icon ~ .mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>
