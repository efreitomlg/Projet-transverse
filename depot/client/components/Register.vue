<template>
<div class ="monter">
  <ul>
    <input id='name' type="text" placeholder="mail" v-model='email'>
    <input id='password' type="text" placeholder="password" v-model='password'>
    <button class="button" @click="enregistrer()" >entrez</button>
  </ul>
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


<style scoped>


.monter{
position: absolute;
    top: 3px;
    right: 0px;
    margin-top: 60px;
    
}
.button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background:transparent;
    padding: 5px;
    border-radius: 0px;
    display: inline-block;
    border: none;
    transition: all 0.9s ease 0s;
    }

    .button:hover {
background: #d1d0d0;
letter-spacing: 5px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
cursor: pointer;
}
</style>
