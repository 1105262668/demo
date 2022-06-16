<template>
    <div >
        <dl>
            <dt>
                <a href=""  class="left" style="font-size:0">
                    <img :src="playList.coverImgUrl" alt="">
                </a>
                <div class="bg left" >
                    <a href="" ><p>{{playList.name}}</p></a>
                    <a href="">
                        <span class="btn1"></span>
                    </a>
                    <a href="">
                        <span class="btn2"></span>
                    </a>
                </div>
            </dt>
            <dd style='clear:left' v-if="playList.tracks">
                <ol>
                    <li v-for="(item,index) in playList.tracks.slice(0,10)" :key="index" @click="songPlay(index)">
                       {{ item.al.name}}
                    </li>
                    
                </ol>
            </dd>
            
        </dl>
    </div>
</template>

<script>
import {getMusicItemList} from '@/network/item.js'
import { mapMutations } from 'vuex'

export default {
    name:'topListItem',
    props:['info'],
    data(){
        return{
            // id:this.info,
            playList:[]
        }
    },
    created(){
        getMusicItemList(this.info).then(res=>{
             this.playList=res.data.playlist
        })
        
    },
    methods:{
        songPlay(index){
				this.updataPlay(this.playList.tracks)
                this.updataPlayIndex(index)
                this.updataPlaying(true)
			},
        ...mapMutations(['updataPlay','updataPlayIndex','updataPlaying'])
    }
}

</script>

<style scoped>
dt,dd{
    margin: 0;
    padding: 0;
    border: 0;
}
img{
    width: 80px;
    height: 80px;
    margin: 10px;
    font-size: 0;
}
a{
    color: #000;
}
.bg p{
    margin: 20px 5px 0; 
    font-size: 14px;
    font-weight: bold;
}
ol li{
    list-style-type: decimal;
    list-style-position:inside;
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

ol li:nth-of-type(odd){
    background-color: #ccc;
}
ol li:nth-of-type(even){
    background-color: #eee;
}
dt{ 
    height: 100px;
    background-color: #eee;
}
dt span{
    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: #000;
    margin: 5px;
    /* background: url('~@/assets/imgs/index.png') no-repeat 0px 0px; */
}
dt .btn1{
    background: url('~@/assets/imgs/index.png') no-repeat -267px -205px;
}
dt .btn1:hover{
    background: url('~@/assets/imgs/index.png') no-repeat -267px -235px;
}
dt .btn2{
    background: url('~@/assets/imgs/index.png') no-repeat -299px -205px;
}
dt .btn2:hover{
    background: url('~@/assets/imgs/index.png') no-repeat -299px -235px;
}

</style>