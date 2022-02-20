
// #ifdef MP-WEIXIN
import { logger } from '../utils/index';
// #endif
export default function(data) {
  if (data.code === 200) {
    return true;
  } else {
    uni.showToast({
      icon: 'none',
      title: data.msg
    });
    // #ifdef MP-WEIXIN
    logger.error('接口错误', 'new', data);
    // #endif
    return false;
  }
}
