<template>
<div id="app">
  <input type="text" @change="updateNotes" v-model="notes">
  <span @click="updateNotes">{{hello}}</span>
  <input type="text" class="notes" v-model="notes" @change="updateNotes" />
  
  <to-do></to-do>
  <div class="reddit">
    <list-feed></list-feed>
  </div>
  <!-- <stats></stats> -->
  <!-- <counter :widget-name="inktober"></counter> -->
 <!--  <div class="wordnik">
    http://developer.wordnik.com/docs.html#!/words/getWordOfTheDay_get_1
  </div> -->
</div>
</template>

<script>
import ListFeed from "./components/ListFeed"
import ProgressTracker from "./components/ProgressTracker"
// import Stats from "./components/Stats"
import ToDo from "./components/ToDo"
import SettingsModal from "./components/controls/SettingsModal"
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
    ProgressTracker,
    ToDo,
    SettingsModal
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
  width: 100vw;
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

.reddit {
  width: 25%;
}









/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
