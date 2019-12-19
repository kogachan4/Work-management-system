<template>
  <section class="container">
    <div v-if="isWaiting">
      <p>読み込み中</p>
    </div>
    <div v-else>
      <div v-if="!isLogin" class="log">
        <button @click="googleLogin" class="mt-5 btn btn-dark">Googleでログイン</button>
      </div>
      <div v-else>
        <p>{{ user.email }}でログイン中</p>
        <button @click="logOut" class="btn btn-dark">ログアウト</button>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  asyncData () {
    return {
      isWaiting: true,
      isLogin: false,
      user: []
    }
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged(user => {
      this.isWaiting = false
      if (user) {
        this.isLogin = true
        this.user = user
      } else {
        this.isLogin = false
        this.user = []
      }
    })
  },
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut () {
      firebase.auth().signOut()
    }
  }
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
p {
  margin-top: 100px;
  font-size: 30px;
  margin-bottom: 50px;
}
.log {
  margin-top: 100px;
}
</style>
