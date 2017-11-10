<template>
  <div class="toDo">
    <div v-for="(todo, index) in toDos">
      {{todo}} <span @click="removeTodo(index)">remove</span>
    </div>
    <div><input type="text" v-model="newToDo"></div>
  </div>
</template>

<script>
export default {
  name: 'toDo',
  data () {
    return {
      toDos: ["one", "two", "three"],
      newToDo: ""
    }
  },
  methods: {
    removeTodo(index) {
      this.toDos.splice(index, 1)
    },
    addTodo() {
      this.toDos.push(this.newToDo)
    }
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
