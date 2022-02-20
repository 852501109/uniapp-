<template>
	<view class="poster-save">
		<view>
			<c-ls-swiper :list="base_lsit" imgKey="imgUrl" :crown="true" :loop="true" :shadow='true' :height='130' :previousMargin="120" :nextMargin='120' :imgRadius="5" />
		</view>
		<view class="images">
			<image  v-for="(i, n) in base_lsit" :key="n" :src="i.imgUrl"></image>
		</view>
		<button @click="saveImage" class="saveImage">保存图片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				base_lsit: [{
						name: '1',
						imgUrl: 'https://picb.zhimg.com/80/v2-3f5c7bdcc228d3798a044b78023459d3_720w.jpg?source=1940ef5c',
					},
					{
						name: '2',
						imgUrl: 'https://pic3.zhimg.com/80/v2-1deed0eca463f87f36d6e88363ae2693_720w.jpg?source=1940ef5c',
					},
					{
						name: '3',
						imgUrl: 'https://picb.zhimg.com/80/v2-520f230f8cb8a0943b8582dcd77ec6ba_720w.jpg?source=1940ef5c',
					},
					{
						name: '4',
						imgUrl: 'https://pic1.zhimg.com/80/v2-33e85bdfafbb4aa52ce6f70f319dbb4f_720w.jpg?source=1940ef5c',
					},
				]
			}
		},
		methods: {
			clickItem () {
				
			},
			// 保存图片
			saveImage () {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.poster-save {
		width: 100%;
		.images {
			position: relative;
			top: 100rpx;
			display: flex;
			image {
				width: 20%;
				margin-left: 4%;
			}
		}
		.saveImage {
			position: relative;
			top: 200rpx;
			width: 75%;
			margin: 0 auto;
			background: #f98038;
			color: #fff;
		}
	}
</style>
