<template>
	<view>
		<view class="item">
			<view class="item_1">
				<text>账号</text>
			</view>
			<view class="item_3">
				<text>{{userinfo.id}}</text>
			</view>
		</view>
		<view class="item" @click="goto('phonenumber_set')">
			<view class="item_1">
				<text>手机号</text>
			</view>
			<view class="item_3">
				<text>{{userinfo.phonenumber}}</text>
			</view>
		</view>
		<view class="item" @click="goto('password_set')">
			<view class="item_1">
				<text>账号密码</text>
			</view>
			<view class="item_3">
				<text>******</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{
				}
			}
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userinfo')
		},
		methods: {
			//前往指定页面
			goto(where){
				uni.navigateTo({
					url:'/pages/mine/safe/' + where
				})
			}
		}
	}
</script>

<style>
    .item{
		height: 60px;width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: solid 2px #ededed;
	}
	.item_1{
		height: 24px;width: 100px;
		align-self: center;
		padding-left: 10px;
	}
	.item_3{
		height: 24px;width: auto;
		padding-right: 10px;
		text-align: right;
		align-self: center;
		font-weight: 200;
	}
</style>

