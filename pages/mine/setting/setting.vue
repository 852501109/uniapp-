<template>
	<view style="background: #fff;">
		<uni-list>
			<uni-list-item style="height: 120rpx;" @click="itemsEvent(i.type)" :rightText="i.rightText" v-for="(i, n) in items" :key="n"
				:title="i.name" link :to="i.link"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storageSize: '', // 保存缓存
				items: [{
						name: '修改密码',
						link: '/pages/login/forgetPassword',
						type: 'a',
						rightText: ''
					},
					{
						name: '更换账号',
						link: './changeAccount',
						type: 'b ',
						rightText: ''
					},
					{
						name: '版本更新',
						link: '',
						type: 'c',
						rightText: 'v1.0.1'
					},
					{
						name: '清理缓存',
						link: '',
						type: 'd',
						rightText: ''
					},
					{
						name: '退出登录',
						link: '',
						type: 'e',
						rightText: ''
					}
				]
			};
		},
		onLoad() {
			// 获取缓存
			this.getStorageSize();
		},
		methods: {
			// 列表点击事件
			itemsEvent(type) {
				// 保存类型
				if (type === 'c') {
					uni.showModal({
						title: '已检测到最新版本V2.0.1',
						cancelText: '暂不更新',
						confirmText: '立即更新',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击立即更新');
							} else if (res.cancel) {
								console.log('用户点击暂不更新');
							}
						}
					})
				}
				if (type === 'd') {
					this.clearStorage()
				}
				if (type === 'e') {
					uni.showModal({
						title: '是否确认退出登录',
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							}
						}
					})
				}
			},
			// 全局对话框确认
			confirm () {
				if (this.dialogType === 'e') {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			// 全局关闭对话框
			close() {
				this.$refs['popup'].close()
			},
			// 计算缓存
			getStorageSize: function() {
				let that = this;
				uni.getStorageInfo({
					success(res) {
						//console.log(res.keys);
						//console.log(res.limitSize);
						let size = res.currentSize;
						if (size < 1024) {
							that.storageSize = size + ' B';
						} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
							that.storageSize = Math.floor(size / 1024 * 100) / 100 + ' KB';
						} else if (size / 1024 / 1024 >= 1) {
							that.storageSize = Math.floor(size / 1024 / 1024 * 100) / 100 + ' M';
						}
					}
				})
			},
			// 清楚缓存
			clearStorage: function() {
				let that = this;
				uni.showModal({
					content: '确定清除缓存吗?',
					confirmText: '立即清除',
					success(res) {
						if (res.confirm) {
							uni.clearStorageSync();
							//重新获取并显示清除后的缓存大小
							that.getStorageSize();
							uni.showToast({
								title: '清除成功'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
