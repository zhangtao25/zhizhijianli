<!-- Demo styles -->
<style>
  #home{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #2c2c2c;
    font-size: 1.2vw;
  }
  .home-dialog .el-dialog__body{text-align: center}
  .setLanguage{
    color: white;
    border: 1px solid white;
    border-radius: 2vw;
    width: 12vw;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right: 1vw;
    top: 1vw;
  }
  .swiper-container {
    width: 86vw;
    height: 46vw;
  }
  .swiper-slide {
    background: skyblue;
  }
  .first-page{background-color: black;height: 100%}
  .first-page>.wrap{color: white;position: absolute;right: 5vw;bottom: 14vw}
</style>
<template>
  <div id="home">
    <el-dialog
      sss
      class="home-dialog"
      title="选择语言"
      :visible.sync="dialogVisible"
      width="300px"
      :append-to-body="true"
      :before-close="handleClose">
      <el-radio-group v-model="radioVal">
        <el-radio label="1" border>中文</el-radio>
        <el-radio label="2" border>English</el-radio>
      </el-radio-group>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLanguage">确定(OK)</el-button>
      </div>
    </el-dialog>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="first-page">
            <div
              class="setLanguage"
              @click="dialogVisible = true">
              {{$t("choose.language")}}
            </div>
            <div class="wrap">
              <p style="font-size: 2vw;font-weight: bolder">{{$t("my.name")}}</p>
              <p style="font-size: 1.6vw">{{$t("first.page.houqi.jianli")}}</p>
              <p>2017-2018</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <second-pages></second-pages>
        </div>
        <div class="swiper-slide">
          <third-pages></third-pages>
        </div>
        <div class="swiper-slide">
          <works></works>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import SecondPages from './../components/second-pages'
  import ThirdPages from './../components/third-pages'
  import Works from './../components/works'
  export default {
    components:{
      'second-pages': SecondPages,
      'third-pages': ThirdPages,
      'works': Works
    },
    data(){
      return{
        dialogVisible:false,
        radioVal:'1'
      }
    },
    created(){
      // ElementUI
      // console.log(this.$t("message"))
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      setLanguage(){
        let obj = {'1':'zh','2':'en'}
        localStorage.langCode = obj[this.radioVal]
        location.reload()
      }
    }
  }
</script>
