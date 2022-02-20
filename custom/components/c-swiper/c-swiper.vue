<template>
	<view>
		<swiper circular class="swiper" :indicator-dots="true" :autoplay="true" interval="2000" duration="500">
			<swiper-item class="swiper_item" v-for="(i, n) in 4" :key="n">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2730029046,532033122&fm=26&gp=0.jpg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
		.swiper {
			height: 240rpx;
			border-radius: 8rpx;
			overflow: hidden;
			.swiper_item {
				height: 100%;
				image {
					width: 100%!important;
					height: 100%!important;
				}
			}
		}
</style>
