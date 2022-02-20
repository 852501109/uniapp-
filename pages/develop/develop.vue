<!--
 * @Descripttion:
 * @version:
 * @Author: YouHuJun
 * @Date: 2021-06-21 15:51:38
 * @LastEditors: YouHuJun
 * @LastEditTime: 2021-06-21 18:11:06
-->
<template>
	<view class="box">

		 <!-- <c-bank-card-list-item @change="toClick"></c-bank-card-list-item> -->
	    <!-- <dev></dev> -->
		<!-- <c-dev></c-dev> -->
		<!-- <c-tab @change="toClick"></c-tab> -->
		<!-- <c-total-list-line></c-total-list-line> -->
		 <!-- <c-year-month-select></c-year-month-select> -->

		<button class="button" type="primary" @click="toggle()"><text class="button-text">底部</text></button>
		<view>
			<!-- 普通弹窗 -->
			<!-- <uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
                    <view class="pop-box">
						<c-share-list-item  @change="toChange"></c-share-list-item>
						<c-share-list-item  @change="toChange"></c-share-list-item>
						<c-share-list-item  @change="toChange"></c-share-list-item>
                    </view>
                </view>
			</uni-popup> -->
			<c-share  :status="status"></c-share>
		</view>
	</view>
</template>
<script>
	//import bankCardListItem from '@/custom/bank-card-list-item/index.vue';
	//import dev from '@/custom/dev.vue';
 /* import { Request } from '@/utils';
 import api from '@/config/api'; */
	export default {
		components: {
			//dev
			//bankCardListItem
		},
		data() {
			return {
				msg:'我是开发页面',
				//type: 'center',
				status:false
			};
		},
		methods:{
			toClick()
			{
				console.log('接收数据')
			},

			toggle()
			{
				this.status = true

				console.log(this.status)

				this.vueEvent.$emit('open',this.status);

        let that = this

        this.vueEvent.$on('close',function(data)
        {
             console.log('要关闭了')
             that.status = false
        });
			},

		},
		onShow()
		{

        /* Request(
         api.testAPi,
         {
           //请求类型 get||post
           method: 'post',
           //传参
           data:
           {userName:'测试'},
           //是否显示加载
           showLoading: false ,
         })
        .then(res=>
        {
             console.log(res)
        }) */


		}
	}
</script>

<style scoped lang="scss">
.box{
	width:750rpx;
	height:auto;

	.popup-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0;
		height: 50rpx;
		background-color: #fff;
	}

	.popup-height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		width: 200rpx;
	}
	.pop-box{
		width: 750rpx;
		height: 854rpx;
		background: #FFFFFF;
		border-radius: 16rpx 16rpx 0rpx 0rpx;

	}
}
</style>
