import Vue from "vue";
import Vuex from "vuex";
import bookings from "./bookings";
import period from "./period";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      bookings,
      period,
    },
  });
}
