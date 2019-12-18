<template>
  <div class="container">
    <h1 class="mt-3 mb-5">勤務管理</h1>
      <form  class="form-signin">
        <label for="Email" class="sr-only">Email address</label>
        <input type="text"  id="Email" class="form-control input" placeholder="email" name="email">
        <label for="Password" class="sr-only">Password</label>
        <input type="text" id="Password" class="form-control input mb-4" placeholder="password" name="password">
        <a class="btn btn-light btn-block" tabindex="" >ログイン</a>
      </form>
  </div>
</template>

<script>
  import firebase from '~/service/firebase'

  export default {
    // ...
    methods: {
      async login () {
        const provider = new firebase.auth.GithubAuthProvider()
        const result = await firebase.auth().signInWithPopup(provider)
        // var token = result.credential.accessToken
        var user = result.user
        this.$store.dispatch("loginWithUserName", user.displayName)
      },
      // ...
    },
    computed: {
      user () {
          return this.$store.state.user
      },
      posts () {
          return this.$store.state.posts
      },
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.$store.dispatch("loginWithUserName", user.displayName)
        }
      })
    },    
  }
</script>

<style lang="scss" scoped>
.btn{
  width:300px;
  margin-left: 40px;
}
.input{
  width:400px;
}
</style>
