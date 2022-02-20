<template>
	<view>
		<!-- 表单 -->
		<view class="forms">
			<u-form ref="uForm" label-width="200rpx">
				<u-form-item label="支付信用卡:">
					<u-input placeholder="交通银行 (尾号8808)" />
					<view class="icon_back" style="color: #3685FF;" >
						<text @click="openEdit(2)" v-if="creditCard && creditCard.length" >更换 &gt;</text>
						<text v-else @click="goAddCard(2)">添加 &gt;</text>
						<!--  当前 进入页面需要判断为添加 还是更换信用卡 -->
					</view>
				</u-form-item>
				<u-form-item label="到账储蓄卡:">
					<u-input placeholder="交通银行 (尾号8808)" />
					<view class="icon_back" style="color: #3685FF;">
						<text @click="openEdit(1)" v-if="depositCard && depositCard.length">更换 &gt;</text>
						<text v-else @click="goAddCard(1)">添加 &gt;</text>
						<!-- <text @click="goAddCashCard">添加 &gt;</text> -->
						
					</view>
				</u-form-item>
			</u-form>

			<view class="pay_pirce">
				<text>支付金额 (元) </text>
				<view>
					<text>￥</text>
					<input placeholder="单笔最低100元, 最高20000元" type="text">
				</view>
			</view>

			<view class="save_btn" @click="openPayShow">立即支付</view>
			<!-- <u-message-input maxlength="4" value="4682"></u-message-input> -->

		</view>

		<view class="dialog" v-show="editShow" @click.self="editShow = false">
			<view class="card">
				<view class="card_title">
					<image :src="icon.close" mode="" @click="editShow = false"></image>
					<view>{{ bankTitle }}</view>
					<text @click="goAddCard">添加</text>
				</view>
				<view class="bank_list">
					<image src="../../static/logo.png" mode=""></image>
					<view class="bank_name">
						<text class="name">平安银行 （尾号 4646）</text>
						<text class="remark">平安银行信用卡</text>
					</view>
				</view>
				<view class="bank_list">
					<image src="../../static/logo.png" mode=""></image>
					<view class="bank_name">
						<text class="name">平安银行 （尾号 4646）</text>
						<text class="remark">平安银行信用卡</text>
					</view>
				</view>
			</view>
		</view>


		<view class="aisle_dialog" v-show="aisleShow" @click.self="closeShow">
			<view class="card" v-show="aislePayShow">
				<view class="title">
					<text>支付确认</text>
					<image @click="closeShow" :src="icon.close" mode=""></image>
				</view>
				
				<c-home-aisle-info-list></c-home-aisle-info-list>
				
				<view class="footer">
					<view @click="goChangeAisle">更换通道</view>
					<view @click="openVerifyShow"
						style="color: #3685FF; font-weight: 550; border-left: 1rpx solid #e9e9e9;">确定支付</view>
				</view>
			</view>


			<view class="verify_card" v-show="verifyShow">
				<image @click="closeShow" :src="icon.close" mode=""></image>
				<view class="header_title">
					<view>输入短信验证码</view>
					<text>短信验证码已发送至133****7890</text>
				</view>
				<view class="verify">
					<u-message-input :breathe="true" mode="bottomLine"></u-message-input>
				</view>
				<view class="sure_pay" @click="goPaySure">确认支付</view>
			</view>

		</view>



	</view>
</template>

