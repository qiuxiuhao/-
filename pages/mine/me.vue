<template>
	<view>
		<view class="item">
			<view class="item_1">
				<text>头像</text>
			</view>
			<view class="item_2">
				<image  class="touxian" src="../../static/touxiantext.png"></image>
			</view>
		</view>
		<view class="item">
			<view class="item_1">
				<text>昵称</text>
			</view>
			<view class="item_3">
				<text>{{name}}</text>
			</view>
		</view>
		<view class="item">
			<view class="item_1">
				<text>性别</text>
			</view>
			<view class="item_3">
				<text>{{gender}}</text>
			</view>
		</view>
		<view class="item">
			<view class="item_1">
				<text>学校</text>
			</view>
			<view class="item_3">
				<text>{{school}}</text>
			</view>
		</view>
		<view class="item">
			<view class="item_1">
				<text>个性签名</text>
			</view>
			<view class="item_3">
				<text>{{qianmin}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'星空',
				gender:'男',
				school:'中国矿业大学(北京)',
				qianmin:'哈哈哈'
			}
		},
		methods: {
			
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
	.item_2{
		height: 40px;width: 100px;
		padding-right: 10px;
		text-align: right;
		align-self: center;
	}
	.item_3{
		height: 24px;width: auto;
		padding-right: 10px;
		text-align: right;
		align-self: center;
		font-weight: 200;
	}
	.touxian{
		height: 40px;width: 40px;
	}
</style>
