<template>
	<view>
		<!-- 标题 -->
		<c-home-title></c-home-title>
		<!-- 顶部导航 -->
		<view class="type">
			<view v-for="(i, n) in typeNav" :key="n" @click="goFastPayment(i.url)">
				<image :src="i.src" mode=""></image>
				<text>{{i.name}}</text>
			</view>
		</view>
		<!-- 中上部导航 -->
		<view class="content">
			<view class="workbench">
				<view v-for="(i, n) in contentNav" :key="n" @click="goFastPayment(i.url)">
					<image :src="i.src" mode=""></image>
					<text>{{i.name}}</text>
				</view>
			</view>
			<!-- <view class="advertising">
				<image src="../../static/logo.png" mode=""></image>
			</view> -->
			<!-- 轮播图 -->
			<c-swiper></c-swiper>
			<c-popular-recommendation :left="'人气推荐'" :url="`./popularRecommendation`"></c-popular-recommendation>
			<view v-for="i in 4" :key='i'>
				<c-card-application v-bind:isDetail="false" v-bind:num='i'></c-card-application>
			</view>
		</view>
	</view>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
		data() {
			return {
				background: {
					background: '#F98038'
				},
				typeNav: [{
						name: '快捷支付',
						src: require('@/static/logo.png'),
						url: './fastPayment'
					},
					{
						name: '极速办卡',
						src: require('@/static/logo.png'),
						url: ''
					},
					{
						name: '店铺收款',
						src: require('@/static/logo.png'),
						url: ''
					}
				],
				contentNav: [{
						name: '费率查询',
						src: require('@/static/logo.png'),
						url: ''
					},
					{
						name: '卡片管理',
						src: require('@/static/logo.png'),
						url: ''
					},
					{
						name: '收入记录',
						src: require('@/static/logo.png'),
						url: ''
					},
					{
						name: '交易记录',
						src: require('@/static/logo.png'),
						url: ''
					}
				]
			}
		},
    computed:{
      ...mapGetters(['userInfo', 'token'])
    },
		methods: {
			goFastPayment(url) {
				uni.navigateTo({
					url: url
				})
			},
		},
		onShow() {
			console.log(this.token)
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF !important;
	}

	scroll-view ::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.type {
		height: 236rpx;
		background-color: #F98038;
		// background: linear-gradient(315deg, #F98038 0%, #FFB05C 100%);
		box-shadow: 0px 8rpx 12rpx -4rpx rgba(167, 85, 36, 0.26);
		border-radius: 0px 0px 36rpx 36rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 76rpx;
		box-sizing: border-box;

		view {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				height: 70rpx;
				width: 79rpx;
				margin-bottom: 28rpx;
			}

			text {
				font-size: 28rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}

	.content {
		padding: 0 32rpx;

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

		.advertising {
			// height: 240rpx;

			image {
				width: 100%;
				height: 240rpx;
			}

		}

	}
</style>
