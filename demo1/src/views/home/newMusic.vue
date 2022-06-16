<template>
    <div>
        <main-top>
            <div slot="title">新碟上架</div>
        </main-top>
        <div class="new-music" v-if="newMusicLists[0]">
            <el-carousel :autoplay='false'  arrow="always"  indicator-position="none" height="180px"> 
                <el-carousel-item>
                    <div  class="list-item" v-for="(item,index) in 5" :key="index">
                        <img :src="newMusicLists[index].picUrl " alt="">
                        <p>{{newMusicLists[index].name}}</p>
                        <span>{{newMusicLists[index].artist.name}}</span>
                    </div>
                </el-carousel-item>

                <el-carousel-item >
                    <div class="list-item" v-for="(item,index) in 5" :key="index">
                        <img :src="newMusicLists[index+5].picUrl  " alt="">
                        <p>{{newMusicLists[index+5].name}}</p>
                        <span>{{newMusicLists[index+5].artist.name}}</span>
                    </div>
                </el-carousel-item>

                <el-carousel-item >
                    <div class="list-item" v-for="(item,index) in 5" :key="index">
                        <img :src="newMusicLists[index+10].picUrl " alt="">
                        <p>{{newMusicLists[index+10].name}}</p>
                        <span>{{newMusicLists[index+10].artist.name}}</span>
                    </div>
                </el-carousel-item>

                <el-carousel-item>
                    <div class="list-item" v-for="(item,index) in 5" :key="index">
                        <img :src="newMusicLists[index+15].picUrl " alt="">
                        <p>{{newMusicLists[index+15].name}}</p>
                        <span>{{newMusicLists[index+15].artist.name}}</span>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import MainTop from '@/components/content/home/main-top.vue';

import {getNewMusic} from '@/network/home.js'
export default {
    name:'newMusic',
    components:{
        MainTop
    },
    data(){
        return{
            newMusicLists:[]
        }
    },
    created(){
        this.getNewMusics()
    },
    methods:{
        getNewMusics(){
             getNewMusic().then(res=>{
                //  console.log(res.data.albums);
                 this.newMusicLists=res.data.albums
             })
        }
    }
}
</script>

<style scoped>
.new-music{
   margin: 20px;
   height: 188px;
   border: 1px solid #ccc;
   background-color: #f5f5f5;
}
.el-carousel{
 margin: 4px 0 37px;
 
}
.el-carousel__item{
    width: 620px;
    /* background-color: #000; */
    margin-left: 55px;
    height: 180px;
    /* display: flex; */
    
}
.el-carousel__item .list-item{
    float: left;
    /* width: 20%; */
    width: 100px;
    margin-left: 12px;
}
.el-carousel__item img{
    width: 100px;
    height: 100px;
    margin-top: 20px;
    
}   
.el-carousel__item p{
    /* width: 100px; */
     font-size: 12px;
     color: #000;
     margin: 5px 0;
}
.el-carousel__item span{
    color: #666;
    font-size: 12px;
    
}
</style>