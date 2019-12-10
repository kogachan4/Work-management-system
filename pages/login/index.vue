<template>
<div class="container">
<body class="text-center">
<h1 class="mt-3">勤務管理</h1>
<form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted"></p>
</form>
</body>
</div>
</template>

<script>
import Header from '~/components/Header.vue'
  export default {
    components:{
        Header
    }
  }
</script>

<style lang="scss" scoped>
.btn{
  width:300px;
  margin-left: 135px;
}
</style>
