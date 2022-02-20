<template>
	<view>
		<u-navbar back-icon-color="#FFF" back-text="红包" :back-text-style="color" :is-back="true" :is-fixed="true"
			:background="background" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin-right: 32rpx; color: #FFF;" @click="goInstructions">
					<text>使用说明</text>
				</view>
			</view>
		</u-navbar>

		<view class="income">
			<view class="income_top">
				<view class="income-top-left">
					<text style="margin-bottom: 4rpx; font-size: 24rpx;">可提现余额（元）</text>
					<text style="font-size: 32rpx;">68,185.00</text>
				</view>
				<view class="income-top-right">
					<view>去折扣</view>
				</view>
			</view>
		</view>

		<view class="forms">
			<view class="forms_items">
				<view>
					2021年5月
				</view>
				<view>
					全部
				</view>
			</view>
			<c-reward-sharing-list v-bind:formsItem="formsItem"></c-reward-sharing-list>
       <uni-load-more v-if="isLoading" :iconSize="24" status="loading" iconType="circle"></uni-load-more>
		</view>


		<!-- <view class="instructions">
			<view class="card">
				<view class="title"></view>
				<view class="content"></view>
				<view class="footer"></view>
			</view>
		</view> -->

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
    // 下拉加载
    onReachBottom(){
      this.isLoading = true
      setTimeout (res => {
        this.isLoading = false
      }, 1500)
    },
		data() {
			return {
        isLoading: false,
				background: {
					background: '#F98038'
				},
				color: {
					color: "#FFFFFF"
				},
        sss: {
          page: 0,
          type: 3,
          start_time: '',
          end_time: ''
        },
				formsItem:[
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					},
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					},
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					},
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					},
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					},
					{
						type: '交易分润-单笔分润',
						time: '2020-06-21 20:21:34',
						count: '100.00',
						status: '支出'
					}
				]
			}
		},
    onLoad () {
      this.getIncomeList()
    },
		methods: {
      getIncomeList() {
        let obj = this.incomeParams
        obj.token = 'dfe0d851-919b-4db0-9dbe-4ea91419d95a'
        Request(
          api.incomeList, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: obj,
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
            console.log(res)
        })
      },
			goInstructions() {
				uni.showModal({
				title: '使用说明',
				content:  '1.红包可用于抵扣交易手续费， 无有效期限制。\n 2.如红包有余额， 在交易时， 默认先使用红包抵扣交易手续费。\n 3.红包抵扣规则: 单笔交易满1000元可使用， 抵扣比例为交易额的万分之0.5',
				showCancel: false,
				confirmText: '知道了',
				align: 'left',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.income {
		height: 138rpx;
		// background: linear-gradient(135deg, #F97D35 0%, #FFB660 100%);
		background-color: #f97d35;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20rpx 32rpx;
		border-radius: 0rpx 0 16rpx 16rpx;
		>view {
			width: 100%;
			height: 50%;
		}
		.income_top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.income-top-left {
				display: flex;
				flex-direction: column;
				color: #FFF;
				font-size: 24rpx;
			}
			.income-top-right {
				width: 120rpx;
				height: 48rpx;
				background: #FFFFFF;
				border-radius: 4rpx;
				opacity: 0.9;
				font-size: 24rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #F98038;
				margin-bottom: 20rpx;
			}
		}

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

	.instructions {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.4);
		display: flex;
		justify-content: center;
		align-items: center;
		.card {
			width: 500rpx;
			height: 320rpx;
			background-color: #FFF;
			border-radius: 20rpx;
			display: flex;
			flex-direction: column;
			.title {

			}
			.content {

			}
			.footer {

			}
		}
	}

</style>
