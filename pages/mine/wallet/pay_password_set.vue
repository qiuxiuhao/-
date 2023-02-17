<template>
	<view class="view_1">
		<view style="display: flex;flex-direction: row;margin-bottom: 20px;">
			<text class="text_1">绑定的手机号:</text><text>{{phonenumber}}</text>
		</view>
		<text class="text_1">验证码</text>
		<view class="cap">
			<input class="input_2"type="number" v-model="captch">
			<button class="button_cap" @click="getcaptch" :style="{color:color}">{{msg}}</button>
		</view>
		<text class="text_1">新支付密码</text>
		<input class="input_1"type="password" v-model="payword_new1">
		<text class="text_1">再次输入新支付密码</text>
		<input class="input_1" type="password" v-model="payword_new2">
		<text v-if="payword_new1 !== payword_new2" style="color: red;">前后两次密码不一致</text>
		<button class="button_1" @click="setphonenumber">确定修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'获取验证码',
				color:'black',
				timer:'',
				time:60,
				phonenumber:'13429867890',
				captch:'',
				captch_2:'',
				payword_new1:'',
				payword_new2:'',
			}
		},
		methods: {
			//获取验证码
			getcaptch(){
				if(this.msg==='获取验证码'){
					//按钮样式改变
					this.timer = setInterval(() => {
						if(this.time > 0){
							this.time = this.time - 1
							this.msg = this.time + 's重新验证码'
							this.color = '#ededed'
						}
						else{
							this.time = 60
							this.msg='获取验证码'
							this.color = 'black'
							clearInterval(this.timer)
						}
					}, 1000);
					console.log('获取验证码')
				}
			},
			//提交手机号修改
			setphonenumber(){
				//验证码正确
				/*if( this.payword_new1 === this.payword_new2 &&this.captch === this.captch_2){
					//将数据写入数据库
					uni.request({
						url:'',
						data:{payword:this.payword_new1},
						success(res) {
							//将数据写入本地
							uni.setStorage({
								key:'pay.payword',
								data:this.payword_new1
								success() {
									uni.redirectTo({
										url:'/pages/mine/wallet/pay_set'
									})
								}
							})
						}
					})
				}
				//验证码错误
				else{
					uni.showToast({
						title:'验证码错误',
						icon:'error'
						duration:2000
					})
				}
				*/
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
	.input_2{
		width: 300px;
		margin-top: 30px;margin-bottom: 30px;border-bottom: solid;
	}
	.text_1{
		font-size: 18px;
	}
	.button_1{
		width: 150px;height: 40px;
		margin-top: 50px;background-color:white
	}
	.button_cap{
		margin-top: 10px;
		width: 150px;height: 40px;background-color:skyblue;
		font-size: 16px;
	}
	.cap{
		display: flex;
		flex-direction: row;
	}
</style>
