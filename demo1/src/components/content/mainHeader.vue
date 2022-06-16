<template>
	<header-bar>
  		<header-item path='/home'>发现音乐</header-item>
  		<header-item path='/mymusic'>我的音乐</header-item>
  		<header-item path='/follow'>关注</header-item>
  		<header-item path='/shoppingmall'>商城</header-item>
  		<header-item path='/musician'>音乐人</header-item>
  		<header-item path='/download'>下载客户端</header-item>
  	</header-bar>
</template>

<script>
	import HeaderBar from '@/components/common/header/headerbar.vue'
	import HeaderItem from '@/components/common/header/headerItem.vue'
	export default{
		name:'MainHeader',
		components:{
			HeaderItem,
			HeaderBar
		}
	};
</script>

<style scoped>
	
</style>