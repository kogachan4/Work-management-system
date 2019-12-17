<template>
<div class="container">
    <div class="scssh1">
        <h2 class="scsstitle">1月の給料</h2>
    </div>
    <a href="work" class="btn btn-success">戻る</a>
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

.btn{
    margin-bottom :30px;
}
</style>