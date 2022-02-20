<template>
	<view class="">
		<view class="headline">
			您好,
			<br>
			欢迎使用乐易生活
		</view>
		<view class="forms">
			<view class="forms_items">
				<view class="items">
					<view class="items_left">
						<image src="../../static/home_ketang_1x.png" mode=""></image>
					</view>
					<view class="items_content">
						<uni-easyinput @input="btnIsGray"  :placeholderStyle="placeholderStyle.cell" placeholder="请输入您的手机号" v-model="form.cell" type="text" />
					</view>
				</view>
				<view class="items">
					<view class="items_left">
						<image src="../../static/home_ketang_1x.png" mode=""></image>
					</view>
					<uni-easyinput @input="btnIsGray" :placeholderStyle="placeholderStyle.vertifacode" placeholder="请输入验证码" v-model="form.vertifacode" type="text" />
					<view class="items_right">
						<c-timer-btn style="width: 130rpx;height: 50rpx;line-height: 50rpx;margin-top: -10rpx;"
							@run="uptet" ref="timer"></c-timer-btn>
					</view>
				</view>
				<view class="items">
					<view class="items_left">
						<image src="../../static/home_ketang_1x.png" mode=""></image>
					</view>
					<view class="items_content">
						<uni-easyinput @input="btnIsGray" :placeholderStyle="placeholderStyle.pwd" placeholder="请输入8-16位密码" :passwordIcon="false"
							v-model="form.pwd" type="password" />
					</view>
				</view>
				<view class="items">
					<view class="items_left">
						<image src="../../static/home_ketang_1x.png" mode=""></image>
					</view>
					<view class="items_content">
						<uni-easyinput @input="btnIsGray" :placeholderStyle="placeholderStyle.invitationCell" placeholder="请输入邀请人手机号" v-model="form.invitationCell"
							type="text" />
					</view>
				</view>
				<view class="deal">
					<view class="items_left">
						<image src="../../static/home_ketang_1x.png" mode=""></image>
					</view>
					<view class="items_content">
						<view>
							<checkbox @click="readMakeSure" :checked="isChecked"></checkbox>我已阅读并同意<text @tap="toSee">《用户协议》</text>
						</view>
					</view>
				</view>
				<view class="register_btn" :style="{'background': gray}" @click="register()">
					注册
				</view>
			</view>
			<view class="footer">
				已有账号?<text>
					<navigator url="./login">密码登录</navigator>
				</text>
			</view>
		</view>
	</view>
