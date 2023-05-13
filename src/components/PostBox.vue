<template>
  <ul id="v-for-object" class="demo">
    <li v-for="value in postList" :key="value">
      <div id="posts">
        <router-link to="/community/post">{{value.post_name}}</router-link>
        <p id="post_detail">{{ value.post_detail }}</p>
        <div id="post_info">
          <img id="post_comment_img" src="" alt="">
          <p id="post_comment">{{ value.post_comment }}</p> |
          <img id="post_like_img" src="" alt="">
          <p id="post_like">{{ value.post_like }}</p> |
          <p id="post_time">{{ value.post_time }}</p> |
          <p id="post_type">{{ value.post_type }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostBox',
  data() {
    return {
      parentMessage: 'Parent',
      
      postList: [
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '덕분에 챌린지', post_detail: '의료진을 위해 다같이 ㄱㄱ', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '지락실 아이브 아이엠 챌린지', post_detail: '엔딩 요정 나영석', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '숨참기 챌린지', post_detail: '보이면 따라하지마시고..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '노크 챌린지', post_detail: '디노야 부탁해', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '꽃 챌린지', post_detail: '전 세계 댕냥이 자랑 타임됨', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '하입보이 챌린지', post_detail: '찍어볼까..', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
        {post_name: '손오공 챌린지', post_detail: 'ㅁㅊㅁㅊ 니키', post_comment: '5', post_like: '10', post_time: '10:00', post_type: '익명'},
      ]
    };
  }
};
</script>

<style>
#post {
  height: 200px;
}

#post_info p,img{
  display: inline-block;
}
</style>