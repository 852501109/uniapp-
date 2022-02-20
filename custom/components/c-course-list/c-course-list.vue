<template>
    <view class="wrapper">
		<view v-if="obj.is_video" class="video">
			<video  :src="obj.video?obj.video:src"></video>
		</view>
		<view v-else class="image">
			<image  src="/static/logo.png"></image>
		</view>
		<view class="title">{{obj.title}}</view>
		<view class="see">{{obj.hits}}</view>
		<view class="content">{{obj.detail}}</view>
    </view>
</template>

<script>
	export default {
		props: {
			obj: {
				type: Object,
				default: {}
			}
		},
	    data() {
	        return {
              isVideo: true,
	            src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4'
	        }
	    },
	    methods: {
	        test: function () {
	            var self = this;
	            uni.chooseVideo({
	                count: 1,
	                sourceType: ['camera', 'album'],
	                success: function (res) {
	                    self.src = res.tempFilePath;
	                }
	            });
	        }
	    }
	}
</script>

<style scoped lang="scss">
	.wrapper {
		position: relative;
		width: 90%;
		margin: 0 auto;
		letter-spacing: 5rpx;
		.video {
			video {
				width: 100%;
				border-radius: 10rpx;
			}
		}
		.title {
			font-size: 30rpx;
		}
		.content {
			width: 96%;
			margin: 0 auto;
			text-indent: 25rpx;
		}
		.see {
			font-size: 14rpx;
			color: #999;
		}
	}
</style>
