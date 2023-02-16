<template>
	<view>
		<view class="">
			<text>类别：</text>
		</view>
		<view>
			<radio-group class="typeradio" @change="radioChange">
				<label class="item1" v-for="(item,index) in typeitems" :key="item.value">
					<view style="display: flex; flex-direction: row;">
						<radio :value="item.type" :checked="index === current" /><view>{{item.type}}</view>
					</view>
				</label>
			</radio-group>
		</view>
		<view class="" v-if="this.typeitems[current].type ==='失物'">
			<view class="">
				<image src="" mode="" class="image1"></image>
			</view>
			<text>物品名称：</text>
			<input class="input1" type="text" placeholder="输入物品名称" placeholder-class="text1" v-model="good.name">
			<text>丢失地点：</text>
			<input class="input1" type="text" placeholder="输入丢失地点" placeholder-class="text1" v-model="good.address">
			<text>详情：</text>
			<textarea class="text2" name="" id="" cols="30" rows="10" placeholder="请输入详情" v-model="good.detail">
			</textarea>
		</view>
		<view class="" v-if="this.typeitems[current].type ==='招领'">
			<view class="">
				<image src="" mode="" class="image1"></image>
			</view>
			<text>物品名称：</text>
			<input class="input1" type="text" placeholder="输入物品名称" placeholder-class="text1" v-model="good.name">
			<text>拾取地点：</text>
			<input class="input1" type="text" placeholder="输入拾取地点" placeholder-class="text1" v-model="good.address">
			<text>详情：</text>
			<textarea class="text2" name="" id="" cols="30" rows="10" placeholder="请输入详情" v-model="good.detail"></textarea>
		</view>
		
		<view class="" v-if="this.typeitems[current].type ==='代办'">
			<text>代办名称：</text>
			<input class="input1" type="text" placeholder="输入物品名称" placeholder-class="text1" v-model="good.name">
			<text>佣金：</text>
			<input class="input1" type="text" placeholder="输入佣金金额" placeholder-class="text1" v-model="good.money">
			<text>详情：</text>
			<textarea class="text2" name="" id="" cols="30" rows="10" placeholder="请输入详情" v-model="good.detail"></textarea>
		</view>
		<view class="" v-if="this.typeitems[current].type ==='二手'">
			<view class="">
				<image src="" mode="" class="image1"></image>
			</view>
			<text>商品名称：</text>
			<input class="input1" type="text" placeholder="输入商品名称" placeholder-class="text1" v-model="good.name">
			<text>售价：</text>
			<input class="input1" type="text" placeholder="输入售价金额" placeholder-class="text1" v-model="good.money">
			<text>详情：</text>
			<textarea class="text2" name="" id="" cols="30" rows="10" placeholder="请输入详情" v-model="good.detail"></textarea>
		</view>
		<view class="buttonview" @click="release">
			<button class="button1">确认发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				typeitems:[
					{type:'失物',
					 checked:'true'},
					{type:'招领'},
					{type:'二手'},
					{type:'代办'},
				],
				current: 0,
				good:{
					type:'',
					image:'',
					name:'',
					address:'',
					money:'',
					detail:''
				}
			}
		},
		/*beforeCreate() {
			//从本地获取用户id
			uni.getStorage({
				key:'userinfo_main.id',
				success(res) {
					this.id = res.data
				}
			})
		},*/
		methods: {
			radioChange: function(evt) {
			            for (let i = 0; i < this.typeitems.length; i++) {
			                if (this.typeitems[i].type === evt.detail.value) {
			                    this.current = i;
								this.good.type = this.typeitems[this.current]
			                    break;
			                }
			            }
			},
			release(){
				uni.showModal({
					content:'确认发布',
				    success:function(res){
				    	if(res.confirm){
							//将数据交至数据库
							/*uni.request({
								url:'',
								data:{	id:this.id,
										good:this.good},
								success() {
									uni.showToast({
										title:'发布成功',
										icon:'none'
									})
									uni.redirectTo({
										url:'/pages/mine/order'
									})
								}
							})*/
						}else if(res.cancel){
							uni.redirectTo({
								url:'/pages/mine/order'
							})
						}
				    }
				})
			}
		}
	}
</script>

<style>
	.typeradio{
		padding: 5px;
		width: 100%;height: 40px;border-bottom: solid #ededed;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.item{
		width: 50px;
	}
	.image1{
		margin: 10px;
		width: 100px;height: 100px;border: solid #ededed;
	}
	.input1{
		width: 200px;height: 35px;
		margin: 5px;border: solid black;padding: 2px;
		border-radius: 5px;
	}
	.text2{
		height: 100px;
		margin: 5px;border: solid black;padding: 2px;
		border-radius: 5px;
	}
	.buttonview{
		margin: 10px;
		width: 100%;
	}
	.button1{
		width: 150px;height: 40px;background-color: skyblue;
	}
</style>
