<template>
	<view>
		<u-navbar title-color="#333" back-text="支付结果" :is-back="true" :is-fixed="true" :border-bottom="false">
		</u-navbar>
		
		<view class="pay_status">
			<image src="/static/uni.png" mode=""></image>
			<view>支付成功</view>
			<text>￥1,000.00</text>
		</view>
		
		<view class="pay_info">
			<text>恭喜您，以成功过升级合伙人<br/>即将享受合伙人权益</text>
		</view>
		<view class="wire"></view>
		
		<view class="footer">
			<view class="back_home">
				联系客服
			</view>
			<view class="check_order">
				重新支付
			</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style scoped lang="scss">
	page {
		background-color: #FFF!important;
	}
	.pay_status {
		padding: 102rpx 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 80rpx;
		image {
			height: 212rpx;
			width: 212rpx;
			border-radius: 50%;
			margin-bottom: 12rpx;
		}
		view {
			font-size: 28rpx;
			font-weight: 400;
			color: #333330;
			margin-bottom: 20rpx;
		}
		text {
			font-size: 32rpx;
			font-weight: 500;
			color: #333330;
		}
	}
	
	.pay_info {
		width: 70%;
		margin: 0 auto;
		text-align: center;
		font-size: 28rpx;
		font-weight: 400;
		color: #ADADAD;
		padding: 12rpx 32rpx 12rpx 32rpx;
	}
	
	.wire {
		margin-top: 60rpx;
		height: 1rpx;
		background-color: #E9E9E9;
		
	}
	
	.footer {
		margin-top: 120rpx;
		display: flex;
		justify-content: space-around;
		margin-bottom: 96rpx;
		view {
			width: 280rpx;
			height: 96rpx;
			font-size: 28rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.back_home {
			border-radius: 8rpx;
			color: #F98038;
			border: 2rpx solid #F98038;
		}
		.check_order {
			background: #F98038;
			border-radius: 8rpx;
			color: #FFF;
			
		}
	}
</style>
