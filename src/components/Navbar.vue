<template>
  <header class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">VueJS</router-link>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav justify-content-end" v-if="loggedUser">
          <li class="nav-item active">
            <a class="nav-link" href="#">Hello, {{ loggedUser.get('username') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
        <ul class="navbar-nav justify-content-end" v-else>
          <li class="nav-item active">
            <router-link to="signin" class="nav-link">Sign-in</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Parse from 'parse'
export default {
  name: 'Navbar',
  data () {
    return {
      loggedUser: Parse.User.current()
    }
  },
  methods: {
    logout () {
      Parse.User.logOut()
      this.loggedUser = null
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
