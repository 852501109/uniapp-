<template>
	<view class="bg">
		<view class="container">
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
		    <view class="content">
				<br/>
				<text class="sub-title">1.用户等级与交易额相关，会随着交易额实时变动</text>
				<br/><br/>
				<text class="sub-title">2.每月1号会重新累计交易金额，并计算分润比例，普通用户不变，VIP及以上用户会降至万5</text>
				<br/><br/>
				<text class="sub-title">3.普通用户：如用户为普通用户，可通过提升交易额，或由上级更高级别的用户，将其提升为VIP等级。（普通用户升级为VIP等级后，次月开始不会再降为普通用户）</text>
				<br/><br/>
				<text class="sub-title">4.VIP用户：VIP用户每月不会降为普通用户，每月初仅做分润比例调整。</text>
				<br/><br/>
				<text class="sub-title">5.合伙人：成为合伙人可通过提升交易额，或直接缴纳980元，直升为永久合伙人。通过提升交易额成为合伙人的用户每月1号会重新计算分润比例，永久合伙人每月不变更分润比例，可永久享受单笔交易最高分润比例。</text>
				<br/><br/>
				<text class="sub-title">6.合伙人可额外获得管理奖励及平级奖励。（详见权益升级功能页面）</text>
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
			color:#222;
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
