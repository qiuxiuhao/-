<template>
	<view>
		<view style="margin:50px ;">
			<text class="text_1">充值金额</text>
			<view class="money">
				<input class="input_1" type="number" v-model="money"><text style="font-size: 30px;margin-top: 20px;">元</text>
			</view>
			<view style="height: 50px;"></view>
			<text class="text_1">支付方式</text>
			<view class="view_1">
				<button class="button_1">支付宝</button>
				<button class="button_1">微信</button>
			</view>
			<!--不可用提醒-->
			<text style="color: red;">充值功能暂时不可用</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				money:''
			}
		},
		//获取初始数据
		/*beforeCreate() {
			//获取本地存储的用户id
			uni.getStorage({
				key:'userinfo_main',
				success(res) {
					this.id = res.data.id
				}
			})
		},*/
		methods: {
			
		}
	}
</script>

<style>
	.input_1{
		width: 200px;
		margin-top: 30px;margin-bottom: 30px;border-bottom: solid;
		color: red;font-size: 30px;
	}
	.text_1{
		font-size: 18px;
	}
	.money{
		display: flex;
		flex-direction: row;
	}
	.button_1{
		width: 150px;height: 40px;
		margin-top: 50px;background-color:white
	}
	.view_1{
		display: flex;
		flex-direction: row-reverse;
	}
</style>
