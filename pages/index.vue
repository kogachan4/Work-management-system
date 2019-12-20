<template>
  <div class="container">
      <h1 class="mt-3 mb-5">勤務管理</h1>
        <div v-if="!user">
          <a class="btn btn-light btn-block" tabindex="" @click="login">ログイン</a>
        </div>
  </div>
</template>

<script>
  import firebase from '~/service/firebase'

  export default {
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
    mounted(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.$store.dispatch("loginWithUserName", user.displayName)
        }
      })
    }   
  }
</script>

<style lang="scss" scoped>
</style>
