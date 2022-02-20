<template>
	<view class="form-wrapper">
		<uni-forms  ref="form" :modelValue="form" validate-trigger="bind">
			<uni-forms-item name="cell" label="手机号">
				<!-- uni-easyinput 的校验时机是数据发生变化， 即触发 input 时 -->
				<uni-easyinput style="border: 0px;" v-model="form.cell" type="text" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item  name="yzm" label="验证码">
				<uni-easyinput v-model="form.vertifacode" type="text" placeholder="请输入验证码" />
				<c-timer-btn style="margin-top:10px;" @run="uptet" ref="timer"></c-timer-btn>
			</uni-forms-item>
			<button style="width:90%;margin:0 auto;background:#F98038;color: #fff;margin-top: 200rpx;" @click="submit">下一步</button>
		</uni-forms>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				form: {
					cell: '',
					vertifacode: ''
				}
			}
		},
		methods: {
			// 发送验证码
			uptet(){
			    this.$refs.timer.start()
			},
			// 提示消息框
			toast (text) {
				uni.showToast({
					title: text,
					icon: 'none',
					duration: 2000
				});
			},
			checkRegister () {
				// 手机号正则
				let myreg = /^[0-9]{11}$/;
				// 手机号非空校验
				if (this.form.cell === '') {
					this.toast('手机号不能为空')
					return false
				}
				// 手机号正则校验
				if (!myreg.test(this.form.cell)) {
					this.form.cell = ''
					this.toast('请输入正确的手机号')
				    return false
				}
				// 验证码校验
				if (this.form.vertifacode === '') {
					this.form.vertifacode = ''
					this.toast('验证码不能为空')
				}
				return true
			},
			submit () {
				if (this.checkRegister()) {
					this.toast('保存成功')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.form-wrapper {
		position: relative;
		top: 10rpx;
		width: 90%;
		margin: 0 auto;
	}
</style>
