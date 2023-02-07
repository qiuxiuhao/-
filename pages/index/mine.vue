<template>
	<view class="content">
		<view class="status_bar">			<!--状态栏-->		</view>	
		<view class="head">
			<text>我&nbsp;&nbsp;&nbsp;&nbsp;的</text>
		</view>
		<button @click="chear">清除缓存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chear(){
				uni.clearStorage();
				uni.redirectTo({
					url:'/pages/index/login'
				})
			}
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
