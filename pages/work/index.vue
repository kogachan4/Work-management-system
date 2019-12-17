<template>
<div class="container">
 <h2 class="scsstitle">2019年12月の勤務状況</h2>
  <div class=flex>
    <div>
        <a class="btn btn-success b1" href="workback">11月</a>
    </div>
    <div class="btn-right">
        <a class="btn btn-primary b1" href="worknext">1月</a>
    </div>
  </div> 
    <working />
 </div>
</template>
<script>
import working from '~/components/working.vue'
export default{
    components:{
        working
    }
}
</script>
<style lang="scss" scoped>

.flex{
    display:flex;
    margin-bottom :30px;
}
.btn-right{
    margin-left :450px;
}
.b1{
    width:70px;
}

</style>