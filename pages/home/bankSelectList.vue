<template>
	<view>
		<!-- 标题 -->
		<c-nav-title v-bind:configure="configure"></c-nav-title>
		<!-- 搜索 -->
		<view>
			<uni-easyinput style="padding: 0 34rpx;" suffixIcon="search" v-model="searchValue" placeholder="请输入要搜索的银行名称"
				@iconClick="search" />
		</view>
		<view style="padding:24rpx 34rpx;">
			仅支持绑定以下银行
		</view>
		<view class="uni-list">
			<radio-group>
				<label @click="radioChange(i, n)" class="uni-list-cell uni-list-cell-pd" v-for="(i, n) in bankList"
					:key="n">
					<img :src="i.logo"></img>
					<text style="margin-left: -320rpx;">{{i.title}}</text>
					<view>
						<!-- <radio :value="i.value" :checked="n === current" /> -->
						<radio :value="i.value" :checked="n === current" />
					</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import {
		Request
	} from '@/utils';
	import api from '@/config/api';

	export default {
		data() {
			return {
				imageUrl: '@/static/logo.png',
				configure: {
					title: '选择银行'
				},
				bankList: [],
				searchValue: '',
				current: 0,
				card_type: 1, // 1储蓄卡  2 信用卡 默认为储蓄卡
			}
		},
		onLoad(options) {
			this.card_type = options.card_type;
			this.getBankList()
		},
		methods: {
			login() {
				Request(
						api.login, {
							//请求类型 get||post
							method: 'post',
							//传参
							data: {
								mobile: '13612345667', // 1 储蓄卡  2 信用卡
								password: '111111'
							},
							//是否显示加载
							showLoading: false,
						})
					.then(res => {
						console.log(res)

					})
			},
			search() {
				console.log('点击了左侧图标')
			},
			radioChange(i, n) {
				// let url = this.card_type == 1 ? './addCashCard?bank=' + i.id : './addCreditCard?bank=' + i.id;
				let bankInfos = {}
				bankInfos.bankName = i.title;
				bankInfos.bankId = i.id;
				uni.setStorageSync('bankInfos', bankInfos);
				uni.navigateBack({
					delta: 1
				})
			},
			getBankList() {
				Request(
						api.bankList, {
							//请求类型 get||post
							method: 'post',
							//传参
							data: {
								token: 'cf6348b0-d180-40bf-bc45-678f5d82e794'
							},
							//是否显示加载
							showLoading: false,
						})
					.then(res => {
						if (res.code == 1) {
							this.bankList = res.data;
						}
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #FFF !important;
	}
</style>
