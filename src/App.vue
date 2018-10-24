<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* 图标 */
  @font-face {
    font-family: 'iconfont'; /* project id 882405 */
    src: url('//at.alicdn.com/t/font_882405_j9t5s2vyyg8.eot');
    src: url('//at.alicdn.com/t/font_882405_j9t5s2vyyg8.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_882405_j9t5s2vyyg8.woff') format('woff'),
    url('//at.alicdn.com/t/font_882405_j9t5s2vyyg8.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_882405_j9t5s2vyyg8.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-name:before{content: '\e672';color: #10857c;margin-right: 1vw}
  .icon-shouji:before{content: '\e600';color: #10857c;margin-right: 1vw}
  .icon-weixin:before{content: '\e614';color: #10857c;margin-right: 1vw}
  .icon-youxiang:before{content: '\e636';color: #10857c;margin-right: 1vw}
</style>
