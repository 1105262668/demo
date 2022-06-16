<template>
	<div class="swiper">
    	<div class="place">
    		<el-carousel :interval="5000" arrow="always" indicator-position="none">
		        <el-carousel-item v-for="(item,index) in banner" :key="index">
		           <img :src="banner[index].imageUrl">
		        </el-carousel-item>
	    	</el-carousel>
    	</div>
        <div class="download">
          <button>下载客户端</button>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
	</div>
</template>

<script>
	export default{
		name:'swiper',
		props:['banner']
	};
</script>

<style scoped>
.swiper{
	width: 980px;
	height: 300px; 
	margin:0 auto;
	background-color: #555;
	position: relative;
}
.place{
	width: 730px;
	height: 300px; 
	display: inline-block;
	background-color: #555;
	position: absolute;
	left: 0;
}
.el-carousel__item img{
	width: 730px;
	height: 300px;
}
.download{
  	width:250px;
  	height: 300px;
  	/* background-color: #ccc; */
	background-image:url('~@/assets/imgs/download.jpg');
	position: absolute;
	right: 0;
}
.download button{
	width: 215px;
	height: 60px;
	margin-top: 185px;
	margin-left: 19px;
	background-color: #296bcc;
	border:0px;
	border-radius: 3px;
	color: #fff;
	font-size: 20px;
}
.download button:hover{
	background-color: rgb(60, 41, 226);
}
.download p{
	font-size: 10px;
	color: #8d8d8d;
	margin: 20px 0;
	text-align: center;
}

</style>