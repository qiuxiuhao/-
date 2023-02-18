<template>
	<view>
		<view class="main" v-if="type==='二手'||type==='代办'">
			<view class="item">
				<text class="text_1">订单名称</text>
				<text class="text_2">{{order.name}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单类型</text>
				<text class="text_2">{{type}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单状态</text>
				<text class="text_2">{{order.status}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单生成时间</text>
				<text class="text_2">{{order.creatime}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单完成时间</text>
				<text class="text_2">{{order.finishtime}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单编号</text>
				<text class="text_2">{{order_id}}</text>
			</view>
			<view class="item">
				<text class="text_1">发布者</text>
				<text class="text_2">{{order.user_from}}</text>
			</view>
			<view class="item">
				<text class="text_1">发布者手机号</text>
				<text class="text_2">{{order.userphone_from}}</text>
			</view>
			<view class="item">
				<text class="text_1">交易对象</text>
				<text class="text_2">{{order.user_to}}</text>
			</view>
			<view class="item">
				<text class="text_1">交易对象手机号</text>
				<text class="text_2">{{order.userphone_to}}</text>
			</view>
			<view class="item">
				<text class="text_1">交易金额</text>
				<text class="text_2">{{order.pirece}}元</text>
			</view>
			<view class="">
				<text style="font-size: 20px;">评价</text>
				<view v-if=" order.status==='已完成'">
					<view v-if="!order.evaluate.exist" class="release_eva">
						<textarea v-model="evaluate_input" class="release_text" placeholder="请输入评价"></textarea>
						<button class="button1">发布评价</button>
					</view>
					<view v-else-if="order.evaluate.exist" class="text_3">
						<text>{{order.evaluate.content}}</text>
					</view>
				</view>
				<view v-else-if=" order.status!=='已完成'" class="text_3">
					<text style="color: red;">该订单还未完成,不可评价</text>
				</view>
			</view>
		</view>
		<view class="main" v-else>
			<view class="item">
				<text class="text_1">订单名称</text>
				<text class="text_2">{{order.name}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单类型</text>
				<text class="text_2">{{type}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单状态</text>
				<text class="text_2">{{order.status}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单生成时间</text>
				<text class="text_2">{{order.creatime}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单完成时间</text>
				<text class="text_2">{{order.finishtime}}</text>
			</view>
			<view class="item">
				<text class="text_1">订单编号</text>
				<text class="text_2">{{order_id}}</text>
			</view>
			<view class="item">
				<text class="text_1">发布者</text>
				<text class="text_2">{{order.user_from}}</text>
			</view>
			<view class="item">
				<text class="text_1">发布者手机号</text>
				<text class="text_2">{{order.userphone_from}}</text>
			</view>
		</view>
		<view class="buttonview">
			<button v-if="type==='二手'||type==='代办'" class="button1" @click="contract">联系对方</button>
			<button class="button1" @click="detail">查看详情</button>
			<button class="button1" @click="operate(true)">确认完成</button>
			<button class="button1" @click="operate(false)">取消订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'123456',
				type:'二手',
				order_id:'12345567890',
				order:{
					good_id:'123',
					status:'已完成',
					user_from:'星辰',
					userid_from:'123456',
					userphone_from:'18210287051',
					user_to:'星河',
					userid_to:'123457',
					userphone_to:'15717217249',
					name:'物品1',
					creatime:'2022/12/31-22:21:58',
					fishtime:'2022/12/31-22:21:58',
					pirece:15,
					evaluate:{
						exist:false,
						content:'好好好哈哈哈哈哈'
					}
				},
				evaluate_input:''
			}
		},
		//获取上一个页面传参
		onLoad(e) {
			this.order_id = e.id
			this.type = e.type
		},
		/*beforeCreate() {
			//从本地获取用户id
			uni.getStorage({
				key:'userinfo_main.id',
				success(res) {
					this.id = res.data
				}
			})
			//向数据库请求数据
			uni.request({
				url:'',
				data:{
					id:this.order_id,
					type:this.type
				},
				success(res) {
					this.order = res.data.order
				}
			})
		},*/
		methods: {
			contract(){
				if(this.id === this.order.userid_from){
					uni.navigateTo({
						url:'/pages/messsge_detail/messsge_detail?id=' + this.order.userid_to
					})
				}
				else{
					uni.navigateTo({
						url:'/pages/messsge_detail/messsge_detail?id=' + this.order.userid_from
					})
				}
			},
			detail(){
				if(this.type === '二手'){
					uni.navigateTo({
						url:'/pages/detail/shopdetail?id=' + this.order.good_id
					})
				}
				else if(this.type === '代办'){
					uni.navigateTo({
						url:'/pages/detail/rundetail?id=' + this.order.good_id
					})
				}
				else{
					uni.navigateTo({
						url:'/pages/detail/lossdetail?id=' + this.order.good_id
					})
				}
			},
			operate(way){
				//确认完成
				if(way){
					uni.showModal({
						content:'确定完成',
						success(res) {
							if(res.confirm){
								//修改数据库
								/*uni.request({
									url:'',
									success(){
										uni.showToast({
											title:'已完成',
											icon:'none'
										})
									}
								})*/
							}
						}
					})
				}
				//确认取消
				else{
					uni.showModal({
						content:'确认取消',
						success(res) {
							if(res.confirm){
								//修改数据库
								/*uni.request({
									url:'',
									success(){
										uni.showToast({
											title:'已取消',
											icon:'none'
										})
									}
								})*/
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
	.main{
		margin: 30px;
	}
	.item{
		padding-bottom: 5px;padding-top: 5px;
		height: 30px;
		display: flex;
		flex-direction: row;
	}
	.text_1{
		width: 30%;
		font-size: 14px;
	}
	.text_2{
		font-size: 14px;
		width: 70%;
		text-align: right;
	}
	.release_eva{
		display: flex;flex-direction: row;
	}
	.release_text{
		width: 250px;
		padding: 5px;
		font-size: 14px;
		height: 50px;border: solid;border-radius: 5px;
	}
	.text_3{
		padding: 5px;
		font-size: 14px;
		height: 50px;border: solid;border-radius: 5px;
	}
	.buttonview{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.button1{
		margin-top: 10px;background-color: deepskyblue;
		height: 30px;width: 80px;font-size: 12px;
	}
</style>