</template>
<script>
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
		data() {
			return {
				formcell: '',
				gray: '#bbb',
				isChecked: false, // 协议阅读状态
				form: {
					cell: '',
					vertifacode: '',
					pwd: '',
					invitationCell: ''
				},
				placeholderStyle: {
					cell: '',
					vertifacode: '',
					pwd: '',
					invitationCell: ''
				},
				background: {
					background: '#F98038'
				},
				color: {
					color: "#FFF"
				}
			}
		},
		methods: {
			uptet() {
				this.$refs['timer'].start()
			},
			// 阅读协议勾选
			readMakeSure() {
				this.isChecked = !this.isChecked
				this.btnIsGray()
			},
			// 校验注册按钮是否至灰
			btnIsGray() {
				/* console.log(this.checkGray()) */

				if (!this.checkGray()) {
					this.gray = ''
				} else {
					this.gray = '#bbb'
				}
			},
			// 提示消息框
			toast(text) {
				uni.showToast({
					title: text,
					icon: 'none',
					duration: 2000
				});
			},
			// 是否置灰，根据判断表单值是否合法
			checkGray () {
				let myreg = /^[0-9]{11}$/;
				let obj = this.form
				return !obj.cell || !myreg.test(obj.cell) || !obj.vertifacode || !obj.pwd || obj.pwd.length < 8 || obj.pwd.length > 10 || !obj.invitationCell || !myreg.test(obj.invitationCell) || !this.isChecked
			},
			// 注册校验  return Boolean 返回最终是否通过校验 obj：placeholder样式
			checkRegister(obj) {
				let error = 'color:#f00'
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				// 手机号校验
				console.log(!myreg.test(this.form.cell))
				if (this.form.cell === '' || !myreg.test(this.form.cell)) {
					obj.cell = error
					this.form.cell = ''
				} else {
					obj.cell = ''
				}
				// 验证码校验
				if (this.form.vertifacode === '') {
					obj.vertifacode = error
				} else {
					obj.vertifacode = ''
				}
				// 密码校验
				if (this.form.pwd === '' || this.form.pwd.length < 8 || this.form.pwd.length > 10) {
					obj.pwd = error
					this.form.pwd = ''
				} else {
					obj.pwd = ''
				}
				// 邀请人手机号校验
				if (this.form.invitationCell === '' || !myreg.test(this.form.invitationCell)) {
					obj.invitationCell = error
					this.form.invitationCell = ''
				} else {
					obj.invitationCell = ''
				}
				// 协议校验
				if (!this.isChecked) {
					return false
				}
				// 最后根据是否提示信息判断返回值
				if (this.checkValue(obj)) {
					return true
				} else {
					return false
				}
			},
			// 通过placeholder检查是否有空值
			checkValue (obj) {
				return !obj.cell && !obj.pwd && !obj.vertifacode && !obj.invitationCell
			},
			// 注册
			register() {
				if(this.checkRegister(this.placeholderStyle))
        {

         /* console.log(this.form); */
         /* cell: "15688523140"
          ​
          invitationCell: "13612345661"
          ​
          pwd: "19880703"
          ​
          vertifacode: "1234" */

          const param =
          {
            mobile:this.form.cell,
            password:this.form.pwd,
            inviter_mobile:this.form.invitationCell,
            smscode:this.form.vertifacode,
          }

         /* const param =
          {
             mobile:'15688523140',
             password:'111111',
             inviter_mobile:'13612345661',
             smscode:'1234',

          } */

           Request(
            api.register,
            {
                //请求类型 get||post
                method: 'post',
                //传参
                data:param,
                //是否显示加载
                showLoading: false ,
            })
           .then(res=>
           {
                console.log(res)

                if(res.code == 0)
                {
                  this.toast(res.msg)
                    setTimeout(() => {
                      uni.navigateTo({
                        url: './login'
                      })
                    }, 1000)
                 }
           })

				}
			},
     toSee()
     {
        console.log('查看协议');
        uni.navigateTo({
          url:'/pages/login/userAgreement'
        })
     }

		},
    onLoad()
    {


    }
	}
</script>

<style lang="scss" scoped>
	.headline {
		height: 368rpx;
		background-color: #F98038;
		padding: 100rpx 94rpx 0 94rpx;
		font-size: 48rpx;
		font-weight: 600;
		color: #FFFFFF;
		box-sizing: border-box;
	}

	.forms {
		position: fixed;
		top: 440rpx;
		background-color: #FFF;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 72rpx 72rpx 0rpx 0rpx;
		padding: 0 94rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.forms_items {

			.items {
				height: 80rpx;
				border-bottom: 1rpx solid #e9e9e9;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40rpx;

				.items_left {
					width: 48rpx;
					height: 48rpx;
					margin-right: 26rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.items_content {
					flex: 1;
				}

				.items_right {
					position: relative;
					display: flex;
					justify-content: flex-end;
					align-items: center;

					image {
						height: 48rpx;
						width: 48rpx;
					}

					text {
						padding: 10rpx 14rpx;
						font-size: 20rpx;
						border-radius: 4rpx;
						border: 1rpx solid #333330;
					}

				}


			}

			.deal {
				display: flex;
				align-items: center;

				.items_left {
					width: 48rpx;
					height: 48rpx;
					margin-right: 26rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.items_content {
					flex: 1;
					font-size: 24rpx;
					color: #adadad;

					text {
						color: #007AFF !important;
					}
				}
			}

			.register_btn {
				margin-top: 60rpx;
				width: 100%;
				height: 80rpx;
				background-color: #f98038;
				border-radius: 50rpx;
				font-size: 32rpx;
				color: #FFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}

		}
		.footer {
			position: absolute;
			bottom: 60rpx;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
			font-size: 28rpx;
			color: #ADADAD;
			text {
				color: #3685FF !important;
			}
		}

	}
</style>
