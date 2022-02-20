<template>
	<view class="page-box">
	   <view class="header">
		   <c-total-list-line :type="1"></c-total-list-line>
	   </view>
	   <view class="select">
		<c-year-month-select></c-year-month-select>
		<c-type-select></c-type-select>
	   </view>
	   <view class="list">
		   <c-team-list-item  v-for="(item,index) in showList" :key='index' 
		   :index='index'
		   :name='item.title'
		   :level='item.time'
		   :phone='item.amount'
		   :time='item.typeInfo'
		   @change="toClick"
		   ></c-team-list-item>
	   </view>
	</view>
</template>

<script>
	export default {
		computed:{
			showList()
			{
				return this.listData;
			}
		},
		data() {
			return {
				incomeTotal:
				[
					{title:'累计收入（元）',value:'68，185.00'},
					{title:'分润收入（元）',value:'68，185.00'},
					{title:'奖励收入（元）',value:'68，185.00'}
				],
				listData:
				[
					{title:'交易分润-单笔分润',time:'2021-05-10 20:21:34',amount:'100.00',typeInfo:'分润收入'},
					{title:'交易分润-单笔分润',time:'2021-05-10 20:21:34',amount:'100.00',typeInfo:'分润收入'},
					{title:'交易分润-单笔分润',time:'2021-05-10 20:21:34',amount:'100.00',typeInfo:'分润收入'},
					{title:'交易分润-单笔分润',time:'2021-05-10 20:21:34',amount:'100.00',typeInfo:'分润收入'}
				]
			};
		},
		methods:{
			toClick(data)
			{
				console.log(data)
			}
		}
	}
</script>

<style scoped lang="scss">
.page-box{
	width: 750rpx;
	height: 100vh;
	background: #FFFFFF;
	.header{
		width: 750rpx;
		height: 128rpx;
		background: linear-gradient(135deg, #F97D35 0%, #FFB660 100%);
		border-radius: 0rpx 0rpx 16rpx 16rpx;
		padding-top:30rpx;
	}
	.select{
		width:750rpx;
		height:112rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		line-height: 112rpx;
	}
	.list{
		width:750rpx;
		height:auto;
	}

}
</style>
