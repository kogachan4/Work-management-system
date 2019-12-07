<template>
    <div class="container">
     <div class="input-group m-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">氏名</span>
        </div>
        <input type="text" name="name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
     </div>
     <div class="input-group m-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">時給</span>
        </div>
        <input type="text" name="workmoney" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
     </div>
    <div class="input-group m-3">
        <div class="input-group-prepend">
            <span class="input-group-text"  id="inputGroup-sizing-default">交通費</span>
        </div>
        <input type="text" name="money" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <a href="profile" class="btn btn-success m-4">変更を保存する</a>
   </div>
</template>
<script>
export default {
  data(){
    return {
      user: null,
      form: {
        comment: ""
      },
      posts: [
        {
          user: "mikakane",
          comment: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
          date: "01/01 11:00"
        },
      ]
    }
  },
  methods: {
    login(){
        this.user = {
            name: "debug user"
        }
    },
    submitPost() {
      if (this.form.comment === "") {
        return false
      }
      const date = new Date()
      this.posts.push({
        comment: this.form.comment,
        user: this.user.name,
        date: `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
      })
      this.form.comment = ""
    }
  },
    computed: {
    user () {
        return this.$store.state.user
    },
    posts () {
        return this.$store.state.posts
    },
  },
}

</script>

<style lang="scss" scoped>

</style>