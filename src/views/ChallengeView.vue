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
</template>
<script>
import {view_challenge_detail} from '../api/challenge.js'
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
        view_challenge_detail(this.name).then((array)=>{
            console.log("return",array)
            this.subject=array['subject'];
            this.content=array['content'];
            this.address=array['address'];
            
        })
    }catch(error){
        console.log(error)
    }
  }
    
}
</script>

<style>
@import "../assets/css/ChallengeView.css";


</style>