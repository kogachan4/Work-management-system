<template>
    <a class="btn btn-light btn-block" tabindex="" @click="login">ログイン</a>
</template>

<script>
import firebase from '@/service/firebase'
export default {
  name: 'home',
  methods: {
      async login () {
        const provider = new firebase.auth.GithubAuthProvider()
        const result = await firebase.auth().signInWithPopup(provider)
        // var token = result.credential.accessToken
        var user = result.user
        this.$store.dispatch("loginWithUserName", user.displayName)
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }, 
  }
</script>