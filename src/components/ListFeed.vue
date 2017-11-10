<template>
  <div class="list-feed-container">
    <div class="header"> Reddit </div>
    <ul class="list-feed">
      <li class="list-item" v-for="item in items">
        <div class="list-item-top"> <a target="_blank" :href="item.permalink">{{item.title}} </a></div>
      </li>
    </ul>
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

<style scoped>
.list-feed-container {
  background: #eee;
}
.header {
  margin-bottom: 50px;
  font-size: 20px;
}
.list-feed {
  /*border: 1px solid #d3d3d3;*/
  /*border-radius: 2%;*/
  /*max-height: 300px;*/
  overflow: auto;
  /*width: 85%;*/
  margin-left: 2%;
  margin-right: 2%;
  height: 300px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  overflow: auto;
}
.list-item, .header {
  min-width: 250px;
  cursor: pointer;
  min-height: 20px;
  margin-bottom: 10px;
  background-color: rgba( 211, 211, 211, 0.5);
  width: 100%;
  overflow: auto;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
/*  display: flex;
  flex-direction: column;*/

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
  text-decoration: none;
  line-height: normal;
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
