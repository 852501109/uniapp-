<template>
	<view>
		<view class="forms">
			<view class="items">
				<view class="items_left">
					<text>手机号</text>
				</view>
				<view class="items_content">
					<uni-easyinput @input="btnIsGray"  :placeholderStyle="placeholderStyle.cell" placeholder="请输入您的手机号" v-model="form.cell"  type="text" />
				</view>
			</view>
			<view class="items">
				<view class="items_left">
					<text>验证码</text>
				</view>
				<view class="items_content">
					<uni-easyinput @input="btnIsGray"  :placeholderStyle="placeholderStyle.vertifacode" placeholder="请输入验证码" v-model="form.vertifacode"  type="text" />
				</view>
				<view class="items_right">
					<c-timer-btn  style="top: -30rpx;"  @run="uptet" ref="timer"></c-timer-btn>
				</view>
			</view>
			
			<view class="items">
				<view class="items_left">
					<text>密码</text>
				</view>
				<view class="items_content">
					<uni-easyinput @input="btnIsGray"  :placeholderStyle="placeholderStyle.pwd" placeholder="请输入密码(8-16位字母或者数字)" v-model="form.pwd"  type="password" />
				</view>
			</view>
			
			<view class="items">
				<view class="items_left">
					<text>确认密码</text>
				</view>
				<view class="items_content">
					<uni-easyinput @input="btnIsGray"  :placeholderStyle="placeholderStyle.checkpwd" placeholder="请再次输入密码" v-model="form.checkpwd" type="password" />
				</view>
			</view>
			
			<view class="save_btn" :style="{'background': gray}"  @click="save">
				保存
			</view>
		</view>

		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				gray: '#bbb',
				form: {
					cell: '',
					vertifacode: '',
					pwd: '',
					checkpwd: ''
				},
				placeholderStyle: {
					cell: '',
					vertifacode: '',
					pwd: '',
					checkpwd: ''
				}
			}
		},
		methods: {
			// 发送验证码
			uptet () {
				this.$refs['timer'].start()
			},
			// 提示消息框
			toast (text) {
				uni.showToast({
					title: text,
					icon: 'none',
					duration: 2000
				});
			},
			// 提交按钮是否至灰
			btnIsGray () {
				if (this.checkGray()) {
					this.gray = 'bbb'
				} else {
					this.gray = ''
				}
			},
			// 保存
			save () {
				if (this.checkRegister(this.placeholderStyle)) {
					this.toast('保存成功')
				}
			},
			// 是否置灰
			checkGray () {
				let myreg = /^[0-9]{11}$/;
				let obj = this.form
				return !obj.cell || !obj.vertifacode || !myreg.test(obj.cell) || !obj.checkpwd || !obj.pwd || obj.pwd.length < 8 || obj.pwd.length > 10 || obj.checkpwd !== obj.pwd
			},
			// 注册校验  return Boolean
			checkRegister (obj) {
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				let error = 'color:#f00'
				// 手机号正则校验
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
				if (this.form.pwd === '' || this.form.pwd.length < 8 || this.form.pwd.length > 10 ) {
					obj.pwd = error
					this.form.pwd = ''
				} else {
					obj.pwd = ''
				}
				// 两次密码是否一致校验
				if (this.form.checkpwd !== this.form.pwd) {
					obj.checkpwd = error
					this.form.checkpwd = ''
				} else {
					obj.checkpwd = ''
				}
				if (this.checkPlaceholderStyle(obj)) {
					return true
				} else {
					return false
				}
			},
			// 通过placeholder检查是否有红色提示
			checkPlaceholderStyle (obj) {
				return !obj.cell && !obj.pwd && !obj.vertifacode && !obj.invitationCell && !obj.checkpwd 
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.forms {
		padding: 40rpx 32rpx 0 32rpx;
		.items {
			height: 80rpx;
			border-bottom: 1rpx solid #e9e9e9;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 40rpx;
			
			.items_left {
				width: 180rpx;
				font-size: 28rpx;
				color: #333333;
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			.items_content {
				flex: 1;
				input {
					
					font-size: 24rpx;
				}
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
					padding:10rpx  14rpx;
					font-size: 20rpx;
					border-radius: 4rpx;
					border: 1rpx solid #333330;
				}
				
			}
			
		}
		
		
		.save_btn {
			margin-top: 100rpx;
			height: 96rpx;
			background: #F98038;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFF;
			font-size: 28rpx;
		}
		
	}
	
	
	
</style>
