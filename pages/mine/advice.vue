<template>
	<view>
		<view class="view1">
			<textarea class="text1" name="advice" id="" cols="30" rows="10" placeholder="请输入您的意见"></textarea>
		</view>
		<view class="view1">
			<button class="button1" @click="putup">提交</button>
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
			putup(){
				uni.showToast({
					title:'提交成功',
				})
			}
		}
	}
</script>

<style>
	.view1{
		display: flex;
		justify-content: space-around;
	}
	.text1{
		margin-top: 10px;margin-bottom: 10px;
		padding: 10px;
		width: 80%;
		height: 200px;
		border-radius: 10px;
		border: solid 1px;
		
	}
	.button1{
		height: 50px;width: 100px;
		background-color: skyblue;
	}
</style>
