<template>
	<view class="dialog-wrapper" v-show="show">
		<view v-show="!resultLoading" >
			<view v-show="!isAddCreditCardShow">
				<uni-transition ref="ani-payment" :show="isPaymentShow"
					:styles="{'position':'absolute', 'bottom':'0', 'width':'100%','height':'0rpx','backgroundColor':'#fff'}">
					<uni-icons class="close" @click="closeempty" type="closeempty" size="30"></uni-icons>
					<uni-list class="payment">
						<uni-list-item title="支付金额"  rightText="980.00元"></uni-list-item>
						<uni-list-item title="支付方式" link="reLaunch" @click="paymentMethod()" :rightText="applyType"></uni-list-item>
					</uni-list>
					<button @click="confirm" class="confirm">确认支付</button>
				</uni-transition>
			</view>
			<view v-show="isAddCreditCardShow" class="add-card">
				<uni-icons class="close" @click="closeempty" type="closeempty" size="30"></uni-icons>
				<view class="uni-list">
					 <radio-group @change="radioChange">
						<label class="bank-list uni-list-cell uni-list-cell-pd" v-for="(i, n) in items" :key="n">
							<image style="width:80rpx;height:80rpx;" src="@/static/logo.png" />
							<text style="margin-left: -350rpx;">{{i.name}}</text>
							<view>
								<!-- <radio :value="i.value" :checked="n === current" /> -->
								<radio :value="i.value" :name="i.name" />
							</view>
						</label>
					</radio-group>
				</view>
				<button @click="addCreditCard" class="confirm">添加信用卡</button>
			</view>
		</view>
		<view class="resultLoading" v-show="resultLoading" ><view>支付结果确认中...</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				show: false, // 容器
				isPaymentShow: true, // 立即支付
				isAddCreditCardShow: false, // 是否添加信用卡
				resultLoading: false, // 确认结果
				applyType: '支付宝', // 支付方式（默认支付宝）
				items: [{
						value: 'ms',
						name: '微信'
					},
					{
						value: 'zs',
						name: '支付宝',
						checked: 'true'
					},
					{
						value: 'ny',
						name: '民生银行'
					}
				],
			}
		},
		methods: {
			// 确认支付
			confirm () {
				let _this = this
				uni.showModal({
					title: '是否完成支付',
					cancelText: '未完成',
					confirmText: '已完成',
					success: function (res) {
						if (res.confirm) {
							_this.resultLoading = true
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/rightsUpgrading/paymentError'
								})
							}, 1500)
							
						} else if (res.cancel) {
							
						}
					}
				})
			},
			// 支付方式
			paymentMethod () {
				this.isAddCreditCardShow = true
			},
			// 重置弹框初始状态
			reset () {
				this.show = false
				this.isPaymentShow = true
				this.isAddCreditCardShow = false
				this.resultLoading =  false
			},
			// 关闭弹框
			closeempty() {
				this.reset()
				this.run('0', 'ani-payment')
			},
			// 打开框
			open() {
				this.reset() // 先重置
				this.show = true
				this.run('900rpx', 'ani-payment')
			},
			// 单选按钮事件
			radioChange (e) {
				let data = this.items
				for (let i = 0; i < data.length; i++) {
					if (data[i].value === e.detail.value) {
						this.open()
						this.applyType = data[i].name
						return
					}
				}
				this.applyType = e.name
			},
			run(n, id) {
				this.$refs[id].step({
					height: n
				}, {
					timingFunction: 'linear',
					duration: 200
				})
				// 开始执行动画
				this.$refs[id].run(() => {
					console.log('动画支持完毕')
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.dialog-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 10;
		.uni-list {
			margin-top: 100rpx;
		}
		.resultLoading {
			position: relative;
			top: 20%;
			width: 500rpx;
			height: 300rpx;
			background: #fff;
			margin: 0 auto;
			view {
				position: relative;
				top: 30%;
				margin: 0 auto;
				text-align: center;
			}
		}
		.add-card {
			position: absolute;
			width: 100%;
			height: 900rpx;
			bottom: 0;
			background: #fff;
			.bank-list {
				height: 80rpx;
			}
			button {
				position: absolute;
				bottom: 0;
			}
		}
		.payment {
			margin-top: 100rpx;
		}

		.close {
			position: relative;
			top: 20rpx;
			left: 25rpx;
			float: left;
		}

		.confirm {
			position: absolute;
			width: 100%;
			background: #F98038;
			color: #fff;
			bottom: 0;
		}
	}
</style>
