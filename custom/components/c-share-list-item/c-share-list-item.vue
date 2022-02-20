<template>
	<view >
		<view class="share-item-box">
			<view class="left">
				{{leftItem}}
			</view>
			<view class="right">
				<input type="text"  value="" v-model="changeItem" @input="toChange" placeholder="请输入金额"/>
			</view>
		</view>
		<c-cut-line></c-cut-line>
		<c-cut-line></c-cut-line>
	</view>
	
</template>

<script>
	export default {
		name:'c-share-list-item',
		props:{
			index:{
				type:Number,
				default:0
			},
			leftItem:{
				type:String,
				default:'累计收入'
			},
			RightItem:{
				type:String,
				default:'168,980.00'
			}
		},
		data() {
			return {
				changeItem:this.RightItem
			};
		},
		methods:{
			toChange(e)
			{
				//console.log(e)
				
				//console.log(e.target.value)
				
				this.changeItem = e.target.value
				
			    let index = this.index;
				
				let value = this.changeItem;
				
				let data = {index:index,value:value}
				
				this.$emit('change',data);
			}
		}
	}
</script>

<style lang="scss">
.share-item-box{
	width:750rpx;
	height:151rpx;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-left: 32rpx;
	align-items: center;
	.left{
		width:auto;
		height:40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
	}
	.right{
		width:auto;
		height:40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ADADAD;
		line-height: 40rpx;
		margin-left: 80rpx;
		
	}
}
</style>
