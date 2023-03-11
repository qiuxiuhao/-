<template>
	<view>
		<form>
			<!--设置头像-->
			<view class="item">
				<view class="item_1">
					<text>头像</text>
				</view>
				<view class="item_2" @click="setimage">
					<image class="touxian" :src="userinfo.avatar"></image>
				</view>
			</view>
			<!--设置昵称-->
			<view class="item">
				<view class="item_1">
					<text>昵称</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="userinfo.name">
				</view>
			</view>
			<!--选择性别-->
			<view class="item">
				<view class="item_1">
					<text>性别</text>
				</view>
				<view class="item_3">
					<picker mode="selector" :range="gender" @change="setgender">
						<view>{{userinfo.gender}}</view>
					</picker>
				</view>
			</view>
			<!--选择学校-->
			<view class="item">
				<view class="item_1">
					<text>学校</text>
				</view>
				<view class="item_3">
					<picker mode="selector" :range="school" @change="setschool">
						<view>{{userinfo.school}}</view>
					</picker>
				</view>
			</view>
			<!--设置个性签名-->
			<view class="item">
				<view class="item_1">
					<text>个性签名</text>
				</view>
				<view class="item_3">
					<input type="text" v-model="userinfo.autograph">
				</view>
			</view>
			<!--设置个性签名-->
			<view style="text-align: center;">
				<button class="button_1" @click="submitinfo">保存修改</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{
					id:'10001026',
					phonenumber:'',
					password:'',
					name:'星辰',
					gender:'男',
					school:'中国矿业大学（北京）',
					autograph:'小萌新',
					avatar:'../../../static/touxiantext.png'
				},
				gender: ['男', '女'],
				school: ['清华大学', '北京大学', '中国矿业大学（北京）']
			}
		},
		methods: {
			//设置头像
			setimage() {
				//选择相册图片
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original','compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'http://qiuxiuhao.viphk.91tunnel.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								id: this.userinfo.id
							},
							success: (uploadFileRes) => {
								this.userinfo.avatar = uploadFileRes.data
							}
						});
					}
				});
			},
			//选择性别
			setgender(e) {
				this.userinfo.gender = this.gender[e.detail.value]
			},
			//选择学校
			setschool(e) {
				this.userinfo.school = this.school[e.detail.value]
			},
			//提交修改后的信息
			submitinfo() {
				//将数据提交至数据库
				uni.request({
					url:'http://qiuxiuhao.viphk.91tunnel.com/submitinfo',
					data:{
						id:this.userinfo.id,
						name:this.userinfo.name,
						password:this.userinfo.password,
						school:this.userinfo.school,
						phonenumber:this.userinfo.phonenumber,
						gender:this.userinfo.gender,
						autograph:this.userinfo.autograph
					},
					success(res) {
						console.log(res.date)
						//将数据保存到本地
						/*uni.setStorage({
							key:'userinfo',
							data:this.userinfo,
							success() {
								uni.redirectTo({
									url:'/pages/mine/me',
								})
								uni.showToast({
									title: '修改成功',
									duration: 1000,
									icon:'none'
								})
							}
						})*/
					}
				})
			}

		},
		//初始化数据
		onShow() {
			//从数据库获取所有学校的名字
			uni.request({
				url:'http://qiuxiuhao.viphk.91tunnel.com/schoolinfo',
				success(res) {
					this.school = res.data.schoolname
				}
			})
			/*uni.getStorage({
				key:'userinfo',
				success(res) {
					this.userinfo ==  res.data
				}
			})*/
		}
	}
</script>


<style>
	.item {
		height: 60px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: solid 2px #ededed;
	}

	.item_1 {
		height: 24px;
		width: 100px;
		align-self: center;
		padding-left: 10px;
	}

	.item_2 {
		height: 40px;
		width: 100px;
		padding-right: 10px;
		text-align: right;
		align-self: center;
	}

	.item_3 {
		height: 24px;
		width: auto;
		padding-right: 10px;
		text-align: right;
		align-self: center;
		font-weight: 200;
	}

	.touxian {
		height: 40px;
		width: 40px;
	}

	.button_1 {
		width: 150px;
		height: 40px;
		margin-top: 50px;
		background-color: white
	}
</style>
