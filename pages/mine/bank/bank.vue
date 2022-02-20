<template>
	<view>
    <u-navbar title-color="#333" :back-text="configure.title" :is-back="true" :is-fixed="true" :border-bottom="false">
    </u-navbar>
		<c-tab @change="toClick"></c-tab>
    <view v-show="!tabActive">
      <view  v-for="(i, n) in getCreditCardList" :key="n">
        <c-bank-card-list-item :cardBankInfo="i.cardBankInfo" @change="toCreditInfo"></c-bank-card-list-item>
      </view>
    </view>
		<view v-show="tabActive">
      <view  v-for="(i, n) in getCashCardList"  :key="n">
        <c-bank-card-list-item :cardBankInfo="i.cardBankInfo" @change="toBankInfo"></c-bank-card-list-item>
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
        getCreditCardList: [
          {cardBankInfo: '信用卡'},
          {cardBankInfo: '信用卡'},
          {cardBankInfo: '信用卡'}
        ],
        getCashCardList: [
          {cardBankInfo: '储蓄卡'},
          {cardBankInfo: '储蓄卡'},
          {cardBankInfo: '储蓄卡'}
        ],
        configure: {
          title: '卡片管理'
        },
        tabActive: 0,
			}
		},
		methods:{
      getBankList () {
        Request(
          api.bankList, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: obj,
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
            console.log(res)
        })
      },
			toClick(data){
         this.tabActive = data.index
			},
      toCreditInfo () {
        uni.navigateTo({
          url: './creditCardInfo'
        })
      },
      toBankInfo () {
        uni.navigateTo({
          url: './bankInfo'
        })
      }
		},
	}
</script>

<style scoped lang="scss">

</style>
