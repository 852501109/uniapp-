<template>
	<view class="">
		<view class="content">
			<view class="results">
				<image src="../../static/logo.png" mode=""></image>
				<text>认证成功</text>
				<view>恭喜你完成身份认证</view>
			</view>
			
			
			<view class="save_btn" @click="goHome">
				进入首页
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goHome() {
				uni.switchTab({
					url: '../home/home'
				})
			}
		}
	}
	
	
</script>

<style lang="scss" scoped>
	.content {
		padding: 102rpx 32rpx 0 32rpx;
		
		.results {
			display: flex;
			flex-direction: column;
			align-items: center;
			image {
				height: 212rpx;
				width: 212rpx;
				border-radius: 50%;
				margin-bottom: 20rpx;
			}
			text {
				font-size: 28rpx;
				margin-bottom: 20rpx;
				color: #333330;
			}
			view {
				font-size: 32rpx;
				color: #333330;
				font-weight: 550;
			}
		}
		
		.save_btn {
			margin-top: 200rpx;
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
