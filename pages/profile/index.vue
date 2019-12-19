<template>
 <div class="container">
   <Header />
 <div> 
      <a class="btn btn-secondary m-3 rounded" href="reprofile">編集する</a>
  </div> 
  <div class="center">
    <h2 class="mt-4">koga</h2>
    <h2>コーダー</h2>
    <h2>時給</h2>
    <p>1000円</p>
    <h2>交通費</h2>
    <p>1000円</p>
  </div>
 </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  components: {
    Header
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

