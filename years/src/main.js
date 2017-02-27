// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import { Scroller } from 'vux'
import { Loading } from 'vux'
import { Confirm } from 'vux'
import { ConfirmPlugin } from 'vux'
import { AlertPlugin } from 'vux'
Vue.use(VueRouter);
Vue.use(require('vue-resource'));
Vue.use(ConfirmPlugin);
Vue.use(AlertPlugin);

var router = require("./config.js")(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})