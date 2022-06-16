import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songUrl:'',
    playList:[
      {al:{
          id: 1955233383,
          name: "一周的朋友",
          pic: 109951167535824860,
          picUrl: "http://p4.music.126.net/UcnxVBo34Kg_zYNhlIxiow==/109951167535824866.jpg",
          pic_str: "109951167535824866"
        },
        id:'1954974529'
      }
  ],
    playListIndex:0,
    playing:true
  },
  getters:{
  	
  },
  mutations: {
    updataPlaying(state,value){
      state.playing=value
    },
  	updataPlay(state,value){
      state.playList=value
    },
    updataPlayIndex(state,value){
      state.playListIndex=value
    },
    updataNext(state,value){
      state.playListIndex +=value
    }
  },
  actions: {
    
  },
  modules: {
  }
})
  