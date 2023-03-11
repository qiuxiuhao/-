<template>
	<view>
		<view v-for="record in records" class="view_record">
			<view v-if="record.type === '付款'">
				<view class="item_row">
					<text class="item_text">{{record.info.money}}<text style="font-size: 16px;padding-left: 5px;">元</text> </text>
					<text class="item_text2">付款</text>
				</view>
				<view class="item_row">
					<text class="item_text2">{{record.info.order_type}}-{{record.info.order_id}}</text>
					<text class="item_text2">{{record.info.time}}</text>
				</view>
			</view>
			<view v-if="record.type === '充值'">
				<view class="item_row">
					<text class="item_text">{{record.info.money}}<text style="font-size: 16px;padding-left: 5px;">元</text> </text>
					<text class="item_text2">充值</text>
				</view>
				<view class="item_row">
					<text class="item_text2">{{record.info.pay_way}}</text>
					<text class="item_text2">{{record.info.time}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				records:[
					{	type:'付款',
						info:{
							money:'122',
							time:'2023/2/13-23:31',
							order_id:'123456',
							order_type:'二手'
							}},
					{	type:'充值',
						info:{
							money:'200',
							time:'2023/2/15-23:31',
							pay_way:'支付宝'}},
					{	type:'付款',
						info:{money:'22',
						time:'2023/2/14-23:31',
						order_id:'323456',
						order_type:'代办'}},	
					{	type:'充值',
						info:{
							money:'200',
							time:'2023/2/15-23:31',
							pay_way:'微信'}},
				],
				iuserinfo: {
					id: '10001026',
					phonenumber: '',
					password: '',
					name: '星辰',
					gender: '男',
					school: '中国矿业大学（北京）',
					autograph: '小萌新',
					avatar: '../../../static/touxiantext.png'
				},
			}
		},
		/*onShow() {
			//获取本地存储的用户id
			uni.getStorage({
				key:'userinfo',
				success(res) {
					this.id = res.data
				}
			})
			//向数据请求对应账号的充值记录
			uni.request({
				url:'',
				data:{id:this.userinfo.id},
				success(res) {
					this.records = res.data.records
				}
			})
		},*/
		methods: {
			
		}
	}
</script>

<style>
	.view_record{
		height:100px;
		margin: 10px;
		background-color: #ededed;
		border-radius: 10px;
	}
	.item_row{
		padding: 10px;
		display: flex;
		flex-direction: row;
	}
	.item_text{
		font-size: 24px;
		width: 300px;height: 40px;
	}
	.item_text2{
		font-size: 16px;
		width: 200px;height: 30px;
	}
</style>
