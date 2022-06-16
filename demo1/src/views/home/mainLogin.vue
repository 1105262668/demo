<template>
    <div class="bg">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <router-link to="/login">
            <button>用户登录</button>
        </router-link> 
    </div>
</template>

<script>
export default {
    name:'mainLogin'
}
</script>

<style scoped>
    .bg{
        height: 116px;
        padding-top: 10px;
        background:url('~@/assets/imgs/index.png') no-repeat 0px 0px;
        font-size: 12px;
    }
    p{
        width: 205px;
        line-height: 22px;
        margin: 0 auto ;
        color: #666;
        font-size: 12px;
    }
    button{
        width: 100px;
        height: 31px;
        margin:10px 75px;
        background: url('~@/assets/imgs/index.png') no-repeat 0px -195px;
        color: #fff ;
        border: 0px;
        border-radius: 5px;
        text-shadow: 0 1px 0 #8a060b;
    }
    button:hover{
        opacity: 0.6;

    }
</style>