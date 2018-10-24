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
  "left.salary": "Expected salary-10k",
  "second.pages.educational.background": "Educational background",
  "second.pages.school": "Huainan Normal University",
  "second.pages.major": "Digital media technology (undergraduate)",
  "second.pages.major.courses": "Major courses: Maya, 3Dmax, premiere, after effects, Da Vinci and later software.",
  "second.pages.school.activities": "School activities: participated in the digital video competition of Anhui computer design competition, and won the first prize.",
  "second.pages.skills": "Skills",
  "second.pages.language.skills": "Language skills:English CET6",
  "second.pages.professional.skills": "Professional skills:Proficient in the use of premiere and AE software, Da Vinci will be used to color the film.",
  "second.pages.work.experience": "Work experience",
  "second.pages.yiye": "Suzhou one page Network Technology Co., Ltd.",
  "second.pages.job.des": "Job description",
  "second.pages.job.des.content.yiye": "Responsible for the production of promotional films, series feature films and some government agencies.",
  "second.pages.now": "now",
  "second.pages.yijian": "Anhui Yi Jian Health Technology Co., Ltd.",
  "second.pages.job.des.content.yijian":"Responsible for the production of promotional films, promotional videos and a post holiday publicity video.",
  "third.pages.self.evaluation": "Self evaluation",
  "third.pages.self.evaluation.a": "1.5 years working experience, exposure to a variety of styles of film, you can grasp the different types of film style",
  "third.pages.self.evaluation.b": "Good at finding problems and solving problems in work, with strong analytical ability.",
  "third.pages.self.evaluation.c": "Video clip and color matching can be done independently according to the content of the script.",
  "third.pages.self.evaluation.d": "Work actively, conscientiously, carefully and responsible, and skillfully use video post-processing software.",
  "third.pages.self.evaluation.e": "Music rhythm and video screen can be well controlled.",
  "works.exhibition": "Exhibition of works",
  "works.classification.a": "All",
  "works.classification.b": "Feature films",
  "works.classification.c": "Product Promo",
  "works.classification.d": "Story film",
  "works.classification.e": "MG animation",
  "works.classification.name.b01": "杨春1.29字幕",
  "works.classification.des.b01": "描述杨春1.29字幕",
  "works.classification.name.b02": "张岩1.29字幕",
  "works.classification.des.b02": "描述张岩1.29字幕",
  "works.classification.name.c01": "陈敏坤1.30",
  "works.classification.des.c01": "描述陈敏坤1.30",
  "works.classification.name.c02": "老有所伴",
  "works.classification.des.c02": "描述老有所伴",
  "works.classification.name.c03": "灵芝宣传片",
  "works.classification.des.c03": "描述灵芝宣传片",
  "works.classification.name.c04": "MG动画宣传片",
  "works.classification.des.c04": "描述MG动画宣传片",
  "works.classification.name.d01": "音乐会倒计时3",
  "works.classification.des.d01": "描述音乐会倒计时3",
  "works.classification.name.e01": "足迹-淮南",
  "works.classification.des.e01": "描述足迹-淮南",

  // {work_name:'b01',des:'b01',type:'1',work_url:'杨春1.29字幕.mp4'},
  // {work_name:'b02',des:'b02',type:'1',work_url:'张岩1.29字幕.mp4'},
  // {work_name:'c01',des:'c01',type:'2',work_url:'陈敏坤1.30.mp4'},
  // {work_name:'c02',des:'c02',type:'2',work_url:'压缩后/老有所伴.mp4'},
  // {work_name:'c03',des:'c03',type:'2',work_url:'压缩后/灵芝宣传片.mp4'},
  // {work_name:'c04',des:'c04',type:'2',work_url:'MG动画宣传片.mp4'},
  // {work_name:'d01',des:'d01',type:'3',work_url:'音乐会倒计时3.mp4'},
  // {work_name:'e01',des:'e01',type:'4',work_url:'足迹-淮南）.mp4'},
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
  "left.salary": "期望薪资-10k",
  "second.pages.educational.background": "教育背景",
  "second.pages.school": "淮南师范学院",
  "second.pages.major": "数字媒体技术（本科）",
  "second.pages.major.courses": "主修课程:maya，3Dmax，premiere，after effects，达芬奇等后期软件",
  "second.pages.school.activities": "在校活动:参与安徽省计算机设计大赛数字短片组比赛，并获得一等奖",
  "second.pages.skills": "掌握技能",
  "second.pages.language.skills": "语言技能:英语 CET6",
  "second.pages.professional.skills": "专业技能:熟练掌握 premiere 及 AE 等软件的使用，会使用达芬奇对影片进行调色",
  "second.pages.work.experience": "工作经历",
  "second.pages.yiye": "苏州一页网络科技有限公司",
  "second.pages.job.des": "工作描述",
  "second.pages.job.des.content.yiye": "负责企业宣传片、系列专题片、以及一些政府机关的宣传片的后期制作",
  "second.pages.now": "至今",
  "second.pages.yijian": "安徽怡健健康科技有限公司",
  "second.pages.job.des.content.yijian":"负责企业宣传片、产品宣传片、以及一节假日宣传视频的后期制作",
  "third.pages.self.evaluation": "自我评价",
  "third.pages.self.evaluation.a": "1.5年工作经验，接触过各种风格的影片，可以对不同类型的影片风格进行把握",
  "third.pages.self.evaluation.b": "善于在工作中发现问题、解决问题，有较强的分析能力",
  "third.pages.self.evaluation.c": "可以根据文案内容独立完成视频的剪辑和调色",
  "third.pages.self.evaluation.d": "工作积极认真，细心负责，熟练运用视频后期处理的各项软件",
  "third.pages.self.evaluation.e": "对音乐节奏感和视频画面可以较好的控制",
  "works.exhibition": "作品展示",
  "works.classification.a": "所有",
  "works.classification.b": "人物专题片",
  "works.classification.c": "产品宣传片",
  "works.classification.d": "故事片",
  "works.classification.e": "MG 动画",
  "works.classification.name.b01": "杨春1.29字幕",
  "works.classification.des.b01": "描述杨春1.29字幕",
  "works.classification.name.b02": "张岩1.29字幕",
  "works.classification.des.b02": "描述张岩1.29字幕",
  "works.classification.name.c01": "陈敏坤1.30",
  "works.classification.des.c01": "描述陈敏坤1.30",
  "works.classification.name.c02": "老有所伴",
  "works.classification.des.c02": "描述老有所伴",
  "works.classification.name.c03": "灵芝宣传片",
  "works.classification.des.c03": "描述灵芝宣传片",
  "works.classification.name.c04": "MG动画宣传片",
  "works.classification.des.c04": "描述MG动画宣传片",
  "works.classification.name.d01": "音乐会倒计时3",
  "works.classification.des.d01": "描述音乐会倒计时3",
  "works.classification.name.e01": "足迹-淮南",
  "works.classification.des.e01": "描述足迹-淮南",

  // {work_name:'b01',des:'b01',type:'1',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/杨春1.29字幕.mp4'},
  // {work_name:'b02',des:'b01',type:'1',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/张岩1.29字幕.mp4'},
  // {work_name:'c01',des:'c01',type:'2',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/陈敏坤1.30.mp4'},
  // {work_name:'c02',des:'c01',type:'2',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/老有所伴.mp4'},
  // {work_name:'c03',des:'c01',type:'2',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/灵芝宣传片.mp4'},
  // {work_name:'c04',des:'c01',type:'2',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/MG动画宣传片.mp4'},
  // {work_name:'d01',des:'d01',type:'3',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/音乐会倒计时3.mp4'},
  // {work_name:'e01',des:'e01',type:'4',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/足迹-淮南）.mp4'},
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