<script>
	import { QR_CODE, CLOSE }  from '@/config/icons'
	import {
		Request
	} from '@/utils';
	import api from '@/config/api';
	export default {
		data() {
			return {
				editShow: false,
				aisleShow: false,
				aislePayShow: false,
				verifyShow: false,
				configure: {
					title: '快捷支付',
					subTitle: '交易记录',
					subTitleUrl: './tradingRecord'
				},
				icon: {
					qrCode: QR_CODE,
					close: CLOSE
				},
				//  银行卡列表数据
				bankList: [
					{ id: 0, imgSrc: '', title: '平安银行（尾号4407）', type: '平安银行信用卡' },
					{ id: 0, imgSrc: '', title: '平安银行（尾号4407）', type: '平安银行信用卡' },
					{ id: 0, imgSrc: '', title: '平安银行（尾号4407）', type: '平安银行信用卡' },
				],
				bankTitle: '支付信用卡'		,// 到账储蓄卡
				activeBankType: 1			,// 2 信用卡 1 储蓄卡
				token: "74aa4c3b-0914-4b2d-9b2a-4ffa2e0cc140",
				depositCard: [],			// 储蓄卡
				creditCard: [],				// 信用卡
			}
		},
		onLoad() {
			// this.login();
			
		},
		onShow() {
			this.getBankList(1)
			this.getBankList(2)
		},
		methods: {
			login() {
				Request(
						api.login, {
							//请求类型 get||post
							method: 'post',
							//传参
							data: {
								mobile: '13612345663',
								password: '111111'
							},
							//是否显示加载
							showLoading: false,
						})
					.then(res => {
						console.log(res);
					})
			},
			getBankList(type) {
				Request(
						api.myBankList, {
							//请求类型 get||post
							method: 'post',
							//传参
							data: {
								card_type: type,
								token: '74aa4c3b-0914-4b2d-9b2a-4ffa2e0cc140'
							},
							//是否显示加载
							showLoading: false,
						})
					.then(res => {
						if(res.code == 0 && !res.data.length) {
							if(type == 1) {
								this.depositCard = [];
							} else {
								this.creditCard = [];
							}
						} else {
							if(type == 1) {
								this.depositCard = res.data;
							} else {
								this.creditCard = res.data;
							}
							
						}
					})
			},
			openEdit(type) {
				this.bankTitle = type == 1 ? '到账储蓄卡' : '支付信用卡'
				this.editShow = true
				this.activeBankType = type;
			},
			closeShow() {
				this.aisleShow = false;
				this.aislePayShow = false;
				this.verifyShow = false;
			},
			openPayShow() {
				this.aisleShow = true;
				this.aislePayShow = true;
				this.verifyShow = false;
			},
			openVerifyShow() {
				this.aisleShow = true;
				this.verifyShow = true;
				this.aislePayShow = false;
			},
			goAddCashCard() {
				uni.navigateTo({
					url: './addCashCard'
				})
			},
			goPaySure() {
				this.aisleShow = false;
				this.aislePayShow = false;
				this.verifyShow = false;
				uni.navigateTo({
					url: './paymentTrue'
				})
			},
			goAddCard(type) {		// 跳转到添加银行卡
				if(type) {
					let url = type == 1 ? './addCashCard' : './addCreditCard'
					uni.navigateTo({
						url 
					})
				} 
				else {
					let url = this.activeBankType == 2 ? './addCreditCard' : './addCashCard'
					uni.navigateTo({
						url 
					})
				} 
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF !important;
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
			background: #FFFFFF;
			border-radius: 12rpx;
			display: flex;
			flex-direction: column;
			padding: 0 26rpx;

			.title {
				height: 122rpx;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1rpx solid #e9e9e9;
				margin-bottom: 32rpx;

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

			// .content {
			// 	flex: 1;
			// 	display: flex;
			// 	flex-direction: column;
			// 	justify-content: center;
			// 	padding: 0 26rpx;

			// 	.bank_name {
			// 		display: flex;
			// 		align-items: center;
			// 		margin-bottom: 34rpx;

			// 		image {
			// 			width: 52rpx;
			// 			height: 52rpx;
			// 			margin-right: 20rpx;
			// 			border-radius: 50%;
			// 		}

			// 		text {
			// 			font-size: 24rpx;
			// 			color: #333333;
			// 		}
			// 	}

			// 	.bank_info {
			// 		display: flex;
			// 		justify-content: space-between;

			// 		.bank_info_left {
			// 			width: 60%;
			// 		}

			// 		.bank_info_item_right {
			// 			padding: 0 0 0 20rpx;
			// 			width: 40%;
			// 		}

			// 		>view {

			// 			.bank_info_item {
			// 				font-size: 20rpx;
			// 				color: #333330;
			// 				display: flex;
			// 				margin: 8rpx 0;

			// 				.label {
			// 					margin-right: 15rpx;
			// 					flex-shrink: 0;
			// 				}

			// 				.info {}

			// 			}
			// 		}

			// 	}



			// }

			.footer {
				margin-top: 32rpx;
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
