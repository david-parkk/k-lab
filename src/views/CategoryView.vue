<template>
    <div id="category_name">
      {{name}}
    </div>  
    <div id="img_div">
      <img src="/img/k-pop.png" alt="">
    </div>
    <ul>
        <li v-for="(category, key) in challenge" :key="key" class="challenge" @click="send_router(key)">
          <div class="challenge">
            <div class="subject">
              # {{ category.subject }}
            </div>
            <div class="item">
              <img src="/img/like.png" alt="">
              {{ category.like_count }}
            </div>
            <div class="item">
              <img src="/img/star.png" alt="">
              {{ category.rate }}
            </div>
            <div class="item">
              <img src="/img/view.png" alt="">
              {{ category.views }}
            </div>
            <br>    
           
          </div>
        
        </li>
        
      </ul>

</template>


<script>
import {view_challenge} from '../api/category.js'
import {view_home} from '../api/homeapi.js'
export default {
  data(){
    return{
        challenge:[],
        name:""
    }
  },
  async mounted(){
    const key=this.$route.query.key;
    this.name=key;
    console.log("key",key);
    const totalchallenge=[];
    try{
     
      view_challenge().then((array)=>{
          
          console.log(array);
          console.log(array['data'].length);
          for(var i=0;i<array['data'].length;i++){
            var challenge={}
            challenge['challenge_id']=array['data'][i]['challenge_id'];
            challenge['subject']=array['data'][i]['subject'];
            challenge['rate']=array['data'][i]['rate'];
            challenge['views']=array['data'][i]['views'];
            challenge['like_count']=array['data'][i]['like_count'];
            console.log("challenge: ",challenge)
            totalchallenge.push(challenge);
          }
          view_home().then((array)=>{
            for(var i=0;i<totalchallenge.length;i++){
              for(var j=0;j<array.length;j++){
                //console.log("index ",i," ",j);
                //console.log(totalchallenge[i]["challenge_id"]," ",array[j]["challenge_id"]);
                if(totalchallenge[i]["challenge_id"]==array[j]["challenge_id"]&&array[j]["smallcategory"]==this.name){
                  console.log("push")
                  this.challenge.push(totalchallenge[i]);
                }
              }
              
            }
            console.log("this",this.challenge)
          })
          
        })
       
     } catch(error){
      console.log(error);
    }
    
  },
  methods:{
    send_router(value){
      console.log("key")
      console.log(value);
      console.log(key)
      var key=this.challenge[value]['challenge_id']
      this.$router.push({ path: 'challenge', query: { key }})
    }
  }
};

</script>

<style>
@import "../assets/css/CategoryView.css";


</style>