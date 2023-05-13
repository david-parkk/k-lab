<template>
    <div class="post">
      <h1>post</h1>
      <PostPage />
    </div>
    
  </template>
  
  
  <script>
  // @ is an alias to /src
  import PostPage from '@/components/PostPage.vue'
  
  export default {
    name: 'PostView',
    components: {
      PostPage
    }
  }
  </script>