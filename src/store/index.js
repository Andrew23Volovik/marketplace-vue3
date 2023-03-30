import { createStore } from 'vuex';
import { API } from '@/services/axios';
export default createStore({
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload;
    },
    filterProducts(state, valueOption) {
      const { param, response } = valueOption;
      let compare;
      switch (param) {
        case 'rating':
          compare = (a, b) => {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
            return 0;
          };
          break;
        case 'lowest':
          compare = (a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
          };
          break;
        case 'highest':
          compare = (a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          };
          break;
        case 'display_highest':
          compare = (a, b) => {
            if (a.technicalDetails.screen.displaySize < b.technicalDetails.screen.displaySize) return 1;
            if (a.technicalDetails.screen.displaySize > b.technicalDetails.screen.displaySize) return -1;
            return 0;
          };
          break;
        case 'display_lowest': {
          compare = (a, b) => {
            if (a.technicalDetails.screen.displaySize > b.technicalDetails.screen.displaySize) return 1;
            if (a.technicalDetails.screen.displaySize < b.technicalDetails.screen.displaySize) return -1;
            return 0;
          };
          break;
        }
      }
      state.products = response.sort(compare);
    },
  },
  actions: {
    async requestGetProducts({ commit }, param) {
      const response = await API.get('products');
      //commit('setProduct', response.data);

      if (Object.keys(param).length !== 0) {
        commit('filterProducts', { param: param.filter, response: response.data });
      } else {
        commit('filterProducts', { param: 'rating', response: response.data });
      }
    },
  },
  modules: {},
});
