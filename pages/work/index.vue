<template>
<div class="container">
 <Header />    
 <h2 class="scsstitle">2019年12月の勤務状況</h2>
  <div class=flex>
    <div>
        <a class="btn btn-success b1" href="workback">11月</a>
    </div>
    <div class="btn-right">
        <a class="btn btn-primary b1" href="worknext">1月</a>
    </div>
  </div> 
  <div v-for="question in questions" :key="question.step">
      <p style="text-align:center;">{{question.title}}</p>
    <working />
  </div>  
 </div>
</template>
<script>
import working from '~/components/working.vue'
import Header from '~/components/header.vue'
export default{
    components:{
        working,
        Header
    },
    data (){
        return{
            step:0,
            questions:[
                {
                    step:1,
                    title: "12月"
                },
                {
                    step:2,
                    title:"1月"
                },
                {
                    step:3,
                    title:"2月"
                }
            ]
        }
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