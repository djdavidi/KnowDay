<template>
  <div class="counter">
    Hey counter here
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
  mixins: [optionsMixin],
  data () {
    return {
    }
  },
  mounted() {
    // optionsMixin.mounted();
    console.log('in counter', this.componentVal)
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
