<template>
  <div class="home">
    
    
    <div class="h2">
       댄스첼린지 
    </div>
    <div id="dance_challenge" class="challenge_box">
      <ul>
        <li v-for="(category, key,index) in dance_category" :key="key" class="challenge_category"   @click="send_router(key)">
          <div :class="['challenge_boxin', `dance-${index}`]" :style="{ backgroundImage: `url(/img/dance${index}.png)` }">
          <div class="category_name">
            {{ key }}
          </div>
          <ul class="challenge_value">
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="h2">
       공익성 첼린지 
    </div>
    <div id="public_interest_challenge" class="challenge_box">
      <ul>
        <li v-for="(category, key,index) in morality_category" :key="key" class="challenge_category"   @click="send_router(key)">
          <div :class="['challenge_boxin', `dance-${index}`]" :style="{ backgroundImage: `url(/img/morality${index}.png)` }">
          <div class="category_name">
            {{ key }}
          </div>
          <ul class="challenge_value">
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
          </div>
        </li>
      </ul>
     
      
    </div>
    <div class="h2">
       유희성 첼린지 
    </div>
    <div id="amusement_challenge" class="challenge_box">
      <ul>
        <li v-for="(category, key,index) in fun_category" :key="key" class="challenge_category"   @click="send_router(key)">
          <div :class="['challenge_boxin', `dance-${index}`]" :style="{ backgroundImage: `url(/img/fun${index}.png)` }">
          <div class="category_name">
            {{ key }}
          </div>
          <ul class="challenge_value">
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="adult">
      <div class="h2">
        위험성 첼린지 
      </div>
      <div id="amusement_challenge">
        <ul>
          <li v-for="(category, key,index) in danger_category" :key="key" class="challenge_category"   @click="send_danger_router(key)">
            <div :class="['challenge_boxin', `dance-${index}`]" :style="{ backgroundImage: `url(/img/dance${index}.png)` }">
            <div class="category_name">
              {{ key }}
            </div>
            <ul class="challenge_value">
              <li v-for="value in category" :key="value">
                {{ value }}
              </li>
            </ul>
            </div>
          </li>
        </ul>
    </div>
    </div>
    <div class="h2">
       기타 첼린지 
    </div>
    <div id="other_challenge">
      <ul>
        <li v-for="(category, key,index) in other_category" :key="key" class="challenge_category"   @click="send_router(key)">
          <div :class="['challenge_boxin', `dance-${index}`]" :style="{ backgroundImage: `url(/img/dance${index}.png)` }">
          <div class="category_name">
            {{ key }}
          </div>
          <ul class="challenge_value">
            <li v-for="value in category" :key="value">
              {{ value }}
            </li>
          </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
 
</template>

<script>
import {view_home,view_home_detail} from '../api/homeapi.js'
import {check_user}from '../api/login.js';
import Store from '../api/store.js';
// @ is an alias to /src
export default{
  data(){
    return{
      adult:false,
      dance_category: {"K-POP":[],"J-POP":[],"POP":[]},
      morality_category:{"donation":[],"covid":[]},
      fun_category:{"pet":["유기견보호","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ"],"finger":["asdfa"]},
      danger_category:{"danger":["asdfasdf"]},
      other_category:{"기타":["adsafsd"]}
    }
  },
  async mounted(){
    try{
        Store.commit('checktoken')  
        const check=await check_user(Store.getters.get_token)
        console.log("check",check)
        if(check.age>=20){
          this.adult=true;
        }
        console.log("check",check)
        view_home().then((array)=>{
        for(var i=0;(i<array.length);i++){
          if(array[i]["rate"]<7){
            if (Object.prototype.hasOwnProperty.call(this.dance_category, array[i]["smallcategory"])) {
              if(this.dance_category["danger"].length<3){
                this.dance_category["danger"].push(array[i]['subject']);
              }
            }
          }
          if(array[i]["Bigcategory"].includes('댄스')){
            if (Object.prototype.hasOwnProperty.call(this.dance_category, array[i]["smallcategory"])) {
              if(this.dance_category[array[i]["smallcategory"]].length<3){
                this.dance_category[array[i]["smallcategory"]].push(array[i]['subject']);
              }
              
            }
          }
          else if(array[i]["Bigcategory"].includes('공익성')){
            if (Object.prototype.hasOwnProperty.call(this.morality_category, array[i]["smallcategory"])) {
              if(this.dance_category[array[i]["smallcategory"]].length<3){
                this.morality_category[array[i]["smallcategory"]].push(array[i]['subject']);
              }
            }
          }
          else if(array[i]["Bigcategory"].includes('유희')){
            if (Object.prototype.hasOwnProperty.call(this.fun_category, array[i]["smallcategory"])) {
              if(this.dance_category[array[i]["smallcategory"]].length<3){
                this.fun_category[array[i]["smallcategory"]].push(array[i]['subject']);
              }
            }
          }

          else{
            if(this.dance_category["other"].length<3){
              this.other_category["other"].push(array[i]["smallcategory"]);
            }
          }
          
        }
      })
      view_home_detail().then((data)=>{
            const array=data.data
            for(var i=0;i<array.length;i++){
              if(array[i]["rate"]<7){
                if (Object.prototype.hasOwnProperty.call(this.danger_category, array[i]["smallcategory"])) {
                  this.danger_category["위험성"].push(array[i]['subject']);
                }
              }
            }
          })
      
    } catch(error){
      console.log(error);
    }
  },
  methods:{
    send_router(key){
      console.log("key")
      console.log(key);
      this.$router.push({ path: 'category', query: { key }})
      //this.$router.push({ name: 'CategoryDetail', params: { key } });
    },
    
    send_danger_router(key){
      console.log("key")
      console.log(key);
      this.$router.push({ path: 'dangercategory', query: { key }})
      //this.$router.push({ name: 'CategoryDetail', params: { key } });
    },
  }
}
</script>
<style>
@import "../assets/css/HomeView.css";

</style>
