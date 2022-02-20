<template>
	<view class="team-list-item-box">
		<view class="item-left word">
			<view class="left-word">
				{{title}}
			</view>
		</view>
		<view class="item-right word">
			{{value}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'c-team-userinfo-list-item',
		props:{
			title:{
				type:String,
				default:'等级'
			},
			value:{
				type:String,
				default:'普通用户'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.team-list-item-box{
	display: flex;
	flex-flow: row;
	width: 750rpx;
	height: 128rpx;
	border-bottom: 1rpx solid  #E9E9E9;
	.item-left{
		width: 216rpx;
		height: 128rpx;
		line-height: 128rpx;
		padding-right: 32rpx;
		.left-word{
			width:auto;
			height:auto;
			margin-left: 32rpx;
		}
	}
	.item-right{
		width:  534rpx;
		height: 128rpx;
		line-height: 128rpx;
	}
	.word{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
}
</style>
