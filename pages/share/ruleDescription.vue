<template>
	<view class="bg">
		<view class="container">
			
		    <view class="content">
				<br/>
				<text class="sub-title">1.红包奖励</text>
				<br/><br/>
				<text>
					①新用户注册：5元红包奖励
					每邀请一个新用户注册，平台将发放10元红包奖励，按比例向奖励三级，上级直接推荐人可得5元，一级间接推荐人可得3元，二级间接推荐人可得2元。
					<br/><br/>
					②首次支付：10元红包奖励
					用户首次支付可获得10元红包奖励
				</text>
				<br/><br/>
				<text class="sub-title">2.分润奖励</text>
				<br/><br/>
				<text>邀请用户下载注册并使用快捷支付，可得最高万9交易分润奖励。</text>
				<br/><br/>
				<uni-table  border emptyText="暂无更多数据" >
				    <!-- 表头行 -->
				    <uni-tr style="background:#007AFF; color: #FFFFFF;">
				        <uni-th width="auto" align="center">用户等级</uni-th>
				        <uni-th width="auto" align="center">累计交易金额（万）</uni-th>
				        <uni-th width="auto" align="center">分润比例</uni-th>
				    </uni-tr>
				    <!-- 表格数据行 -->
				    <uni-tr  v-for="(i, n) in tableList" :key="n">
				        <uni-td align="center">{{i.level}}</uni-td>
				        <uni-td align="center">{{i.amount}}</uni-td>
				        <uni-td align="center">{{i.proportion}}</uni-td>
				    </uni-tr>
				</uni-table>
				<br/><br/>
				<text class="sub-title">3.首刷奖励</text>
				<br/><br/>
				<text>
					邀请用户下载注册并使用快捷支付，首次单笔交易金额满8000元，向上奖励三级，上级直接推荐人可得70元，一级间接推荐人可得30元，二级间接推荐人可得20元。
				</text>
				<br/><br/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				configure: {
					title: '权益升级'
				},
				tableList: [
					{level: '普通用户',amount: '0≥N≥50', proportion: '无'},
					{level: 'VIP',amount: '50＞N≥200', proportion: '万5'},
					{level: 'VIP',amount: '200＞N≥500', proportion: '万6'},
					{level: 'VIP',amount: '500＞N≥700', proportion: '万7'},
					{level: 'VIP',amount: '700＞N≥1000', proportion: '万8'},
					{level: '合伙人',amount: '700＞N≥1000', proportion: '万9'},
				]
			};
		},
		methods: {
			upgrade () {
				this.$refs['dialog'].open()
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg {
	    background: url('/static/shuijiao.jpg');
	    background-repeat: no-repeat;
	    background-position: top center;
	    background-size: 100% 100%;
	}
	.container {
		position: relative;
		top: 500rpx;
		padding:30rpx;
		background: #fff;
		width: 92%;
		margin: 0 auto;
		line-height: 45rpx;
		letter-spacing: 3rpx;
		.title {
			font-size: 30rpx;
			font-weight: bold;
			width: 96%;
			margin: 0 auto;
		}
		.uni-table-th {
			color: #fff;
		}
		.sub-title {
			color: #7787ff;
		}
		.upgrade {
			width: 94%;
			margin: 0 auto;
		}
		.content {
			width: 94%;
			margin: 0 auto;
		}
	}
</style>
