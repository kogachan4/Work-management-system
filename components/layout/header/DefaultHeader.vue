<template>
  <div>
    <div class="l-header d-flex align-items-center">
      <img class="l-header__logo" src="~/assets/images/logo.svg" alt="logo">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";
.l-header{
    height: 60px;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid $lc-black95;
}
.l-header__logo {
    height: 20px;
}
</style>
