<template>
  <div id="banner">
    Challenge Ranking
  </div>
    <hr>
  <div>
    <div id="sortbar" @click="changestatus"></div> 
    <div id="sortstatus">정렬기준: {{ status }} 순</div>
    <ul>
      <li v-for="(category, key) in challenge" :key="key" class="rank_challenge1">
      <div class="rank_challenge">
          <div class="index">
           TOP {{ key+1 }}
          </div>
          
          <div class="subject">
          # {{ category.subject }}
          </div>
          <div class="item2">
          <img src="/img/heart.png" alt="">
          {{ category.like_count }}
          <img src="/img/star.png" alt="">
          {{ category.rate }} 
          <img src="/img/view2.png" alt="">
          {{category.views}}
          </div>
          
          <br>    
      
      </div>
      
      </li>
      
  </ul>
  </div>
</template>


<script>

//import {check} from '../api/checkapi.js'
import {view_home_detail} from '../api/homeapi.js'
export default {
  data(){
    return{
        challenge:[],
        sort:0,
        status:"좋아요"
        
    }
  },
  async mounted(){
    //check();
    try {
    const data = await view_home_detail();
    const array = data.data;
    console.log(data);

    const sortedArray = array.slice().sort((a, b) => {
      // 특정 값에 따라 정렬하기 위해 비교 함수를 사용합니다.
      // 아래는 예시로 'value'라는 특정 값으로 정렬하는 방법입니다.
      if (a["like_count"] > b["like_count"]) {
        return -1;
      }
      if (a["like_count"] < b["like_count"]) {
        return 1;
      }
      return 0;
    });

    // 정렬된 배열을 새로운 객체 배열로 생성합니다.
    const sortedChallenge = sortedArray.map((item) => ({ ...item }));
    this.challenge=sortedArray
    console.log(sortedChallenge);
  } catch (error) {
    console.log(error);
  }
  },

  methods: {
    async changestatus(){
      try{
        if(this.status=="좋아요"){
          this.status="평점"
          this.challenge= this.challenge.slice().sort((a, b) => {
          // 특정 값에 따라 정렬하기 위해 비교 함수를 사용합니다.
          // 아래는 예시로 'value'라는 특정 값으로 정렬하는 방법입니다.
            if (a["rate"] > b["rate"]) {
              return -1;
            }
            if (a["rate"] < b["rate"]) {
              return 1;
            }
            return 0;
          });
        }
        else if(this.status=="평점"){
          this.status="조회수"
          this.challenge= this.challenge.slice().sort((a, b) => {
          // 특정 값에 따라 정렬하기 위해 비교 함수를 사용합니다.
          // 아래는 예시로 'value'라는 특정 값으로 정렬하는 방법입니다.
            if (a["views"] > b["views"]) {
              return -1;
            }
            if (a["views"] < b["views"]) {
              return 1;
            }
            return 0;
          });
        }
        else if(this.status=="조회수"){
          this.status="좋아요"
          this.challenge= this.challenge.slice().sort((a, b) => {
          // 특정 값에 따라 정렬하기 위해 비교 함수를 사용합니다.
          // 아래는 예시로 'value'라는 특정 값으로 정렬하는 방법입니다.
            if (a["like_count"] > b["like_count"]) {
              return -1;
            }
            if (a["like_count"] < b["like_count"]) {
              return 1;
            }
            return 0;
          });
        }

      }catch(error){
        console.log(error)
      }
    }
  }
};
</script>

<style>
  @import "../assets/css/RankingView.css";

  </style>