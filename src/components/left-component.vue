<style>
  .l{position: relative;width: 20vw;height: 40vw}
  .l>ul:nth-child(1){margin-bottom: 5vw}
  .l>ul:nth-child(2){margin-left: 2.5vw}
  .l>ul:nth-child(3){position: absolute;top: 12vw}
  .l>ul:nth-child(3)>li{transform: rotate(-45deg);margin-top: 1vw;}
  .l>ul:nth-child(3)>li:nth-child(2n+1){width: 2vw;height: 0.2vw;background-color: #e09691}
  .l>ul:nth-child(3)>li:nth-child(2n){width: 2vw;height: 0.2vw;background-color: #10857c}
</style>
<template>
  <div class="l">
    <ul>
      <li class="iconfont icon-name" style="font-size: 1.5vw">{{$t("left.name")}}</li>
      <li class="iconfont icon-shouji">19956543767</li>
      <li class="iconfont icon-weixin">gyz951222</li>
      <li class="iconfont icon-youxiang">1369160907@qq.com</li>
    </ul>
    <ul>
      <!--"choose.language": "选择语言",-->
      <!--"my.name": "高又枝",-->
      <!--"first.page.houqi.jianli": "后期·简历",-->
      <!--"left.name": "高又枝",-->
      <!--"left.sex": "性别-女",-->
      <!--"left.birthday": "生日-1995.12",-->
      <!--"left.height": "身高-168cm",-->
      <!--"left.weight": "体重-45kg",-->
      <!--"left.native.place": "籍贯-安徽·合肥",-->
      <!--"left.position": "应聘岗位-视频后期制作",-->
      <!--"left.salary": "期望薪资-10k"-->
      <li>{{$t("left.sex")}}</li>
      <li>{{$t("left.birthday")}}</li>
      <li>{{$t("left.height")}}</li>

      <li>{{$t("left.weight")}}</li>
      <li>{{$t("left.native.place")}}</li>
      <li>{{$t("left.position")}}</li>
      <li>{{$t("left.salary")}}</li>
    </ul>
    <ul>
      <li v-for="(setiao,index) of setiaos" :key="index"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        setiaos:Array(10)
      }
    }
  }
</script>
