<script>
	import { mapMutations } from 'vuex'
    export default {
        onLaunch: function() {

            console.log('App Launch');
            // #ifdef APP-PLUS
            // App平台检测升级，服务端代码是通过uniCloud的云函数实现的，详情可参考：https://ext.dcloud.net.cn/plugin?id=2226
			/* if(plus.runtime.appid !== 'HBuilder')
			{ // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
				uni.request({
				    url: 'https://7a3e3fa9-7820-41d0-be80-11927ac2026c.bspapp.com/http/update', //检查更新的服务器地址
				    data: {
				        appid: plus.runtime.appid,
				        version: plus.runtime.version,
				        imei: plus.device.imei
				    },
				    success: (res) => {
				        if (res.statusCode == 200 && res.data.isUpdate) {
				            // 提醒用户更新
				            uni.showModal({
				                title: '更新提示',
				                content: res.data.note ? res.data.note : '是否选择更新',
				                success: (ee) => {
				                    if (ee.confirm) {
				                        plus.runtime.openURL(res.data.url);
				                    }
				                }
				            })
				        }
				    }
				})
			} */

			// 检测升级开始
			// const data = {
			//   appid: plus.runtime.appid,
			//   version: plus.runtime.version,
			//   versionCode: plus.runtime.versionCode
			// };
			// console.log(data);
			uni.request({
			  url: 'http://api.youhujun.com/api/v1/app/update', // 检查更新的服务器地址
			  data: {
			    appid: plus.runtime.appid,
			    version: plus.runtime.version,
			    versionCode: plus.runtime.versionCode
			  },
			  success: res => {
			    console.log(res);
			    if (res.statusCode === 200 && res.data.isUpdate) {
            console.log('进入这里')
			      const installUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
			      const openUrl = plus.os.name === 'iOS' ? res.data.iOSAll : res.data.AndroidAll;
			      // 默认是热跟新
			      const newType = 1;
            console.log(res.data.code)
			      if (res.data.code === 200) {
			        // 提醒用户更新
			        uni.showModal({
			          title: '更新提示',
			          content: res.data.note ? res.data.note : '是否选择更新',
			          success: showResult => {
			            if (showResult.confirm) {
			              if (newType === 1) {
			                // 热更新
			                uni.showLoading({ title: '正在下载中...', mask: true });

			                uni.downloadFile({
			                  url: installUrl,
			                  success: downloadRes => {
			                    if (downloadRes.statusCode === 200) {
			                      uni.hideLoading();
			                      plus.runtime.install(
			                        downloadRes.tempFilePath,
			                        { force: true },
			                        () => {
			                          plus.runtime.restart();
			                        },
			                        e => {
			                          console.log(e.message);
			                          uni.showToast({
			                            title: e.message,
			                            icon: 'none',
			                            duration: 3000
			                          });
			                        }
			                      );
			                    }
			                  }
			                });
			              } else {
			                // 整包升级
			                uni.showLoading({ title: '正在下载中...', mask: true });

			                uni.downloadFile({
			                  url: openUrl,
			                  success: downloadRes => {
			                    if (downloadRes.statusCode === 200) {
			                      uni.hideLoading();
			                      plus.runtime.openURL(
			                        downloadRes.tempFilePath,
			                        { force: true },
			                        () => {
			                          plus.runtime.restart();
			                        },
			                        e => {
			                          console.log(e.message);
			                          uni.showToast({
			                            title: e.message,
			                            icon: 'none',
			                            duration: 3000
			                          });
			                        }
			                      );
			                    }
			                  }
			                });
			              }
			            }
			          }
			        });
			      }
			    }
			  }
			});

			//检测升级结束

			// 一键登录预登陆，可以显著提高登录速度
			uni.preLogin(
			{
				provider: 'univerify',
				success: (res) =>
				{
					// 成功
					this.setUniverifyErrorMsg();
					console.log("preLogin success: ", res);
				},
				fail: (res) =>
				{
					this.setUniverifyLogin(false);
					this.setUniverifyErrorMsg(res.errMsg);
					// 失败
					console.log("preLogin fail res: ", res);
				}
			})
            // #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: ''
		},
		methods:{
			...mapMutations(['setUniverifyErrorMsg','setUniverifyLogin'])
		}
    }
</script>

<style lang="scss">
	/*每个页面公共css */
	 @import '@/styles/common.scss';
	 @import "uview-ui/index.scss";
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

	::-webkit-scrollbar {
	    display: none;
	    width: 0 !important;
	    height: 0 !important;
	    -webkit-appearance: none;
	    background: transparent;
	}



	/* H5 兼容 pc 所需 */
	/* #ifdef H5 */
	@media screen and (min-width: 768px) {
		body{
			overflow-y: scroll;
		}
	}

	 /* 顶栏通栏样式 */
	/* .uni-top-window {
	    left: 0;
	    right: 0;
	} */

	uni-page-body {
		background-color: #F0F0F0 !important;
		min-height: 100% !important;
		height: auto !important;
	}

	.uni-top-window uni-tabbar .uni-tabbar {
		background-color: #fff !important;
	}

	.uni-app--showleftwindow .hideOnPc {
		display: none !important;
	}
	/* #endif */

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: #efeff4;
        height: 100%;
        font-size: 28rpx;
        line-height: 1.8;
    }
	.fix-pc-padding {
		padding: 0 ;
	}
    .uni-header-logo {
        padding: 30rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10rpx;
    }

    .uni-header-image {
        width: 100px;
        height: 100px;
    }

    .uni-hello-text {
        color: #7A7E83;
    }

    .uni-hello-addfile {
        text-align: center;
        line-height: 300rpx;
        background: #FFF;
        padding: 50rpx;
        margin-top: 10px;
        font-size: 38rpx;
        color: #808080;
    }
    /* #endif*/
</style>
