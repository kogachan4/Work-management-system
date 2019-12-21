<template>
<div id="mypage">  
  <span>ログイン中です, {{ user.displayName }}さん</span><br>
  <button class="mt-5 btn btn-danger" @click="logout">ログアウト</button><br>
  <a href="work" class="btn btn-dark mt-5">トップページへ</a>
</div>
</template>

<script>
import firebase from '@/service/firebase'

export default {
  name: 'mypage',
  props: ['user'],
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
}
</script>