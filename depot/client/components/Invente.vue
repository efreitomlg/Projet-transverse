<template>
<div class="tout">

    <h1 class="home-title">
  <span>Que voulez-vous</span>
  <span>donner ?</span>
</h1>

    <input type="text" id="name" placeholder = "Nom du produit" v-model='name'>
    <input type="text" id="description" placeholder="Quantité ?" v-model='description'>
    <!--<input type="text" id="image" placeholder="Un lien vers une image" v-model='image'>-->
    <button class="button" @click="AjoutInvention()"><span>Ajouter le produit </span></button>
    <button  class="button" @click="retrievetab()"><span>Afficher les produits disponibles</span></button>

    <article v-for="jouet in jouets" :key="jouet.id">
        <div class="article-title">
          <h2>{{ jouet.name }} - {{ jouet.description }}</h2>
        </div>
    </article>

    <input type="text" id="name2" placeholder = "Nom du jouet que tu veux supprimer" v-model='name2'>
    <button  class="button" @click="deletetoy()"><span> Effacer un produit</span></button>
 
  </div>
</template>

<script>
module.exports = {
props: {
    jouets: { type: Array, default: [] },
  },
  data (){
    return { 
      name:'',
      description:'',
      image:'',
      name2: ''
    }
  },

  methods: {

    researchname(){
      console.log('jesuisle1000emetest')
      this.$emit('research-name'),{
        name:this.name
      }
    },

    deletetoy(){
      console.log('DELETE LANCEE')
      this.$emit('delete-toy'),{
      name: this.name2
      }
    },

    async AjoutInvention(){
      await axios.post('/api/invente', {
        name: this.name,
        description: this.description,      })
    },

     retrievetab () {
      console.log('FONCTION LANCEE')
      this.$emit('retrieve-tab')
    }
  }
}

</script>

<style scoped>

.button {
  display: inline-block;
  border-radius: 1px;
  background-color: transparent;
 
  color: #FFFFFF;
  text-align: center;
  font-size: 8px;
  padding: 10px;
  width: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: relative;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
  background-color: black;
  color: white;
}

.button:hover span {
  padding-right: 10px;
  background-color: black;
  color: white;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
    background-color: black;
  color: white;
}

input{
  margin-top: 500px;
}

/* Basic styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root{
    --bg-color: #D8D8D8;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  color: #000;
  background-color: var(--bg-color);
  font-family: 'Maitree', serif;
}

h1{
    font-size: 3em;
    font-weight: normal;
}

/* title styles */
.home-title span{
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1.2;
}

.home-title span::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: a-ltr-after 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(-101%);
}

.home-title span::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    animation: a-ltr-before 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(0);
}

.home-title span:nth-of-type(1)::before,
.home-title span:nth-of-type(1)::after{
    animation-delay: 1.2s;
}

.home-title span:nth-of-type(2)::before,
.home-title span:nth-of-type(2)::after{
    animation-delay: 1.8s;
}

@keyframes a-ltr-after{
    0% {transform: translateX(-100%)}
    100% {transform: translateX(101%)}
}

@keyframes a-ltr-before{
    0% {transform: translateX(0)}
    100% {transform: translateX(200%)}
}

html{
  scroll-behavior: smooth;
}
article {
  display: flex;
}

.article-img {
  flex: 1;
}

.article-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
}

.article-content {
  flex: 3;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}

h2{
  color: black;
}

h1 {
  position: absolute;
    top: 0px;
    margin-left: 470px;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.tout{
  position: absolute;
  margin-bottom: 200px;
}
</style>
