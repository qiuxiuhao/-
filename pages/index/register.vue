<template>
	<view>
		<view class="status_bar">
			<!--状态栏-->
		</view>
		<view class="head">
			<text class="text_1">登录</text>
		</view>
		<view>
			<input class="input_1" type="text" v-model="phonenumber" placeholder="手机号">
			<view class="cap">
				<input class="input_2" type="safe-password" v-model="captcha" placeholder="验证码">
				<button class="button_cap" @click="getcaptch" :style="{color:color}">{{msg}}</button>
			</view>
		</view>
		<view class=".read">
			<switch @change="readchange" style="transform: scale(0.5);" />
			<text>已阅读并同意相关</text><text style="color: blue;border-bottom:solid;" @click="readagree">《用户协议》</text>
			<text>,（未注册手机号首次登录自动注册）</text>
		</view>
		<button class="button_1" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phonenumber: '',
				captcha: '',
				captcha2: '',
				read: false,
				msg: '获取验证码',
				color: 'black',
				timer: '',
				time: 60,
			}
		},
		methods: {
			readchange(e) {
				this.read = e.detail.value
			},
			readaggre() {},
			//获取验证码
			getcaptch() {
				if (this.msg === '获取验证码') {
					//按钮样式改变
					this.timer = setInterval(() => {
						if (this.time > 0) {
							this.time = this.time - 1
							this.msg = this.time + 's重新验证码'
							this.color = '#ededed'
						} else {
							this.time = 60
							this.msg = '获取验证码'
							this.color = 'black'
							clearInterval(this.timer)
						}
					}, 1000);
					this.getcap()
				}
			},
			//获取验证码
			getcap() {
				//向后端获取验证码
				uni.request({
					url: 'http://qiuxiuhao.viphk.91tunnel.com/captcha', //私人内外网穿透地址
					data: {
						phonenumber: this.phonenumber,
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						this.captcha2 = res.data.captcha
					}
				})
			},
			//登录or注册
			login() {
				//已勾选协议
				if (this.read) {
					//验证码正确
					if (this.captcha === this.captcha2 && this.captcha !== null) {
						uni.request({
							url: 'http://qiuxiuhao.viphk.91tunnel.com/register', //仅为示例，并非真实接口地址。
							data: {
								phonenumber: this.phonenumber
							},
							header: {
								'custom-header': 'hello' //自定义请求头信息
							},
							success: (res) => {
								//如果是老用户
								if (res.data.userinfo !== null) {
									//将用户信息写入本地
									uni.setStorage({
										key: 'userinfo_main',
										data: res.data.userinfo_main,
									});
									uni.setStorage({
										key: 'pay',
										data: res.data.pay,
									});
									uni.setStorage({
										key: 'userinfo',
										data: res.data.userinfo,
										success: function() {
											//写入成功后进入首页
											uni.switchTab({
												url: "/pages/index/index"
											})
										}
									});
								}
								//新用户进入用户信息设置页面设置
								else {
									uni.redirectTo({
										url: '/pages/index/userinfo_set?phonenumber=' + this
											.phonenumber
									})
								}
							}
						});

					}
					//验证码错误
					else {
						uni.showToast({
							title: '验证码错误',
							icon: 'error',
							duration: 2000
						});
					}
				}
				//未勾选协议
				if (!this.read) {
					uni.showToast({
						title: '请勾选用户协议',
						icon: 'none',
						duration: 2000
					});
				}
			}
		}
	}
	
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.head {
		margin: 40px;
		font-size: 36px;
		text-align: center;
	}

	.input_1 {
		height: 30px;
		margin: 30px;
		padding-left: 10px;
		border-bottom: solid;
	}

	.input_2 {
		width: 200px;
		height: 30px;
		margin-top: 30px;
		margin-bottom: 30px;
		margin-left: 30px;
		padding-left: 10px;
		border-bottom: solid;
	}

	.button_1 {
		margin: 50px;
		background-color: skyblue;
	}

	.button_2 {
		width: 150px;
		margin-top: 30px;
		margin-bottom: 30px;
		background-color: skyblue;
	}

	.read {
		padding: 50px;
	}

	.cap {
		display: flex;
		flex-direction: row
	}
</style>
