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
  <dl>
      <dt>日数</dt>
      <dd>30日</dd>
      <dt>勤務時間</dt>
      <dd>12h</dd>
      <dt>出勤日数</dt>
      <dd>15日</dd>
      <dt>出勤時間</dt>
      <dd>5h</dd>
      <dt>リモート日数</dt>
      <dd>15日</dd>
      <dt>リモート時間</dt>
      <dd>5h</dd>
  </dl>
    <table border="1" class="table scsstable mt-5">
     <tr>
        <th>日数</th>
        <th>カテゴリ</th>
        <th>時間</th>
        <th>backlog</th>
     </tr>
     <tr>
        <td>10日</td>
        <td>リモート</td>
        <td>6h</td>
        <td>url</td>
     </tr>
     <tr>
        <td>15日</td>
        <td>出勤</td>
        <td>5h</td>
        <td>url</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </table>
 </div>
</template>
<script>

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

dl{
width:500px;
list-style:none;
border-top: 1px solid #999999;
border-left: 1px solid #999999;
border-right: 1px solid #999999;
margin-left: 40px;
}

dt{
clear:both;
width:140px;
float:left;
margin-left: 150px;
}

dd{
border-bottom: 1px solid #999999;
padding:0 0 0 100px;
}

</style>