<template>
<div class="container">
 <h2 class="title">2019年12月の勤務状況</h2>
  <div class=flex>
    <div>
        <button class="backbutton">11月</button>
    </div>
    <div class="go">
        <button>1月</button>
    </div>
  </div> 
    <table border="1">
     <tr>
     <th>出勤日数</th>
            <td>8</td>
        </tr>
        <tr>
            <th>勤務時間</th>
            <td>48</td>
        </tr>
    </table>
 </div>
</template>
<script>

</script>
<style lang="stylus" scoped>
.container{
    max-width :640px;
    margin-left :300px;
}
.title{
    margin-top: 50px;
    text-align :center;
}
button{
    margin-top: 30px;
    margin-bottom: 15px;
    font-size:20px;
    width:80px;
}
.backbutton{
    margin-right: 680px;
    
}
table{
    margin:0 auto;
    width:840px;
    margin-bottom: 30px;
}
a{
    text-decoration: none;
}
.flex{
    display:flex;
}
.go{
    margin-right :20px;
}
</style>