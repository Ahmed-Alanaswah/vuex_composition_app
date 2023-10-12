export default {
  state: {
    counter: 0,
  },
  getters: {
    multiblyCntr(state) {
      return state.counter * 2;
    },
  },

  mutations: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
  },
  actions: {
    increase(context) {
      context.commit("inc");
    },
    decrease(context) {
      context.commit("dec");
    },
  },
};
