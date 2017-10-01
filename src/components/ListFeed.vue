<template>
  <div class="list-feed">
    <div class="list-item" v-for="item in items">
      <div class="list-item-name" :style="{background: nameColor}"> {{name}} </div>
      <div class="list-item-color-tab" :style="{background: textColor}">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listfeed',
  props: ["link"],
  // for now going to hardcode reddit until I write a pleasant way to abstract
  // the selecting of the desired object property
  data () {
    return {
      items: ["one", "two"],

    }
  },
  methods() {
        // axios.get("https://www.reddit.com/r/webdev/top/.json?count=20")
    // .then((res) => {
    //   console.log("here",res)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #d3d3d3;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

.thing {
  height: 100%;
  width: 100%;
}

.list-container {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.list-item {
  min-width: 200px;
  cursor: pointer;
  min-height: 1em;
  margin-top: 3px;
  margin-bottom: 3px;
  background-color: rgba( 211, 211, 211, 0.5);
  width: 50%;
  display: flex;
}
.list-item:hover {
  transform: scale(1.1,1.1);
}

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
}
</style>
