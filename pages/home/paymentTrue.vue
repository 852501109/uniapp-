<template>
	<view>
		<view class="pay_status">
			<image src="../../static/uni.png" mode=""></image>
			<view>{{ payInfo.payType }}</view>
			<text>{{ payInfo.price }}</text>
		</view>
		
		<view class="pay_info">
			<text>订单编号</text>
			<text>{{ payInfo.orderId }}</text>
		</view> 
		
		<view class="pay_info">
			<text>交易时间</text>
			<text>{{ payInfo.payTime }}</text>
		</view>
		
		<view class="wire"></view>
		
		<view class="footer">
			<view class="back_home">
				返回首页
			</view>
			<view class="check_order">
				查看订单
			</view>
		</view>
		
		<view class="award">
			<text style="font-size: 20rpx; color: #333333;">本次支付获得</text>
			<image src="../../static/uni.png" mode=""></image>
			<view>10元红包</view>
			<text style="font-size: 20rpx; color: #adadad;">可用于抵扣交易手续费</text>
		</view>
		
		
	</view>
</template>

<script>
	import { QR_CODE, CLOSE }  from '@/config/icons'
	
	export default {
		data() {
			return {
				icons: {
					payTrue: '',
					payFalse: ''
				},
				payInfo: {
					status: 0,
					payType: '支付成功',
					orderId: '1231312313131',
					payTime: '2020-07-06 12:12:43',
					price: '1,000.00'
				}
			}
		},
		methods: {
			
		}
		
		
	}
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
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	
	.award {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 0 80rpx 0;
		image {
			width: 140rpx;
			height: 160rpx;
		}
		view {
			font-size: 24rpx;
			font-weight: 400;
			color: #FC5830;
		}
	}
	
</style>
