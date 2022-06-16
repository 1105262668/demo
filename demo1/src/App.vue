<template>
  <div id="app">
    <main-header></main-header>
    <router-view class="rview"></router-view>
	<footer-music></footer-music>
  </div>
</template>

<script type="text/javascript">
	import MainHeader from '@/components/content/mainHeader.vue'
	import FooterMusic from '@/components/content/footerMusic.vue'

	export default {
	  name: 'app',
	  components: {
	    MainHeader,
		FooterMusic
	  }
	};
</script>

<style>
  @import "./assets/css/base.css";
</style>
