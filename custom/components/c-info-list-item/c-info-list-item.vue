<template>
	<view class="big-box">
		<view class="list-item-box">
			<view class="left word">
				{{leftItem}}
			</view>
			<view class="right word">
				{{rightItem}}
			</view>
		</view>
		<c-cut-line ></c-cut-line>
		<c-cut-line ></c-cut-line> 
	</view>
</template>
<script>
	export default {
		name:'c-info-list-item',
		props:
		{
			leftItem:{
				type:String,
				default:'奖励金额'
			},
			rightItem:{
				type:String,
				default:'0.20元'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.big-box{
	width: 750rpx;
	height:128rpx;
	.list-item-box{
		width: 750rpx;
		height:126rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding:32rpx;
		background-color: #FFFFFF;
		.word{
			width:auto;
			height:40rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333330;
			line-height: 40rpx;
			margin-top: 12rpx;
		}
	}
	
}



</style>
