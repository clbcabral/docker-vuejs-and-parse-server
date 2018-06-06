<template>
  <div>
    <h1>Hello!</h1>
  </div>
</template>

<script>
import Parse from 'parse'
export default {
  name: 'HelloWorld',
  mounted () {
    // Parse call example...
    Parse.User.logIn('fulano', '123')
      .then(console.log)
      .fail(console.log)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #ededed;
}
</style>
