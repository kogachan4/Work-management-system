<template>
  <div class="container">
      <h1 class="mt-3 mb-5">勤務管理</h1>
      <form @submit.prevent="login" class="form-signin">
        <p class="error" v-if="error">{{ error }}</p>
        <label for="Email" class="sr-only">Email address</label>
        <input type="text" v-model="email" id="Email" class="form-control input" placeholder="email" name="email">
        <label for="Password" class="sr-only">Password</label>
        <input type="text" v-model="password" id="Password" class="form-control input mb-4" placeholder="password" name="password">
        <div class="checkbox mb-3">
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">ログイン</button>
        <p class="mt-5 mb-3 text-muted"></p>
      </form>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
  export default {
    data() {
      return {
        error: null,
        email: "",
        password: "",
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch("login",{
            email: this.email,
            password: this.password
          })
          this.$router.push("/")
        } catch (e) {
          this.error = e.message
        }
      }
    },
    components:{
        Header
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
</style>
