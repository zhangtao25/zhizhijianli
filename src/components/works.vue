<style>
  #works{background-color: white;height: 100%}
  #works>p{text-indent: 1em;line-height: 4vw;font-size: 1.5vw;color: #10857c;}
  #works>ul{display: flex;flex-wrap: wrap;width: 75vw;margin-left: 50%;transform: translateX(-50%);border: 2px solid #10857c;padding: 2vw 4vw;}
  #works>ul>li{width: 16vw;cursor: pointer;position: relative;margin: 0.6vw}
  #works>ul>li>.video{width: 16vw;height: 9vw;background-size: 100%;background-position: 50%}
  #works>ul>li>.dialog>img{display: none;width:32px;height:32px}
  #works>ul>li>.dialog{
    width: 16vw;height: 9vw;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;top: 0;
    display: flex;
    justify-content: center;
    align-items: center
  }
  #works>ul>li:hover>.video{background-size: 120%}
  #works>ul>li:hover .work_name{color: #10857c}
  #works>ul>li:hover>.dialog{background-color: rgba(0, 0, 0, 0.3)}
  #works>ul>li:hover>.dialog>img{display: block}
  #works>.pagination{text-align: center}
  .el-dialog video{margin-left: 50%;transform: translateX(-50%)}
</style>

<template>
  <div id="works">
      <!-- "works.exhibition": "作品展示",
  "works.classification.a": "所有",
  "works.classification.b": "人物专题片",
  "works.classification.c": "产品宣传片",
  "works.classification.d": "故事片",
  "works.classification.e": "MG 动画",
  "works.classification.name.b01": "名字b01",
  "works.classification.des.b01": "描述b01" -->
    <p>{{$t("works.exhibition")}}》</p>
    <el-radio-group style="margin: 1vw" v-model="radioVal">
      <el-radio :label="0">{{$t("works.classification.a")}}</el-radio>
      <el-radio :label="1">{{$t("works.classification.b")}}</el-radio>
      <el-radio :label="2">{{$t("works.classification.c")}}</el-radio>
      <el-radio :label="3">{{$t("works.classification.d")}}</el-radio>
      <el-radio :label="4">{{$t("works.classification.e")}}</el-radio>
    </el-radio-group>
    <ul id="ulscroll" style="overflow-y: scroll;height:30vw">
      <li @click="play(msg)" v-for="(msg,index) of msgs" :key="index" v-show="fn(msg)">
        <div class="video" :style="{'background-image':'url('+msg.cover_url+')'}">
        </div>
        <div style="padding:0.5vw;background-color:#f8f8f8;width:15vw">
          <p class="work_name">{{$t("works.classification.name."+msg.work_name)}}</p>
          <p class="des" style="color:#999">{{$t("works.classification.des."+msg.des)}}</p>
        </div>
        <div class="dialog">
          <img src="http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/播放.png" alt="">
        </div>
      </li>
    </ul>
    <el-dialog
      title="视频"
      :visible.sync="dialogVisible"
      width="80%"
      :append-to-body="true"
      :before-close="handleClose">
      <video ref="video" :src="video_url+work_url" controls="controls"></video>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      video_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/',
      radioVal:'0',
      msgs:[
  // "works.classification.a": "0所有",
  // "works.classification.b": "1人物专题片",
  // "works.classification.c": "2产品宣传片",
  // "works.classification.d": "3故事片",
  // "works.classification.e": "4MG 动画",
        {work_name:'b01',des:'b01',type:'1',work_url:'杨春1.29字幕.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/白茶.jpeg'},
        {work_name:'b02',des:'b02',type:'1',work_url:'张岩1.29字幕.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/红茶.jpeg'},
        {work_name:'c01',des:'c01',type:'2',work_url:'陈敏坤1.30.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/黑茶.jpeg'},
        {work_name:'c02',des:'c02',type:'2',work_url:'老有所伴.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/黄茶.jpeg'},
        {work_name:'c03',des:'c03',type:'2',work_url:'灵芝宣传片.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/绿茶.jpeg'},
        {work_name:'c04',des:'c04',type:'2',work_url:'MG动画宣传片.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/茶具.jpeg'},
        {work_name:'d01',des:'d01',type:'3',work_url:'音乐会倒计时3.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/乌龙茶.jpeg'},
        {work_name:'e01',des:'e01',type:'4',work_url:'足迹-淮南）.mp4',cover_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/白茶.jpeg'},
      ],
      work_url:'',
      dialogVisible: false,
      pageScrollTop:0
    }
  },
  mounted(){
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          this.$refs.video.pause()
        })
        .catch(_ => {});
    },
    play(val) {
      this.work_url = val.work_url
      this.dialogVisible = true
    },
    prevClick(){
    },
    nextClick(){
    },
    fn(msg){
      if(this.radioVal == '0'){
        return true
      }else{
        if(msg.type == this.radioVal){
          return true
        }else{
          return false
        }
      }
    }
  }
}
</script>
