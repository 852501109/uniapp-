<template>
	<view>
		<view class="users">
			<view class="user_info">
				<image @click="editPhonePicture" src="../../static/logo.png" mode=""></image>
				<view class="name_phone">
					<text class="name">张三四</text>
					<view class="weight">普通用户</view>
				</view>
				<text>13893239198</text>
			</view>

			<view class="inform">
        <navigator url="/pages/message/message" hover-class="navigator-hover">
            <image src="../../static/iconlingdang2x.png" mode=""></image>
         </navigator>
			</view>

			<view class="module">
				<view @click="goMyWallet">
					<image src="../../static/d1.png" mode=""></image>
					<text>我的钱包</text>
				</view>
				<view  @click="cardManage">
					<image src="../../static/i2.png" mode=""></image>
					<text>卡片管理</text>
				</view>
			</view>

		</view>
		<view class="forms">

			<view v-for="item in userOperation" :key="item.id" class="forms_item" @click="goRouter(item)">
				<view class="left">
					<image :src="item.src" mode=""></image>
					<text> {{ item.title }} </text>
				</view>
				<view class="right">
					<text v-show="item.id == 0">未认证</text>
					<image src="../../static/c5.png" mode=""></image>
				</view>
			</view>
		</view>

		<!--  联系客服 -->
		<view class="service" v-show="shearPlateShow" @click.self="shearPlateShow = false">
			<view class="card">
				<image @click="shearPlateShow = false" src="../../static/logo.png" mode=""></image>
				<view class="title">
					联系客服
				</view>
				<view class="content">
					联系客服请添加客服微信<br>
					<view>
						客服微信号: zero112
						<text @click="shearPlate">复制</text>
					</view>
				</view>
			</view>
		</view>

		<!--  推荐人 -->
		<view class="referrer" v-show="callShow" @click.self="callShow = false">
			<view class="card">
				<view class="title">
					我的推荐人
				</view>
				<view class="content">
					<view class="wrapper">
						<view>
							<text class="label">推荐人</text>
							<text class="text">张三</text>
						</view>
						<view>
							<text class="label">联系方式</text>
							<text class="text">1334567890</text>
						</view>
					</view>

				</view>
				<view class="footer">
					<view style="border-right: 1rpx solid #e9e9e9;" @click="callShow = false">关闭</view>
					<view @click="call(10086)" style="font-weight: 550; color: #3685ff;">拨打电话</view>
				</view>
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
				shearPlateShow: false,
				callShow: false,
				userOperation: [
					{ id: 0, title: '实名认证', isRightText: '', path: './certification/certification', isRouter: true, src: '/static/a1.png' },
					{ id: 1, title: '交易记录', isRightText: '', path: '', isRouter: true, src: require('@/static/a2.png') },
					{ id: 2, title: '收入记录', isRightText: '', path: '', isRouter: true, src: require('@/static/b6.png') },
					{ id: 3, title: '团队管理', isRightText: '', path: '', isRouter: true, src: require('@/static/c2.png') },
					{ id: 4, title: '权益升级', isRightText: '', path: './rightsUpgrading/rightsUpgrading', isRouter: true, src: require('@/static/b3.png') },
					{ id: 5, title: '联系客服', isRightText: '', path: '', isRouter: false, src: require('@/static/a8.png') },
					{ id: 6, title: '推荐人', isRightText: '', path: '', isRouter: false, src: require('@/static/c4.png') },
					{ id: 7, title: '设置', isRightText: '', path: './setting/setting', isRouter: true, src: require('@/static/b1.png') },
				]
			}
		},
    computed:{
      ...mapGetters(['userInfo', 'token'])
    },
		methods: {
      cardManage () {
        uni.navigateTo({
          url: '/pages/mine/bank/bank'
        })
      },
			editPhonePicture() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			goMyWallet() {			// 跳转到我的钱包
				uni.navigateTo({
					url: './wallet/wallet'
				})
			},
			goRouter(item) {
				if(item.isRouter) {
					uni.navigateTo({
						url: item.path
					})
				} else if(item.id == 5) {	// 我的客服
					this.shearPlateShow = true
				} else if(item.id == 6) { 	// 推荐人
					this.callShow = true
				}
			},
			shearPlate() {
				uni.setClipboardData({
					data: 'z123456',
					success: function() {
						console.log('success');
					}
				});
			},
			call(number) {
				uni.makePhoneCall({
					phoneNumber: number + ''
				});
			}
		},
    onShow()
    {
       console.log(this.token)
    }
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF !important;
	}

	.users {
		height: 448rpx;
		background: linear-gradient(135deg, #F97D35 0%, #FFB660 100%);
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		padding: 40rpx 0 0 0;
		margin-bottom: 180rpx;

		.user_info {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;
				margin-bottom: 20rpx;
			}

			.name_phone {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				margin-bottom: 20rpx;

				.name {
					font-size: 40rpx;
					color: #FFFFFF;
				}


				.weight {
					position: absolute;
					color: #F98038;
					background-color: #FFF;
					right: -130rpx;
					font-size: 10rpx;
					padding: 3rpx 6rpx;
					border-radius: 10rpx;
				}

			}

			text {
				font-size: 24rpx;
				color: #FFFFFF;
			}

		}

		.inform {
			position: absolute;
			top: 70rpx;
			right: 32rpx;

			image {
				width: 48rpx;
				height: 48rpx;
			}
		}

		.module {
			position: absolute;
			right: 32rpx;
			left: 32rpx;
			top: 400rpx;
			height: 184rpx;
			background: #FFFFFF;
			box-shadow: 0px 12rpx 40rpx 0px rgba(220, 120, 59, 0.06);
			border-radius: 16rpx;
			display: flex;

			view {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				image {
					width: 72rpx;
					height: 72rpx;
					margin-bottom: 10rpx;
				}

				text {
					font-size: 28rpx;
					color: #333330;
				}


			}

		}


	}

	.forms {
		.forms_item {
			padding: 0 32rpx;
			box-sizing: border-box;
			height: 128rpx;
			background-color: #FFF;
			border-bottom: 1rpx solid #e9e9e9;

			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				align-items: center;

				image {
					height: 48rpx;
					width: 48rpx;
					margin-right: 48rpx;
				}

				text {
					font-size: 28rpx;
					color: #333;
				}
			}

			.right {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #adadad;

				image {
					height: 48rpx;
					width: 48rpx;
				}
			}

		}
	}

	.service {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;

		.card {
			width: 590rpx;
			height: 292rpx;
			background-color: #FFF;
			border-radius: 20rpx;
			position: relative;
			padding: 32rpx;
			box-sizing: border-box;

			>image {
				position: absolute;
				left: 32rpx;
				top: 32rpx;
				width: 48rpx;
				height: 48rpx;
			}

			.title {
				margin-top: 30rpx;
				display: flex;
				justify-content: center;
				font-size: 32rpx;
				font-weight: 600;
				color: rgba(0, 0, 0, 0.87);
				margin-bottom: 32rpx;
			}

			.content {
				font-size: 28rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.54);

				view {
					text {
						margin-left: 10rpx;
						color: #3685FF;
					}
				}

			}
		}

	}

	.referrer {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;

		.card {
			width: 590rpx;
			height: 412rpx;
			background-color: #FFF;
			border-radius: 20rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				margin-top: 30rpx;
				display: flex;
				justify-content: center;
				font-size: 32rpx;
				font-weight: 600;
				color: rgba(0, 0, 0, 0.87);
			}

			.content {
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.wrapper {
					view {
						display: flex;
						font-size: 28rpx;
						color: #000;

						.label {
							width: 120rpx;
							margin-right: 30rpx;
						}

						.text {
							flex: 1;
						}
					}
				}

			}

			.footer {
				height: 96rpx;
				border-top: 1rpx solid #e9e9e9;
				display: flex;

				view {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 32rpx;
					font-weight: 400;
					color: #333330;
				}
			}
		}
	}
</style>
