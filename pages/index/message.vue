<template>
	<view class="content">
		<view class="status_bar">			<!--状态栏-->		</view>	
		<view class="head">
			<text>消&nbsp;&nbsp;&nbsp;&nbsp;息</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
