<template>
	<view>
		<view class="item" @click="changesecret">
			<view v-if="pay.no_secret">
				<text>关闭免密支付</text>
			</view>
			<view v-if="!pay.no_secret">
				<text>开启免密支付</text>
			</view>
		</view>
		<view class="item" @click="goto">
			<text>修改支付密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {
					id: '10001026',
					phonenumber: '',
					password: '',
					name: '星辰',
					gender: '男',
					school: '中国矿业大学（北京）',
					autograph: '小萌新',
					avatar: '../../../static/touxiantext.png'
				},
				pay: {
					no_secret:true,
					password:'123456'
				}
			}
		},
		onShow() {
			//获取本地的免密设置
			//this.pay = uni.getStorageSync('pay')
			this.userinfo = uni.getStorageSync('userinfo')
		},
		methods: {
			changesecret() {
				//关闭免密
				if (this.pay.no_secret) {
					this.pay.no_secret  = false;
					let c = this.userinfo.id
					let d = this.pay;
					uni.showModal({
						content: '是否关闭免密支付？',
						success: function(res) {
							if (res.confirm) {
								let b = false
								//将修改交到数据库
								uni.request({
									url: 'http://qiuxiuhaocloud.viphk.91tunnel.com/nopayset',
									data: {
										no_secret: false,
										id: c
									},
									success(res) {
										//将数据写回本地
										console.log(res.data)
										uni.setStorage({
											data: d,
											key: 'pay',
											success() {
												uni.showToast({
													title: '开启成功',
													icon: 'none'
												})
											}
										})
									}
								})
							} 
						}
					})
				}
				//开启免密
				else {
					console.log(this.pay.password);
					let a = this.pay.password ;
					this.pay.no_secret  = true;
					let c = this.userinfo.id
					let d = this.pay;
					console.log(a)
					uni.showModal({
						content: '是否开启免密支付？',
						editable: true,
						placeholderText: '请输入支付免密',
						success: function(res) {
							if (res.confirm) {
								console.log(res.content);
								//支付密码正确
								if (res.content === a) {
									//将修改交到数据库
									uni.request({
										url: 'http://qiuxiuhaocloud.viphk.91tunnel.com/nopayset',
										data: {
											no_secret: true,
											id: c
										},
										success(res) {
											//将数据写回本地
											console.log(res.data)
											uni.setStorage({
												data: d,
												key: 'pay',
												success() {
													uni.showToast({
														title: '开启成功',
														icon: 'none'
													})
												}
											})
										}
									})
								}
								//支付密码错误
								else {
									uni.showToast({
										title: '密码错误',
										icon: 'error'
									})
								}
							} 
						}
					});		
				}
			},
			goto() {
				uni.navigateTo({
					url: '/pages/mine/wallet/pay_password_set'
				})
			},
		}
	}
</script>

<style>
	.item {
		height: 35px;
		padding: 10px;
		border-bottom: solid #ededed;
		font-size: 18px;
	}
</style>
