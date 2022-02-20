<template>
	<view class="tab-box uni-flex">
		<view v-for="(item,index) in tabList" :key="index" class="tab-item-box" @tap="toClick(index)">
			 <view class="tab-item-name" :class="{orange:active==index,gray:active!=index}">
			 	<view class="word word-left">{{item.tabTile}}</view> <view class="word" v-if="hasTotal">({{item.totalNumber}}{{totalUnit}})</view>
			 </view>
			 <view class="tab-item-line" :class="{notice:active==index}">

			 </view>
		</view>
	</view>
</template>

<script>
	export default
	{
		name:'c-tab',
		props:
		{
			hasTotal:{
			   type:Boolean,
			   default:true
			},
			totalUnit:{
				type:String,
				default:'人'
			},
			tabList:{
			  type:Array,
			  default:()=>{
					return [
					   {tabTile:'信用卡',totalNumber:4},
					   {tabTile:'储蓄卡',totalNumber:4}
				   ];
			   }
			}
	    },
		data()
		{
			return{
				test:1,
				active:0
			}
		},
		methods:{
			toClick(index){
				this.active = index;
				this.$emit('change',{index})
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab-box{
		width: 750rpx;
		height: 96rpx;
		justify-content: space-around;
		background: #FFFFFF;
		.tab-item-box{
			display: flex;
			flex-direction: column;
			align-items:center;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			line-height: 40rpx;
			.tab-item-name{
				margin-top: 28rpx;
				margin-bottom:28rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				.word{
					width: auto;
					height: 38rpx;
				}
				.word-left{
					margin-right: 20rpx;
				}
			}
			.tab-item-line{
				width: 140rpx;
				height: 2rpx;
			}
		}
	}
	.orange{
		color: #F98038;
	}
	.gray{
		color: #ADADAD;
	}
	.notice{
		background: #FC5830;
	}
</style>
