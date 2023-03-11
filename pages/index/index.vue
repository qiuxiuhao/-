<template>
	<view class="content">
		<view class="status_bar">
			<!--状态栏-->
		</view>
		<view class="head">
			<text>首&nbsp;&nbsp;&nbsp;&nbsp;页</text>
		</view>
		<view class="meau">
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/ershou.png" @click="gotolist('二手')">
			</image>
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/run.png" @click="gotolist('代办')">
			</image>
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/lose.png" @click="gotolist('失物招领')">
			</image>
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/car.png"></image>
		</view>
		<view class="meau">
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/shop.png" />
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/study.png" />
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/print.png" />
			<image class="icon1" style="-webkit-flex: 1;flex: 1;" src="../../static/tieba.png" />
		</view>
		<button @click="test">setinfo(测试按钮)</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				text: ''
			}
		},
		methods: {
			gotolist(type) {
				uni.navigateTo({
					url: '/pages/list/list?type=' + type
				})
			},
			test() {
				uni.navigateTo({
					url: '/pages/index/userinfo_set'
				})
			},

		},
		beforeCreate() {
			uni.getStorage({
				key: 'userinfo',
				sucess: function(res) {
					console.log('成功')
				},
				fail() {
					uni.redirectTo({
						url: './login'
					});
				}
			});
		},
		onShow() {
			console.log('hh')
		}
		
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #66C3E4;
	}

	.head {
		width: 100%;
		text-align: center;
		font-size: 20px;
		background-color: #66C3E4;
		padding-bottom: 5px;
		font-family: 'Courier New', Courier, monospace;
	}

	.icon1 {
		width: 80px;
		height: 80px;
	}

	.meau {
		margin-top: 2px;
		height: 100px;
		background-color: white;
		flex-direction: row;
		display: flex;
	}
</style>
