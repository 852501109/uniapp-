<template>
	<view>
		<view class="menu" v-for="(i, n) in titles" :key="n">
			<view class="label">{{i}}</view>
			<view class="detail">{{mapItems[n][1]}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
        // 配置项titles 和 items 相对应
        titles: ['支付金额', '订单编号', '支付时间', '支付信用卡', '到账储蓄卡', '支付通道名称', '支付费率', '到账金额', '交易状态'],
				items: {
          payAmount: '100.00',
          orderNum: '12345868583521251651',
          payTime: '2021-6-11 20:30:44',
          payCreditCard: '平安银行（尾号4456）',
          arrivalCashCard: '交通银行（尾号3342）',
          payChannel: '支付通道名称',
          payRate: '0.48+2.00（红包抵扣0.1元）',
          arrivalAmount: '87.27元',
          payStatus: '支付成功'
				}
			}
		},
    computed: {
      mapItems () {
        let map = new Map(Object.entries(this.items));
        return Array.from(map)
      }
    },
    // 接受上一路由传参
		onLoad (str) {
      console.log(this.mapItems)
			if (!str.hasOwnProperty('item')) return
			let obj = JSON.parse(str.item)
			// this.item = obj 真实数据直接赋值
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 128rpx;
		padding: 0 32rpx;
		border-bottom: 1rpx solid #e9e9e9;
		font-size: 28rpx;
		font-weight: 400;
		color: #333330;
	}
</style>
