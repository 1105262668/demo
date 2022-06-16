<template>
  	<div class="top">
		<div class="title">
			<slot name="title"></slot>	
		</div>
		<div class="more">
			<a href="">更多</a>
			<span class="moreimg"></span>
		</div>	
		<slot></slot>
	</div>
</template>

<script>
export default {
    name:'MainTop'
}
</script>

<style scoped>
	.top{
		margin: 0 20px;
		height: 35px;
		line-height: 35px;
		border-bottom: 2px solid red;
	}
	.top .title{
		font-size: 22px;
		color: red;
		float: left;
		margin:0 15px 0 5px;
		background: url('~@/assets/imgs/index.png') no-repeat -230px -153px;
		padding-left: 30px;
	}
	.more{
		float: right;
	}
	.more a{
		color: #666;
	}
	.more .moreimg{
		display: inline-block;
		width: 12px;
		height:12px;
		background: url('~@/assets/imgs/index.png') no-repeat 0px -239px;
		margin: 0 5px;
	}
</style>