<template>
	<view>
		<!--商品详情-->
		<view class="detailview">
			<text class="nametext">{{good.name}}</text><br>
			<text class="pricetext">￥：{{good.price}}</text><br>
			<text class="timetext">{{good.time}}</text><br>
			<text class="detailtext">{{good.detail}}</text>
		</view>
		<!--联系商家-->
		<view class="contact" @click="talk">
			<image src="../../static/contract.png" class="image3"></image><br>
			<text class="text3">联系卖家</text>
		</view>
		<!--商品结算-->
		<view class="jiesuan">
			<button class="button1">加入收藏</button>
			<button class="button1" @click="gopay">立即接单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'123457',
				good:{
					userid:'123457',
					name:'商品1',
					price:50,
					time:'2022-10-26 18:12:59',
					detail:"vue是一套用于构建用户界面的渐进式框架，使用Vue,可以完全在浏览器渲染页面，服务端只提供数据，可以非常方便的构建单页面应用"
				},
				good_id:'',
				good_type:'代办',
			}
		},
		//接受上一个页面的传参
		onLoad(option) {
			this.good_id = option.id
		},
		//初始化数据
		/*beforeCreate() {
			//从本地获取用户id
			uni.getStorage({
				key:'userinfo_main.id',
				success(res) {
					this.id = res.data
				}
			})
			//向数据库获详情
			uni.request({
				url:'',
				data:{id:this.good_id,type:this.good_type},
				success(res) {
					this.good = res.data.good
				}
			})
		},*/
		methods: {
			//联系
			talk(){
				uni.navigateTo({
					url:'/pages/messsge_detail/messsge_detail?id=' + this.good.userid
				})
			},
			//输入地址支付生成订单
			gopay(){
				if(this.good.userid!== this.id){
					uni.showModal({
						content:'确认接单',
						success:function(res){
							if(res.confirm){
								/*uni.request({
									url:'',
									data:{
										good_id:this.good_id,
									},
									success() {
										uni.showToast({
											title:'确认成功',
											icon:'none'
										})
									}
								})*/
							}
						}
					})
				}
				else{
					uni.showToast({
						title:'无权限',
						icon:'error'
					})
				}
			}
		}
	}
</script>

<style>
	.image1{
		width: 100%;height: 200px;
		border-bottom: solid #ededed 2px;
	}
	.image2{
		width: 100%;height: 200px;
	}
	.detailview{
		padding: 10px;
	}
	.nametext{
		padding-top: 10px;
		font-size: 24px;
	}
	.pricetext{
		padding-top: 10px;
		font-size: 20px;color: red;
	}
	.timetext{
		padding-top: 10px;
		font-size: 12px;
	}
	.detailtext{
		padding-top: 10px;
		font-size: 16px;
	}
	.contact{
		position: absolute;bottom: 102px;left: 0px;
		padding-left: 20px;
		height: 90px;
	}
	.image3{
		height: 40px;width: 40px;
	}
	.jiesuan{
		position: absolute;bottom: 0px;left: 0px;
		padding-top: 20px;
		width: 100%;height: 80px;
		border-top: solid #ededed 2px;
		display: flex;
		flex-direction: row;
	}
	.button1{
		width: 150px;height: 50px;
		background-color: skyblue;color: white;
	}
	.text3{
		font-size: 12px;
	}
</style>

