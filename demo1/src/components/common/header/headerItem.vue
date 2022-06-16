<template>
	<div class="item"  @click="itemClick" >
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'HeaderItem',
		props:['path'],
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	};
</script>

<style scoped>
	.item{
		float: left;
		height: 70px;
		line-height: 70px;	
		text-align: center;
		padding: 0 20px;
	}
	.item:hover{
		background-color: #000;
	}
	.item a{
		text-decoration: none;
		color: #ccc;
	}
</style>