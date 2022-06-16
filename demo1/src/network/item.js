import {request} from './request.js'


// 获取歌单详情
export function getMusicItemList(id){
	return request({
		url:`/playlist/detail?id=${id}`
		// url:'/top/album?limit=30&type=hot'
	})
}

//获取歌单所以歌曲
export function getItemList(data){
	return request({
		url:`/playlist/track/all?id=${data}&limit=10&offset=1`
		// url:'/top/album?limit=30&type=hot'
	})
}

export function getsong(data){
	return request({
		// url:`https://music.163.com/song/media/outer/url?id=id.mp3 `
		// url:'/top/album?limit=30&type=hot'
	})
}