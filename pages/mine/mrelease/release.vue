<template>
	<view>
		<view class="">
			<text>类别：</text>
		</view>
		<view>
			<radio-group class="typeradio" @change="radioChange">
				<label class="item1" v-for="(item,index) in typeitems" :key="item.value">
					<view style="display: flex; flex-direction: row;">
						<radio :value="item.type" /><view>{{item.type}}</view>
					</view>
				</label>
			</radio-group>
		</view>
		<view class="" v-if="this.typeitems[current].type ==='失物'">
			<view class="">
				<image :src="good.avatar" class="image1" @click="setimage"></image>
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
				<image src="" mode="" class="image1" @click="setimage"></image>
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
				<image src="" mode="" class="image1" @click="setimage"></image>
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
				userinfo:{},
				typeitems:[
					{type:'失物',
					 //checked:'true',
					 },
					{type:'招领'},
					{type:'二手'},
					{type:'代办'},
				],
				current: 0,
				good:{
					type:'',
					avatar:'',
					name:'',
					address:'',
					money:'',
					detail:''
				}
			}
		},
		onShow() {
				//从本地获取用户id
				this.userinfo = uni.getStorageSync('userinfo')
				console.log(this.userinfo)
		},
		methods: {
			radioChange(evt) {
			            for (let i = 0; i < this.typeitems.length; i++) {
			                if (this.typeitems[i].type === evt.detail.value) {
			                    this.current = i;
								if(this.current===0)
									this.good.type = "失物"
								else if(this.current===1)
									this.good.type = "招领"
								else if(this.current===2)
									this.good.type = "二手"
								else if(this.current===3)
									this.good.type = "代办"
									//this.good.type =this.typeitems[i]
								console.log(this.current)
								console.log(this.good.type)
			                    break;
			                }
			            }
			},
			setimage() {
				//选择相册图片
				let a =this.userinfo.id
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res=>{
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.cloudproject.top/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								id: a,
							},
							success: uploadFileRes=>{
								this.good.avatar = uploadFileRes.data
								console.log(this.good.avatar)
							}
						});
					}
				});
			},
			release(){
				let a =this.userinfo.id
				console.log(this.userinfo.id)
				uni.showModal({
					content:'确认发布',
				    success:res=>{
				    	if(res.confirm){
							//将数据交至数据库
							if(this.good.type==="失物"||this.good.type==="招领"){
								uni.request({
									url:'http://qiuxiuhao.viphk.91tunnel.com/create_loss',
									data:{	id:this.userinfo.id,
											type:this.good.type,
											name:this.good.name,
											address:this.good.address,
											detail:this.good.detail,
											school:this.userinfo.school,
											avatar:this.good.avatar
											},
									success() {
										uni.showToast({
											title:'发布成功',
											icon:'none'
										})
										uni.redirectTo({
											url:'/pages/mine/order'
										})
									}
								})
							}
							else if(this.good.type==="二手"){
								uni.request({
									url:'http://qiuxiuhao.viphk.91tunnel.com/create_commodity',
									data:{	id:this.userinfo.id,
											//type:this.good.type,
											name:this.good.name,
											price:this.good.money,
											detail:this.good.detail,
											school:this.userinfo.school,
											avatar:this.good.avatar
											},
									success() {
										uni.showToast({
											title:'发布成功',
											icon:'none'
										})
										uni.redirectTo({
											url:'/pages/mine/order'
										})
									}
								})
							}
							else if(this.good.type==="代办"){
								uni.request({
									url:'http://qiuxiuhao.viphk.91tunnel.com/create_commission',
									data:{	id:this.userinfo.id,
											//type:this.good.type,
											name:this.good.name,
											price:this.good.money,
											//address:this.good.address,
											detail:this.good.detail,
											school:this.userinfo.school,
											//avatar:this.good.avatar
											},
									success:res=>{
										console.log(res.data)
										if(res.data.f==="false"){
											uni.showToast({
												title:'发布失物，余额不足',
												icon:'none'
											})
										}
										if(res.data.f==="true"){
											uni.showToast({
												title:'发布成功',
												icon:'none'
											})
										}
										//uni.redirectTo({
										//	url:'/pages/mine/order'
										//})
									}
								})
							}
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
