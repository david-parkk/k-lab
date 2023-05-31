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
    <div class="h2">
       위험성 첼린지 
    </div>
    <div id="amusement_challenge">
      <ul>
        <li v-for="(category, key,index) in danger_category" :key="key" class="challenge_category"   @click="send_router(key)">
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
// @ is an alias to /src
export default{
  data(){
    return{
      
      dance_category: {"k-pop":[],"j-pop":["adsf"],"pop":["Asdfaf"]},
      morality_category:{"기부 켐페인":["asdfadf"],"코로나 19":["asdfafd"]},
      fun_category:{"동물":["유기견보호","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ"],"핑거 스냅":["asdfa"]},
      danger_category:{"위험성":["asdfasdf"]},
      other_category:{"기타":["adsafsd"]}
    }
  },
  async mounted(){
    try{
        view_home().then((array)=>{
        for(var i=0;(i<array.length&&i<3);i++){
          if(array[i]["rate"]<7){
            if (Object.prototype.hasOwnProperty.call(this.dance_category, array[i]["smallcategory"])) {
              this.dance_category["위험성"].push(array[i]['subject']);
            }
          }
          if(array[i]["Bigcategory"].includes('댄스')){
            if (Object.prototype.hasOwnProperty.call(this.dance_category, array[i]["smallcategory"])) {
              this.dance_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else if(array[i]["Bigcategory"].includes('공익성')){
            if (Object.prototype.hasOwnProperty.call(this.morality_category, array[i]["smallcategory"])) {
              this.morality_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }
          else if(array[i]["Bigcategory"].includes('유희')){
            if (Object.prototype.hasOwnProperty.call(this.fun_category, array[i]["smallcategory"])) {
              this.fun_category[array[i]["smallcategory"]].push(array[i]['subject']);
            }
          }

          else{
            this.other_category["other"].push(array[i]["smallcategory"]);
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
    }
  }
}
</script>
<style>
@import "../assets/css/HomeView.css";

</style>
