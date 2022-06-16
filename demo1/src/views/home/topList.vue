<template>
    <div>
       <main-top>
           <div slot="title">榜单</div>
       </main-top>
        <div class="list" v-if="listInfo[0]">
            <ul>
                <li class="left" v-for="(item,index) in listInfo.slice(0,3)" :key="index">
                    <top-list-item :info="item.id"></top-list-item>
                </li>
                <!-- <li class="left">
                    <top-list-item :info="listInfo[1].id"></top-list-item>
                </li>
                <li class="left">
                    <top-list-item :info="listInfo[2].id"></top-list-item>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import MainTop  from '@/components/content/home/main-top.vue';
import TopListItem from '../../components/content/home/topListItem.vue';

import {getTopList} from '@/network/home.js'
export default {
    name:'topList',
    components:{
        MainTop,
        TopListItem
    },
    data(){
        return{
            listInfo:[]
        }
    },
    created(){
        this.getTopLists()
    },
    methods:{
        getTopLists(){
            getTopList().then(res=>{
                console.log(res.data.list)
                this.listInfo=res.data.list
                // console.log(this.listInfo[0].id)
            })
        }
    }
}
</script>

<style scoped>
.list{
    margin-bottom: 50px;
}
.list ul{
    display: flex;
    margin: 0 20px;
}
.list li{
    /* display: inline-block; */
    flex: 1;
    width: 33%;
}
</style>