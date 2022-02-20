<template>
	<view>
		<view class="bank_list" @click="toDetail()">
			<image :src="obj.icon?obj.icon:require('@/static/logo.png')" mode=""></image>
			<view class="bank_name">
				<text class="name">{{obj.title}}</text>
				<text class="remark">{{obj.detail}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'c-registration-process',
		data() {
			return {
        toDetail () {
          uni.navigateTo({
          	url: `./courseDetails?id=${this.obj.id}`
          })
        }
			}
		},
		props: {
			obj: {
				type: Object,
				defult: {}
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
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
</style>
