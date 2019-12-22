<template>
  <div class="container" style="background-color:#EEFFFF;">
    <Header />
    <div id="app">
      <p>{{counter}}</p> 
    </div>
    <div>
      <button @click="up" class="btn btn-primary">1を足す</button>
    </div>
    <div v-for="koga in kogas" :key="koga.step">
      <ul class="mt-5">
        <li v-for="list in lists" :key="list.step">
          {{list.name}}さん
        </li>
      </ul>
    </div>
    <div class="mb-5">
      <a v-bind:href="url" class="btn btn-dark mt-5">githubはこちら</a>
      <img class="mt-5" v-bind:src="imagePath">
    </div>
    <div class="mt-5">
      <button class="btn btn-danger btn-lg" @click="clickTzuyuButton">tyzyu</button>
      <button class="btn btn-dark ml-5 btn-lg" @click="clickSanaButton">sana</button>
    </div>
    <div :class="{warning:isAct}">
      <p class="mt-5 mb-5">コアラ</p>
    </div>
    <div>
      <button class="btn btn-primary mb-5" @click="switchWarning">切り替える</button>
    </div>
    <div>
      <input class="mb-5" v-if="isFormDisplay" type="text">
    </div>  
    <div>
      <button class="btn btn-danger mb-5" @click="changeFormDisplay">フォーム</button>
    </div>
    <div>
      <textarea cols="65" rows="5" v-model="article"></textarea>
      <p>{{article}}</p>
    </div>
    <div class="mt-5 mb-5">
      <button class="btn btn-primary" @click="counter++">{{counter}}</button>
    </div>
    <div class="aaa" style="background-color:red;">
      <transition class="fade" mode="out-in">
        <!-- <img src="https://portal.st-img.jp/detail/38e411ad4dd212d13cb9d76b8dfd0996_1576235211_1.jpg"> -->
        <a class="btn btn-secondary m-5" href="/game">yaaaaaa</a>
      </transition>
    </div>
    <h1>{{$store.state.displayName}}</h1>
    <p>{{$store.user}}</p>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import firebase from '@/service/firebase'

export default {
  components: {
    Header
  },
  data (){
    return {
      counter: 0,
      url: "https://github.com/kogachan4/Work-management-system",
      imagePath:"",
      isAct:false,
      isFormDisplay:false,
      user:"a",
      article:"",
      kogas:[{
      step:1
      },
      {
      step:2
      }
      ],
      lists:[{
      name:'koga'
      },
      {
        name:'yamada'
      },
      {
        name:'sato'
      }
      ]
    }
  },
  methods: {
    up: function() {
      this.counter ++
    },
    clickTzuyuButton: function(){
      this.imagePath="http://static.kstyle.com/stf/35b4fb379623b08a543d2ccc72f6a190.jpg"
    },
    clickSanaButton: function(){
      this.imagePath="https://simkung.net/wp-content/uploads/2018/01/twice-sana-720x479.jpg"
    },
    switchWarning: function(){
      this.isAct = !this.isAct;
    },
    changeFormDisplay: function(){
      this.isFormDisplay = !this.isFormDisplay
    }
  }
}
</script>

<style>
p {
  font-size: 100px;
}
.warning {
  background-color:chocolate;
}
input {
  width:500px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}
.aaa {
  height:160px;
  opacity: 0.5;
}
.btn:hover {
  background-color:unset;
}
</style>
