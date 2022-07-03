import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Ads from "vue-google-adsense";

import Adsense from "vue-google-adsense/dist/Adsense.min.js";
import InArticleAdsense from "vue-google-adsense/dist/InArticleAdsense.min.js";
import InFeedAdsense from "vue-google-adsense/dist/InFeedAdsense.min.js";

import "@/style.scss";

String.prototype.hashCode = function () {
  console.log(this);
  let hash = 0;
  if (this.length === 0) return hash;

  for (let i = 0; i < this.length; i++) {
    const chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

Vue.config.productionTip = false;

Vue.use(require("vue-script2"));

Vue.use(Adsense);
Vue.use(InArticleAdsense);
Vue.use(InFeedAdsense);
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
