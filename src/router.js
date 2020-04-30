/*
	抽离路由模块
*/
import VueRouter from 'vue-router'
// 导入组件
import homeContainer from './components/tabbar/HomeContainer.vue'
import memberContainer from './components/tabbar/MemberContainer.vue'
import searchContainer from './components/tabbar/SearchContainer.vue'
import shopcarContainer from './components/tabbar/ShopcarContainer.vue'

import newslist from './components/news/NewsList.vue'
import newsinfo from './components/news/NewsInfo.vue'
import photolist from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/PhotoInfo.vue'
import goodslist from './components/goods/GoodsList.vue'
import goodsinfo from './components/goods/GoodsInfo.vue'
import goodsdesc from './components/goods/GoodsDesc.vue'
import goodscomment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
	routes : [
		{path : '/home', component : homeContainer},
		{path : '/member', component : memberContainer},
		{path : '/shopcar', component : shopcarContainer},
		{path : '/search', component : searchContainer},
		{path : '/home/newslist', component: newslist},
		{path : '/home/newsinfo/:id', component: newsinfo},
		{path : '/home/photolist', component: photolist },
		{path : '/home/photoinfo/:id', component: photoinfo},
		{path : '/home/goodslist', component: goodslist},
		{path : '/home/goodsinfo', component: goodsinfo, name: 'goodsinfo'},
		{path : '/home/goodsdesc',component:goodsdesc, name:'goodsdesc'},
		{path : '/home/goodscomment',component:goodscomment, name:'goodscomment'}
	],
	linkActiveClass: 'mui-active'	//覆盖默认路由高亮的类,默认的类叫router-link-active
})

// 暴露出路由对象
export default router