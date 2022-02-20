<template>
	<view class="">
		<view class="bank_list_video">
			<view v-for="i in 10">
				<c-card-application v-bind:isDetail="true"  v-bind:num='i'></c-card-application>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.bank_list_video {
		padding: 0 32rpx;
		.bank_list {
			display: flex;
			align-items: center;
			margin-bottom: 24rpx;
		
			image {
				width: 188rpx;
				height: 116rpx;
				margin-right: 20rpx;
			}
		
			.bank_name {
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: space-around;
		
				.remark {
					font-size: 24rpx;
					color: #a8a8a8;
				}
		
				.name {
					font-size: 28rpx;
					color: #333;
					font-weight: 550;
					margin-bottom: 10rpx;
				}
		
		
			}
		}
	}
	
</style>
