<template>
	<view>
		<view class="forms_item" v-for="(i, n) in formsItem" :key="n">
			<view class="name_time">
				<text style="color: #333330; margin-bottom: 8rpx;">{{i.type}}</text>
				<text style="color: #adadad; letter-spacing: 2rpx;">{{i.name}}</text>
			</view>
			<view class="account_status">
				<view class="account_price">
					<view style="color: #333330; margin-bottom: 8rpx;">{{i.count}}</view>
					<view>{{i.status}}</view>
				</view>
				<image src="../../../static/c5.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		    formsItem: {
				type: Array,
				default: {}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.forms_items {
		height: 112rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #adadad;
		border-bottom: 1rpx solid #e9e9e9;
	}

	.forms_item {
		height: 130rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #e9e9e9;
		font-size: 24rpx;

		.name_time {
			display: flex;
			flex-direction: column;
			flex: 1;

		}

		.account_status {
			display: flex;
			align-items: center;

			.account_price {
				color: #ADADAD;
			}

			image {
				width: 48rpx;
				height: 48rpx;
			}
		}
	}
</style>
