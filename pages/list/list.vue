<template>
	<view>
		<view class="serach">
			<input type="text" class="keyinput" placeholder="输入关键词" v-model="keyword">
		</view>
		<view class="list">
			<view class="" v-for="good in goods">
				<view v-if="type==='失物招领'">
					<view class="item" @click="gotodetail(good.type,good.id)">
						<view class="left">
							<img :src="good.avatar" class="imag1">
							<view class="">
								<text class="text1">{{good.name}}</text><br>
								<text class="text2">{{good.date}}</text>
							</view>
						</view>
						<view class="right">
							{{good.type}}
						</view>
					</view>
				</view>
				<view v-if="type==='代办'" class="item" @click="gotodetail(good.type,good.id)">
					<view class="left">
						<img :src="good.avatar" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.date}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}
					</view>
				</view>
				<view v-if="type==='二手'" class="item" @click="gotodetail(good.type,good.id)">
					<view class="left">
						<img :src="good.avatar" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.date}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}
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
				initial_goods:[
					{
						id:'',
						type:'失物',
						name:'失物1',
						time:'2022-11-9 10:10:10'
					},
					{
						id:'',
						type:'二手',
						name:'商品1',
						time:'2022-11-9 10:10:10'
					},
					{
						id:'',
						type:'代办',
						name:'代办名称1',
						time:'2022-11-9 10:10:10'
					},
					{
						id:'',
						type:'招领',
						name:'物品1',
						time:'2022-11-9 10:10:10'
					}
				]
				,type:''
			}
		},
		onLoad(option) {
			this.type = option.type
			console.log(this.type)
		},
		onShow() {
				//从本地获取用户id
				this.userinfo = uni.getStorageSync('userinfo')
				console.log(this.type)
				console.log(this.userinfo.school)
				//向数据库获取收藏数组
				uni.request({
					url:'http://qiuxiuhao.viphk.91tunnel.com/lossinfo',
					data:{type:this.type,school:this.userinfo.school},
					success:res=>{
						this.initial_goods = res.data
						console.log(res.data)
					}
				})
		},
		methods: {
			gotodetail(type,id){
				if(type === '二手'){
					uni.navigateTo({
						url:'/pages/detail/shopdetail?id=' + id
					})
				}else if(type==='代办'){
					uni.navigateTo({
						url:'/pages/detail/rundetail?id=' + id
					})
				}else{
					uni.navigateTo({
						url:'/pages/detail/lossdetail?id=' + id
					})
				}
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
	.serach{
		height: 40px;padding-left: 5%;
		background-color: #66c3E4;display: flex;flex-direction: row;
	}
	.keyinput{
		height: 30px;width: 90%;
		background-color: white;
		border: solid;padding-left: 10px;
		border-radius: 5px;
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
</style>

