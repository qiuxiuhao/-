<template>
	<view>
		<view class="status_bar">
			<!--状态栏-->
		</view>
		<!--头像、昵称、个性签名-->
		<view class="head">
			<image src="../../static/touxiantext.png" alt="" class="userhead">
			<view class="">
				<text class="name" >{{user.username}}</text><br>
				<text>{{user.gexin}}</text>
			</view>
		</view>
		<!--功能列表-->
		<view class="">
			<view class="item"  @click="goto('me')">
				<text>个人中心</text>
			</view>
			<view class="item"  @click="goto('safe')">
				<text >账号安全</text>
			</view>
			<view class="item"  @click="goto('wallet')">
				<text >我的钱包</text>
			</view>
			<view class="item"  @click="goto('Collection')">
				<text >我的收藏</text>
			</view>
			<view class="item"  @click="goto('order')">
				<text >我的订单</text>
			</view>
			<view class="item"  @click="goto('release')">
				<text >我的发布</text>
			</view>
			<view class="item"  @click="goto('advice')">
				<text >意见反馈</text>
			</view>
			<view class="item"  @click="chear">
				<text >清除缓存</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					username:"哈哈",
					gexin:"你好啊！"
				}
			}
		},
		methods: {
			//清空本地缓存并退出登录
			chear(){
				uni.showModal({
					content: '是否清空本地缓存',
					success: function (res) {
						if (res.confirm) {
							uni.clearStorage();
							uni.redirectTo({
								url:'/pages/index/login'
							})
						} else if (res.cancel) {
							uni.switchTab({
								url:'/pages/index/index'
							})
						}
					}
				});
			},
			//前往指定页面
			goto(where){
				uni.navigateTo({
					url:'../../pages/mine/' + where
				})
			}
		}
	}
</script>

<style>
	.head{
		width: 100%;
		height: 100px;
		padding-top: 50px;
		padding-left: 50px;
		display: flex;
		flex-direction: row;
		border-bottom:solid #ededed ;
	}
	.userhead{
		width: 60px;height: 60px;
		border-radius: 30px;
	}
	.name{
		font-size: 24px;
	}
	.status_bar{
		height: var(--status-bar-height);
	    width: 100%;background-color: #66C3E4;
	}
	.item{
		height: 35px;width: 100%;
		padding: 10px;
		font-size: 20px;
		border-bottom: solid #ededed;
		display: flex;
		flex-direction: row;
	}
	.icon1{
		height: 20px;width: 10px;
	}
</style>
