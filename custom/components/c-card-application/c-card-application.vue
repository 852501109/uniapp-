<template>
	<view class="bank_list">
		<image src="../../../static/logo.png" mode=""></image>
		<view class="bank_name">
			<text class="name">招商银行</text>
			<text class="remark">急速审批, 额度高</text>
			<view v-if="!isDetail" :class="{apply_for: num !== 1, hight_light: num === 1}">
				立即申请
			</view>
			<view v-else class="apply_for">
				立即申请
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'c-card-application',
		components: {},
		props: {
			num: {
				type: Number,
				default: 1
			},
			isDetail: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.bank_list {
		display: flex;
		align-items: center;
		margin-bottom: 24rpx;

		image {
			width: 188rpx;
			height: 116rpx;
			margin-right: 20rpx;
		}

		.bank_name {
			display: flex;
			flex: 1;
			position: relative;
			flex-direction: column;
			justify-content: space-around;

			.remark {
				font-size: 24rpx;
				color: #a8a8a8;
			}

			.name {
				font-size: 28rpx;
				color: #333;
				font-weight: 550;
				margin-bottom: 10rpx;
			}

			.apply_for {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				right: 0;
				font-size: 24rpx;
				padding: 8rpx 24rpx;
				color: #F98038;
				border: 1rpx solid #F98038;
			}

			.hight_light {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				right: 0;
				font-size: 24rpx;
				padding: 8rpx 24rpx;
				background: #F98038;
				color: #fff;
				border: 1rpx solid #F98038;
			}
		}
	}
</style>
