<template>
	<view>
		<u-navbar title-color="#333" back-text="通道选择" :is-back="true" :is-fixed="true" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin-right: 32rpx;">
					<text>交易记录</text>
				</view>
			</view>
		</u-navbar>
		
		<view class="content">
			<c-home-aisle-info-list></c-home-aisle-info-list>
		</view>
		
		<view class="content">
			<c-home-aisle-info-list></c-home-aisle-info-list>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30rpx 26rpx;
		border-bottom: 1rpx solid #e9e9e9;
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
		
		.bank_info {
			display: flex;
			justify-content: space-between;
			.bank_info_left {
				width: 60%;
			}
			.bank_info_item_right {
				padding: 0 0 0 20rpx;
				width: 40%;
			}
			>view {
				
				.bank_info_item {
					font-size: 20rpx;
					color: #333330;
					display: flex;
					margin-bottom: 8rpx;
					.label {
						margin-right: 15rpx;
						flex-shrink: 0;
					}
					
					.info {
					}
					
				}
			}
			
		}
		
		
		
	}
</style>
