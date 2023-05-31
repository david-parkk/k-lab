
<template>
    <div id="profile_page">
        <div  v-if="!this.is_loggin&&!is_signup" id="signin_div">
        <h2 id="CHALLIFY">CHALLIFY</h2>
        <div id="CHALLIFY_Description"> 세상의 모든 첼린지를 알리다</div>
        <form @submit.prevent="submitForm">
            <div id="username">
                <div class="profile_class"> ID</div>
                <input type="text" v-model="nickname" placeholder="Username" />
            </div>
            <div id='password'>
                <div id="password_text"> Password</div>
                <input type="password" v-model="password" placeholder="Password" />
            </div>
            <div id='age'>
                <input type="text" v-model="age" placeholder="age" />
            </div>
            <div id="login">
                <button type="submit" @click="post_signin">Login</button>
            </div>
            <div id="Signup">
                <button type="submit" @click="is_signup=!is_signup">Signup</button>
            </div>
            <div>
                {{ show_login }}
            </div>
        </form>
        </div>
        <div v-if="this.is_signup" id="signup_div">
            <div>
            <div id="back" @click="is_signup=!is_signup"></div>
            <h2 id="Create_Account">Create Account</h2> 
            </div>
            <div id="username_up">
                <div class="profile_class"> ID</div>
                <input type="text" v-model="nickname" placeholder="Username" />
            </div>
            <div id='password_up'>
                <div class="profile_class"> Password</div>
                <input type="test" v-model="password" placeholder="Password" />
            </div>
            <div id='date_of_birth_up'>
                <div class="profile_class"> Date of birth</div>
                <input type="text" v-model="age" placeholder="Date of birth" />
            </div>
            <div id="signup_button">
                <button @click="post_signup">signup!!</button>
            </div>
            
        </div>
        <div v-if="this.is_loggin" id="profile_div1">
            <div id="profile_div2">
                <h3 class="profile_class">ID</h3>
                <div class="profile_class2">
                    {{ this.nickname }}
                </div>
                <h3 class="profile_class">Date of Birth</h3>
                <div class="profile_class2">
                    {{ this.age }}
                </div>
                <div id="logout_button"  @click="post_logout">
                    <div @click="post_logout" ></div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import {login_user,register_user,check_user,logout}from '../api/login.js';
  //import {check_login} from '../api/check_login.js'
  import Store from '../api/store.js';
  export default {
    data() {
        return {
            nickname: "",
            password: "",
            age:" ",
            is_loggin:false,
            is_signup:false,
        };
    },
    name: 'ProfileView',
    async mounted(){
        try{
        Store.commit('checktoken')
        this.is_loggin=Store.getters.get_login;
        this.nickname=Store.getters.get_nickname;
        this.age=Store.getters.get_age;
        const check=await check_user(Store.getters.get_token)
        if(check){
            this.is_loggin=true;
            console.log("check: ",check);
            this.nickname=check["nickname"]
            this.age=check["age"]
            console.log("token",Store.getters.get_token);
        }
        
        
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async post_signin() {
            const credentials = {
                nickname: this.nickname,
                password: this.password,
            };

            await login_user(credentials);
            //this.is_loggin = !this.is_loggin;
            this.age = Store.getters.get_age;         
            location.reload();
        },

        post_signup(){
            const credentials = {
                nickname: this.nickname,
                password: this.password,
                age:this.age
            };
            this.is_signup=!this.is_signup;
            this.nickname="";
            this.is_loggin="";
            this.age="";
            register_user(credentials); 
            location.reload();
        },
        async post_logout(){
            await logout();
            this.is_loggin=!this.is_loggin;
            location.reload();
        }

    },
    computed:{
        show_login(){
            if(Store.getters.get_login==false)
                return 0;
            else
                return 1;
        },
       
    }
  }
  </script>
  <style>
  @import "../assets/css/Profile.css";

  </style>