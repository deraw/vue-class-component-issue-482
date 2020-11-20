import Vue from 'vue';

import App from './App.vue';

// Remove "tip" from browser console
Vue.config.productionTip = false;

// Create main Vue instance
new Vue({
	render: (h) => h(App)
}).$mount('#app'); // Mount it on #app (in public/index.html)
