<template>
    <div v-if="!popup">
        <div id="category_name">
        {{name}}
        </div>  
        <div id="img_div">
        <img :src="`/img/category/${name}.png`" :alt="`/img/category/${name}.jpg`" onerror="this.src = this.alt">
        </div>
        <ul>
            <li v-for="(category, key) in challenge" :key="key" class="challenge" @click="setpopup(key)">
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
    </div>
    <div id="warning_div" v-if="popup" @click="send_router()">
        <img src="/img/warning.png" alt="">
    </div>
</template>


<script>
import {view_home_detail} from '../api/homeapi.js'
export default {
  data(){
    return{
        challenge:[],
        name:"",
        popup:false,
        query:"",
    }
  },
  async mounted(){
    const key=this.$route.query.key;
    this.name=key;
    console.log("key",key);
    //const totalchallenge=[];
    try{
        view_home_detail().then((data)=>{
            const array=data.data
            console.log(data)
            for(var i=0;i<array.length;i++){
              if(array[i]["rate"]<=3){
                //if (Object.prototype.hasOwnProperty.call(this.danger_category, array[i]["smallcategory"])) {
                  this.challenge.push(array[i]);
                //}
              }
            }
          })
       
     } catch(error){
      console.log(error);
    }
    
  },
  methods:{
    send_router(){
      console.log("key")
      
      console.log(key)
      var key=this.challenge[this.query]['challenge_id']
      this.$router.push({ path: 'challenge', query: { key }})
    },
    setpopup(key){
        this.popup=true;
        this.query=key
    }
  }
};

</script>

<style>
@import "../assets/css/DangerCategoryView.css";


</style>