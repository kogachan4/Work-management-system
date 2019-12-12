<template>
  <div class="container">
   <form action="cgi-bin/formmail.cgi" method="post">
    <label for="namae" accesskey="n" class="mt-5">名前：</label>
    <input type="text" name="name" id="namae"><br>
    <label for="money">時給：</label>
    <input type="text" id="money"><br>
    <label for="text">交通費：</label>
    <input type="text" id="text">
    <input type="submit" class="btn btn-dark mt-4" value="送信">
   </form>
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
          user: "",
          comment: ""
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
.btn {
  margin-left: 130px;
  width:150px;
}
input {
  width: 300px;
  margin-bottom: 15px;
}
</style>