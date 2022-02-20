<template>
	<view class="c-home-aisle-info-list">
		<c-home-aisle-bank-info :cardAisleIconSrc="cardAisleIconSrc" :cardBankInfo="cardBankInfo"></c-home-aisle-bank-info>
		<view class="bank_info">
			<view class="bank_info_left" v-for="(item) in ailseData" :key="item.id">
				<view class="bank_info_item">
					<view class="label">{{ item.label }}</view>
					<view class="info" :class="{ active_color: item.colorActive }">{{ item.value }}</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import { CLOSE } from '@/config/icons.js'
	export default {
		name: 'c-home-aisle-info-list',
		props:{
			cardAisleIconSrc:{
				type:String,
				default:'https://img2.baidu.com/it/u=3681880960,455182084&fm=26&fmt=auto&gp=0.jpg'
			},
			cardBankInfo:{
				type:String,
				default:'平安银行 (尾号2223)'
			},
		},
		data() {
			return {
				ailseData: [
					{ id:0, label: '单笔限额:', value: '100-20000元', colorActive: false},
					{ id:1, label: '单日限额:', value: '5000', colorActive: false},
					{ id:2, label: '交易时间:', value: '07:00:00 - 23:50:00', colorActive: false},
					{ id:3, label: '交易费率:', value: '0.48%+2.00元', colorActive: false},
					{ id:4, label: '单笔限额:', value: '100-20000元(红包抵扣0.48元)', colorActive: false},
					{ id:5, label: '实际到账:', value: '98.00元', colorActive: true },
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active_color {
		color: #FD3F11;
	}
	.c-home-aisle-info-list {
		display: flex;
		flex-direction: column;
		justify-content: center;


		.bank_info {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.bank_info_left {
				width: 50%;
				padding: 0 0 0 10rpx;
			}
			

			>view {

				.bank_info_item {
					font-size: 20rpx;
					color: #333330;
					display: flex;

					.label {
						margin-right: 5rpx;
						flex-shrink: 0;
					}

					.info {
					}

				}
			}

		}



	}
</style>
