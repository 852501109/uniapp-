
import { Request } from '../../utils';
import api from '../../config/api';

// state
const state = {
  userInfo: {},
  token: ''
};
// mutations
const mutations = {
  SET_TOKEN(state, token) {

    state.token = token;

  },
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  }
};
// actions
const actions =
{
    getToken({ commit }, data) {
      const { mobile, password } = data;
      return new Promise((resolve, reject) => {
        Request(api.login, { method: 'post', data:data })
          .then(resData => {
          /* console.log('成功',resData) */
            commit('SET_TOKEN', resData.data.userinfo.token);
            commit('SET_USERINFO', resData.data.userinfo);
            resolve(resData);
          })
          .catch((res) => {
            reject(res);
          });
      });
    }

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
