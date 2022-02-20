<template>
	<view class="page-box">
    <u-navbar title-color="#333" :back-text="configure.title" :is-back="true" :is-fixed="true" :border-bottom="false">
    	<view class="navbar-right" slot="right">
    		<view style="margin-right: 32rpx;" @click="toUnBind">
    			<text>{{configure.subTitle}}</text>
    		</view>
    	</view>
    </u-navbar>
		<c-bank-info-list-item v-for="(item,index) in cardArray" @input="changData" :key="index"
		:info="item.info"
		:isActive="item.isActive"
		:itemKey="index"
		:leftItem="item.title"
		:rightItem="item.value"
		>
		</c-bank-info-list-item>

		<button class="button" @tap="submit">
			<view class="button-word">
				确认修改
			</view>
		</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				configure: {
				  title: '卡片详情',
				  subTitle: '解绑'
				},
				//0信用卡 1储蓄卡
				cardType:1,
				//信用卡
				creditCard:[
					{title:'持卡人',value:'张三',isActive:false},
					{title:'银行卡号',value:'6222 5210 1976 8088',isActive:false},
					{title:'发卡行',value:'浦发银行',isActive:false},
					{title:'安全码',value:'134',isActive:true,info:'请输入安全码'},
					{title:'卡片额度',value:'5000',isActive:true,info:'请输入额度'},
					{title:'账单日',value:'1日',isActive:true,info:'请输入账单日'},
					{title:'还款日',value:'31日',isActive:true,info:'请输入还款日'},
					{title:'有效期',value:'09/22',isActive:true,info:'请输入有效期'},
					{title:'预留手机',value:'13345678900',isActive:true,info:'请输入手机号'},
				],
				//储蓄卡
				depozitCard:[
					{title:'持卡人',value:'张三',isActive:false},
					{title:'银行卡号',value:'6222 5210 1976 8088',isActive:false},
					{title:'开户行',value:'浦发银行',isActive:false},
					{title:'预留手机',value:'13345678900',isActive:true,info:'请输入手机号'},
				],

				//是否解绑
				isUnBind:false,

				//银行卡数量
				cardNumbers:1
			}
		},
		watch:{
			isUnBind(value)
			{
				console.log(value)

				if(value)
				{
					if(this.cardNumbers == 1)
					{
						uni.showModal({
							title: "解绑失败",
							content: "您当前仅绑定一张储蓄卡,不可解绑,如需解绑,请先添加一张新的储蓄卡.",
							confirmText: "添加储蓄卡",
							cancelText: "暂不解绑",
							cancelColor:'#3685FF',
							confirmColor:'#000000',
							success:(res)=>{
								if (res.confirm)
								{
								    console.log('用户点击确定');
									this.isUnBind = false;

								}
								else if (res.cancel)
								{
								    console.log('用户点击取消');
									this.isUnBind = false;
								}
							}
						})
					}
				}
			}
		},
		computed:
		{
			cardArray:function()
			{
				let cardArray = [];

				if(this.cardType)
				{
					cardArray = this.depozitCard
				}
				else
				{
					cardArray = this.creditCard
				}

				return cardArray;
			}
		},
		methods: {
      submit () {
        
      },
			changData(data)
			{
				const {key,value } = data.data;

				if(this.cardType == 1)
				{
					 this.depozitCard[key].value = value;
				}
				else
				{
					 this.creditCard[key].value = value;
				}
			},
			//点击确认
			toConfim()
			{
				console.log('点击确认');
				console.log(this.cardArray);
			},
			//解绑银行卡
			toUnBind()
			{
				uni.showModal({
					title: "确认要解绑银行卡?",
					content: "解除绑定可能会导致交易失败或其它问题,请谨慎处理",
					confirmText: "仍要解绑",
					cancelText: "我再想想",
					cancelColor:'#3685FF',
					confirmColor:'#000000',
					success:(res)=>{
						if (res.confirm)
						{
						    console.log('用户点击确定');
							this.isUnBind = true;



						}
						else if (res.cancel)
						{
						    console.log('用户点击取消');
							this.isUnBind = false;
						}
					}
				})
			}
		},
		onShow() {
			this.isUnBind = false
		}
	}
</script>

<style scoped lang="scss">
 .page-box{
	 width: 750rpx;
	 height:100vh;
	 background: #FFFFFF;
	 .button{
		 width: 686rpx;
		 height: 96rpx;
		 background: #F98038;
		 border-radius: 8rpx;
		 margin:0 auto;
		 .button-word{
			 ont-size: 28px;
			 font-family: PingFangSC-Regular, PingFang SC;
			 font-weight: 400;
			 color: #FFFFFF;
			 line-height: 40px;
		 }
	 }
 }
</style>
