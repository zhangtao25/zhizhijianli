// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
// import 'element-u'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
let enMessages = {
  "choose.language": "Choose language",
  "my.name": "YouZhi Gao",
  "first.page.houqi.jianli": "Later stage·CV",
  "left.name": "YouZhi Gao",
  "left.sex": "Sex-female",
  "left.birthday": "Birthday-1995.12",
  "left.height": "Height-168cm",
  "left.weight": "Weight-45kg",
  "left.native.place": "Native place-Hefei, Anhui",
  "left.position": "Position-Video post production",
  "left.salary": "Expected salary-10k"
}
let zhMessages = {
  "choose.language": "选择语言",
  "my.name": "高又枝",
  "first.page.houqi.jianli": "后期·简历",
  "left.name": "高又枝",
  "left.sex": "性别-女",
  "left.birthday": "生日-1995.12",
  "left.height": "身高-168cm",
  "left.weight": "体重-45kg",
  "left.native.place": "籍贯-安徽·合肥",
  "left.position": "应聘岗位-视频后期制作",
  "left.salary": "期望薪资-10k"
}
const messages = {
  en: {
    ...enMessages,
    ...enLocale
  },
  zh: {
    ...zhMessages,
    ...zhLocale
  }
}

// Set up webpage language
let langCode = ""
if (localStorage.langCode) {
  langCode = localStorage.langCode
} else {
  langCode = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
  langCode = langCode.substr(0, 2);
  localStorage.langCode = langCode
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.langCode, // set locale
  messages, // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
