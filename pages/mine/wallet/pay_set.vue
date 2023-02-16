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
				pay:{
					no_secret:false,
					payword:'123456'
				}
			}
		},
		beforeCreate() {
			//获取本地的免密设置
			uni.getStorage({
				key:'pay',
				success(res) {
					this.pay = res.data
				}
			})
		},
		methods: {
			changesecret(){
				//关闭免密
				/*if(this.no_secret){
					uni.showModal({
						content: '是否关闭免密支付？',
						success: function (res) {
							if (res.confirm) {
								this.pay.no_secret = false
								//将修改交到数据库
								uni.request({
									url:'',
									data:{no_secret:this.pay.no_secret},
									success() {
										//将数据写回本地
										uni.setStorage({
											data:this.pay,
											key:'pay',
											success() {
												uni.showToast({
													title:'关闭成功',
													icon:'none'
												})
											}
										})
									}
								})
							} else if (res.cancel) {
								uni.navigateBack()
							}
						}
					});
				}
				//开启免密
				else{
					if(this.no_secret){
						uni.showModal({
							content: '是否开启免密支付？',
							editable:true,
							placeholderText:'请输入支付免密',
							success: function (res) {
								if (res.confirm) {
									//支付密码正确
									if(res.content === this.pay.payword){
										this.pay.no_secret = true
										//将修改交到数据库
										uni.request({
											url:'',
											data:{no_secret:this.pay.no_secret},
											success() {
												//将数据写回本地
												uni.setStorage({
													data:this.pay,
													key:'pay',
													success() {
														uni.showToast({
															title:'开启成功',
															icon:'none'
														})
													}
												})
											}
										})
									}
									//支付密码错误
									else{
										uni.showToast({
											title:'密码错误',
											icon:'error'
										})
									}
								} else if (res.cancel) {
									uni.navigateBack()
								}
							}
						});
				}*/
			},
			goto(){
				uni.navigateTo({
					url:'/pages/mine/wallet/pay_password_set'
				})
			}
		}
	}
</script>

<style>
	.item{
		height: 35px;
		padding: 10px;
		border-bottom:solid #ededed;
		font-size: 18px;
	}
</style>
