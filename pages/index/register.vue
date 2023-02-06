<template>
	<view>
		<view class="status_bar"><!--状态栏--></view>
		<view class="head">
			<text class="text_1">登录</text>                                                
		</view>
		<view>
			<input class="input_1" type="text" v-model="phonenumber" placeholder="手机号">
			<view class="cap">
				<input class="input_2" type="safe-password" v-model="captcha" placeholder="验证码">
				<button v-if="!got" class="button_2" @click="getcap">获取验证码</button>
				<button v-if="got" class="button_3">{{time}}秒重新获取</button>
			</view>
		</view>
		<view class=".read">
			<switch @change="readchange" style="transform: scale(0.5);"/>
			<text>已阅读并同意相关</text><text style="color: blue;border-bottom:solid;" @click="readchange">《用户协议》</text>
			<text>,（未注册手机号首次登录自动注册）</text>
		</view>
		<button class="button_1" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phonenumber:'',
				captcha:'',
				read:false,
				got:false,
				time:60
			}
		},
		methods: {
			readchange(e){
				this.read = e.detail.value
			},
			readaggre(){
			},
			login(){
				//已勾选协议
				if(this.read){
				//验证码核对
					uni.redirectTo({
						url:'/pages/index/index'
					})
				}
				//未勾选协议
				if(!this.read){
					uni.showToast({
						title: '请勾选用户协议',
						icon:'none',
						duration: 2000
					});
				}
			},
		}
	}
</script>

<style>
	.status_bar{
		height: var(--status-bar-height);
	    width: 100%;
	}
	.head{
		margin: 40px;
		font-size: 36px;
		text-align: center;
	}
	.input_1{
		height: 30px;
		margin: 30px;
		padding-left: 10px;
		border-bottom: solid;
	}
	.input_2{
		width: 300px;
		height: 30px;
		margin-top: 30px;margin-bottom: 30px;margin-left: 30px;
		padding-left: 10px;
		border-bottom: solid;
	}
	.button_1{
		margin: 50px;background-color:skyblue;
	}
	.button_2{
		width: 150px;
		margin-top: 30px;margin-bottom: 30px;
		background-color:skyblue;
	}
	.read{
		padding:50px;
	}
	.cap{
		display: flex;
		flex-direction: row
	}
</style>
