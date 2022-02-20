<template>
  <view>
    <view class="content">
      <!-- 顶部导航 -->
      <view class="workbench">
        <view v-for="(i, n) in workbenchNav" :key="n" @click="goFastPayment(i.url)">
          <image :src="i.icon?i.icon:require('@/static/logo.png')" mode=""></image>
          <text>{{i.title}}</text>
        </view>
      </view>
      <!-- 视频教学列表 -->
      <!-- <view class="headline" @click="goVideoTeaching">视频教学</view>
			<c-tab @change="toClick"></c-tab> -->
      <c-popular-recommendation :left="'视频教学'" :url="'./videoTeaching'"></c-popular-recommendation>
      <view class="view_content">
        <scroll-view scroll-x="true" class="scroll">
          <view class="box" v-for="(i, n) in videoList" :key="n">
            <image :src="i.icon?i.con:require('@/static/logo.png')" class="images"></image>
            <view class="line_feed omit" style="font-size: 24rpx;color: #333; ">
              {{i.detail.replace(/<[^>]+>/g, '')}}
            </view>
            <view style="font-size: 20rpx; color: #adadad;">
              {{i.hits}}次查看
            </view>
          </view>
        </scroll-view>
      </view>
      <c-popular-recommendation :left="'人气推荐'" :url="'./selectedCourse'"></c-popular-recommendation>
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
    data() {
      return {
        background: {
          background: '#F98038'
        },
        // 人气推荐列表
        recommendCourseList: [],
        // 顶部导航数据
        workbenchNav: [],
        // 视频教学列表
        videoList: []
      }
    },
    onLoad() {
      this.getCategoryList()
      this.getCourseList()
      this.getRecommendCourseList()
    },
    methods: {
      // 获取分类列表
      getCategoryList () {
        Request(
          api.categoryList, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: {
              token: '187e3f04-a30e-4bde-a9ea-bfc45d224f53'
            },
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
          this.workbenchNav = res.data
        })
      },
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
      },
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
          // 保存前三条，其他在更多显示
          this.videoList = res.data.slice(0,3)
        })
      },
      goVideoTeaching() {
        uni.navigateTo({
          url: './videoTeaching'
        })
      },
      goSelectClass() {
        uni.navigateTo({
          url: './selectedCourse'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  page {
    background-color: #FFF !important;
  }

  .omit {
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .content {
    padding: 0 32rpx;

    .workbench {
      height: 216rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 46rpx;
      box-shadow: 0px 4rpx 12rpx 0px rgba(192, 98, 41, 0.04);

      view {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        text {
          font-size: 20rpx;
        }

        image {
          width: 70rpx;
          height: 70rpx;
          border-radius: 50rpx;
          margin-bottom: 16rpx;
        }


      }
    }


    .headline {
      font-size: 32rpx;
      font-weight: 550;
      color: #000000;
      margin: 24rpx 0;
    }

    .view_content {


      .scroll {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;

        .box {
          display: inline-block;
          width: 256rpx;
          height: 270rpx;
          margin-right: 30rpx;

          .line_feed {
            width: 256rpx !important;
            min-height: 120rpx;
            overflow-wrap: break-word;
            white-space: normal;
            font-size: 24rpx;
          }

          image {
            width: 256rpx;
            height: 144rpx;
          }
        }
      }
    }
  }
</style>
