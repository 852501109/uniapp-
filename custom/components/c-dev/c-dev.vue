<template>
	<view class="box">
		<c-tab @change="toClick"></c-tab>
	</view>
</template>
<script>
	//import tab from './tab/index.vue'
	export default{
		name:'c-dev',
		components:{
			//tab 
		},
		data(){
			return {
				msg:'我是开发组件'
			}
		},
		methods:{
			toClick(data)
			{
				console.log(data)
			}
		}
	}
</script>

<style scoped lang="scss">
	.box{
			width: 750rpx;
			height: auto;
		}
</style>
