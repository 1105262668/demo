<template>
    <div>
        <div class="top">
            <div class="title">
                <p class="left">入驻歌手</p>
                <span class="right">查看全部 ></span>
            </div>
            <div class="content">
                <ul v-if="singers[0]">
                    <li v-for="(item,index) in singers" :key="index">
                        <a href="">
                            <div class="left"><img :src="singers[index].img1v1Url"></img></div>
                            <div class="info left">
                                <p>{{singers[index].name}}</p>
                                <span>{{singers[index].alias[0]}}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="btn">
                <button>申请成为网易音乐人</button>
            </div>
        </div>

        <div class="title">
            <p class="left">热门主播</p>
        </div>
        <div class="content">
            <ul v-if="anchors[0]">
                <li v-for="(item,index) in anchors" :key="index">
                    <a href="">
                        <div class="left">
                            <img :src="anchors[index].avatarUrl" alt="">
                        </div>
                        <div class="info left">
                            <p>{{anchors[index].nickName}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getSinger} from '@/network/home.js'
import {getAnchor} from '@/network/home.js'

export default {
    name:'singer',
    data(){
        return{
            singers:[],
            anchors:[]
        }
    },
    created(){
      // console.log(getHomeMultiData().PromiseResult.data)
        this.getSingers(),
        this.getAnchors()
    },
    methods:{
        getSingers(){
            getSinger().then(res=>{
                // console.log(res.data)
                this.singers=res.data.artists
            })
        },
        getAnchors(){
            getAnchor().then(res=>{
                // console.log(res.data.data.list)
                this.anchors=res.data.data.list
            })
        }
    }
}
</script>

<style scoped>
    .left{
        float: left;
    }
    .right{
        float: right;
    }

    .title{
        width: 210px;
        height: 24px;
        border-bottom:1px solid #666 ;
        margin: 20px auto;
    }
    .content ul{
        margin-left: 20px;
    }
    .content li{
        width: 210px;
        height: 62px;
        margin-bottom: 14px;
        background-color: #fafafa;
    }
    .content li a{
        display:inline-block;
    }
    .content li a:hover{
        background-color: #f4f4f4;
    }
    .content li img{
        width: 62px;
    }
    .content li .info {
        width: 134px;
        margin-top: 8px;
        padding-left: 14px;
    }
    .content li .info p{
        font-size: 14px;
        height: 22px;
        line-height: 22px;
        color: #000;
    }
    .content li .info span{
        width: 148px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #666;
    }
    .btn{
        width: 210px;
        margin: 0 auto 40px;

    }
    .btn button{
        display: inline-block;
        width: 170px;
        height: 31px;
        /* line-height: 31px; */
        margin-left: 15px;
        font-size: 12px;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>