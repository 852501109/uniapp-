<template>
	<view class="share-box">
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#fff" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
		        <view class="pop-box">
					<view class="pop-header">
						<image :src="this.src" mode="aspectFit" class="icon" @tap="toClose"></image>
						<view class="title">
							{{title}}
						</view>
					</view>
					<c-share-list-item v-for="(item,index)  in shareArray" :key='index'  @change="toChange"
					:index="index"
					:leftItem="item.name"
					:RightItem="item.amount"
					>
					</c-share-list-item>
					<c-page-button :buttonWord="buttonWord" class="btn-position"></c-page-button>
		       </view>
		    </view>
		</uni-popup>
	</view>
</template>

<script>
	import { CLOSE } from "@/config/icons.js"
	export default {
		name:'c-share',
		props:{
			status:{
				type:Boolean,
				default:false
			},
			type:{
				type:String,
				default:'canter'
			},
			shareArray:{
				type:Array,
				default:()=>{
					return [
						{name:'累计收入',amount:'168,980.00'},
						{name:'累计收入',amount:'168,980.00'},
						{name:'累计收入',amount:'168,980.00'}
					];
				}
			},
			title:{
				type:String,
				default:'编辑金额'
			}
		},
		data()
		{
			return {
				src:CLOSE,
				buttonWord:'生成分享图'
			};
		},
		methods:
		{
			change(e)
			{
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toChange()
			{
				console.log('修改数据')
			},
			toClose()
			{
				 let that = this
         console.log('关闭')

         that.$refs.popup.close()

         that.vueEvent.$emit('close',this.status);
			}
		},
		mounted()
		{

			let that = this

			//console.log(CLOSE)
			 that.vueEvent.$on('open',function(data)
			 {
         that.$refs.popup.open(that.type)
			 });
		}
	}
</script>

<style scoped lang="scss">
.share-box{
	width:750rpx;
	height:auto;
	.pop-header{
		width: 750rpx;
		height:132rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding-top: 42rpx;
		.icon{
			width: 40rpx;
			height:40rpx;
			margin-left: 32rpx;

		}
		.title{
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #333333;
			line-height: 44rpx;
			margin-left: 216rpx;
		}
	}
	.popup-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0;
		height: 50rpx;
		background-color: #fff;
	}

	.popup-height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		width: 200rpx;
	}
	.pop-box{
		width: 750rpx;
		height: 854rpx;
		background: #FFFFFF;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		.btn-position{
			margin-top: 80rpx;
		}
	}
}
</style>
