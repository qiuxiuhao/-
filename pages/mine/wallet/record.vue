<template>
	<view>
		<view v-for="record in records" class="view_record">
			<view v-if="record.type === '付款'">
				<text>付款</text>
			</view>
			<view v-if="record.type === '充值'">
				<text>充值</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				records:[
					{	type:'付款',
						info:{
							money:'122',
							time:'2023/2/13-23:31',
							order_id:'123456',
							order_type:'二手'
							}},
					{	type:'充值',
						info:{
							money:'200',
							time:'2023/2/15-23:31',
							pay_way:'支付宝'}},
					{	type:'付款',
						info:{money:'22',
						time:'2023/2/14-23:31',
						order_id:'323456',
						order_type:'代办'}},	
					{	type:'充值',
						info:{
							money:'200',
							time:'2023/2/15-23:31',
							pay_way:'微信'}},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.view_record{
		height:100px;
		border-bottom:solid;
	}
</style>
