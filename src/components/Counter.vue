<template>
  <div class="counter">
    <!-- Hey counter here {{componentVal}} -->
  </div>
</template>

<script>
// give it option of date to start as well
// also option of starting counter
// option of total i.e 30 days
import optionsMixin from "../mixins/optionsMixin"
console.log("options", optionsMixin)
export default {
  name: 'counter',
  props: ["totalCount"],
  mixins: [optionsMixin],
  data () {
    return {
      currentCount: null,
      date: null
// need to maybe track date? how to ensure it ticks
    }
  },
  mounted() {
    // Keep counter updated
    // let newDate = new Date();
    // let difference = newDate.day - this.date.day;
    // if (difference > 0) {
    //   this.currentCount += difference;
    // }
    // this.saveToLocal();
    // optionsMixin.mounted();
    // console.log('in counter', this.componentValues)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
