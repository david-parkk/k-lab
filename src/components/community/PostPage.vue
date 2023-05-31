<template>
  <div>
    <h2>글쓰기</h2>
    <div>
      <input id="content-title" type="text" v-model="title" :placeholder="titlePlaceholder" @focus="hidePlaceholder" @blur="showPlaceholder">
    </div>
    <br>
    <textarea id="content-text" v-model="content" placeholder="내용을 입력하세요"></textarea>
    <button id="writecomment"  @click="post_page">게시</button>
    <!-- <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div>{{ userid }}</div> -->
  </div>
</template>

<style>
input.transparent-text::placeholder,
textarea.transparent-text::placeholder {
  opacity: 0.5;
  color: #000;
}

input:focus::placeholder,
textarea:focus::placeholder {
  opacity: 0;
}
</style>

<script>
import {post_content }from "../../api/viewapi"

import Store from '../../api/store.js';

  export default {
    data(){
      return{
        title: "",
        content:"",
        
        userid:"1",
        showTitlePlaceholder: true
      }
    },
    name: 'BoardPage',
    async mounted(){
      try{
        Store.commit('checktoken')
        this.userid=Store.getters.get_nickname;
        
      } catch (error) {
            console.log(error);
        }
    },
    computed: {
    titlePlaceholder() {
      return this.showTitlePlaceholder ? "제목" : "";
    }
  },
    methods:{
      hidePlaceholder() {
      this.showTitlePlaceholder = false;
    },
    showPlaceholder() {
      if (this.title === "") {
        this.showTitlePlaceholder = true;
      }
    },
      post_page(){
        const post_data={
          title: this.title,
          content: this.content,
          views:0,
          comment:0,
          userid: this.userid
        }
        post_content(post_data);
        location.replace('../community');
      }
      
    }
  }
</script>