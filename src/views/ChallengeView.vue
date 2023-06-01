<template>
  <div id="subject">
    {{ subject }} 
  </div>
  <hr>
  <div id="content">
  {{ content }}
  </div>
  <hr>
  
  <div id="URL_text"> 
    URL
  </div>
  <div id="address" >
    <a :href="address" target="_blank">{{ address }} 11</a>
  </div>
  <hr>
  
  <div id="starboard">
    <div id="letter"> 평점</div>
    <div id="stars">
      <img src="/img/starboard_star.png" @click="push_rate(1)" class="star" alt="">
      <img src="/img/starboard_star.png" @click="push_rate(2)" class="star" alt="">
      <img src="/img/starboard_star.png" @click="push_rate(3)" class="star" alt="">
      <img src="/img/starboard_star.png" @click="push_rate(4)" class="star" alt="">
      <img src="/img/starboard_star.png" @click="push_rate(5)" class="star" alt="">
    </div>
  </div>
</template>
<script>
import {view_challenge_detail} from '../api/challenge.js'
import Store from '../api/store.js'
import {check_user}from '../api/login.js';
import {push_rate} from'../api/rateapi';
export default {
  data(){
    return{
        subject:"",
        content:"",
        address:"",
        name:""
    }
  },
  async mounted(){
    const key=this.$route.query.key;
    this.name=key;
    
    try{
        Store.commit('checktoken')
        view_challenge_detail(this.name).then((array)=>{
            console.log("return",array)
            this.subject=array['subject'];
            this.content=array['content'];
            this.address=array['address'];
            
        })
    }catch(error){
        console.log(error)
    }
  },
  methods:{
    
    async push_rate(rate){
      try{
      console.log("rate",rate);
      console.log("token " ,Store.getters.get_token)
      const res=await check_user(Store.getters.get_token);
      
      const username=res['nickname']
      console.log("name",username);
      const data={
        "nickname": username,
        "rate": rate
      }
      console.log("key: ",username)
      push_rate(this.name,data);
      }catch(error){
        console.log(error)
      }
    }
  }
}
</script>

<style>
@import "../assets/css/ChallengeView.css";


</style>