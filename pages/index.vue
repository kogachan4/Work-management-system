<template>
  <section class="container">
    <div>
        <h1 class="title mt-5 mb-5">
          {{name}}
        </h1>
        <div class="links">
          <Home v-if="!isLogin"></Home>
          <Mypage v-if="isLogin" :user="userData"></Mypage>
        </div>
    </div>
  </section>
</template>

<script>
  import firebase from '~/service/firebase'
  import Home from '~/components/Home.vue';
  import Mypage from '~/components/Mypage.vue';

  export default {
    components: {
      Home,
      Mypage
    },
    asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: '勤怠管理', isLogin:false, userData:null}
    },
      fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
    },
    mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
        };
      });
    },
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

<style lang="scss" scoped>
</style>
