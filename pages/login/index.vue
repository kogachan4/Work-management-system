<template>
  <div class="container">
    <div class="login-form">
      <form @submit.prevent="login">
        <p class="error" v-if="error">{{ error }}</p>
        <p><input type="text" v-model="email" placeholder="email" name="email"/></p>
        <p><input type="text" v-model="password" placeholder="password" name="password"/></p>
        <div class="login-btn">
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          })
          this.$router.push("/")
        } catch(e) {
          this.error = e.message
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .container{
    max-width :640px;
  }
  .login-form{
    margin-top:130px;
  }
</style>
