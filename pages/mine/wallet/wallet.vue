<template>
	<view>
		<u-navbar back-icon-color="#FFF" back-text="我的钱包" :back-text-style="color" :is-back="true" :is-fixed="true"
			:background="background" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin:5px 12px 0 0 ">
					<image style="width: 48rpx;height: 48rpx;" src="../../../static/a1111.png" mode="">
					</image>
				</view>
			</view>
		</u-navbar>
		<view class="income">
			<view class="money">累计收入（元）</view>
			<view class="count">168,165.00</view>
		</view>
		<view class="forms">
			<view class="forms_item" @click="goFeeSplitting">
				<view class="left">
					<image src="../../../static/a113.png" mode=""></image>
					<text>分润</text>
				</view>
				<view class="right">
					<text>去提现</text>
					<image src="../../../static/c5.png" mode=""></image>
				</view>
			</view>

			<view class="forms_item" @click="goAward">
				<view class="left">
					<image src="../../../static/a112.png" mode=""></image>
					<text>奖励</text>
				</view>
				<view class="right">
					<text>去提现</text>
					<image src="../../../static/c5.png" mode=""></image>
				</view>
			</view>

			<view class="forms_item" @click="goRedEnvelope">
				<view class="left">
					<image src="../../../static/a111.png" mode=""></image>
					<text>红包</text>
				</view>
				<view class="right">
					<image src="../../../static/c5.png" mode=""></image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
    computed:{
      ...mapGetters(['userInfo', 'token']),
    },
		data() {
			return {
				background: {
					background: '#F98038'
				},
				color: {
					color: "#FFFFFF"
				}
			}
		},
    onLoad () {

    },
		methods: {
s			goAward() {
				uni.navigateTo({
					url: './award'
				})
			},
			goFeeSplitting() {
				uni.navigateTo({
					url: './feeSplitting'
				})
			},
			goRedEnvelope() {
				uni.navigateTo({
					url: './redEnvelope'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.income {
		height: 200rpx;
		// background: linear-gradient(135deg, #F97D35 0%, #FFB660 100%);
		background-color: #f97d35;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #FFFF;

		.money {
			margin-bottom: 8rpx;
			font-size: 28rpx;
		}

		.count {
			font-size: 40rpx;
		}
	}

	.forms {
		padding: 0 32rpx;

		.forms_item {
			height: 128rpx;
			background-color: #FFF;
			border-bottom: 1rpx solid #e9e9e9;

			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				align-items: center;

				image {
					height: 48rpx;
					width: 48rpx;
					margin-right: 48rpx;
				}

				text {
					font-size: 28rpx;
					color: #333;
				}
			}

			.right {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #adadad;

				image {
					height: 48rpx;
					width: 48rpx;
				}
			}

		}
	}
</style>
