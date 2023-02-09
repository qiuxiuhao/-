<template>
	<view>
		<view class="serach">
			<input type="text" class="keyinput" placeholder="输入关键词" placeholder-class="keyinput2" v-model="keyword">
			<button class="serachbutton">搜索</button>
		</view>
		<view class="">
			<button style="background-color: skyblue;" @click="gotonew">新增发布</button>
		</view>
		<view class="list">
			<view class="" v-for="good in goods">
				<view v-if="good.type==='失物'" class="item" @click="gotolossdetail">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}
					</view>
				</view>
				<view v-if="good.type==='招领'" class="item" @click="gotolossdetail">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}
					</view>
				</view>
				<view v-if="good.type==='代办'" class="item" @click="gotorundetail">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
						</view>
					</view>
					<view class="right">
						{{good.type}}
					</view>
				</view>
				<view v-if="good.type==='二手'" class="item" @click="gotoshopdetail">
					<view class="left">
						<img src="" class="imag1">
						<view class="">
							<text class="text1">{{good.name}}</text><br>
							<text class="text2">{{good.time}}</text>
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
				goods:[
					{
						type:'失物',
						name:'失物1',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'二手',
						name:'商品1',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'代办',
						name:'代办名称1',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'招领',
						name:'物品1',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'失物',
						name:'失物2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'二手',
						name:'商品2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'代办',
						name:'代办名称2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'招领',
						name:'物品2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'二手',
						name:'商品2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'代办',
						name:'代办名称2',
						time:'2022-11-9 10:10:10'
					},
					{
						type:'招领',
						name:'物品2',
						time:'2022-11-9 10:10:10'
					},
				]
			}
		},
		methods: {
			gotoshopdetail(){
				uni.navigateTo({
					url:"/pages/shop/shopdetail"
				})
			},
			gotolossdetail(){
				uni.navigateTo({
					url:"/pages/loss/lossdetail"
				})
			},
			gotorundetail(){
				uni.navigateTo({
					url:"/pages/run/rundetail"
				})
			},
			gotonew(){
				uni.navigateTo({
					url:'/pages/mine/new'
				})
			}
		}
	}
</script>

<style>
	.serach{
		height: 30px;
		background-color: #66c3E4;
		display: flex;flex-direction: row;
		border-bottom: solid #ededed 2px;
	}
	.keyinput{
		border: solid;
		border-radius: 5px;
		height: 20px;width: 80%;
		background-color: white;
		padding-left: 10px;
	}
	.serachbutton{
		padding-left: 5px;
		width: 15%;
		height: 25px;
		font-size: 12px;
		background-color: skyblue;
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
