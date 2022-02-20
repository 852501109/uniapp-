<template>
	<view>
		<view class="show-title-box" @tap="toCLick">
		  <view class="show-title">
			   {{year}}年{{month}}月
		  </view>
		   <c-arrows class="arrows-icon" :type='arrowsType'></c-arrows>
		</view>
		<picker-view v-if="visible" class="indicator-class" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
		    <picker-view-column>
		        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
		    </picker-view-column>
		    <picker-view-column>
		        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
		    </picker-view-column>
			<!-- <picker-view-column>
			    <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			</picker-view-column> -->
		</picker-view>
	</view>
</template>

<script>
	export default {
		name:'c-year-month-select',
		computed:{
			//指示箭头方向 0下 1上 2左 3右
			arrowsType()
			{
				let arrows = 3;
			
				if(this.visible)
				{
				   arrows = 0;
				}
				
				return arrows;
			}
		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			
			for (let i = 1990; i <= date.getFullYear(); i++) {
			    years.push(i)
			}
			
			for (let i = 1; i <= 12; i++) {
			    months.push(i)
			}
			
			for (let i = 1; i <= 31; i++) {
			    days.push(i)
			}
			return {
			    title: 'picker-view',
			    years,
			    year,
			    months,
			    month,
			    days,
			    day,
			    value: [9999, month - 1, day - 1],
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
			    visible: false,
			    // indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
			    indicatorStyle: `height: 96rpx;
				`,
			}
		},
		methods:{
			toCLick()
			{
				this.visible = !this.visible;
				console.log(this.value)
				this.$emit('change',{time:this.value})
			},
			bindChange (e) 
			{
			    const val = e.detail.value
			    this.year = this.years[val[0]]
			    this.month = this.months[val[1]]
			    this.day = this.days[val[2]]
				
				this.value[0] = this.year
				this.value[1] = this.month
			}	
		}
	}
</script>

<style scoped lang="scss">
.show-title-box{
	width: auto;
	height:40rpx;
	line-height: 40rpx;
	display: flex;
	flex-flow: row;
	.show-title{
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ADADAD;
		line-height: 40rpx;
	}
	.arrows-icon{
		margin-top: 15rpx;
		margin-left:20rpx
	}
}
picker-view {
        width: 100%;
        height: 600rpx;
        margin-top:20rpx;
		
		/deep/ .indicator-class
		{
			 font-size: 36rpx;
			 font-family:PingFangSC-Regular, 
			 PingFang SC;
			 font-weight: 400;
			 color: #333330;
		}
		
 }
 
.item 
{
	line-height: 100rpx;
	text-align: center;
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ADADAD;
}

</style>
