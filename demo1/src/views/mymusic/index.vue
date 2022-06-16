<template>
    <div>
        <item-music :playlist="this.playList" :itemlist="this.itemList"></item-music>
    </div>
</template>

<script>
import itemMusic from './itemMusic.vue'
import {getMusicItemList,getItemList} from '@/network/item.js'

export default {
    name:'mymusic',
    data(){
        return{
            id:'',
            playList:[],
            itemList:[]
        }
    },
    components:{
        itemMusic
    },
    mounted(){
        // console.log(this.$route.query)
        this.id=this.$route.query.id
        getMusicItemList(this.id).then(res=>{
            // console.log(res)
            this.playList=res.data.playlist
            console.log(this.playList)
        })
        getItemList(this.id ).then(res=>{
            // console.log(res)
            this.itemList=res.data.songs
        })
    }
}
</script>

<style>

</style>