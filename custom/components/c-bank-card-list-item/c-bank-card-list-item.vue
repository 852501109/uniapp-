<template>
	<view class="bank-card-item-box uni-flex">
		<view class="uni-flex">
			<image :src="cardBankIconSrc"  mode="aspectFit" class="bank-image"></image>
			<view class="bank-content-box">
				<view class="content-top uni-flex">
					<view class="content-top-left">{{cardBankName}}</view>
					<view class="content-top-right">(尾号 {{cardBankLastNumber}})</view>
				</view>
				<view class="content-end">
					{{cardBankInfo}}
				</view>
			</view>
		</view>
		<image :src="icons.RIGHT_ARROWS" mode="aspectFit" class="arrows-image" @tap="toClick()"></image>
	</view>
</template>
<script>
	import { RIGHT_ARROWS } from '@/config/icons.js'
	export default{
		name:'c-bank-card-list-item',
		props:{
			cardBankIconSrc:{
				type:String,
				default:'https://www.youhu.club/images/man/man_002.jpg'
			},
			cardBankName:{
				type:String,
				default:'平安银行'
			},
			cardBankInfo:{
				type:String,
				default:'平安银行信用卡'
			},
			cardBankLastNumber:{
				type:String,
				default:'4646'
			}
		},
		data() {
		  return {
			  test:1,
			  icons:{
				  RIGHT_ARROWS
			  }
		  };
		},
		methods:{
			toClick(){
				
				console.log('点击');
				
				const { test } = this
				
				this.$emit('change', {test});
			}
		}
	}
</script>
<style scoped lang="scss">
	.bank-card-item-box{
		width: 750rpx;
		height: 152rpx;
		background: #FFFFFF;
		justify-content: space-between;
		.bank-image{
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			margin:32rpx;
		}
		.bank-content-box{
			margin-top: 38rpx;
			.content-top{
				width: 302rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				.content-top-left{
					width: auto;
					height:40rpx;
					margin-right:20rpx;
				}
				.content-top-right{
					width: auto;
					height:40rpx
				}
			}
			.content-end{
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #ADADAD;
				line-height: 34rpx;
			}
		}
		.arrows-image{
			width: 48rpx;
			height: 48rpx;
			margin-top: 52rpx;
			margin-right: 32rpx;
		}
		
	}
</style>
