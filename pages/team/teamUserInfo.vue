<template>
	<view class="page-box">
	   <c-cut-line></c-cut-line>
	   <c-team-userinfo-list-item v-for="(item,index) in userInfoList" :key="index" :title="item.title" :value="item.value"></c-team-userinfo-list-item>
	   <view class="button-box" v-if="userLevel==0">
			<c-page-button class="button-position" @change="toClick"></c-page-button>
	   </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//用户级别 0 普通用户 1 vip用户
				userLevel:0,
				userInfoList:
				[
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
					{title:'等级',value:'普通用户'},
				]
			};
		},
		methods:{
			toClick(data)
			{
				console.log(data)
			}
		},
		mounted()
		{
			console.log(this.userLevel)
		}
	}
</script>

<style scoped lang="scss">
.page-box{
	width: 750rpx;
	height: 100vh;
	background-color:#FFFFFF;
	.button-box{
		width: 686rpx;
		height:auto;
		margin:0 auto;
		margin-top: 300rpx;
	}
}
</style>
