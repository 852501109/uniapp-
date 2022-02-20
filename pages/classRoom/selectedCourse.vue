<!--
 * @Descripttion:
 * @version:
 * @Author: YouHuJun
 * @Date: 2021-06-25 19:30:03
 * @LastEditors: YouHuJun
 * @LastEditTime: 2021-06-28 11:55:40
-->
<template>
	<view class="">
		<view class="bank_list_video">
      <view v-for="(i, n) in recommendCourseList" :key="n">
        <c-registration-process v-bind:obj="i">
        </c-registration-process>
      </view>
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
        // 人气推荐列表
        recommendCourseList: [
          {title: '', detail: '', icon: ''},
          {title: '', detail: '', icon: ''}
        ]
			}
		},
    onLoad () {
      this.getRecommendCourseList()
    },
		methods: {
      // 获取精选课程列表
      getRecommendCourseList () {
        Request(
          api.recommendCourseList, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: {
              token: this.token
            },
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
          this.recommendCourseList = res.data
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
	.bank_list_video {
		padding: 0 32rpx;
		.bank_list {
			display: flex;
			align-items: center;
			margin-bottom: 24rpx;

			image {
				width: 188rpx;
				height: 116rpx;
				margin-right: 20rpx;
			}

			.bank_name {
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: space-around;

				.remark {
					font-size: 24rpx;
					color: #a8a8a8;
				}

				.name {
					font-size: 28rpx;
					color: #333;
					font-weight: 550;
					margin-bottom: 10rpx;
				}


			}
		}
	}

</style>
