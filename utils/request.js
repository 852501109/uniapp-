
//import autoLogin from '../common/autoLogin';
import store from '../store'; // 引入store
/**
 *
 * @param {String} url 接口地址
 * @param {Object} options 参数对象
 * {
 *   method: 'GET',
 *   headers: {},
 *   data: {},
 *   filePath: '',
 *   name: 'file'
 * }
 */
const ongoingReqs = [];

const Request = (url, options) =>
{
    options = options || {};
    options.method = (options.method || 'GET').toUpperCase();
    options.headers = options.headers || {};
    options.data = options.data || {};
    options.showLoading = options.showLoading === false ? options.showLoading : true;

    const { filePath, name, data, header, method, showLoading } = options;

    return new Promise((resolve, reject) =>
    {
      if (showLoading)
      {
          if (!ongoingReqs.length)
          {
            uni.showLoading({
              title: '加载中...'
            });
          }
         ongoingReqs.push(url);
      }
    const common =
    {
		  url,
		  header,
		  // eslint-disable-next-line consistent-return
      success: async res =>
      {
          const { statusCode } = res;
          // eslint-disable-next-line no-underscore-dangle
          const _data = res.data;
          if (statusCode >= 200 && statusCode <= 299)
          {
            resolve(_data);
          }
          else if (statusCode === 500)
          {
            uni.showToast({
            icon: 'none',
            title: '服务器错误'
            });
            reject(_data);
          }
          else
          {
            if (_data.error_code === 30001)
            {
            // autoLogin
            // 这一块先用着  有好的解决方案再改
            //await autoLogin();
            options.data.token = store.getters.token;
            return Request(url, options);
            // resolve(_data);
            }
            uni.showToast({
            icon: 'none',
            title: _data.msg,
            duration: 1500
            });
            reject(_data);
          }
      },
      fail(res)
      {
        console.log('fail::', res, options);
        reject(res);
      },
      complete(res)
      {
          if (res.statusCode < 200 || res.statusCode > 299)
          {
            // logger.error('接口错误', url, options);
          }
          if (showLoading && ongoingReqs.length)
          {
            ongoingReqs.pop();
            if (!ongoingReqs.length)
            {
            uni.hideLoading();
            }
          }
      }
    };
      // 存在filePath参数时，上传文件
      if (filePath && filePath.length)
      {
        uni.uploadFile({
          filePath,
          name: name || 'file',
          formData: data,
          ...common
        });
      }
      else
      {
          uni.request({
            method,
            data,
            ...common
          });
      }
  });
};

export default Request;
