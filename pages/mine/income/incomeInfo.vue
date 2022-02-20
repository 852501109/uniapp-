<template>
	<view class="page-box">
	   <c-info-list-item v-for="(item,index) in showArray" :key='index'
		:leftItem='item.name'
		:rightItem='item.value'
	   >
	   </c-info-list-item>
	</view>
</template>
<script>
	export default {
		computed:{
			showArray()
			{
				let that = this;
				return that.infoArray
			}
		},
		data() {
			return {
				infoArray:
				[
					{name:'奖励金额',value:'0.20元'},
					{name:'来源',value:'新用户注册'},
					{name:'到账时间',value:'2021-05-10 - 20：21：34'},
					{name:'详情',value:'4月平级奖励'},
				]
			};
		},
		mounted()
		{
			
		}
	}
</script>

<style scoped lang="scss">
.page-box{
	width: 750rpx;
	height: 1624rpx;
	background:#FFFFFF;
}
</style>
