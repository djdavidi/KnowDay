<template>
  <div class="stats-container">
    <div v-for="crypto in cryptos" class="stats">
        <a>{{crypto.name}}</a>
        <div>
          <span>Price in USD:</span>
          <div>{{crypto.price_usd }}</div>
        </div>

        <div>
          <span>Price in BTC:</span>
          <div>{{crypto.price_btc}}</div>
        </div>
        <div>
          <span>Change in 24h:</span>
          <div> {{crypto.percent_change_24h}}</div>%
        </div>
        <div>
          <span>Change in 7 days:</span>
          <div>{{crypto.percent_change_7d}}</div>%
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Stats',
  data () {
    return {
      cryptos: [],
    }
  },
  created() {
    console.log("here1")
    this.callApi();
  },
  methods: {
      // selectCrypto() {
      //   this.newIndex = Math.floor((Math.random() * this.cryptos.length));
      //   this.currentCrypto = this.cryptos[this.newIndex];
      // },
      callApi() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
        .then(response => {
          console.log("response", response)
          console.log("cryptos", this)
          this.cryptos = response.data.slice(0,5);
          // if (this.currentCrypto) {
          //   this.currentCrypto = this.cryptos[this.newIndex];
          // }
          setTimeout(() => {
            this.callApi();
          }, 60000)
        })
        // axios.get("https://graphs.coinmarketcap.com/currencies/bitcoin/")
        // .then(response => {
        //   console.log("response", response)
        //   console.log("cryptos", this)
        // })
    },
    randomSaying() {
      // ?
      return this.sayings[Math.random(0,this.sayings.length) + 1];
    }
  },
  computed: {
    link() {
      return `https://coinmarketcap.com/currencies/${this.currentCrypto.name}/`
    }
  }
}
</script>

<style>
.stats-container {
  color: green;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.stats {
  width: 25%;
}
<style>
