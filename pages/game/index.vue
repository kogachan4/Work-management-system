<template>
  <div class="container">
      <div class="mb-5"> 
          <h1 class="mt-5">{{result}}</h1>
      </div>
      <div>
          <img :src="enemyHandImage">
      </div>
      <div class="mt-5">
          <button class="btn btn-dark" @click="fight('goo')">グー</button>
          <button class="btn btn-dark" @click="fight('choki')">チョキ</button>
          <button class="btn btn-dark" @click="fight('pa')">パー</button>
      </div>
      <a href="/train">kooo</a>
  </div>
</template>

<script>
import firebase from '~/service/firebase'
export default {
    data (){
        return {
            enemyHand:"",
            enemyHandImage:"",
            result:"じゃんけん",
            hand:[
                'goo','choki','pa'
            ]
        }
    },
    methods: {
        fight: function(myHand) {
            //敵の手をランダムで決める
            var index =Math.floor(Math.random() * Math.floor(3));
            this.enemyHand = this.hand[index];
            if(this.enemyHand === 'goo'){
                this.enemyHandImage='https://illust8.com/wp-content/uploads/2018/07/janken_guu_illust_716.png'
            }else if(this.enemyHand==='choki'){
                this.enemyHandImage='https://illust8.com/wp-content/uploads/2018/07/yubi_peace_illust_708.png'
            }else if(this.enemyHand='pa'){
                this.enemyHandImage='https://illust8.com/wp-content/uploads/2018/07/janken_hand_illust_714.png'
            }

            //自分の手と敵の手を比較
            console.log('敵の手:' +this.enemyHand);
            console.log('自分の手:'+myHand);

            //引き分け
            if(myHand === this.enemyHand){
                console.log('引き分け');
                this.result=('引き分け');
            }
            //勝ち
            if(this.enemyHand ==='goo' && myHand === 'pa'){
                console.log('勝ち');
                this.result=('勝ち');
            }
            if(this.enemyHand ==='choki' && myHand === 'goo'){
                console.log('勝ち');
                this.result=('勝ち');
            }
            if(this.enemyHand ==='pa' && myHand === 'choki'){
                console.log('勝ち');
                this.result=('勝ち');
            }
            //負け
            if(this.enemyHand ==='goo' && myHand === 'choki'){
                console.log('負け');
                this.result=('負け');
            }
            if(this.enemyHand === 'choki' && myHand === 'pa'){
                console.log('負け');
                this.result=('負け');
            }
            if(this.enemyHand === 'pa' && myHand === 'goo'){
                console.log('負け');
                this.result=('負け');
            }
        }
    }
}
</script>

<style>
img {
    width:100px;
}
</style>