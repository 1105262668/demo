<template>
    <div class="itemMusic">
        <div class="top">
            <img class="bgimg" :src="playlist.coverImgUrl" alt="">
            <img class="mainimg" :src="playlist.coverImgUrl" alt="">
            <div class="info right"> 
                <p>{{playlist.name}}</p>
                <p>{{playlist.description}}</p>
            </div>
        </div>
        <div class="bottom">
            <!-- {{itemlist}} -->
            <ul>
                <li v-for="(item,i) in itemlist" :key="i" @click="songPlay(i)">
                <a href="#">
                    {{item.name}}--{{item.id}}
                </a> 
                    <!-- <audio :src="item.al."></audio> -->
                </li>
            </ul>
            <!-- <audio controls src=" https://music.163.com/song/media/outer/url?id=1936853250.mp3"></audio> -->
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
    name:'itemMusic',
    props:['playlist','itemlist'],
    mounted(){
       
    },
    methods:{
        songPlay(i){
            this.updataPlay(this.itemlist)
            this.updataPlayIndex(i)
            this.updataPlaying(true)
        },
        ...mapMutations(['updataPlay','updataPlayIndex','updataPlaying'])
    }
}
</script>

<style scoped>
    .itemMusic{
        width: 600px;
        min-height: 1000px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .top .bgimg{
        width: 600px;
        height: 400px;
        filter:blur(30px);
        z-index: -1;
    }
    .top .mainimg{
        width: 200px;
        height:200px;
        position:absolute;
        left: 50px;
        top: 100px;
    }
    .top .info{
         /* display: block; */
        width: 200px;
        height: 200px;  
        position:absolute;
        right: 50px;
        top: 100px;
        
       
    }
    .top .info p{
        /* display: block; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
        max-height: 200px;
        color: #fff;
       
       
    }
    .bottom{
        /* margin-top: 400px; */
    }
    li{
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        background-color: #ccc;
        border-bottom: 1px solid #fff;
    }
</style>