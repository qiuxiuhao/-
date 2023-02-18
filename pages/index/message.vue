<template>
	<view>
		
		<view class="status_bar">
			<!--状态栏-->
		</view>
		<view class="head">
			<text>消&nbsp;&nbsp;&nbsp;&nbsp;息</text>
		</view>
		<!--系统通知-->
		<view class="sysmessage" @click="gotosysdetail">
			<img src="" alt="" class="image1">
			<view class="" style="padding-left: 20px;width: 270px;">
				<text class="systext">系统通知</text><br>
				<text>{{sys.lastmessgae}}</text>
			</view>
			<view class="">
				<view class="systext_1">
					<view class="circle" v-if="!sys.readed"></view>
				</view>
				<text style="padding-top: 5px;">{{sys.lasttime}}</text>
			</view>
		</view>
		<!--用户消息-->
		<view v-for="(customer,index) in customers" :key="index">
			<view class="sysmessage" @click="gotodetail(index)">
				<img src="" alt="" class="image1">
				<view class="" style="padding-left: 20px;width: 270px;">
					<text class="systext">{{customer.listenername}}</text><br>
					<text>{{customer.lastmessgae}}</text>
				</view>
				<view class="">
					<view class="systext_1">
						<view class="circle" v-if="!customer.readed"></view>
					</view>
					<text>{{customer.lasttime}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				sys:{
					lastmessgae:'欢迎使用云校园',
					lasttime:'18:10',
					readed:false,
				},
				customers:[
					{
						listenerid:'12345',
						listenername:'星辰',
						lastmessgae:'早上好',
						lasttime:'7:10',
						readed:false,
					},
					{
						listenerid:'12347',
						listenername:'星海',
						lasttime:'22:10',
						lastmessgae:'晚安',
						readed:true,
					},
				]
			}
		},
		onLoad() {
		},
		methods: {
			gotodetail(index){
				uni.navigateTo({
					url:'/pages/messsge_detail/messsge_detail?id=' + this.customers[index].listenerid
				})
				if(!this.customers[index].readed){
					this.customers[index].readed = true
				}
			},
			gotosysdetail(){
				uni.navigateTo({
					url:'/pages/messsge_detail/sys_notice'
				})
				if(!this.sys.readed){
					this.sys.readed = true
				}
			}
		}
	}
</script>
<style>
	.status_bar{
		height: var(--status-bar-height);
	    width: 100%;
		background-color:  #66C3E4;
	}
	.head{
		width: 100%;
		text-align: center;
		font-size: 20px;
		background-color:  #66C3E4;
		padding-bottom: 5px;
		font-family: 'Courier New', Courier, monospace;
	}
	.sysmessage{
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		border-bottom: solid #EDEDED;
		padding:5px;
	}
	.systext{
		font-size: 20px;
	}
	.systext_1{
		height: 30px;
	}
	.circle{
		border-radius: 5px;
		width: 10px;height: 10px;
		background-color: red;
	}
	.image1{
		width: 45px;height: 45px;
	}
</style>