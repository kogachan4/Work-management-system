<template>
 <div class="container">
   <Header />
 <div> 
      <a class="btn btn-secondary m-3 rounded" href="reprofile">編集する</a>
  </div> 
  <div class="center" v-for="mypage in mypages" :key="mypage.step">
    <h2 class="mt-4">{{$store.state.displayName}}</h2>
    <h2>時給</h2>
    <p>{{money}}円</p>
    <h2>交通費</h2>
    <p>{{transport}}円</p>
  </div>
 </div>
</template>

<script>
import Header from '~/components/header.vue'
 import firebase from '~/service/firebase'

export default {
  components: {
    Header
  },
  data () {
    return {
      money: "1000",
      transport: "1000",
      step:0,
      mypages: [ {
        step:1
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.center{
  text-align: center;
  border: 2px solid rgb(114, 102, 102);
}
h2{
  font-size: 30px;
  margin-bottom: 15px;
}
p{
  font-size: 25px;
}
</style>

