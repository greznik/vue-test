import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    packageList: [],
    detailPackage: {},
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    setPackageList(state, list) {
      state.packageList = list;
    },
    setDetailPackageList(state, detailPackage) {
      state.detailPackage = detailPackage;
    },
  },
  actions: {
    async fetchPackageList({ commit }, name) {
      commit("clearError");
      try {
        const res = await axios.get(
          `https://data.jsdelivr.com/v1/package/npm/${name}`
        );
        const newArr = res.data.versions.map((ver) => {
          return { version: ver };
        });
        commit("setPackageList", newArr);
      } catch (e) {
        commit("setError", e);
        commit("setPackageList", []);
      }
    },
    async fetchDetailPackageList({ commit }, { value, version }) {
      commit("clearError");
      try {
        const res = await axios.get(
          `https://data.jsdelivr.com/v1/package/npm/${value}@${version}`
        );
        console.log("fetchDetailPackageList", res);
        commit("setDetailPackageList", res);
      } catch (e) {
        commit("setError", e);
        commit("setPackageList", []);
      }
    },
  },
  getters: {
    getPackageList: (s) => s.packageList,
    getDetailPackageList: (s) => s.detailPackage.data,
    getError: (s) => s.error,
  },
});
