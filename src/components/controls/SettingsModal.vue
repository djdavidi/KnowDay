<template>
  <div class="settting">
      hello
  </div>
</template>

<script>
// let choose theme color, widgets, etc
// cant creat two with same name
// This guy here is going to be the control center
// need to parse and save the current widgets so that I know to render them
//  and with what names
// so {type: "counter", name: "inktober"} so i can pass it the widget name
// so it can access local storage
export default {
  name: 'Settings',
  data () {
    return {
      components: ["ToDo", "ListFeed", "ProgressTracker"]
    }
  },
  created() {
    // get settings from local storage
    // read widget names
    // dynamically append all those requests ? or somehow efficiently do that
    // to load only the ones that are enabled
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settings-modal {

}
</style>
