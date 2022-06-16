<template>
	<div class="hotRecommend">
		<main-top>
			<div slot="title">热门推荐</div>
			<div>
				<ul  class="hot-list">
					<li><a href="">华语</a><span>|</span></li>
					<li><a href="">流行</a><span>|</span></li>
					<li><a href="">摇滚</a><span>|</span></li>
					<li><a href="">民谣</a><span>|</span></li>
					<li><a href="">电子</a></li>
				</ul>
			</div>
		</main-top>
        
		<ul class="hot-recommend">
			<li v-for="(item,index) in hotRecommend" :key="index"  class="recommend-item">
				<router-link :to="{path:'/mymusic',query:{id:item.id}}">
					<div>
						<img :src="hotRecommend[index].picUrl" alt="">
						<a href="" class="img-wrap"></a>
					</div>
					<div class="bottom">
						<span class="icon1"></span>
						<a href="#" @click="songPlay"><span class="icon2"></span></a>
						<span >{{Math.round(hotRecommend[index].playCount/10000)}}万</span>
					</div>
					<p><a href="">{{hotRecommend[index].name}}</a></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import {getHotRecommend} from '@/network/home.js'
import MainTop from '@/components/content/home/main-top.vue';
import { mapMutations } from 'vuex';
import  {request}  from '@/network/request.js';

	export default{
		name:'hotRecommend',
		components:{
			MainTop
		},
		data(){
			return{
				hotRecommend:[]
			}
		},
		created(){
			this.getHots();
		},
		methods:{
			getHots(){
				getHotRecommend().then(res=>{
					// console.log(res.data.result)
					this.hotRecommend=res.data.result
					// console.log(this.hotRecommend[0].id)
				})
			},
			songPlay(){
				request({
					url:'/playlist/detail',
					params:{
						id:this.hotRecommend[0].id
					}
				}).then(res=>{
					console.log(res)
				})
				this.updataPlay(this.hotRecommend)
			},
			...mapMutations(['updataPlay'])
		}
	};
</script>

<style scoped>
	.hotRecommend{
		margin-top: 10px;
	}
	.hot-list{
		margin-left: 20px;
	}
	.hot-list span{
		margin: 0 10px;
	}
	.hot-list a{
		color: #666;
	}
	.hot-list li{
		float: left;
	}


	.hot-recommend{
		display: flex;
		flex-wrap:wrap;
		text-align: center;
		margin-top: 20px;
	}
	.hot-recommend img{
		width: 140px;
		height: 140px;
	}
	.recommend-item{
		width: 25%;
		padding-bottom: 30px;
		position: relative;
	}
	.recommend-item .img-wrap{
		display: inline-block;
		width: 140px;
		height: 140px;
		background: url('~@/assets/imgs/coverall.png') no-repeat 1px 0px;
		position: absolute;
		left: 20px;
		top: 0;
	}
	.recommend-item .bottom{
		width: 140px;
		height: 27px;
		line-height: 27px;
		font-size: 12px;
		background: url('~@/assets/imgs/coverall.png') no-repeat 1px -537px;
		position: absolute;
		top: 113px;
		left: 21px;
		color: #ccc;
		
	}
	.recommend-item .bottom span{
		float: left;
	}
	.recommend-item .bottom .icon1{
		display:inline-block ;
		width: 14px;
		height: 11px;
		background: url('~@/assets/imgs/iconall.png')no-repeat 0px -23px;
		margin: 8px 5px  0 15px;

	}
	.recommend-item .bottom .icon2{
		float: right;
		display: inline-block;
		width: 16px;
		height: 17px;
		background: url('~@/assets/imgs/iconall.png')no-repeat 0px 1px;
		margin: 5px 10px 0 0;
	}
	.recommend-item p{
		width: 140px;
		margin: 5px auto 0;
		text-align: left;
		font-style: 14px;
	}	
	.recommend-item p a{
		color: #000;
	}
	
</style> 