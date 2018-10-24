<style>
  #works{background-color: white;height: 100%}
  #works>p{text-indent: 1em;line-height: 4vw;font-size: 1.5vw;color: #10857c}
  #works>ul{display: flex;flex-wrap: wrap;}
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
    <p>作品展示》</p>
    <el-radio-group style="margin: 1vw" v-model="radioVal">
      <el-radio :label="0">全部</el-radio>
      <el-radio :label="1">人物</el-radio>
      <el-radio :label="2">3D</el-radio>
      <el-radio :label="3">动画</el-radio>
    </el-radio-group>
    <ul>
      <li @click="play(msg)" v-for="(msg,index) of msgs" :key="index">
        <div class="video" :style="{'background-image':'url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test.jpg)'}">
        </div>
        <div style="padding:0.5vw;background-color:#f8f8f8;width:15vw">
          <p class="work_name">{{msg.work_name}}</p>
          <p class="des" style="color:#999">{{msg.des}}</p>
        </div>
        <div class="dialog">
          <img src="http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/播放.png" alt="">
        </div>
      </li>
    </ul>
    <div class="pagination">
      <el-button @click="prevClick">上一页</el-button>
      <span>当前页为：{{page}}页</span>
      <el-button @click="nextClick">下一页</el-button>
    </div>
    <el-dialog
      title="视频"
      :visible.sync="dialogVisible"
      width="80%"
      :append-to-body="true"
      :before-close="handleClose">
      <video ref="video" :src="work_url" controls="controls"></video>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      radioVal:'0',
      msgs:[
        {work_name:'陈敏坤1.30',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/陈敏坤1.30.mp4'},
        {work_name:'老有所伴',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/老有所伴.mp4'},
        {work_name:'灵芝宣传片',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/灵芝宣传片.mp4'},
        {work_name:'杨春1.29字幕',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/杨春1.29字幕.mp4'},
        {work_name:'音乐会倒计时3',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/音乐会倒计时3.mp4'},
        {work_name:'张岩1.29字幕',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/张岩1.29字幕.mp4'},
        {work_name:'足迹-淮南）',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/足迹-淮南）.mp4'},
        {work_name:'MG动画宣传片',des:'描述性文字',work_url:'http://101.132.46.146:8080/elfinder/files/zhangtao25/zhizhi/压缩后/MG动画宣传片.mp4'}
      ],
      work_url:'',
      dialogVisible: false,
      page:1
    }
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
      // console.log(1)
      if (this.page==1){
        console.log('最顶上一页了')
      } else {
        this.page--
      }
    },
    nextClick(){
      if (this.page==4){
        console.log('最后上一页了')
      } else {
        this.page++
      }
    }
  }
}
</script>
