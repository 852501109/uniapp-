<template>
	<view>
		<view class="forms">
			<u-form ref="uForm" label-width="200rpx">
				<u-form-item label="持卡人:">
					<u-input placeholder="张三"  v-model="form.name" />
				</u-form-item>
				<u-form-item style="justify-content: center;" label="银行卡号:">
					<u-input placeholder="请输入储蓄卡号"  v-model="form.account_number"  />
					<view class="icon_back">
						<image @click="scanCode" style="width: 48rpx; height: 48rpx;" :src="icon.qrCode" mode=""></image>
					</view>
				</u-form-item>
				
				<u-form-item style="justify-content: center;" label="开户行:">
					<u-input placeholder="请选择开户行" disabled   v-model="form.bank_name"   />
					<view class="icon_back" @click="toBankSelect">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.rightArrows" mode=""></image>
					</view>
				</u-form-item>
				<u-form-item style="justify-content: center;" label="预留手机:">
					<u-input placeholder="请输入银行卡预留手机号"  v-model="form.phone"  />
				</u-form-item>
			</u-form>
			<view class="remark">注: 同一张卡每天只能绑定五次， 如果失败请第二天再试。</view>
			<view class="save_btn" @click="verCode">添加</view>
		</view>

		<view class="aisle_dialog" v-show="codeShow" @click.self="codeShow = false">
		
			<view class="verify_card">
				<image @click="codeShow = false" :src="icon.close" mode=""></image>
				<view class="header_title">
					<view>输入短信验证码</view>
					<text>短信验证码已发送至133****7890</text>
				</view>
				<view class="verify" style="margin-bottom: 20rpx;">
					<u-message-input @finish="add" :breathe="true" mode="bottomLine"></u-message-input>
				</view>
			</view>
		
		</view>

	</view>
</template>

<script>
	import {
		QR_CODE, RIGHT_ARROWS
	} from '@/config/icons'
	import {
		Request
	} from '@/utils';
	import api from '@/config/api';
	export default {
		data () {
			return {
				codeShow: false, // 验证码弹窗
				// 表单项
				icon: {
					rightArrows: RIGHT_ARROWS,
					qrCode: QR_CODE
				},
				form: {
					name: '', // 持卡人
					account_number: '', // 银行卡号
					bank_name: '', // 发卡行
					phone: '', // 预留手机
				},
				type: 1,
				sms_code: '', // 短信验证码
				bank_id: '', // 银行 ID
				// 非空校验
				toastMsg: {
					name: '请填写持卡人',
					account_number: ' 请填写银行卡号',
					bank_name: '请填写开户行',
					phone: ' 请填写预留手机'
				},
			}
		},
		onShow() {
			let bankInfo = uni.getStorageSync('bankInfos');
			this.bank_id = bankInfo.bankId;
			this.form.bank_name = bankInfo.bankName;
		},
		methods: {
			// 提示消息框
			toast (text) {
				uni.showToast({
					title: text,
					icon: 'none',
					duration: 2000
				});
			},
			// 注册校验  return Boolean
			checkAdd () {
				// 所有表单非空校验
				let _this = this
				let isFalse = false
				let keys = Object.keys(this.form)
				for (let i=0; i < keys.length; i++) {
					let key = keys[i]
					if (_this.form[key] === '' ) {
						_this.toast(_this.toastMsg[key])
						return
					}
				}
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				// 手机号正则校验
				if (!myreg.test(this.form.phone)) {
					this.form.phone = ''
					this.toast('请输入正确的预留手机')
				    return
				}
				return true
			},
			toBankSelect() {
				uni.navigateTo({
					url: './bankSelectList?card_type=' + 1
				})
			},
			verCode() {
				if (this.checkAdd()) {
					this.codeShow = true;
				}
			},
			add(e) {
				let forms = this.form;
				forms.type = this.type;
				forms.bank_id = this.bank_id;
				this.sms_code = e;
				forms.sms_code = e;
				let str = JSON.stringify(forms);
				Request(
						api.addCard, {
							//请求类型 get||post
							method: 'post',
							//传参
							data: str,
							//是否显示加载
							showLoading: false,
						})
					.then(res => {
						if(res.code == 1) {
							this.toast('添加成功')
							this.codeShow = false;
						} else {
							this.toast(res.msg)
						}
						
					})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FFF!important;
	}
	.forms {
		padding: 0 32rpx;
		box-sizing: border-box;


		.icon_back {
			display: flex;
			justify-content: center;
			align-items: center;
		}

	}

	.remark {
		margin: 20rpx 0;
		color: #adadad;
		font-size: 20rpx;
	}

	.save_btn {
		margin-top: 120rpx;
		height: 96rpx;
		background: #F98038;
		border-radius: 8rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFF;
		font-size: 28rpx;
	}
	
	
	.aisle_dialog {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		padding: 0 34rpx;
	
	
		.verify_card {
			width: 550rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			position: relative;
			padding: 20rpx 42rpx;
	
			>image {
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				width: 48rpx;
				height: 48rpx;
			}
	
			.header_title {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 30rpx;
	
				view {
					margin-top: 40rpx;
					font-size: 32rpx;
					font-weight: 550;
					color: #333330;
					margin-bottom: 20rpx;
				}
	
				text {
					font-size: 20rpx;
					font-weight: 400;
					color: #ADADAD;
				}
			}
		}
	}
	
</style>
