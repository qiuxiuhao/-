<template>
	<view>
		<view class="main">
			<view class="item">
				<text class="notice">您是新用户,请先完善信息!</text>
			</view>
			<view class="item">
				<view class="item_2">
					<text>昵称</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="userinfo.name" placeholder="请设置昵称">
				</view>
			</view>
			<!--选择性别-->
			<view class="item">
				<view class="item_2">
					<text>性别</text>
				</view>
				<view class="item_3">
					<picker mode="selector" :range="gender" @change="setgender">
						<view>{{userinfo.gender}}</view>
					</picker>
				</view>
			</view>
			<!--选择学校-->
			<view class="item">
				<view class="item_2">
					<text>学校</text>
				</view>
				<view class="item_3">
					<picker mode="selector" :range="school" @change="setschool">
						<view>{{userinfo.school}}</view>
					</picker>
				</view>
			</view>
			<!--设置登录密码-->
			<view class="item">
				<view class="item_2">
					<text>登录密码</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="password" placeholder="请设置登录密码">
				</view>
			</view>
			<view class="item">
				<view class="item_2">
					<text>登录密码</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="password2" placeholder="请再次输入登录密码">
				</view>
			</view>
			<text v-if="password !== password2" class="notice">前后两次密码不一致</text>
			<!--设置支付密码-->
			<view class="item">
				<view class="item_2">
					<text>支付密码</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="pay_password" placeholder="请设置支付密码">
				</view>
			</view>
			<view class="item">
				<view class="item_2">
					<text>支付密码</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="pay_password2" placeholder="请再次输入支付密码">
				</view>
			</view>
			<text v-if="pay_password !== pay_password2" class="notice">前后两次密码不一致</text>
			<view class="button_view">
				<button class="button_1" @click="submitinfo">确认提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password:'',
				password2:'',
				pay_password:'',
				pay_password2:'',
				school:['清华大学','北京大学','中国矿业大学（北京）'],
				gender:['男','女'],
				userinfo_main:{
					id:'',
					phonenumber:'',
					password:''
				},
				userinfo:{
					name:'',
					gender:'男',
					school:'请选择学校',
					autograph:'小萌新',
				},
				pay:{
					no_secret:false,
					payword:''
				},
				adequate:false
			}
		},
		onLoad(e){
			this.userinfo_main.phonenumber = e.phonenumber
		},
		methods: {
			//选择性别
			setgender(e){
				this.userinfo.gender = this.gender[e.detail.value]
			},
			//选择学校
			setschool(e){
				this.userinfo.school = this.school[e.detail.value]
			},
			//保证密码一致性
			affirm(){
				if(this.password===this.password2){
					this.userinfo_main.password = this.password
				}
				if(this.pay_password === this.pay_password2){
					this.pay.payword = this.pay_password
				}
			},
			//确定所有的信息不空
			confirm(){
				if(this.userinfo !== null && this.userinfo_main.password !== null && this.userinfo_main.phonenumber !== null &&this.pay !== null && this.userinfo.school !== '请选择学校')
				{
					this.adequate = true
				}
			},
			//提交信息
			submitinfo(){
				this.affirm()
				this.confirm()
				if(this.adequate){
					/*uni.request({
						url:'',
						data:{
							userinfo_main:this.userinfo_main,
							userinfo:this.userinfo,
							pay:this.pay
						},
						success(res) {
							uni.setStorage({
								data:this.pay,
								key:'pay'
							})
							uni.setStorage({
								data:this.userinfo,
								key:'userinfo'
							})
							uni.setStorage({
								data:this.userinfo_main,
								key:'userinfo_main',
								success(){
									uni.redirectTo({
										url:'/pages/index/index'
									})
								}
							})
						}
					})*/
				}
				else{
					uni.showToast({
						title:'信息不完整',
						icon:'error'
					})
				}
			}
		}
	}
</script>

<style>
	.main{
		margin: 40px;
	}
	.notice{
		color: red;
	}
	.item{
		padding-bottom: 5px;padding-top: 5px;
		height: 30px;
		display: flex;
		flex-direction: row;
		border-bottom: solid;border-bottom-color: #ededed
	}
	.item_2{
		width: 50%;
		font-size: 14px;
	}
	.item_3{
		font-size: 14px;
		width: 50%;
		text-align: right;
	}
	.button_1{
		width: 150px;
		font-size: 14px;
		height: 30px;background-color: deepskyblue;
	}
	.button_view{
		margin-top: 20px;
		text-align: center;
	}
</style>
