import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    packageList: [],
    detailNpm: {},
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
    setDetailPackageList(state, detailNpm) {
      state.detailNpm = detailNpm;
    },
  },
  actions: {
    async fetchPackageList({ commit }, name) {
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
    async fetchDetailPackageList({ commit }, { name, lastVersion }) {
      try {
        const res = await axios.get(
          `https://data.jsdelivr.com/v1/package/npm/${name}@${lastVersion}`
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
  },
});
