import Vue from 'vue'
import App from './App'

import store from './store'
import uView from "uview-ui";

import vueEvent from './utils/vueEvent.js';

Vue.use(uView);

Vue.config.productionTip = false
Vue.prototype.vueEvent = vueEvent
Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
