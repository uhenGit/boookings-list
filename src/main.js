import Vue from "vue";
import App from "./App.vue";
import { createStore } from "./store/index.js";

import "./assets/main.css";

const store = createStore();

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
