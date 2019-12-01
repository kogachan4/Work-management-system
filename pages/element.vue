<template>
<div>
    <el-button @click="visible=true">ダイアログを開く</el-button>
    <el-dialog :visible.sync="visible" title="確認">
        <p>処理されました</p>
    </el-dialog>   
</div>
</template>

<style>
.el-button{
    margin-top: 30px;
}
</style>

<script>
export default {
    data: function (){
        return {
 visible: false
        }
           
        } 
    }
</script>