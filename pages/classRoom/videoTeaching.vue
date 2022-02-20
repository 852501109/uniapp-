<!--
 * @Descripttion:
 * @version:
 * @Author: YouHuJun
 * @Date: 2021-06-25 19:30:03
 * @LastEditors: YouHuJun
 * @LastEditTime: 2021-06-28 11:59:33
-->
<template>
	<!--  视频教学 -->
	<view>
		<view class="video_list_wrapper">
			<view class="video_list" v-for="(i, n) in videoList" :key="n">
				<image src="../../static/logo.png" mode=""></image>
				<view class="omit">{{i.detail}}</view>
				<text>{{i.hits}}次查看</text>
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
				videoList: []
			}
		},
    onLoad () {
      this.getCourseList()
    },
    methods: {
      // 获取视频教学列表
      getCourseList () {
        Request(
          api.videoTeaching, {
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
          this.videoList = res.data
        })
      },
    }
	}
</script>

<style lang="scss" scoped>
	.omit {
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.video_list_wrapper {
		padding: 0 32rpx;
		padding-bottom: 100rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.video_list {
			width: 332rpx;
			margin-bottom: 32rpx;
			image {
				width: 332rpx;
				height: 208rpx;
			}
			view {
				width: 100%;
				font-size: 28rpx;
				color: #333330;
				height: auto;

			}
			text {
				font-size: 24rpx;
				color: #a8a8a8;
			}
		}


	}
</style>
