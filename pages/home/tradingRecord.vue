<template>
	<view>
		<view class="forms">
			<view class="forms_items">
				<view>
					2021年5月
				</view>
				<view>
					全部
				</view>
			</view>
			<view class="forms_item" v-for="(i, n) in list" :key="n" @click="goDealInfo">
				<view class="name_time">
					<text style="color: #333330; margin-bottom: 8rpx;">{{i.desc}}</text>
					<text style="color: #adadad; letter-spacing: 2rpx;">{{i.time}}</text>
				</view>
				<view class="account_status">
					<view class="account_price">
						<view style="color: #333330; margin-bottom: 8rpx;">{{i.count}}</view>
						<view>{{i.status}}</view>
					</view>
					<image src="../../static/c5.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				list: [
					{desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
					{desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'},
          {desc: '交易分润-单笔分润', time: '2020-06-21 20:21:34', count: '100.00', status: '已到账'}
				]
			}
		},
		methods: {
			goDealInfo(n) {
        let item = this.list[n]
				uni.navigateTo({
					 url: `./dealInfo?item=${JSON.stringify(item)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.forms {
		padding: 0 32rpx;
		.forms_items {
			height: 112rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #adadad;
			padding:  0 32rpx;
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

	}
</style>
