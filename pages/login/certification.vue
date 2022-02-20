<template>
	<view>
		<view class="forms">
			<view class="items">
				<view class="items_left">
					<text>真实姓名</text>
				</view>
				<view class="items_content">
					<input placeholder="请输入您的姓名" type="text">
				</view>
			</view>

			<view class="items">
				<view class="items_left">
					<text>身份证号</text>
				</view>
				<view class="items_content">
					<input placeholder="请输入身份证号" type="text">
				</view>
			</view>

			<view class="identity">
				身份证正反面照片
			</view>

			<view class="picture">
				<view>
					<image src="../../static/logo.png" mode=""></image>
					<text>点击上传</text>
				</view>
				<view>
					<image src="../../static/logo.png" mode=""></image>
					<text>点击上传</text>
				</view>
			</view>
			<view class="identity">
				手持身份证照片
			</view>

			<view  class="picture">
				<view>
					<image src="../../static/logo.png" mode=""></image>
					<text>点击上传</text>
				</view>
			</view>

			<view class="save_btn" @click="goResults">
				提交审核
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		methods: {
			goResults() {
				uni.navigateTo({
					url: './results',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.forms {
		padding: 40rpx 32rpx 0 32rpx;
		.items {
			height: 80rpx;
			border-bottom: 1rpx solid #e9e9e9;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 40rpx;

			.items_left {
				width: 180rpx;
				font-size: 28rpx;
				color: #333333;
				image {
					width: 100%;
					height: 100%;
				}
			}

			.items_content {
				flex: 1;
				input {

					font-size: 24rpx;
				}
			}

			.items_right {
				display: flex;
				justify-content: flex-end;
				align-items: center;

				image {
					height: 48rpx;
					width: 48rpx;
				}

				text {
					padding:10rpx  14rpx;
					font-size: 20rpx;
					border-radius: 4rpx;
					border: 1rpx solid #333330;
				}

			}

		}

		.identity {
			font-size: 28rpx;
			color: #333333;
			margin-bottom: 40rpx;
		}

		.picture {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			view {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 40rpx;
				image {
					width: 283.68rpx;
					height: 162.11rpx;
					margin-bottom: 40rpx;
				}

				text {
					font-size: 20rpx;
					color: rgba(0, 0, 0, 0.87);
				}
			}
		}

		.save_btn {
			margin-top: 100rpx;
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
