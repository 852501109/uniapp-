<template>
	<view class="bank-info-item-box uni-flex">
		<view class="bank-info-item-left">
			{{leftItem}}
		</view>
		<view class="bank-info-item-right" :class="{nouse:!isActive,use:isActive}">
			<input  type="text" v-model="formValue" :disabled="!isActive"  value="" :placeholder="info"  class="font" />
		</view>
		
	</view>
</template>
<script>
	export default {
		name:'c-bank-info-list-item',
		props:
		{
			info:{
				type:String,
				default:'提示'
			},
			isActive:{
				type:Boolean,
				default:true
			},
			itemKey:{
				type:Number,
				default:0
			},
			leftItem:{
				type:String,
				default:'持卡人'
			},
			rightItem:{
				type:String,
				default:'张三'
			}
		},
		watch:{
			formValue()
			{
				
				const data = {key:this.itemKey,value:this.formValue}
				
				this.$emit('input',{data:data})
			}
		},
		data() {
			return {
				formValue:this.rightItem
			};
		},
		mounted()
		{
			
		},
		
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
.bank-info-item-box{
	width: 750rpx;
	height: 128rpx;
	background: #FFFFFF;
	justify-content: space-between;
	
	.bank-info-item-left{
		width: 216rpx;
		height: 128rpx;
		padding: 44rpx 0 44rpx 32rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
	}
	
	.bank-info-item-right{
		width: 534rpx;
		height: 128rpx;
		padding:44rpx 0;
		.font{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			line-height: 40rpx;
		}
	}
	.use{
		color: #333333;
	}
	.nouse
	{
		color: #ADADAD;
	}

}
</style>
