<template>
	<view class="page_wrapper">
		<view class="title">
			您好,
			<br>
			欢迎使用乐易生活
		</view>
		<view class="login_form">
			<view class="form_item">
				<text>手机号</text>
				<view class="input_wrapper">
					<uni-easyinput placeholder="请输入您的手机号" type="text" v-model="form.cell" />
				</view>
			</view>
			<view class="form_item">
				<text>密码</text>
				<view class="input_wrapper">
					<uni-easyinput  type="password" placeholder="请输入您的密码"  v-model="form.pwd" />
				</view>
			</view>
			<view class="forget" @click="goForgetPassword">忘记密码?</view>
			<view @click="goCertification" class="login_btn operation_btn">登录</view>
			<view @click="goRegister" class="register_btn operation_btn">注册</view>
		</view>
	</view>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
		name: 'Register',
		data() {
			return {
				form: {
					cell: '',
					pwd: ''
				}
			};
		},
    computed:{
      ...mapGetters(['userInfo', 'token'])
    },
		methods: {

      ...mapActions({
        // #ifdef H5 || APP-PLUS
        getToken: 'auth/getToken',
        // #endif
      }),
			// 登录校验  return Boolean
			checkLogin () {
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				// 非空校验
				if (this.form.cell === '') {
					this.toast('手机号不能为空')
					return false
				}
				// 密码校验
				if (this.form.pwd === '') {
					this.toast('请输入密码')
					return false
				}
				// 手机号正则校验
				if (!myreg.test(this.form.cell)) {

					this.form.cell = ''
					this.toast('请输入正确的手机号')
				    return false
				}
				return true
			},
			// 提示消息框
			toast (text) {
				uni.showToast({
					title: text,
					icon: 'none',
					duration: 2000
				});
			},
			goRegister() {
				uni.navigateTo({
					url: './register'
				})
			},
			goForgetPassword() {
				uni.navigateTo({
					url: './forgetPassword'
				})
			},
			goCertification()
      {
          if (this.checkLogin())
          {
              const param =
              {
                 mobile:this.form.cell,
                 password:this.form.pwd,
              }

              this.getToken(param).then((res) =>
              {
                       //console.log(res)
                       uni.setStorageSync('userAccount', param);

                       if(res.code==1)
                       {
                           if(res.auth)
                           {
                              uni.switchTab({url:'/pages/home/home'})
                           }
                           else
                           {
                              uni.navigateTo({
                                 url: './certification'
                               })
                           }
                       }
              });
          }
			}
		},
    onShow()
    {

    }
	}
</script>

<style lang="scss" scoped>
	.page_wrapper {

		.title {
			height: 498rpx;
			padding: 0 94rpx;
			box-sizing: border-box;
			background: linear-gradient(135deg, #F97D35 0%, #FFB660 100%);
			border-radius: 0rpx 0rpx 72rpx 72rpx;
			display: flex;
			align-items: center;
			font-size: 48rpx;
			color: #FFF;
		}
		.login_form {
			padding: 0 94rpx;
			box-sizing: border-box;
			.form_item {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 26rpx 0;
				box-sizing: border-box;
				height: 162rpx;
				border-bottom: 1rpx solid #E9E9E9;
				margin-bottom: 20rpx;
				text {
					font-size: 36rpx;
					color: #333;
					font-weight: bold;
				}
				.input_wrapper {
					display: flex;
					justify-content: space-between;
					font-size: 28rpx;
					color: #dadada;

					image {
						width: 48rpx;
						height: 48rpx;
					}

				}

			}

			.forget {
				font-size: 24rpx;
				color: #adadad;
				margin-bottom: 100rpx;
			}

			.operation_btn {
				height: 116rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				margin-bottom: 40rpx;
				border-radius: 50px;
				font-weight: 550;
			}
			.login_btn {
				background: #F98038;
				color: #FFF;
			}
			.register_btn {
				background: #F5F6FA;
				color: #333;
			}

		}

	}
</style>
