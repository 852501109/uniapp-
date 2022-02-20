<template>
	<view class="workbench">
		<view v-for="item in typeListData" :key="item.id">
			<image src="../../../static/uni.png" mode=""></image>
			<text>{{ item.title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'c-home-card-type-list',
		props: {
			homeTypeList : {
				type:Array
			},
			typeListData: {
				type:Array
			}
		},
		data() {
			return {
				// typeListData: [
				// 	{ id: 0, title: '费率查询', imgUrl: '', path: '' },
				// 	{ id: 0, title: '卡片管理', imgUrl: '', path: '' },
				// 	{ id: 0, title: '收入记录', imgUrl: '', path: '' },
				// 	{ id: 0, title: '交易记录', imgUrl: '', path: '' },
				// ]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.workbench {
		height: 196rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 46rpx;
	
		view {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
	
			text {
				font-size: 20rpx;
			}
	
			image {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50rpx;
			}
	
	
		}
	}
	
</style>
