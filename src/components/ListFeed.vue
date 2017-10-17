<template>
  <div class="list-feed">
    <div class="list-item" v-for="item in items">
      <div class="list-item-top"> <a target="_blank" :href="item.permalink">{{item.title}} </a></div>
      <!-- <div class="list-item-bottom">{{item.permalink}}</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'listfeed',
  props: ["link"],
  // for now going to hardcode reddit until I write a pleasant way to abstract
  // the selecting of the desired object property
  data () {
    return {
      items: []

    }
  },
  mounted() {
  axios.get("https://www.reddit.com/r/webdev/hot/.json?count=20")
    .then((res) => {
      console.log("here",res.data.data.children)
      var thing = res.data.data.children.map((post) => {
        console.log("post", post.data.title)
        return {
          permalink: `https://reddit.com/${post.data.permalink}`,
          title: post.data.title
        }
      });
    this.items = thing
    console.log("item", this.items)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-feed {
  max-height: 300px;
  overflow: auto;
  width: 85%;
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 300px;
  overflow: auto;
}
.list-item {
  min-width: 250px;
  cursor: pointer;
  min-height: 2em;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgba( 211, 211, 211, 0.5);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.list-item:hover {
  /*transform: scale(1.1,1.1);*/
}
.list-item a {
  display: inline-block;
  white-space: nowrap;
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis;
}
/*
.list-item-color-tab {
  width: 60%;
  padding-right: 5%;
  height: 100%;
  text-align: right;
  background-color: hsl(180, 100%, 50%);
}

.list-item-name {
  height: 100%;
  width: 20%;
  padding-left: 5%;
  background-color: lightblue;
}*/
</style>
