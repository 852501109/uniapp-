<template>
	<view class="arrows-box">
		<view  :class="{down:type==0,up:type==1,left:type==2,right:type==3}">
		</view>
	</view>
</template>
<script>
	export default {
		name:'c-arrows',
		props:{
			type:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				
			};
		},
		mounted()
		{
			//console.log(this.type)
		}
	}
</script>

<style scoped lang="scss">
.arrows-box{
	width: 12rpx;
	height: 12rpx;
}
.down{
	    width:0; 
	    height:0; 
	    border-left:10rpx solid transparent;
	    border-right:10rpx solid transparent;
	    border-top:16rpx solid #D8D8D8;
	}
	.up {
	    width:0; 
	    height:0; 
	    border-left:10rpx solid transparent;
	    border-right:10rpx solid transparent;
	    border-bottom:16rpx solid #D8D8D8;
	}
	
	.left {
	    width:0; 
	    height:0; 
	    border-top:10rpx solid transparent;
	    border-bottom:10rpx solid transparent; 
	    border-right:16rpx solid #D8D8D8; 
	}
	
	.right {
	    width:0; 
	    height:0; 
	    border-top:10rpx solid transparent;
	    border-bottom: 10rpx solid transparent;
	    border-left: 16rpx solid #D8D8D8;
	}
</style>
