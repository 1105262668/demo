<template>
    <div class="footer">
        <div class="w">
           <div class="left">
                <button class="prev" @click="prevBtn"></button>
                <button v-show="playing" class="play" @click="playBtn"></button>
                <button v-show="!playing" class="pause" @click="pauseBtn"></button>
                <button  class="next" @click="nextBtn"></button>
           </div>
           <div class="audio left" >
               <audio  ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
               
               <img class="left" :src='playList[playListIndex].al.picUrl' alt="">
                <p class="left">{{playList[playListIndex].name}}</p>
           </div>
           <div class="right">

           </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name:'footerMusic',
    data(){
        return{
           
        }
    },
    created(){
        
    },
    mounted(){
        console.log(this.$refs)
    },
    computed:{
        ...mapState(['playList','playListIndex','playing'])
    },
    methods:{
        ...mapMutations(['updataPlaying','updataNext']),
        playBtn(){
            this.$refs.audio.play()
            this.updataPlaying(false)
        },
        pauseBtn(){
            this.$refs.audio.pause()
            this.updataPlaying(true)
        },
        prevBtn(){
            this.updataNext(-1)
            if(this.$refs.audio.paused){
                 this.updataPlaying(true)
            }
        },
        nextBtn(){
            this.updataNext(1)
            if(this.updataPlaying(true)){
                 this.updataPlaying(true)
            }
           
        }
    }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        background: url('~@/assets/imgs/playbar.png') repeat-x 0px -3px;
        position:fixed;
        bottom: 0;
        z-index: 10;
    }
    .w{
        width: 980px;
        height: 50px;
        margin: 0 auto;
        /* background-color: #fff; */
    }
    .play,.pause{
        width: 36px;
        height: 36px;
        margin: 10px 10px 0;
        border: 0px;
    }
    .play{
        background: url('~@/assets/imgs/playbar.png') no-repeat -2px -206px;
    }
    .pause{
        background: url('~@/assets/imgs/playbar.png') no-repeat -2px -167px;
    }
    .prev,.next{
        /* display: inline-block; */
        width: 30px;
        height: 30px;
        margin-top: 11px;
        border: 0px;
    }
    .prev{
        background: url('~@/assets/imgs/playbar.png') no-repeat 0px -131px;
    }
    .next{
        background:url('~@/assets/imgs/playbar.png') no-repeat -81px -131px;
    }

    audio{
        display: inline;
        height: 45px;
    }
    .audio{
        color: #fff;
        margin-top: 5px;
    }
    .audio img{
        width: 30px;
        height: 30px;
        margin-top:7px;
        margin-left: 30px;
    }
    .audio p{
        display:inline-block;
        height: 30px;
        margin-top:15px;
         margin-left: 30px;
    }
</style>