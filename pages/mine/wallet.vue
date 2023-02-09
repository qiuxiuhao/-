<template>
	<view>
		<view class="item">
			<text class="mon1">余额:</text><br>
			<text class="mon2">{{money}}</text>
		</view>
		<view class="item2">
			<text class="text1">前往充值</text>
		</view>
		<view class="item2">
			<text class="text1">交易记录</text>
		</view>
		<view class="item2">
			<text class="text1">支付设置</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:190.01		
			}
		},
		methods: {
			
		}
	}
</script>

<style>
    .item{
		height: 100px;width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-bottom: solid 1px #ededed;
		background-color: skyblue;
	}
	.item_2{
		height: 50px;width: 100px;
		background-color: skyblue;
		border-radius: 10px;
		align-self: center;
		color: white;
		text-align: center;
	}
	.mon1{
		width: 50%;
		text-align: right;
		font-size: 24px;
		color: black;
		align-self: center;
	}
	.mon2{
		width: 50%;
		text-align: left;
		font-size: 24px;
		color: black;
		align-self: center;
	}
	.item2{
		height: 40px;width: 100%;
		display: flex;
		border-bottom: solid 1px #ededed;
	}
	.text1{
		padding-left: 20px;
		align-self: center;
	}
</style>


