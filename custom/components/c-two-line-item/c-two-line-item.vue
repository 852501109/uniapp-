<template>
	<view class="two-line-box" :class="{left:type==1,right:type==2,center:type==0}">
		<view class="title word" >
			{{title}}
		</view>
		<view class="bottom word">
			{{info}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'c-two-line-item',
		props:{
			type:{
				type:Number,
				default:0
			},
			title:{
				type:String,
			    default:'未实名'
			},
			info:{
				type:String,
				default:'普通用户'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted()
		{
			console.log('lei',this.type)
		}
	}
</script>

<style scoped lang="scss">
	.two-line-box{
		width:auto;
		height:80rpx;
		display: flex;
		flex-direction: column;
		.word{
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			line-height: 34rpx;
		}
		.title{
			color: #333330;
			margin-bottom: 12rpx;
		}
		.bottom{
			color: #ADADAD;
		}
	}
	.left
	{
		align-items:flex-start;
	}
	.right
	{
		align-items:flex-end;
	}
	.center
	{
		align-items:center;
	}

</style>
