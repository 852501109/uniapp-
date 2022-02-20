
import store from '../store'; // 引入store

export default function() {
  return new Promise(resolve => {
    const userAccount = uni.getStorageSync('userAccount');
    if (userAccount === null || userAccount === '') {
      // 没有保存用户信息（相当于没有登录）
      uni.showModal({
        title: '提示',
        content: '您还没有登录，是否前往登陆？',
        success({ confirm }) {
          if (confirm) {
            uni.navigateTo({ url: '/pages/login/index' });
          }
        }
      });
    } else {
      // 自动登录
      // #ifdef H5 || APP-PLUS
      const { account, pwd } = userAccount;
      store.dispatch('auth/getToken', { account, pwd }).then(() => {
        uni.setStorageSync('userAccount', { account, pwd });
        store.dispatch('auth/getUserInfo');
        resolve();
      });
      // #endif
      // #ifndef H5 || APP-PLUS
      // 小程序使用的方法
      miniAutoLogin().then(() => {
        uni.setStorageSync('userAccount', { account: 'mini', pwd: 'mini' });
        store.dispatch('auth/getUserInfo');
        resolve();
      });
      // #endif
    }
  });
}
// #ifndef H5 || APP-PLUS
async function miniAutoLogin() {
  const [, setting] = await uni.getSetting();
  // console.log(setting);
  const canGetUserInfo = setting.authSetting['scope.userInfo'];
  if (canGetUserInfo) {
    const [, { userInfo }] = await uni.getUserInfo();
    const [, { code }] = await uni.login();
    return new Promise(resolve => {
      store
        .dispatch('auth/getTokenByMini', {
          code,
          sex: userInfo.gender,
          nickname: userInfo.nickName,
          avatar: userInfo.avatarUrl
        })
        .then(() => {
          resolve();
        });
    });
  } else {
    console.log('无法自动获取用户信息');
    uni.showModal({
      title: '提示',
      content: '登陆状态失效，是否前往登陆？',
      success({ confirm }) {
        if (confirm) {
          uni.navigateTo({ url: '/pages/login/index' });
        }
      }
    });
    return Promise.resolve();
  }
}
// #endif
