/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import AuthProxy from '@/proxies/AuthProxy';
import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  commit(types.LOGIN, 'RandomGeneratedToken');
  Vue.router.push({
    name: 'home.index',
  });
};

export const login = ({ commit }, payload) => {
  store.dispatch('loading/loading');
  return new AuthProxy()
      .login(payload)
      .then((response) => {
        commit(types.LOGIN, response);
        store.dispatch('account/find');
        Vue.router.push({
          name: 'home.index',
        });
        store.dispatch('loading/stoploading');
      })
      .catch((e) => {
        console.log('Request failed...');
        store.dispatch('loading/stoploading');
        return Promise.reject(e);
      });
  
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
