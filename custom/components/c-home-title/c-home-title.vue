<template>
	<view>
		<u-navbar title-color="#fff" :is-back="false" :is-fixed="true" :background="{background:'#F98038'}"
			:border-bottom="false" title="乐易生活">
			<view class="navbar-right" slot="right">
				<view class="right-msg">
					<image @click="goMessage" style="" src="@/static/iconlingdang2x.png" mode="">
					</image>
					<!-- 角标 -->
					<view class="alarm" v-if="ishasNew"></view>
				</view>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	// goMessage() {
	// 			this.$emit('goMessage', '');
	// 		}
	export default {
		name: 'c-title',
		data() {
			return {
				ishasNew: true, // 是否有新消息
			};
		},
		methods: {
			goMessage() {
				this.$emit('goMessage', '');
			},
		},
	}
</script>

<style scoped lang="scss">
	.right-msg {
		position: relative;
		top: 10rpx;
		right: 10rpx;

		image {
			width: 22.25px;
			height: 22.75px;
		}

		.alarm {
			position: absolute;
			right: 2rpx;
			top: -2rpx;
			width: 18rpx;
			height: 18rpx;
			border-radius: 9rpx;
			background: #FF0000;
		}
	}
</style>
