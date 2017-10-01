<template>
<div id="app">
  <input type="text" @change="updateNotes" v-model="notes">
  <span @click="updateNotes">{{hello}}</span>
  <input type="text" class="notes" v-model="notes" @change="updateNotes" />
  
  
  <div class="reddit">
    put the json in here and make these components/plugins/ with mixin for toggle
  </div>
  <div class="wordnik">
    http://developer.wordnik.com/docs.html#!/words/getWordOfTheDay_get_1
  </div>
  <counter></counter>
</div>
</template>

<script>
import ListFeed from './components/ListFeed'
import Counter from "./components/Counter"
import axios from "axios"
export default {
  name: "app",
  data (){
      return {
      hello:"thing",
      notes: null
    }
  },
  mounted() {
    this.notes = localStorage.getItem("notes")
    console.log("axios", axios)
    // axios.get("https://www.reddit.com/r/webdev/top/.json?count=20")
    // .then((res) => {
    //   console.log("here",res)
    // })
  },
  watch: {
    notes:function() {
      console.log("yo", this.notes)
    }
  },
  methods: {
    updateNotes(){
      localStorage.setItem("notes", this.notes)
      console.log("here")
    }
  },
  components: {
    ListFeed,
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100% - 6em);
  margin-top: 6em;
  width: 100%;
  /*margin-top: 60px;*/
}
body {
  height: calc(100% - 60px);
  margin-top: 60px;
  width: 100vw;
}

.notes {
  background: #d3d3d3;
  height: 50px;
  width:50px;
}

</style>
