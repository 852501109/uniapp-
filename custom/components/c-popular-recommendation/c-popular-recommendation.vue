<template>
	<view class="recommendation">
		<view class="headline">{{left}}</view>
		<view class="more" @click="toMore">更多</view>
	</view>
</template>

<script>
	export default {
		name: 'c-popular-recommendation',
		data() {
			return {

			}
		},
		props: {
			left: {
				type: String,
				default: ''
			},
			url: {
				type: String,
				default: ''
			}
		},
		methods: {
			toMore() {
				uni.navigateTo({
					url: this.url
				})
			}
		}
	}
</script>

<style lang="scss">
	.recommendation {
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		height: 80rpx;
		.headline {
			font-size: 35rpx;
			font-weight: bold;
		}
		.more {
			margin-top: 14rpx;
			font-size: 20rpx;
		}
	}
	
</style>
