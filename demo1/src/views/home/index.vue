<template>
		<div>
        <swiper :banner='banner'></swiper>
        <div class="main">
          <div class="main-left">
            <hot-recommend></hot-recommend> 
            <new-music></new-music>
            <top-list></top-list>
          </div>
          <div class="main-right">
            <main-login class="main-login"></main-login>
            <singer></singer>  
          </div>
        </div>
        
    </div>
</template>


<script type="text/javascript">
  import Swiper from './swiper.vue'
  import HotRecommend from './hotRecommend.vue'
  import NewMusic from './newMusic.vue'
  import MainLogin from './mainLogin.vue'
  import Singer from './singer.vue'
  import TopList from './topList.vue'
 
  import {getHomeMultiData,getadd} from '@/network/home.js'


  export default {
    name: 'Home',
    components:{
      Swiper,
      HotRecommend,
      NewMusic,
      MainLogin,
      Singer,
      TopList
    },
    data(){
      return{
        banner:[]
      }
    },
    created(){
      // console.log(getHomeMultiData().PromiseResult.data)
      this.getBanner();
      this.getadds()
    },
    methods:{
      getBanner() {
        getHomeMultiData().then(res => {
          // console.log(res);
          this.banner=res.data.banners;
        })
      },
      getLogin(){
          getLoginCellphoneResource().then(res=>{
          // console.log(res)
        })
      },
      getadds(){
        getadd().then(res=>{
          // console.log(res)
        })
      }
      
    }
  }
</script>

<style>
  .main{
    width: 980px;
    margin: 0 auto 50px;
    overflow: hidden;
    border:1px solid #ccc;
  }
  .main-left{
    width: 728px;
    min-height: 1000px;
    border-right:1px solid #ccc;
    /* border-bottom: none; */
    overflow: hidden;
    float: left;
  }
  .main-right{
    width: 250px;
    float: right;
    
  }
</style>
