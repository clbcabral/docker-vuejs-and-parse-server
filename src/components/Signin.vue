<template>
  <div>
    <form class="form-signin">
      <p class="alert alert-warning" v-if="error">{{ error.message }}</p>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control"
        v-model="user.email"
        placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control"
        v-model="user.password"
        placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" @click="login">Sign-in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import Parse from 'parse'
export default {
  name: 'Signin',
  data () {
    return {
      user: {
        email: null,
        password: null
      },
      error: null
    }
  },
  methods: {
    login () {
      let self = this
      self.error = null
      Parse.User.logIn(self.user.email, self.user.password).then(res => {
        self.$emit('loginSuccess', res)
      }).fail(error => {
        this.error = error
      })
    }
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
