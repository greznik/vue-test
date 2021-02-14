import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

import * as type from "./types";

const URL = "https://data.jsdelivr.com/v1/package/npm/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    packageList: [],
    detailPackage: {},
  },

  mutations: {
    [type.SET_ERROR](state, error) {
      state.error = error;
    },
    [type.CLEAR_ERROR](state) {
      state.error = null;
    },
    [type.SET_PACKAGE_LIST](state, list) {
      state.packageList = list;
    },
    [type.SET_DETAIL_PACKAGE_LIST](state, detailPackage) {
      state.detailPackage = detailPackage;
    },
  },

  actions: {
    async [type.FETCH_PACKAGE_LIST]({ commit }, name) {
      try {
        commit(type.CLEAR_ERROR);
        const res = await axios.get(`${URL}${name}`);
        const newArr = res.data.versions.map((ver) => {
          return { version: ver };
        });
        commit(type.SET_PACKAGE_LIST, newArr);
      } catch (e) {
        commit(type.SET_ERROR, e);
        commit(type.SET_PACKAGE_LIST, []);
      }
    },
    async [type.FETCH_DETAIL_PACKAGE_LIST]({ commit }, { value, version }) {
      try {
        commit(type.CLEAR_ERROR);
        const res = await axios.get(`${URL}${value}@${version}`);
        commit(type.SET_DETAIL_PACKAGE_LIST, res);
      } catch (e) {
        commit(type.SET_ERROR, e);
        commit(type.SET_PACKAGE_LIST, []);
      }
    },
  },

  getters: {
    getPackageList: (s) => s.packageList,
    getDetailPackageList: (s) => s.detailPackage.data,
    getError: (s) => s.error,
  },
});
