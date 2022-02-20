<template>
	<view>
		<u-navbar title="分享" title-color="#333" :is-back="false" :is-fixed="true" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin-right: 32rpx;">
					<navigator url="./ruleDescription" hover-class="navigator-hover"> 规则说明 </navigator>
				</view>
			</view>
		</u-navbar>
		
		<view class="card_wrapper">
			<view class="card">
				<view class="title">
					邀请好友得现金
				</view>
				<view class="card_main">
					<view class="users">
						<image src="../../static/logo.png" mode=""></image>
						<view>
							<text style="font-size: 24; color: #ccc; font-weight: 550;">陈平安</text>
							<text style="font-size: 20rpx; color: #333330;">
								邀请码： 12344567
							</text>	
						</view>
					</view>
					<view class="qrcode">
						<image src="../../static/logo.png" mode=""></image>
						<text>长按二维码保存图片到相册</text>
					</view>
					
					
					
				</view>
			</view>
			
			<view class="save_btn">添加</view>
			
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

<style lang="scss" scoped>
	page {
		background-color: #EDEDED;
	}
	
	.card_wrapper {
		// background: #EDEDED;
		padding: 0 32rpx;
		box-sizing: border-box;
		padding-top: 126rpx;
		.card {
			height: 784rpx;
			background-color: #FFF;
			border-radius: 16rpx;
			display: flex;
			flex-direction: column;
			.title {
				height: 126rpx;
				font-size: 32rpx;
				font-weight: 550;
				color: #000000;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1rpx solid #e9e9e9;
			}
			
			.card_main {
				flex: 1;
				padding: 40rpx 58rpx;
				display: flex;
				flex-direction: column;
				.users {
					height: 96rpx;
					display: flex;
					margin-bottom: 60rpx;
					image {
						width: 96rpx;
						height: 96rpx;
						margin-right: 16rpx;
					}
					view {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
					}
					
				}
				.qrcode {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						height: 335rpx;
						width: 335rpx;
						margin-bottom: 26rpx;
					}
					text {
						font-size: 24rpx;
						color: #000000;
					}
					
				}
			}
			
		}
		.save_btn {
			margin-top: 80rpx;
			height: 96rpx;
			background: #F98038;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFF;
			font-size: 28rpx;
		}
	}
</style>
