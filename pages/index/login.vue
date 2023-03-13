<template>
	<view>
		<view class="status_bar"><!--状态栏--></view>
		<view class="head">
			<text class="text_1">登录</text>                                                
		</view>
		<view>
			<input class="input_1" type="text" v-model="userinfo1.phonenumber" placeholder="手机号">
			<input class="input_1" type="safe-password" v-model="userinfo1.password" placeholder="密码">
		</view>
		<view class=".read">
			<switch @change="readchange" style="transform: scale(0.5);"/>
			<text>已阅读并同意相关</text><text style="color: blue;border-bottom:solid;" @click="readchange">《用户协议》</text>
		</view>
		<button class="button_1" @click="login">登录</button>
		<view class="register">
			<text @click="register">使用手机验证码登录/注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo1:{
					phonenumber:'',
					password:''
				},
				userinfo:{
					
				},
				read:false,
				contrast:false
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
					uni.request({
					    url: 'http://qiuxiuhao.viphk.91tunnel.com/login', //私人内外网穿透地址
					    data: {
					        phonenumber:this.userinfo1.phonenumber,
							password:this.userinfo1.password
					    },
					    header: {
					        'custom-header': 'hello' //自定义请求头信息
					    },
					    success: (res) => {
							console.log(res.data)
					        this.contrast = res.data.contrast
							this.userinfo = res.data.userinfo
							//密码正确
							if(this.contrast){
								uni.setStorage({
									key: 'pay',
									data: res.data.pay,
								});
								uni.setStorage({
									key: 'userinfo',
									data: res.data.userinfo,
									success: function () {
										//写入成功后进入首页
										uni.switchTab({
											url:"/pages/index/index"
										})
									}
								});
							}
							//密码错误
							if(!this.contrast){
								uni.showToast({
									title: '账号或密码错误',
									icon:'error',
									duration: 2000
								});
							}
					    }
					});
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
			register(){
				uni.navigateTo({
					url:'/pages/index/register'
				})
			}
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
	.button_1{
		margin: 50px;background-color:skyblue;
	}
	.read{
		padding:50px;
	}
	.register{
		margin: 50px;
		text-align: center;
		color: skyblue;
	}
</style>
