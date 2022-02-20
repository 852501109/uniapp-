<template>
	<view class="total-item-box ">
		<view class="total" :class="{totalNumber:type==0,small:type==0,totalNumberSamll:type==1,big:type==1}">
			{{totalNumber}}
		</view>
		<view class="total-info total" :class="{small:type==0,big:type==1}">
			{{totalInfo}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'c-total-list-item',
		props:{
			type:{
				type:Number,
				default:0
			},
			totalNumber:{
				type:String,
				default:'168, 185 .00'
			},
			totalInfo:{
				type:String,
				default:'累计交易量元'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.total-item-box{
	width: atuo;
	height: 64rpx;
	display: flex;
	flex-direction:column;
	align-items: center;
	
	.total{
		width: auto;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		
	}
	.total-number{
		margin-bottom: 8rpx;
	}
	.total-number-samll{
		margin-bottom: 2rpx;
	}
	.small{
		height: 28rpx;
		font-size: 20rpx;
		line-height: 28rpx;
	}
	.big{
		height: 34rpx;
		font-size: 24rpx;
		font-weight: 500;
		line-height: 34rpx;
	}
}
</style>
