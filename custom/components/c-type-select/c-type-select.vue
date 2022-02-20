<template>
	<view>
		<view class="show-title-box" @tap="toOpen">
		  <view class="show-title">
			   全部
		  </view>
		   <c-arrows class="arrows-icon" :type='arrowsType'></c-arrows>
		</view>
		<view class="" v-if="open">
			<c-type-select-item v-for="(item,index) in selectArray" :key='index'
			:selectKey="index"
			:selectItem="item.name"
			:isSelected="item.status"
			@change="toClick"
			></c-type-select-item>
		</view>
	</view>
</template>
<script>
	export default {
		name:'c-type-select',
		computed:
		{
			//指示箭头方向 0下 1上 2左 3右
			arrowsType()
			{
				let arrows = 3;
			
				if(this.open)
				{
				   arrows = 0;
				}
				
				return arrows;
			},
		},
		watch:
		{
			   select:'changeSelect',
			   deep:true
		},
		data() 
		{
			return {
				selectArray:
				[
					{name:"全部",status:true},
					{name:"交易分润",status:false},
					{name:"提现",status:false},
				],
				oldSelect:{
					status:true,
					index:0
				},
				select:{
					status:true,
					index:0
				},
				open:false
			}
		},
		methods:
		{
			toOpen()
			{
				this.open = !this.open;
			},
			toClick(data)
			{
				
				const {status,index} = data;
				
				this.oldSelect = this.select;
				this.select = data;
				
				console.log('当前',this.select);
				console.log('之前',this.oldSelect);
				
				if(this.select.status == this.oldSelect.status && this.select.index == this.oldSelect.index)
				{
					if(this.select.index  == 0)
					{
						this.select ={status:true,index:0}
						this.oldSelect ={status:true,index:0}
					}
					this.select ={status:true,index:0}
					this.oldSelect ={status:true,index:0}
					
				
				}
				
			},
			changeSelect(currentData,oldData)
			{
				
				this.selectArray[currentData.index].status = currentData.status;
				
				this.selectArray[this.oldSelect.index].status = !this.selectArray[this.oldSelect.index].status;
				
				this.oldSelect = currentData;
				
			} 
		}
	}
</script>

<style scoped lang="scss">
.show-title-box{
	width: auto;
	height:40rpx;
	line-height: 40rpx;
	display: flex;
	flex-flow: row;
	.show-title{
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ADADAD;
		line-height: 40rpx;
	}
	.arrows-icon{
		margin-top: 15rpx;
		margin-left:20rpx
	}
}
</style>
