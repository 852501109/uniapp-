<template>
	<view class="line-box">
		<c-total-list-item  v-for="(item,index) in listArray" :key='index' :type='type' :totalNumber='item.value' :totalInfo='item.name'></c-total-list-item>
	</view>
</template>

<script>
	export default {
		name:'c-total-list-line',
		props:{
			type:{
				type:Number,
				defult:0
			},
			listArray:{
				type:Array,
				default:()=>{
					return [
						{name:'累计交易量（元）',value:'168，185.00'},
						{name:'直推交易量（元）',value:'168，185.00'},
						{name:'间推交易量（元）',value:'168，185.00'},
					];
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.line-box{
	width:100%;
	height:atuo;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
</style>
