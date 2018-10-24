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
    <div class="r">
      <div class="edu">
        <p class="title">教育背景》</p>
        <div class="content" style="margin-top: 1vw">
          <ul>
            <li>2014.9-2018.6</li>
            <li>淮南师范学院</li>
            <li>数字媒体技术(本科)</li>
          </ul>
          <p>主修课程:maya，3Dmax，premiere，after effects，达芬奇等后期软件</p>
          <p>在校活动:参与安徽省计算机设计大赛数字短片组比赛，并获得一等奖</p>
        </div>
      </div>
      <div class="edu">
        <p class="title">掌握技能》</p>
        <div class="content" style="margin-top: 1vw">
          <p>语言技能:英语 CET6</p>
          <p>专业技能:熟练掌握 premiere 及 AE 等软件的使用，会使用达芬奇对影片进行调色</p>
        </div>
      </div>
      <div class="exper">
        <p class="title">工作经历》</p>
        <div class="content" style="margin-bottom: 2vw;margin-top: 1vw">
          <ul>
            <li>2017.8-2018.6</li>
            <li>苏州一页网络科技有限公司</li>
          </ul>
          <p class="des">工作描述：</p>
          <p>负责企业宣传片、系列专题片、以及一些政府机关的宣传片的后期制作</p>
        </div>
        <div class="content">
          <ul>
            <li>2018.4-至今</li>
            <li>安徽怡健健康科技有限公司</li>
          </ul>
          <p  class="des">工作描述：</p>
          <p>负责企业宣传片、产品宣传片、以及一节假日宣传视频的后期制作</p>
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
