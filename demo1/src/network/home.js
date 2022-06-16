import {request} from './request.js'

//手机登录
export function getLoginCellphoneResource(user,password){
	  return request({
			url:'/login/cellphone',
			method:'get',
			params:{
				phone:user,
				password:password
			}
		})
}

//首页轮播图
export function getHomeMultiData(){
	return request({
		url:'/banner'
	})
}
//首页热门推荐
export function getHotRecommend(){
	return request({
		url:'/personalized?limit=8'
	})
}
//首页 新歌上架
export function getNewMusic(){
	return request({
		url:'/album/new?area=All&limit=20'
		// url:'/top/album?limit=30&type=hot'
	})
}
//首页 入驻歌手
export function getSinger(){
	return request({
		url:'/top/artists?limit=5'
		// url:'/top/album?limit=30&type=hot'
	})
}
//首页 热门主播 anchor
export function getAnchor(){
	return request({
		url:'/dj/toplist/popular?limit=5'
		// url:'/top/album?limit=30&type=hot'
	})
}
//首页 所有榜单
export function getTopList(){
	return request({
		url:'/toplist'
		// url:'/top/album?limit=30&type=hot'
	})
}




//测试  19723756
export function getadd () {
	return request({
		  url:'/song/url?id=33894312'
		// url:'/recommend/resource'
	  })
}