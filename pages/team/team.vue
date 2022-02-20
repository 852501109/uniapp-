<template>
	<view class="page-box">
		<view class="header">
			<view  v-for="(arrayBox,index) in totalArray" :key="index">
				<c-total-list-line class="line" :listArray="arrayBox" :type='0' 
				></c-total-list-line>
			</view>
		</view>
		<c-tab @change="toClick"></c-tab>
		<view class="list-box">
			<c-team-list-item v-for="(item,index) in showList"
			:name="item.name"
			:level="item.level"
			:phone="item.phone"
			:time="item.time"
			:key="index"
			>	
			</c-team-list-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//头部统计数据
				totalArray:
				[
					[
						{name:'累计交易量（元）',value:'168，185.00'},
						{name:'直推交易量（元）',value:'168，185.00'},
						{name:'间推交易量（元）',value:'168，185.00'},
					],
					[
						{name:'推广总人数',value:'168，185.00'},
						{name:'本月新增人数',value:'168，185.00'},
						{name:'上月推广人数',value:'168，185.00'},
					],
					
				],
				//展示数据列表 0 直接统计 1间接统计
				showType:0,
				//直接统计列表
				directlyList:
				[
					{name:'未实名',level:'普通用户',phone:'13786009198',time:'注册时间：2021-05-10'},
					{name:'未实名',level:'普通用户',phone:'13786009198',time:'注册时间：2021-05-10'},
					{name:'未实名',level:'普通用户',phone:'13786009198',time:'注册时间：2021-05-10'},
					{name:'未实名',level:'普通用户',phone:'13786009198',time:'注册时间：2021-05-10'},
				],
				//间接统计列表
				indirectList:
				[
					
				]
			}
		},
		computed:{
			showList()
			{
				let showList = [];
				if(this.showType)
				{
					showList = this.indirectList
				}
				else
				{
					showList = this.directlyList
				}
				
				return showList;
			}
		},
		methods: {
			toClick(data)
			{
				console.log(data)
			}
		}
	}
</script>

<style class="" lang="scss" scoped>
.page-box{
	width: 750rpx;
	height:100vh;
	background-color:#FFFFFF;
	padding-top: 38rpx;
	.header{
		width: 620rpx;
		height:294rpx;
		margin-bottom: 40rpx;
		margin:0 auto;
		background: linear-gradient(135deg, #FDB769 0%, #F98038 100%);
		border-radius: 16rpx;
		line-height: 294rpx;
		padding-top:60rpx;
		.line{
			margin-bottom: 60rpx;
		}
	}
	.list-box{
		width: 750rpx;
		height:auto;
		margin-top: 8rpx;
	}
}
</style>
