<template>

  <div class="form-box">
		<div class="header-text">
			Se connecter
		</div><input id="name" placeholder="Pseudo" type="text" v-model="email"> <input id="password" placeholder="Mot de passe" type="password" v-model="password">  <button @click="loginUser()">Connexion</button>
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
.form-box {
	background-color: rgba(187, 187, 187, 0.096);
	margin: auto auto;
	padding: 40px;
	border-radius: 1px;
	box-shadow: 0 0 10px #000;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 300px;
  height: 230px;
  font-family: poppins;
  text-shadow:0 0 2px #FFD100,0 0 30px #FFD100,0px 0px 5px #FFD100, 0 0 150px #FFD100;color:#FFD100;
background-color:transparent;
color:white;
}
.form-box:before {
	width: 100%;
	height: 100%;
	background-size: cover;
	content: "";
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -1;
	display: block;
	filter: blur(2px);
}
.form-box .header-text {
	font-size: 32px;
	font-weight: 600;
	padding-bottom: 30px;
	text-align: center;
}
.form-box input {
	margin: 10px 0px;
	border: none;
	padding: 10px;
	border-radius: 1px;
	width: 100%;
	font-size: 18px;
  font-family: poppins;
  background: rgba(255, 255, 255, 0.185);
  opacity: 1;
  color: black;
}
.form-box input[type=checkbox] {
	display: none;
}
.form-box label {
	position: relative;
	margin-left: 5px;
	margin-right: 10px;
	top: 5px;
	display: inline-block;
	width: 20px;
	height: 20px;
	cursor: pointer;
}
.form-box label:before {
	content: "";
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 5px;
	position: absolute;
	left: 0;
	bottom: 1px;
	background-color: rgb(255, 255, 255);
}
.form-box input[type=checkbox]:checked+label:before {
	content: "\2713";
	font-size: 20px;
	color: #000;
	text-align: center;
	line-height: 20px;
}
.form-box span {
	font-size: 14px;
}
.form-box button {
	background-color: rgba(243, 244, 245, 0.473);
	color: #fff;
	border: none;
	border-radius: 1px;
	cursor: pointer;
	width: 100%;
	font-size: 18px;
	padding: 10px;
	margin: 20px 0px;
}
span a {
	color: #BBB;
}



</style>
