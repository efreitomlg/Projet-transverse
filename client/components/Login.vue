<template>
  <div>
    <h2>Connectez vous</h2>
    <!-- TODO -->
   <input id='name' type="text" placeholder="mail" v-model='email'>
    <input id='password' type="text" placeholder="password" v-model='password'>
    <button @click="loginUser()" >entrez</button>
    </div>
</template>

<script>
module.exports = {
  props: {
    //articles: { type: Array, default: [] },
    //panier: { type: Object }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  async mounted () {
  },
  methods: {
    async loginUser() {
        console.log("fonction login")
      this.$emit('login-user', this.email,this.password)
    }
  }
}
</script>

<style scoped>
</style>
