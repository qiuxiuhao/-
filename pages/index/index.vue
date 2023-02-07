<template>
	<view class="content">
		<view class="status_bar">			<!--状态栏-->		</view>	
		<view class="head">
			<text>首&nbsp;&nbsp;&nbsp;&nbsp;页</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				text:''
			}
		},
		onLoad() {

		},
		methods: {				
		},
		beforeCreate() {
			uni.getStorage({
				key: 'userinfo',
				sucess: function (res) {
					console.log('成功')
				},
				fail() {
					uni.redirectTo({
						url: './login'
					});
				}
			});
		}
	}
</script>

<style>
	.status_bar{
		height: var(--status-bar-height);
	    width: 100%;
		background-color: #66C3E4;
	}
	.head{
		width: 100%;
		text-align: center;
		font-size: 20px;
		background-color:  #66C3E4;
		padding-bottom: 5px;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
