<template>
	<view class="c-team-item-box">
		<view class="content">
			<c-two-line-item class="left" :type='1' :title='name' :info='level'></c-two-line-item>
			<c-two-line-item class="left" :type='2' :title='phone' :info='time'></c-two-line-item>
		</view>
		<image :src="src" mode="aspectFit" class="icon" @tap="toClick"></image>
	</view>
</template>

<script>
	import { RIGHT_ARROWS } from '@/config/icons.js'
	export default {
		props:{
			index:{
				type:Number,
				default:0
			},
			name:{
				type:String,
				default:'未实名'
			},
			level:{
				type:String,
				default:'普通用户'
			},
			phone:{
				type:String,
				default:'13786009198'
			},
			time:{
				type:String,
				default:'注册时间：2021-05-10'
			},
		},
		name:'c-team-list-item',
		data() {
			return {
				src:RIGHT_ARROWS
			};
		},
		methods:
		{
			toClick()
			{
				const index = this.index;
				
				this.$emit('change',{index:index});
			}
		},
		mounted()
		{
			
		}
	}
</script>

<style scoped lang="scss">
.c-team-item-box{
	width: 749rpx;
	height: 130rpx;
	background: #FFFFFF;
	border-bottom: 1rpx solid #E9E9E9;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.content{
		width: 670rpx;
		height: 130rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left{
			margin-left: 32rpx;
			margin-top: 24rpx;
		}
		.rgiht{
			margin-top: 24rpx;
		}
	}
	.icon{
		width: 48rpx;
		height: 48rpx;
		margin:44rpx 0;
		margin-right: 32rpx;
	}

}
</style>
