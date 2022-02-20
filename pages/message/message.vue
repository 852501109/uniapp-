<template>
	<view class="container">
		<scroll-view class="scroll-view_H" :scroll-left="scrollLeft" scroll-x="true">
			<view class="slide_type_list">
				<view class="slide_type_list_view" v-for="(i, n) in typeList" :key="n" :class="{is_selected:active==n}" @click="changeType(n)">
					<view>{{i.name}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="content">
			<!-- 账户消息 -->
			<view v-show="active === 0">
				<view  v-for="(i, n) in accountDetail" :key="n">
					<view class="date uni-center gray" style="margin-top:20rpx;">{{i.create_time}}</view>
					<view class="detail-box">
						<view class="detail-title">{{i.type}}</view>
						<view class="detail-content">
							<!-- 资金往来 -->
							<view class="capital-flow">
								<!-- 资金往来类型 -->
								<view class="capital-type uni-center gray">{{i.title}}</view>
								<!-- 资金往来 -->
								<view class="capital-count uni-center">{{i.content.amount}}</view>
								<!-- 收入 -->
								<view v-if="i.type === '收入通知'">
									<view class="income-time"><text class="gray">到账时间&nbsp;:</text><text>{{i.content.create_time}}</text></view>
								</view>
								<!-- 交易 -->
								<view v-if="i.type === '交易通知'">
									<view class="transaction-time"><text class="gray">交易时间&nbsp;:</text><text>{{i.content.create_time}}</text></view>
									<view class="transaction-account"><text class="gray">支付账户&nbsp;:</text><text>{{i.content.card_name + `(尾号${i.content.card_no})`}}</text></view>
								</view>
								<!-- 提现 -->
								<view v-if="i.type === '提现通知'">
									<view class="withdrawal-account"><text class="gray">提现账户&nbsp;:</text><text>{{i.content.card_name + `(尾号${i.content.card_no})`}}</text></view>
									<view class="withdrawal-status"><text class="gray">提现状态&nbsp;:</text><text>{{i.content.status}}</text></view>
								</view>
							</view>
						</view>
						<view v-if="i.type === '交易通知'" @click="toDetail(i.id)" class="detail-operation uni-center">{{i.operation}}</view>
					</view>
				</view>
			</view>
			<!-- 系统消息 -->
			<view v-show="active === 1">
				<view  v-for="(i, n) in systemDetail" :key="n">
					<view class="date uni-center gray" style="margin-top:20rpx;">{{i.create_timesss}}</view>
					<view class="detail-box">
						<view class="detail-title">{{i.title}}</view>
						<view class="detail-content gray">
							{{i.content}}
							<image v-if="i.imgSrc" :src="i.imgSrc"></image>
						</view>
						<view v-if="i.operation" class="detail-operation uni-center">{{i.operation}}</view>
					</view>
				</view>
			</view>
		</view>
    <uni-load-more v-if="isLoading" :iconSize="24" status="loading" iconType="circle"></uni-load-more>
	</view>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
    computed:{
      ...mapGetters(['userInfo', 'token']),
    },
		data() {
			return {
        isLoading: false,
				scrollLeft: 0,
				active: 0,
				typeList:[
					{
						name:'账户消息'
					},{
						name:'系统消息'
					}
				],
				accountDetail: [
          {
						title: '交易分润',
            type: '交易通知',
            id: '2',
            create_time: '2021-05-10 20:21:34',
            content: {
              amount: '￥15.00',
              create_time: '2021-05-10 20:21:34',
              card_name: '浦发银行',
              card_no: '4646'
            },
            operation: '查看详情'
					},
					{
						title: '红包奖励',
            type: '提现通知',
            id: '1',
            create_time: '2021-05-10 20:21:34',
            content: {
              amount: '￥11.00',
              card_name: '浦发银行',
              card_no: '4646',
              status: '审核中'
            }
					},
					{
						title: '红包奖励',
					  type: '收入通知',
            id: '1',
            create_time: '2021-05-10 20:21:34',
					  content: {
					    samount: '￥11.00',
					    card_name: '浦发银行',
              create_time: '2021-05-10 20:21:34',
					    card_no: '4646',
					    status: '审核中'
					  }
					},
				],
				systemDetail: [
					{
						title: '版本更新',
						content: '又有新版本发布啦，快来更新体验吧！',
						operation: '立即更新'
					},
					{
						title: '实名认证结果通知',
						content: '恭喜你，实名认证已通过！',
						imgSrc: require('@/static/logo.png'),
						operation: ''

					},
					{
						title: '实名认证结果通知',
						content: '很遗憾，实名认证失败，审核未通过。原因：**********。快重新提交审核吧',
						operation: ''

					}
				]
			}
		},
    onLoad () {
      // 获取个人消息列表
      this.getNoticeList()
    },
    onReachBottom(){
      this.isLoading = true
      setTimeout (res => {
        this.isLoading = false
      }, 1500)
    },
		methods: {
      toDetail (id) {
          uni.navigateTo({
            url: `/pages/home/dealInfo?tradeid=${id}`
          })
      },
      getNoticeList () {
        Request(
          api.noticeList, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: {
              token: 'dfe0d851-919b-4db0-9dbe-4ea91419d95a'
            },
            //是否显示加载
            showLoading: false,
          })
        .then(res => {

        })
      },
      getTime () {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        month >= 1 && month <= 9 ? (month = "0" + month) : ""
        day >= 0 && day <= 9 ? (day = "0" + day) : ""
        let timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
        return timer
      },
			changeType(n){
				this.active = n
			}
		}
	}
</script>

<style scoped lang="scss">
	.scroll-view_H{
		background-color: #FFFFFF;
		.slide_type_list{
			display: flex;
			padding: 20rpx 30rpx;
			.slide_type_list_view{
				view{
					width: 320rpx;
					text-align: center;
				}
			}
			.is_selected{
				font-weight: bold;
				position: relative;
				color: #ff5857 ;
			}
			.is_selected:before{
				content: '';
				position: absolute;
				width: 180rpx;
				height: 4rpx;
				left: 50%;
				margin-left: -80rpx;
				bottom: -20rpx;
				background-color: #ff5857;
			}
		}
	}
	.container {
		position: relative;
		top: 20rpx;
		width: 95%;
		margin: 0 auto;
		text-align: left;
		padding:10rpx;
		.gray {
			color: #999;
		}
		.nav {
			display: flex;
			view {
				width: 50%;
				text-align: center;
				border-bottom: 1px solid #999;
			}
		}
		.detail-box {
			position: relative;
			width: 100%;
			height: auto;
			background-color: #fff;
			border-radius: 18rpx;
			margin: 0 auto;
			.detail-title {
				text-align: left;
				font-size: 30rpx;
				font-weight: bold;
				padding-top: 15rpx;
				padding-left: 20rpx;
			}
			.detail-content {
				position: relative;
				padding: 20rpx;
				image {
					width: 100%;
				}
				text:nth-child(2) {
					margin-left: 10rpx;
				}
			}
			.capital-flow {
				.capital-count {
					font-size: 45rpx;
				}
			}

			.detail-operation {
				padding:20rpx;
				border-top: 2rpx solid #BEBEBE;
			}
		}
	}
</style>
