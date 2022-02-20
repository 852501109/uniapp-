/*
 * @Descripttion:
 * @version:
 * @Author: YouHuJun
 * @Date: 2021-06-22 18:14:31
 * @LastEditors: YouHuJun
 * @LastEditTime: 2021-06-24 17:10:22
 */

import commonData from './commonData';

const { host } = commonData;

const url = `${host}/api/`;

const path = {
  /**
   * 检测升级
   */
	upgrade:'/app/update',
	/**
	 * 测试接口
	 */
	testAPi: '/app/testApi',

  /**
   * 注册
   */
  register:'/user/register',

	/**
	 * 登录相关接口
	 */
	// 登录
	login: '/user/login',
	loginByAccount: '/login/web',
	/**
	 * 用户相关API
	 */
	// 根据Token获取用户信息
	getUserInfo: '/user/get_info',
	// 根据Token获取用户微信和手机号
	getUserTelAndWechatid: '/user/otherinfo',
	// 修改用户信息
	modifyUserInfo: '/user/modify',
	// 修改账户
	modifyAccount: '/user/account',
	// 修改账户密码
	modifyPwd: '/user/pwd',
	// 获取Account
	getAccount: '/user/account',

	//  乐易生活接口地址

	// 我的 团队 直推详情
	straightDetails: '/user/childDetail',
	// 我的 团队 团队管理
	teamManagement: '/user/teamInfo',
	// 我的 钱包 红包
	redPacket: '/wallet/redpacket',
	// 我的 钱包 奖励分享
	bonusShare: '/wallet/commissionShare',
	// 我的 钱包 奖励提现
	rewardWithdrawal: '/wallet/commissionWithdraw',
	// 我的 钱包 奖励详情
	rewardDetails: '/wallet/commissionInfo',
	// 我的 钱包 奖励
	reward: '/wallet/commissions',
	// 我的 钱包 分润分享
	profitShare: '/wallet/profitShare',
	// 我的 钱包 分润提现
	profitWithdraw: '/wallet/profitWithdraw',
	// 我的 钱包 分润详情
	profitInfo: '/wallet/profitInfo',
	// 我的 钱包 分润
	profit: '/wallet/profits',
	// 我的 更换账号
	changeAccount: '/user/changeAccount',
	// 我的 联系客服
	relationService: '/open_api/config',
	// 分享 海报
	poster: '/share/poster',
	// 课堂 视频详情
	videoDetail: '/course/courseDetail',
	// 课堂 精选课程
	recommendCourseList: '/course/recommendCourseList',
	// 课堂 视频教学：
	videoTeaching: '/course/courseList',
	// 课堂 分类列表
	categoryList: '/course/categoryList',
	// 申请信用卡 人气推荐
	recommendBankList: '/credit/recommendBankList',
	// 申请信用卡 申请记录
	applicationRecord: '/credit/applyList',
	// 申请信用卡 提交申请
	submitApplications: '/credit/apply',
	// 申请信用卡 信用卡详情
	creditDetail: '/credit/creditDetail',
	// 申请信用卡 信用卡列表
	creditList: '/credit/creditList',
	// 登录 实名认证
	autonymVerify: '/user/verify',
	// 登录 忘记密码
	resetPassword: '/user/resetPassword',
	// 登录 登录
	login: '/user/login',
	// 登录 注册
	register: '/user/register',
	// 首页 快捷支付 交易详情
	orderInfo: '/orders/orderInfo',
	// 首页 快捷支付 交易记录
	tradingRecord: '/order/orders',
	// 首页 快捷支付 支付验证
	payVerify: '/kuaijie/pay',
	// 首页 快捷支付 支付下单
	payOrders: '/kuaijie/create',
	// 首页 快捷支付 通道信息
	tradeInfo: '/pay_trade/tradeInfo',
	// 首页 快捷支付 更换通道
	changeAisle: '/pay_trade/getTrades',
	// 首页 快捷支付 通道选择
	optimumTrade: '/pay_trade/optimumTrade',
	// 首页 快捷支付 银行列表
	bankList: '/user_bank/blist',
	// 首页 快捷支付 添加卡片
	addCard: '/user_bank/addCard',
	// 首页 店铺收款-未开通 订单详情
	storeOrderInfo: '/shop_pay/orderInfo',
	// 首页 店铺收款-未开通 交易记录
	storeTradingRecord: '/shop_pay/orders',
	// 首页 店铺收款-未开通 费率查询
	rateQuery: '/shop_pay/rateQuery',
	// 首页 店铺收款-未开通 店铺收款
	storeCredit: '/shop_pay/shopInfo',
	// 首页 店铺收款-未开通 开通店铺收款
	applyShopPay: '/shop_pay/applyShopPay',
	// 我的 我的消息 消息详情
	noticeDetail: '/user/noticeDetail',
	// 我的 我的消息 消息列表
	noticeList: '/user/noticeList',
	// 我的 收入记录 收入详情
	incomeDetail: '/income/incomeDetail',
	// 我的 收入记录 收入记录
	incomeList: '/income/incomeList',
	// 我的 银行卡管理 解绑银行卡
	delBankCard: '/user/delBankCard',
	// 我的 银行卡管理 添加/编辑银行卡
	addBankCard: '/user/addBankCard',
	// 我的 银行卡管理 银行卡列表
	myBankList: '/user/bankList',
	// 我的 我的推荐人
	recommender: '/user/recommender',
	// 我的 实名认证
	authInfo: '/user/authInfo',

















}

const getApi = () => {
  const Api = {};
  Object.keys(path).forEach(item => {
    Api[item] = `${url}${path[item]}`;
  });
  return Api;
};

export default getApi();
