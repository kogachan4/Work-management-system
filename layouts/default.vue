<template>
<div>
    <header>
     <div id="header_inner">
        <h1>
            勤務
        </h1>
        <nav>
         <ul>
          <li><router-link to="../work">勤怠ページへ</router-link></li>
          <li><router-link to="../profile">MYページへ</router-link></li>
          <li><router-link to="../login">ログイン画面</router-link></li>
          <li><router-link to="../worktime">各月勤務情報確認画面へ</router-link></li>
         </ul>
        </nav>
     </div>
    </header>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

header {
        width: 100%;
        height: 77px;
        background-color: #fff;
        border-bottom: 3px solid #f6ac4d;
        padding-top: 10px;
        padding-bottom: 30px;
}
div#header_inner {
    width: 960px;
    height: 52px;
    margin: 0 auto;
}
h1 {
    float: left;
}


nav {
    font-size: 18px;
    float: right;
    margin-top: 30px;
}
ul{
    list-style: none;
}
nav ul li {
    float: left;
    border-left: 1px dotted #434343;
    padding-left: 20px;
    margin-left: 20px;
}
a{
    text-decoration: none;
}
</style>
