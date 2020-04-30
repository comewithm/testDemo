/*
	main.js是项目的js入口文件
*/	

import Vue from 'vue' 
import app from './App.vue'

// 导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

//1.3 导入自己的router路由模块
import router from './router.js'

//2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)

// 导入格式化时间的插件
import moment from 'moment'

Vue.filter("dataFormat", function(dataStr, pattern="YYYY-MM-DD hh:mm:ss"){
	return moment(dataStr).format(pattern)
})


// 导入MUI样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// 按需导入Mint-UI组件
// import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
// 注册到vue中
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)

// 全部导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 缩略图组件导入
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)


// 刚刚手写的mock.js文件
 // axios http请求库
 // 设置默认请求的url
import Mock from './mockjs/mock.js' 
import index from './mockjs/index.js'
import newsinfo from './mockjs/newsinfo.js'
import comment from './mockjs/comment.js'
import photoinfo from './mockjs/photoinfo.js'
import photolist from './mockjs/photolist.js'
import photo from './mockjs/photo.js'
import imgs from './mockjs/preview-img.js'
import goodslist from './mockjs/goodslist.js'
import goodsinfo from './mockjs/goodsinfo.js'
import goodsdesc from './mockjs/goodsdesc.js'


import axios from 'axios'

axios.defaults.baseURL = 'http://mockjs.com/api' 
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded'


var car = JSON.parse( localStorage.getItem('car') || '[]' )

// var car = null

var store = new Vuex.Store({
	// 将需要购买的商品信息以对象存放在数组中(在用户加入购物车时触发)，并放入vuex仓储中
	// 如果仓储中已存在购买的商品(根据商品id判断)，则只需要更新数据信息
	// 如果不存在则将商品信息添加到car中
	state:{
		// car:[]
		car: car
	},
	mutations:{
		addtocar(state,goodsinfo){
			// 默认商品不在car数组中
			let flag = false
			state.car.some(item => {
				// 根据商品id判断是否
				if(item.id === goodsinfo.id){
					item.count += goodsinfo.count
					flag = true
				}
				return true
			})
			if(flag === false){
				state.car.push(goodsinfo)
			}
			
			// 将数据存储到本地localStorage中
			localStorage.setItem('car',JSON.stringify(state.car))
		}
	},
	getters:{
		getAllCount(state){
			var c = 0;
			state.car.forEach(item => {
				c += item.count;
			})
			return c
		}
	}
})


var vm = new Vue({
	el: '#app',
	data:{},
	methods:{},
	render: c => c(app),
	router: router	//1.4挂载路由对象到vm实例上
})