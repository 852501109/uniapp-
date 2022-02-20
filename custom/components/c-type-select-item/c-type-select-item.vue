<template>
	<view @tap="toSelect">
		<view class="item-box">
			<view class="item-word" :class="{selected:selectStatus,unselected:!selectStatus}">
				{{selectItem}}
			</view>
			<image :src="src" mode="aspectFit" class="point-status" v-if="selectStatus"></image>
		</view>
		<c-cut-line></c-cut-line>
	</view>
</template>

<script>
	import { HOOK_YES }  from '@/config/icons'
	export default {
		name:'c-type-select-item',
		props:{
			selectKey:{
				type:Number,
				default:0
			},
			selectItem:{
				type:String,
				default:'全部'
			},
			isSelected:{
				type:Boolean,
				default:false
			}
		},
		watch:{
			isSelected:{
				      handler (value, oldValue) 
					  {
				        let that = this
						that.selectStatus = value
						
						console.log(value)
				      },
				      deep: true,
				      immediate: true
			}
		},
		data() {
			return {
				src:HOOK_YES,
				selectStatus:this.isSelected
			};
		},
		mounted()
		{
			
		},
		methods:{
			 toSelect()
			 {
				 this.selectStatus = !this.selectedStatus;
				 
				 let stauts = this.selectStatus
				 
				 let index = this.selectKey
				 
				 const data = {status:stauts,index:index}
				 
				 this.$emit('change',data)
			 }
		}
		
	}
</script>

<style scoped lang="scss">
.item-box{
	width:750rpx;
	height:111rpx;
	background-color: #FFFFFF;
	line-height: 112rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.item-word{
		margin-left:32rpx;
	}
	.point-status
	{
		width:48rpx;
		height:48rpx;
		margin:30rpx;
	}
	
}
.selected{
	color:#FC5830;
}
.unselected{
	color: #333330;
}
</style>
