<template>
	<view>
		<view class="item">
			<text class="mon1">余额:</text><br>
			<text class="mon2">{{balance}}</text>
		</view>
		<view class="item2" @click="goto('recharge')">
			<text class="text1">前往充值</text>
		</view>
		<view class="item2" @click="goto('record')">
			<text class="text1">交易记录</text>
		</view>
		<view class="item2" @click="goto('pay_set')">
			<text class="text1">支付设置</text>
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
				balance:'190.01'		
			}
		},
		/*onShow() {
			//获取本地存储的用户id
			uni.getStorage({
				key:'userinfo',
				success(res) {
					this.userinfo = res.data
				}
			})
			//向数据库获取余额
			uni.request({
				url:'',
				data:{id:this.id},
				success(res) {
					this.balance = res.data.balance
				}
			})
		},*/
		methods: {
			//前往指定页面
			goto(where){
				uni.navigateTo({
					url:'/pages/mine/wallet/' + where
				})
			}
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


