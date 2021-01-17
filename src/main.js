import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import EventDashboard from "./components/EventDashboard.vue";
import EventDetail from "./components/EventDetail.vue";
import Sessions from "./components/Sessions.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: EventDashboard
  },
  {
    path: "/eventDetail/:eventId",
    component: EventDetail
  },
  {
    path: "/sessions/:eventId",
    component: Sessions
  }
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
