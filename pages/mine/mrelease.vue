<template>
	<view>
		<view class="serach">
			<input type="text" class="keyinput" placeholder="输入关键词" v-model="keyword">
			<button class="button_1" @click="release">新增发布</button>
		</view>
		<view>
			<view class="" v-for="good in goods">		
				<view v-if="good.type==='失物'" class="item" @click="gotodetail(good.order_id,good.type)">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}<br>
						<text v-if="good.status===0" class="text5">未完成</text>
						<text v-else-if="good.status===1" class="text5">已完成</text>
					</view>
				</view>
				<view v-if="good.type==='招领'" class="item" @click="gotodetail(good.order_id,good.type)">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
						<view class="right">
							{{good.type}}<br>
							<text v-if="good.status===0" class="text5">未认领</text>
							<text v-else-if="good.status===1" class="text5">已认领</text>
						</view>
				</view>
				<view v-if="good.type==='代办'" class="item" @click="gotodetail(good.order_id,good.type)">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}<br>
						<text v-if="good.status===0" class="text5">未接取</text>
						<text v-else-if="good.status===1" class="text5">已接取</text>
					</view>
				</view>
				<view v-if="good.type==='二手'" class="item" @click="gotodetail(good.order_id,good.type)">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}<br>
						<text v-if="good.status===0" class="text5">未售出</text>
						<text v-else-if="good.status===1" class="text5">已售出</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				userinfo:{},
				initial_goods:[
					{
						order_id:'2777',
						type:'失物',
						name:'失物1',
						time:'2022-11-9 10:10:10',
						status:'已认领',
					},
					{
						good_id:'1111',
						type:'二手',
						name:'商品1',
						time:'2022-11-9 10:10:10',
						status:0,
					},
					{
						good_id:'111',
						type:'代办',
						name:'代办名称1',
						time:'2022-11-9 10:10:10',
						status:1
					},
					{
						good_id:'11233',
						type:'招领',
						name:'物品1',
						time:'2022-11-9 10:10:10',
						status:'已完成'
					}
				]
			}
		},
		onShow() {
				//从本地获取用户id
				this.userinfo = uni.getStorageSync('userinfo')
				console.log(this.userinfo.id)
				//从数据库获取订单数组
				uni.request({
					url:'http://qiuxiuhao.viphk.91tunnel.com/myrelease',
					data:{id:this.userinfo.id},
					success:res=> {
						this.initial_goods = res.data
					}
				})
		},
		methods: {
			gotodetail(id,type){
				if(type==='失物'||type==='招领'){
					uni.navigateTo({
						url:'/pages/mine/mrelease/release_lossdetail?id = ' + id +'&type=' +  type
					})
				}
				else if(type==='二手'){
					uni.navigateTo({
						url:'/pages/mine/mrelease/release_shopdetail?id = ' + id +'&type=' +  type
					})
				}
				else if(type==='代办'){
					uni.navigateTo({
						url:'/pages/mine/mrelease/release_rundetail?id = ' + id +'&type=' +  type
					})
				}
			},
			release(){
				uni.navigateTo({
					url:'/pages/mine/mrelease/release'
				})
			}
		},
		computed:{
			//条件过滤
			goods(){
				return this.initial_goods.filter((p)=>{
					return  p.name.indexOf(this.keyword) !== -1
                })
			}
		}
	}
</script>

<style>
	.select1{
		width: 75%;color: deepskyblue;
		margin-top: 5px;
		margin-left: 10px;
		display: flex;flex-direction: row;
	}
	.select2{
		width: 25%;color: deepskyblue;
		margin-top: 5px;
		margin-left: 10px;
		display: flex;flex-direction: row;
	}
	.serach{
		height: 40px;padding-left: 5%;
		background-color: #66c3E4;display: flex;flex-direction: row;
	}
	.keyinput{
		height: 30px;width: 65%;
		background-color: white;
		border: solid;padding-left: 10px;
		border-radius: 5px;
	}	
	.button_1{
		height: 30px;width: 25%;font-size: 14px;
		background-color: deepskyblue;
	}
	.item{
		height: 80px;
		border-bottom: solid #ededed;
		padding: 5px;
		display: flex;flex-direction: row;
		justify-content: space-between;
	}
	.left{
		display: flex;flex-direction: row;
	}
	.imag1{
		width: 60px;height: 60px;
	}
	.right{
		height: 60px;width: 50px;color: skyblue;
	}
	.text1{
		padding-left: 10px;
		font-size: 20px;
	}
	.text2{
		padding-left: 10px;
		font-size: 14px;
	}
	.text5{
		color: red;
	}
</style>