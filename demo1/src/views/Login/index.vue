<template> 
    <div class="w">
        
        <div class="login">
            <div class="username">
                <label>电话:</label>
                <input type="text" v-model="username" placeholder="请输入电话">
            </div>
            <div class="password">
                <label>密码:</label>
                <input v-model="password" type="password" placeholder="请输入密码">
            </div>
                <button @click="login">登录</button>
        </div>
    
    </div>
</template>

<script>
import {getLoginCellphoneResource} from '@/network/home.js'
export default {
    name:'Login',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            if(!this.username ||!this.password){
                return alert('请输入账号、密码')
            }
            getLoginCellphoneResource(this.username,this.password).then(res=>{
                console.log(res)
                if(res.data.code===200){
                    console.log('登录成功')
                    this.$router.push('/home')
                    // this.$store.commit('updateToken',res.data.token)
                }else{
                    alert('账号或密码错误')
                    this.password=""
                    this.username=""
                }
                // console.log('登录成功')
            }).catch(err=>{
                console.log(err)
            })
        }

    }
}
</script>

<style scoped>
    .w{
        position: fixed;
        top:70px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ccc;
    }
    .login{
        width: 400px;
        line-height: 50px;
        margin: 100px auto;
        background-color: #fff;
        text-align: center;
        padding-top: 20px;
        border-radius: 20px;
        box-shadow: 10px 10px grey;
    }
    button{
        width: 100px;
        height: 30px;
    }
</style>