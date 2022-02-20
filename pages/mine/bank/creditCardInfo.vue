<template>
	<view>
		<view class="forms">
			<u-form ref="uForm" label-width="200rpx">
				<u-form-item label="持卡人:">
					<u-input disabled placeholder="持卡人"  v-model="form.cardholder" />
				</u-form-item>
				<u-form-item style="justify-content: center;" label="银行卡号:">
					<u-input disabled placeholder="请输入银行卡号"  v-model="form.bankCardNumber" />
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.QR_CODE" mode=""></image>
					</view>
				</u-form-item>
				<u-form-item style="justify-content: center;" label="发卡行:">
					<u-input disabled placeholder="请选择发卡银行"  v-model="form.cardIssuingBank" />
					<view class="icon_back" @click="toBankSelect" v-if="form.cardIssuingBank === ''">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
				</u-form-item>

				<u-form-item label="安全码:">
					<u-input placeholder="信用卡背后CV2后三位数字" v-model="form.safetyCodec" />
				</u-form-item>
				<u-form-item label="卡片额度:">
					<u-input placeholder="请输入信用卡额度" v-model="form.cardQuota" />
				</u-form-item>
				<u-form-item style="justify-content: center;" label="账单日:">
					<uni-datetime-picker type="date"  v-model="form.billingDday"></uni-datetime-picker>
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
				</u-form-item>
				<u-form-item style="justify-content: center;" label="还款日:">
					<uni-datetime-picker type="date" v-model="form.repaymentDate"></uni-datetime-picker>
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" :src="icon.RIGHT_ARROWS" mode=""></image>
					</view>
					<!-- <u-input placeholder="请选择信用卡还款日" v-model="addCardData.dueDate" />
					<view class="icon_back">
						<image style="width: 48rpx; height: 48rpx;" src="../../static/c5.png" mode=""></image>
					</view> -->
				</u-form-item>

				<u-form-item label="有效期:">
					<u-input placeholder="请输入信用卡有效期 如:09/22" v-model="form.termOfValidity" />
				</u-form-item>
				<u-form-item label="预留手机:">
					<u-input placeholder="请输入银行预留手机号" v-model="form.reservedMobilePhone" />
				</u-form-item>
			</u-form>

			<view class="save_btn" @click="add">确认修改</view>


		</view>



	</view>
</template>

<script>
	import {
		QR_CODE, RIGHT_ARROWS
	} from '@/config/icons'

	export default {
		data () {
			return {
				// 表单项
				form: {
					cardholder: '张三', // 持卡人
					bankCardNumber: '99988822233344411113333', // 银行卡号
					cardIssuingBank: '中国民生银行' ,// 发卡行
					safetyCodec: '', // 安全码
					cardQuota: '', // 卡片额度
					billingDday: '', // 账单日
					repaymentDate: '', // 还款日
					termOfValidity: '', // 有效期
					reservedMobilePhone: '' // 预留手机
				},
				// 非空校验
				toastMsg: {
					cardholder: '请填写持卡人',
					bankCardNumber: ' 请填写银行卡号',
					cardIssuingBank: '请填写发卡行',
					safetyCodec: '请填写安全码',
					cardQuota: '请填写卡片额度',
					billingDday: '请选择账单日',
					repaymentDate: '请选择还款日',
					termOfValidity: '有效期不能为空',
					reservedMobilePhone: ' 请填写预留手机'
				},
				icon: {
					RIGHT_ARROWS: RIGHT_ARROWS,
					QR_CODE: QR_CODE
				}
			}
		},
		onLoad (str) {
			if (!str.hasOwnProperty('bank')) return
			let obj = JSON.parse(str.bank)
			this.form.cardIssuingBank = obj.name
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
				if (!myreg.test(this.form.reservedMobilePhone)) {
					this.form.reservedMobilePhone = ''
					this.toast('请输入正确的预留手机')
				    return
				}
				// 有效期正则
				let datereg = /^\d{2}\/\d{2}$/
				if (!datereg.test(this.form.termOfValidity)) {
					this.form.termOfValidity = ''
					this.toast('请规范输入有效期')
				    return
				}
				return true
			},
			toBankSelect () {
				uni.navigateTo({
					url: './bankSelectList'
				})
			},
			add () {
				if (this.checkAdd()) {
					this.toast('修改成功')
				}
			}
		},
		onLoad() {
			var a = [{
				a: 123
			}, 23, 4]
			console.log(...a)
		}
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
</style>
