<template>
	<button class="page-button-box" @tap="toClick">
		{{buttonWord}}
	</button>
</template>
<script>
	export default {
		name:'c-page-button',
		props:{
			buttonWord:{
				type:String,
				default:'升级为vip'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toClick()
			{
				
				const data = {test:1}
				
				this.$emit('change',data);
			}
		}
	}
</script>
<style scoped lang="scss">
.page-button-box{
	width: 686rpx;
	height: 96rpx;
	background: #F98038;
	border-radius: 8rpx;
	line-height: 96rpx;
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
	text-align: center;
}
</style>
