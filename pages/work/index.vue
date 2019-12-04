<template>
<div class="container">
 <h2 class="title">2019年12月の勤務状況</h2>
  <div class=flex>
    <div>
        <a class="btn btn-success" href="workback">11月</a>
    </div>
    <div class="btn-right">
        <a class="btn btn-primary" href="worknext">1月</a>
    </div>
  </div> 
    <table border="1" class="table">
     <tr>
        <th>出勤日数</th>
        <td>8日</td>
     </tr>
     <tr>
        <th>勤務時間</th>
        <td>48時間</td>
     </tr>
     <tr>
        <th>リモート時間</th>
        <td>5時間</td>
    </tr>
    <tr>
        <th>リモート日数</th>
        <td>5日</td>
    </tr>
    <tr>
        <th>出勤時間</th>
        <td>５時間</td>
    </tr>
    <tr>
        <th>出勤日数</th>
        <td>5日</td>
    </tr>
    </table>
 </div>
</template>
<script>

</script>
<style lang="stylus" scoped>
.container{
    max-width :640px;
    margin:0 auto;
}
.title{
    margin-top: 50px;
    text-align :center;
}
.flex{
    display:flex;
    margin-bottom :30px;
}
.btn-right{
    margin-left 450px;
}
.table{
    text-align :center;
}
</style>