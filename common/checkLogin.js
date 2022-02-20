
import store from '../store';

export default function() {
  const { token } = store.getters;

  if (token === '') {
    wx.showModal({
      title: '提示',
      content: '您还没有授权登录,是否前往授权登录？',
      confirmText: '前往',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/login/index'
          });
        }
      }
    });
    return false;
  } else {
    const { tel } = store.getters.userInfo;
    if (tel === null || tel === '') {
      wx.showModal({
        title: '提示',
        content: '您还没有授权使用手机号,是否前往授权？',
        confirmText: '前往',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/index?type=getPhone'
            });
          }
        }
      });
      return false;
    }
    return true;
  }
}
