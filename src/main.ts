import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import counterStore from "./vuexStores/vuexCounterStore";
import { createPinia } from "pinia";

const app = createApp(App);

// Create vuex store
app.use(counterStore);

// Create pinia store
app.use(createPinia());

app.mount("#app");
