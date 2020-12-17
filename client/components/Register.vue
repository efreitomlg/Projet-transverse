<template>
<div>
    <input id='name' type="text" placeholder="mail" v-model='email'>
    <input id='password' type="text" placeholder="password" v-model='password'>
    <button @click="enregistrer()" >entrez</button>
    </div>
</template>


<script>


function RedirectionJavascript(){ //ignore 
  document.location.href="http://manouvellepage.com"; 
}

module.exports = {
  data () {
    return { email:'',
    password:'',
    
    }
  },
  methods: {
      async enregistrer(){
        console.log("fonction emit")
          this.$emit('enregistrer',this.email,this.password)
      }
  }
}
</script>
