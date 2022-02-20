<template>
	<view>
		<u-navbar title-color="#333" back-text="申请提现" :is-back="true" :is-fixed="true" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin-right: 32rpx;" @click="withdrawalTip">
					<text>提现规则</text>
				</view>
			</view>
		</u-navbar>

		<view class="forms">
			<u-form ref="uForm" label-width="200rpx">
				<u-form-item label="到账储蓄卡:">
					<u-input placeholder="交通银行 (尾号8808)" />
					<view class="icon_back" style="color: #3685FF;">
						<!-- <text>更换 &gt;</text> -->
						<text @click="goAddCreditCard">更换 &gt;</text>
					</view>
				</u-form-item>
			</u-form>

			<view class="pay_pirce">
				<text>支付金额 (元) </text>
				<view>
					<text>￥</text>
					<input placeholder="单笔提现金额10.00起, 手续费2.00元/笔" type="text">
				</view>
			</view>
			
			<view class="balance">余额：682.00</view> 
			
			<view class="save_btn">申请提现</view>
			<!-- <u-message-input maxlength="4" value="4682"></u-message-input> -->

		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				editShow: false,
				
			}
		},
		methods: {
			withdrawalTip () {
				uni.showModal({
					title: '单笔提现最低金额10.00元，单笔提现扣除提现手续费2元/笔',
					confirmText: '我知道了',
					showCancel: false,
					success: function (res) {
					}
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
		box-sizing: border-box;
	}

	.pay_pirce {
		height: 254rpx;
		border-bottom: 1px solid #E9E9E9;
		padding: 40rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		>text {
			font-size: 28rpx;
			color: #333;
			font-weight: 550;
		}

		view {
			display: flex;
			align-items: center;

			text {
				font-size: 48rpx;
				color: #333;
				font-weight: 550;
				margin-right: 20rpx;
			}

			input {
				flex: 1;
				color: #ADADAD;
			}
		}
	}
	
	.balance {
		font-size: 20rpx;
		color: #adadad;
		margin: 10rpx 0;
	}

	.save_btn {
		margin-top: 120rpx;
		height: 96rpx;
		background: #F98038;
		border-radius: 8rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFF;
		font-size: 28rpx;
	}

	.dialog {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		z-index: 10;

		.card {
			width: 100%;
			height: 728rpx;
			background: #FFFFFF;
			border-radius: 20rpx 20rpx 0px 0px;
			padding: 0 32rpx;

			.card_title {
				height: 130rpx;
				border-bottom: 1rpx solid #e9e9e9;

				display: flex;
				justify-content: space-between;
				align-items: center;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				view {
					font-size: 32rpx;
					font-weight: 550;
					color: #333333;
				}

				text {
					font-size: 28rpx;
					color: #333333;
				}
			}

			.bank_list {
				height: 130rpx;
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #e9e9e9;

				image {
					width: 88rpx;
					height: 88rpx;
					margin-right: 20rpx;
					border-radius: 50%;
				}

				.bank_name {
					display: flex;
					flex: 1;
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


				}
			}
		}
	}

	.aisle_dialog {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		padding: 0 34rpx;

		.card {
			width: 100%;
			height: 600rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			display: flex;
			flex-direction: column;

			.title {
				height: 122rpx;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1rpx solid #e9e9e9;

				text {
					font-size: 32rpx;
					font-weight: 600;
					color: rgba(0, 0, 0, 0.87);
				}

				image {
					width: 48rpx;
					height: 48rpx;
					position: absolute;
					left: 32rpx;
				}

			}

			.content {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 0 26rpx;

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
							margin: 8rpx 0;

							.label {
								margin-right: 15rpx;
								flex-shrink: 0;
							}

							.info {}

						}
					}

				}



			}

			.footer {
				height: 96rpx;
				flex-shrink: 0;
				display: flex;
				justify-content: space-between;
				border-top: 1rpx solid #e9e9e9;

				view {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
				}
			}


		}

		.verify_card {
			width: 550rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			position: relative;
			padding: 20rpx 42rpx;

			>image {
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				width: 48rpx;
				height: 48rpx;
			}

			.header_title {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 56rpx;

				view {
					margin-top: 40rpx;
					font-size: 32rpx;
					font-weight: 550;
					color: #333330;
					margin-bottom: 20rpx;
				}

				text {
					font-size: 20rpx;
					font-weight: 400;
					color: #ADADAD;
				}
			}

			.verify {
				margin-bottom: 66rpx;
			}
			
			.sure_pay {
				height: 88rpx;
				background: #F98038;
				border-radius: 16rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			
		}


	}
</style>
