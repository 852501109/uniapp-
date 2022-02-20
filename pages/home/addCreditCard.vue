<template>
	<view>
		<view class="forms">
			<u-form ref="uForm" label-width="200rpx">
				<u-form-item label="持卡人:">
					<u-input placeholder="张三" v-model="form.card_name" />
				</u-form-item>
				<u-form-item style="justify-content: center;" label="银行卡号:">
					<u-input placeholder="请输入银行卡号" v-model="form.card_no" />
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.QR_CODE" mode=""></image>
					</view>
				</u-form-item>
				<u-form-item style="justify-content: center;" label="发卡行:">
					<u-input placeholder="请选择发卡银行" disabled v-model="form.card_bank" />
					<view class="icon_back" @click="toBankSelect">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
				</u-form-item>

				<u-form-item label="安全码:">
					<u-input placeholder="信用卡背后CV2后三位数字" v-model="form.card_vv2" />
				</u-form-item>
				<u-form-item label="卡片额度:">
					<u-input placeholder="请输入信用卡额度" v-model="form.card_quota" />
				</u-form-item>
				<u-form-item style="justify-content: center;" label="账单日:">
					<uni-datetime-picker style="width: 100%;!important" type="date" :border="false" v-model="form.card_billdate"></uni-datetime-picker>
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
				</u-form-item>
				<u-form-item style="justify-content: center;" label="还款日:">
					<uni-datetime-picker style="width: 100%!important;" type="date" :border="false" v-model="form.card_exp"></uni-datetime-picker>
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
					<!-- <u-input placeholder="请选择信用卡还款日" v-model="addCardData.dueDate" />
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" src="../../static/c5.png" mode=""></image>
					</view> -->
				</u-form-item>

				<u-form-item label="有效期:">
					<u-input placeholder="请输入信用卡有效期 如:09/22" v-model="form.exp" />
				</u-form-item>
				<u-form-item label="预留手机:">
					<u-input placeholder="请输入银行预留手机号" v-model="form.card_phone" />
				</u-form-item>
			</u-form>

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
		
		<image style="width: 100%;height: 400rpx;margin-bottom: 40rpx;"  mode="aspectFill" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F06%2F20140906020558_h4VfY.png&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634449&t=d129048afdcb3f5fb96a0d24b5772992"></image>
		
	</view>
</template>

<script>
	import {
		QR_CODE,
		RIGHT_ARROWS,
		CLOSE
	} from '@/config/icons'
	import {
		Request
	} from '@/utils';
	import api from '@/config/api';
	export default {
		data() {
			return {
				codeShow: false, // 验证码弹窗
				// 表单项
				form: {
					card_name: '', // 持卡人
					card_no: '', // 银行卡号
					card_bank: '', // 发卡行
					card_vv2: '', // 安全码
					card_quota: '', // 卡片额度
					card_billdate: '', // 账单日
					card_exp: '', // 还款日
					exp: '', // 有效期
					card_phone: '', // 预留手机
					// idcard: '', // 身份证
				},
				type: 2,
				sms_code: '', // 短信验证码
				user_bankid: '', // 银行 ID
				// 非空校验
				toastMsg: {
					card_name: '请填写持卡人',
					card_no: ' 请填写银行卡号',
					card_bank: '请填写发卡行',
					card_vv2: '请填写安全码',
					card_quota: '请填写卡片额度',
					card_billdate: '请选择账单日',
					card_exp: '请选择还款日',
					exp: '有效期不能为空',
					card_phone: ' 请填写预留手机'
				},
				icon: {
					RIGHT_ARROWS: RIGHT_ARROWS,
					QR_CODE: QR_CODE,
					close: CLOSE
				},
				token: '',
			}
		},
		onLoad() {

		},
		onShow() {
			let bankInfo = uni.getStorageSync('bankInfos');
			this.user_bankid = bankInfo.bankId;
			this.form.card_bank = bankInfo.bankName;
			// console.log(this.)
		},
		methods: {
			// 提示消息框
			toast(text) {
				uni.showToast({
					title: text,
					icon: 'none'
				});
			},
			// 注册校验  return Boolean
			checkAdd() {
				// 所有表单非空校验
				let _this = this
				let isFalse = false
				let keys = Object.keys(this.form)
				for (let i = 0; i < keys.length; i++) {
					let key = keys[i]
					if (_this.form[key] === '') {
						_this.toast(_this.toastMsg[key])
						return
					}
				}
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				// 手机号正则校验
				if (!myreg.test(this.form.card_phone)) {
					this.form.card_phone = ''
					this.toast('请输入正确的预留手机')
					return
				}
				// 有效期正则
				let datereg = /^\d{2}\/\d{2}$/
				if (!datereg.test(this.form.exp)) {
					this.form.exp = ''
					this.toast('请规范输入有效期')
					return
				}
				return true
			},
			toBankSelect() {
				uni.navigateTo({
					url: './bankSelectList?card_type=' + 2
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
				forms.user_bankid = this.user_bankid;
				this.sms_code = e;
				forms.sms_code = e;
				forms.token = this.token;
				let str = JSON.stringify(forms);
				Request(
						api.addBankCard, {
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
			}
		},
	}
</script>

<style lang="scss" scoped>
	.picker_wrapperr {
		flex: 1;
		display: flex;
		align-items: center !important;
		padding: 0 !important;

		.uni-input {
			padding: 0 !important;
			color: #adadad;
		}
	}

	page {
		background-color: #FFF !important;
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
		margin-top: 80rpx;
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
