<template>
	<div class="wrap">
		<div class="header-bar">
			<div class="left">
				<a href="#"><img src="@/assets/imgs/tubiao.png" alt=""></a>
			</div>
			<div class="right">
				<input type="text" placeholder="   音乐/视频/电台/用户">
				<button>创作者中心</button>
				<router-link to="/login" class="link">登录</router-link>
				<div>
					<img src="" alt="">
				</div>
			</div>
			<div class="content">
				<slot></slot>	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HeaderBar'
	}
</script>

<style scoped>
	a{
		text-decoration: none;
		color: #fff;
	}
	.left{
		float: left;
		
	}
	.right{
		float: right;
		line-height: 70px;
	}
	.wrap{
		width: 100%;
		height: 70px;
		background-color: #242424;
	}
	.header-bar{
		width: 1100px;
		margin: 0 auto;
		color: #fff;
	}
	.header-bar .left a{
		margin: 0;
		padding: 0;
	}
	.header-bar .left img{
		margin-right: 20px;
		padding: 0;
	}
	.header-bar .right input{
		height: 32px;
		border-radius: 20px;
		border:0px;
		padding: 0 10px;
		font-size:12px;

	}
	.header-bar .right button{
		width: 90px;
		height: 32px;
		line-height: 30px;
		border:1px solid #4F4F4F;
		border-radius: 20px;
		font-size: 12px;
		background-color: #242424;
		color: #fff;
		margin: 0 15px;
		text-align: center;
		padding-left: 10px;
		/*vertical-align: middle;*/
	}
	.header-bar .right .link{
		font-size: 12px;
		color: #787878;
		margin-left: 10px;
	}
	.header-bar .right .link:hover{
		text-decoration: underline;
	}
	.content{
		padding-left: 20px;

	}
</style>