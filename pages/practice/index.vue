<template lang="html">
<div class="container">
  <div class="sample mt-5">
    <p>Hello, I'm {{ name }} {{reverseName}}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary mt-5 " name="button" @click="plus">
      click times:{{num}}
  </button>
      <div :class="['hide', { seven: num === 3 }]">
      <p class="mt-5">click 3 times</p>
    </div>
</div>  
</template>

<script>
export default {
  data() {
    return {
      name: 'KOGA',
      num : 0
    }
  },
  methods:{
      plus(){
          this.num++
      }
  },
  computed:{
      reverseName(){
          return this.name.split('').reverse().join('')
      }
  }
}
</script>
<style lang="scss" scoped>
.hide {
  display: none;
  &.seven {
    display: block;
  }
}
p{
    color:red;
    font-size:50px;
}
</style>