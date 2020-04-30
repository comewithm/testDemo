<template>
	<div class="cmt-container">
		<!-- 评论部分 -->
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入您的评论..." maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div class="cmt-list" v-for="(item,i) in commentList" :key="item.sentence">
			<div class="cmt-item">
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user}}&nbsp;&nbsp;发表时间:{{item.date | dataFormat}}
				</div>
				<div class="cmt-body">
					{{item.sentence}}
				</div>
			</div>
			<!-- <div class="cmt-item">
				<div class="cmt-title">
					第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-12-07 22:10:00
				</div>
				<div class="cmt-body">
					come on baby
				</div>
			</div>
			<div class="cmt-item">
				<div class="cmt-title">
					第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-12-07 22:10:00
				</div>
				<div class="cmt-body">
					come on baby
				</div>
			</div> -->
		</div>
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	
	export default{
		data(){
			return {
				// pageIndex:1,
				msg:'',
				commentList:[]
			}
		},
		props:['id'],		//新闻id
		created(){
			this.getcomments()
		},
		methods:{
			getcomments(){
				axios.get('/comments').then(result => {
					if(result.data.code === 200){
						this.commentList= this.commentList.concat(result.data.comments) 
					}else{
						Toast("信息获取失败")
					}
				})
			},
			getMore(){
				// this.pageIndex++
				// 再次发送请求获取数据
				this.getcomments()
			},
			postComment(){
				// Access-Control-Allow-Origin": "*"
				axios.post('/comments',{sentence:this.msg.trim()}).then(result => {
					if(result.data.code === 200){
						var cmt = {
							user: "user01",
							date: Date.now(),
							sentence: this.msg.trim()
						}
						this.commentList.unshift(cmt);
						this.msg=''
					}else{
						Toast("信息获取失败")
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.cmt-container{
		h3{
			font-size: 16px;
		}
		textarea{
			margin: 0;
			height: 80px;
		}
		
		.cmt-list{
			margin: 5px 0;
			.cmt-item{
				.cmt-title{
					font-size: 14px;
					line-height: 30px;
					vertical-align: center;
					background-color: lightgray;
				}
				.cmt-body{
					line-height: 40px;
					text-indent: 1em;
				}
			}
		}
	}
</style>
