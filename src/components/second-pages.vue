<style>
  #second-pages{padding: 3vw;display: flex;background-color: #edeced;}
  #second-pages>.r{border-left: 0.15vw solid #666;text-indent: 1em;height: 40vw}
  #second-pages>.r .title{border-bottom: 0.15vw solid #666;display: block;color: #10857c;line-height: 2}
  #second-pages>.r>.edu{margin-bottom: 2vw}
  #second-pages>.r>.edu>.content>ul{display: flex}
  #second-pages>.r>.exper>.content>.des{font-weight: bolder}
</style>
<template>
  <div id="second-pages">
    <left-component></left-component>
      <!-- "second.pages.educational.background": "教育背景",
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
  "second.pages.job.des.content.yijian":"负责企业宣传片、产品宣传片、以及一节假日宣传视频的后期制作" -->
    <div class="r">
      <div class="edu">
        <p class="title">{{$t("second.pages.educational.background")}}》</p>
        <div class="content" style="margin-top: 1vw">
          <ul>
            <li>2014.9-2018.6</li>
            <li>{{$t("second.pages.school")}}</li>
            <li>{{$t("second.pages.major")}}</li>
          </ul>
          <p>{{$t("second.pages.major.courses")}}</p>
          <p>{{$t("second.pages.school.activities")}}</p>
        </div>
      </div>
      <div class="edu">
        <p class="title">{{$t("second.pages.skills")}}》</p>
        <div class="content" style="margin-top: 1vw">
          <p>{{$t("second.pages.language.skills")}}</p>
          <p>{{$t("second.pages.professional.skills")}}</p>
        </div>
      </div>
      <div class="exper">
        <p class="title">{{$t("second.pages.work.experience")}}》</p>
        <div class="content" style="margin-bottom: 2vw;margin-top: 1vw">
          <ul>
            <li>2017.8-2018.6</li>
            <li>{{$t("second.pages.yiye")}}</li>
          </ul>
          <p class="des">{{$t("second.pages.job.des")}}：</p>
          <p>{{$t("second.pages.job.des.content.yiye")}}</p>
        </div>
        <div class="content">
          <ul>
            <li>2018.4-{{$t("second.pages.now")}}</li>
            <li>{{$t("second.pages.yijian")}}</li>
          </ul>
          <p  class="des">{{$t("second.pages.job.des")}}：</p>
          <p>{{$t("second.pages.job.des.content.yijian")}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LeftComponent from './../components/left-component'
  export default {
    components:{
      'left-component': LeftComponent
    },
    data(){
      return{
        setiaos:Array(10)
      }
    }
  }
</script>
