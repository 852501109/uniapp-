<template>
	<view>
		<u-navbar title-color="#333" :back-text="configure.title" :is-back="true" :is-fixed="true" :border-bottom="false">
			<view class="navbar-right" slot="right">
				<view style="margin-right: 32rpx;" @click="goTradingRecord(configure.subTitleUrl)">
					<text>{{configure.subTitle}}</text>
				</view>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		props: {
			configure: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			goTradingRecord(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
