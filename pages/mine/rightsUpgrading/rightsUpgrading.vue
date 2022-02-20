<template>
	<view class="bg">
		<view class="container">
			<view class="title"><br/>合伙人权益说明</view>
		    <view class="content">
				<br/>
				<text class="sub-title">权益一：永久享受合伙人权益</text>
				<br/><br/>
				直升合伙人后，不需要每月靠业绩提升等级，且等级不会随业绩变化，可永久享受合伙人权益
				<br/><br/>
				<text class="sub-title">权益二：每笔订单可享最高万9分润</text>
				<br/><br/>
			</view>
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
			<view class="upgrade">
				<br/><br/>
				<text class="sub-title">权益三：额外的管理奖励</text>
				<br/><br/>
				每月有三个直升用户交易额达到2000W以上，可奖励7000元/月
				<br/><br/>
				<text class="sub-title">权益四：平级用户有平级奖励</text>
				<br/><br/>
				平级用户可获得平级奖励，平级奖励金额为交易收益的2%/笔，可向上奖励三级推荐人
				<br/>
				升级方式<br/>
				仅需支付980元，可直升成为永久合伙人级别
				<br/><br/>
				<button @click="upgrade" style="background:#F98038;color: #fff;">立即升级</button>
			</view>
			<c-dialog-list  ref="dialog"></c-dialog-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true, // 是否显示模态框
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
		onShow () {
			this.$refs['dialog'] ? this.$refs['dialog'].reset() : ''
		},
		methods: {
			upgrade () {
				this.$refs['dialog'].open()
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: relative;
		top: 500rpx;
		background: #fff;
		width: 96%;
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
			color:#0977ff;
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
