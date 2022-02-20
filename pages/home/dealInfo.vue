<!--
 * @Descripttion:
 * @version:
 * @Author: YouHuJun
 * @Date: 2021-06-25 19:30:03
 * @LastEditors: YouHuJun
 * @LastEditTime: 2021-06-28 11:58:06
-->
<template>
	<view>
		<view class="menu" v-for="(i, n) in titles" :key="n">
			<view class="label">{{i}}</view>
			<view class="detail">{{mapItems[n][1]}}</view>
		</view>
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
		data () {
			return {
        tradeid: '', // 订单id
        titles: ['支付金额', '订单编号', '支付时间', '支付信用卡', '到账储蓄卡', '支付通道名称', '支付费率', '到账金额', '交易状态'],
				items: {
          payAmount: '100.00',
          orderNum: '12345868583521251651',
          create_time: '2021-6-11 20:30:44',
          payCreditCard: '平安银行（尾号4456）',
          arrivalCashCard: '交通银行（尾号3342）',
          payChannel: '支付通道名称',
          amount: '0.48+2.00（红包抵扣0.1元）',
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
			if (str.hasOwnProperty('item')) {
        let obj = JSON.parse(str.item)
      }
			if (str.hasOwnProperty('tradeid')) {
         this.tradeid = str.tradeid
      }
      this.getDetail(this.items)
		},
		methods: {
      getDetail (obj) {
        Request(
          api.noticeDetail, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: {
              token: 'dfe0d851-919b-4db0-9dbe-4ea91419d95a',
              noticeId: this.tradeid
            },
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
           let data = res.data
           obj.create_time = data.create_time
           if (typeof(data.content) !== 'string') {
             obj.amount = data.content.amount
           }
        })
      }
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
