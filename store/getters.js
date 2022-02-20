
const getters = {
  /**
   * 用户相关内容
   */
  // Token
  token: state => state.auth.token,
  userInfo: state => state.auth.userInfo,
  /**
   * 系统信息
   */
  // WindowWidth
  systemWindowWidth: state => state.system.windowWidth,

};
export default getters;
