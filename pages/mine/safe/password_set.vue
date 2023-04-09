<template>
	<view>
		<view class="view_1">
			<text class="text_1">原密码</text>
			<input class="input_1" type="password" v-model="password_old">
			<text class="text_1">新密码</text>
			<input class="input_1"type="password" v-model="password_new1">
			<text class="text_1">再次输入新密码</text>
			<input class="input_1" type="password" v-model="password_new2">
			<text v-if="password_new1 !== password_new2" style="color: red;">前后两次密码不一致</text>
			<button class="button_1" @click="setpassword">确定修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{},
				password_old:'',
				password_new1:'',
				password_new2:'',
			}
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userinfo')
			console.log(this.userinfo)
		},
		methods: {
			setpassword(){
				//原密码正确且新密码两次输入一致
				if(this.userinfo.password===this.password_old && this.password_new1 === this.password_new2){
					//将数据写入数据库
					let a =this.password_new1
					this.userinfo.password = a
					let b = this.userinfo
					uni.request({
						url:'http://qiuxiuhaocloud.viphk.91tunnel.com/passwordset',
						data:{password:this.password_new1,
							id:this.userinfo.id},
						success(res) {
							//将数据写入本地
							uni.setStorage({
								key:'userinfo',
								data:b,
								success() {
									uni.redirectTo({
										url:'/pages/mine/safe'
									})
								}
							})
						}
					})
				}
				//原密码错误
				else if(this.userinfo.password!==this.password_old){
					uni.showToast({
						title:'原密码错误',
						icon:'error',
						duration:2000
					})
				}
			}
		}
	}
</script>

<style>
	.view_1{
		margin: 50px;
	}
	.input_1{
		margin-top: 30px;margin-bottom: 30px;border-bottom: solid;
	}
	.text_1{
		font-size: 18px;
	}
	.button_1{
		width: 150px;height: 40px;
		margin-top: 50px;background-color:white
	}
</style>
