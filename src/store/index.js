import { createStore } from "vuex";
import productsModule from "@/store/products/getProducts";
export default createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { productsModule },
});
