<template>
  <div id="app">
    <navbar @loginSuccess="loginSuccess" />
    <div id="stage" class="container">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    loginSuccess (user) {
      console.log('yah!', user)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#stage {
  padding-top: 25px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
