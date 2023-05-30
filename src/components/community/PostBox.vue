<template>
  <ul id="v-for-object" class="demo">
    <hr>
    <li v-for="value in postList" :key="value.board_id">
      <div id="posts">
        <router-link :to="{
          name: 'PostView',
          params: { id: value.board_id },
          query: {
            title: value.title,
            content: value.content,
            comment: value.comment,
            update_date: value.update_date
          }
        }">
          <br>
          <div id="post-title" class="p">{{ value.title }}</div>
          <br>
          <div id="post-content" class="p">{{ value.content }}</div>
          <br>
          <img id="post-like-img" class="p-info" src="/img/like.png" alt="">
          <div id="post-comment-num" class="p-info">&nbsp;{{ value.comment }}&nbsp;|</div>
          <div id="post-update-date" class="p-info">&nbsp;{{ formatDate(value.update_date) }}</div>
          <br>
        </router-link>
        <br>
        <hr>
      </div>
    </li>
  </ul>
</template>

<script>
import { view_catogary } from "../../api/viewapi";

export default {
  name: 'PostBox',
  data() {
    return {
      postList: [],
    };
  },
  async mounted() {
    try {
      const res = await view_catogary();
      this.postList = res;
      console.log("mounted", this.postList);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    formatDate(dateTime) {
      const dateObj = new Date(dateTime);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const date = String(dateObj.getDate()).padStart(2, '0');
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      const seconds = String(dateObj.getSeconds()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${date}`;
      const formattedTime = `${hours}:${minutes}:${seconds}`;

      return `${formattedDate} | ${formattedTime}`;
    },
  },
};
</script>