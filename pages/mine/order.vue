<template>
	<view>
		<view class="serach">
			<input type="text" class="keyinput" placeholder="输入关键词" v-model="keyword">
			<button class="button_1" @click="release">新增发布</button>
		</view>
		<view style="display: flex;flex-direction: row;">
			<view class="select1">
				<text style="color:black;">来源:</text>
				<picker mode="selector" :range="source" @change="selectscouce">
					<view>{{select.source}}</view>
				</picker>
			</view>
			<view class="select2">
				<text style="color:black;">状态:</text>
				<picker mode="selector" :range="status" @change="selectstatus">
					<view>{{select.status}}</view>
				</picker>
			</view>
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
						{{good.type}}<br><text class="text5">{{good.status}}</text>
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
							{{good.type}}<br><text class="text5">{{good.status}}</text>
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
						{{good.type}}<br><text class="text5">{{good.status}}</text>
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
						{{good.type}}<br><text class="text5">{{good.status}}</text>
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
				source:['全部','我发布的','我接取的'],
				status:['全部','已完成','未完成'],
				select:{
					source:'全部',
					status:'全部'
				},
				userinfo:{},
				initial_goods:[
					{
						good_id:'27',
						order_id:'2777'
						type:'失物',
						name:'失物1',
						time:'2022-11-9 10:10:10',
						status:'已认领',
						release_id:'123456'
					},
					{
						order_id:'2777'
						good_id:'1111',
						type:'二手',
						name:'商品1',
						time:'2022-11-9 10:10:10',
						status:'运输中',
						release_id:'12345'
					},
					{
						order_id:'2777'
						good_id:'111',
						type:'代办',
						release_id:'',
						name:'代办名称1',
						time:'2022-11-9 10:10:10',
						status:'执行中'
					},
					{
						order_id:'2777'
						good_id:'11233',
						release_id:'',
						type:'招领',
						name:'物品1',
						time:'2022-11-9 10:10:10',
						status:'已完成'
					},
					{
						order_id:'2777'
						good_id:'1345',
						release_id:'',
						type:'失物',
						name:'失物2',
						time:'2022-11-9 10:10:10',
						status:'已取消'
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
					url:'',
					data:{id:this.userinfo.id},
					success:res=> {
						this.initial_goods = res.data.goods
					}
				})
		},
		methods: {
			selectscouce(e){
				this.select.source = this.source[e.detail.value]
			},
			selectstatus(e){
				this.select.status = this.status[e.detail.value]
			},
			gotodetail(id,type){
				uni.navigateTo({
					url:'/pages/mine/order/order_detail?id = ' + id +'&type=' +  type
				})
			},
			release(){
				uni.navigateTo({
					url:'/pages/mine/order/release'
				})
			}
		},
		computed:{
			//条件过滤
			goods(){
				return this.initial_goods.filter((p)=>{
					if(this.select.source === '全部'){
						if(this.select.status === '全部'){
							return  p.name.indexOf(this.keyword) !== -1
						}
						else if(this.select.status === '已完成'){
							return  p.name.indexOf(this.keyword) !== -1 && p.status ==='已完成'
						}
						else{
							return  p.name.indexOf(this.keyword) !== -1 && p.status !=='已完成'
						}
					}
					else if(this.select.source === '我发布的'){
						if(this.select.status === '全部'){
							return  p.name.indexOf(this.keyword) !== -1 && p.release_id === this.userinfo.id
						}
						else if(this.select.status === '已完成'){
							return  p.name.indexOf(this.keyword) !== -1 && p.status ==='已完成' 	&& p.release_id ===  this.userinfo.id
						}
						else{
							return  p.name.indexOf(this.keyword) !== -1 && p.status !=='已完成'	&& p.release_id ===  this.userinfo.id
						}
					}
					else{
						if(this.select.status === '全部'){
							return  p.name.indexOf(this.keyword) !== -1 && p.release_id !==  this.userinfo.id
						}
						else if(this.select.status === '已完成'){
							return  p.name.indexOf(this.keyword) !== -1 && p.status ==='已完成' 	&& p.release_id !==  this.userinfo.id
						}
						else{
							return  p.name.indexOf(this.keyword) !== -1 && p.status !=='已完成'	&& p.release_id !==  this.userinfo.id
						}
					}
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
