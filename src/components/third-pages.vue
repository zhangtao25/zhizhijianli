<style>
  #third-pages{padding: 3vw;display: flex;background-color: #edeced;}
  #third-pages>.r{border-left: 0.15vw solid #666;text-indent: 1em;height: 40vw}
  #third-pages>.r .title{border-bottom: 0.15vw solid #666;display: block;color: #10857c;line-height: 2}
</style>
<template>
  <div id="third-pages">
    <left-component></left-component>
    <div class="r">
      <div class="self-evaluation">
        <p class="title">自我评价》</p>
        <div class="content" style="margin-top: 1vw">
          <ul>
            <li>1. 1.5年工作经验，接触过各种风格的影片，可以对不同类型的影片风格进行把握 </li>
            <li>2. 善于在工作中发现问题、解决问题，有较强的分析能力</li>
            <li>3. 可以根据文案内容独立完成视频的剪辑和调色</li>
            <li>4. 工作积极认真，细心负责，熟练运用视频后期处理的各项软件</li>
            <li>5. 对音乐节奏感和视频画面可以较好的控制</li>
          </ul>
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
