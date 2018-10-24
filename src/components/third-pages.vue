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
        <p class="title">{{$t("third.pages.self.evaluation")}}》</p>
        <div class="content" style="margin-top: 1vw">
          <ul>
            <li>1. {{$t("third.pages.self.evaluation.a")}}</li>
            <li>2. {{$t("third.pages.self.evaluation.b")}}</li>
            <li>3. {{$t("third.pages.self.evaluation.c")}}</li>
            <li>4. {{$t("third.pages.self.evaluation.d")}}</li>
            <li>5. {{$t("third.pages.self.evaluation.e")}}</li>
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
