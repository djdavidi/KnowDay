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
  box-shadow: 1px 1px 1px 1px;
  /*border-radius: 5%;*/
/*  border-top-left-radius: 5px;
  border-top-right-radius: 5px;*/
}
.list-feed-container .header {
 /* border-top-left-radius: 5px;
  border-top-right-radius: 5px;*/
  font-size: 20px;
  cursor: default;
  border-bottom: none;
  background-color: var(--main-color, #28B7E5);;
}
.list-feed {
  overflow: auto;
  height: 300px;
  overflow: auto;
}
.list-item, .header {
  cursor: pointer;
  min-height: 40px;
  width: calc(100% - 10px);
  padding-left: 5px;
  padding-right: 5px;
  overflow: auto;
  padding-top: 3px;
  padding-bottom: 3px;
  line-height: normal;
  border-bottom: 1px solid #CECECE;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.list-item:hover {
  transform: scale(1, 1.1);
  background: #d3d3d3;
}
.list-item a {
  display: inline-block;
  white-space: nowrap;
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
}

.list-item-top {
  display: flex;
}
</style>
