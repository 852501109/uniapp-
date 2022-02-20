<template>
	<view class="bank_name">
		<image :src="cardAisleIconSrc" mode=""></image>
		<!-- <image src="../../../static/uni.png" mode=""></image> -->
		<text>{{ cardBankInfo }}</text>
	</view>
</template>

<script>
	export default {
		name: 'c-home-aisle-bank-info',
		props: {
			cardAisleIconSrc:{
				type:String,
				default:'../../../static/uni.png'
			},
			cardBankInfo:{
				type:String,
				default:''
			},
		}
	}
</script>

<style lang="scss" scoped>
	.bank_name {
		display: flex;
		align-items: center;
		margin-bottom: 34rpx;
	
		image {
			width: 52rpx;
			height: 52rpx;
			margin-right: 20rpx;
			border-radius: 50%;
		}
	
		text {
			font-size: 24rpx;
			color: #333333;
		}
	}
</style>
