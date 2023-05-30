<template>
  <div class="post">
    <!-- <div class="p">{{ $route.params.id }}</div> -->
    <div id="post-title" class="p">{{ $route.query.title }}</div>
    <br>
    <div id="post-content" class="p">{{ $route.query.content }}</div>
    <br><br>
    <img id="post-like-img" class="p-info" src="/img/like.png" alt="">
    <div id="post-comment-num" class="p-info">&nbsp;{{ $route.query.comment }}&nbsp;|</div>
    <div id="post-update-date" class="p-info">&nbsp;{{ formattedDate }}</div>
    <br>

    <div>
      <hr>
      <br>
      <div>
        <CommentBox :board_id="$route.params.id"/>
      </div>
    </div>

    <div>
      <PostCommentPage :board_id="$route.params.id"/>
    </div>
  </div>
</template>

<style>
@import "../assets/css/PostView.css";
</style>

<script>
import CommentBox from '../components/community/CommentBox.vue'
import PostCommentPage from '../components/community/PostCommentPage.vue'

export default {
  name: 'PostView',
  components: {
    CommentBox,
    PostCommentPage
  },
  data() {
    return {
      board_id: null,
      formattedDate: ''
    };
  },
  created() {
    this.board_id = this.$route.params.id;
    this.formatDate();
  },
  methods: {
    formatDate() {
      const rawDate = this.$route.query.update_date;
      const dateObj = new Date(rawDate);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const date = String(dateObj.getDate()).padStart(2, '0');
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      const seconds = String(dateObj.getSeconds()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;

      this.formattedDate = `${year}-${month}-${date} | ${formattedTime}`;
    }
  }
};
</script>