
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Liste = window.httpVueLoader('/components/Liste.vue')
const Catalogue = window.httpVueLoader('./components/Catalogue.vue')
const Invente = window.httpVueLoader('./components/Invente.vue')


const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/accueil', component: Accueil},
  { path: '/liste', component: Liste },
  { path: '/catalogue', component: Catalogue },
  { path: '/invente', component: Invente },

]

const router = new VueRouter({
  routes
})

//Vue.component('Register.vue')


var app = new Vue({
  router,
  el: '#app',
  data: {
    données: [],
    user: {},
    isConnected: false,
    jouets: [],
  },


async mounted () {
    const res = await axios.get('/api/articles')
    this.articles = res.data
    const res2 = await axios.get('/api/retrieveTab')
    this.jouetscrees = res2.data
  },

  
  methods: {

     async AjoutInvention(name, description, image){
      console.log('AJOUTINVENTION LANCEE')
      const toy=await axios.post('/api/invente', {name: name, description: description, image: image});
      if (reg.status == 200)
      {
        console.log(toy.data)
      }
      console.log('401 ta mère')
    },

    async researchname(){
      const reg = await axios.get('/api/researchname',{name: name})
      this.jouets = reg.data
    },

    async deletetoy(){
      console.log('effaçage en cours')
      await axios.delete('/api/deletetoy',{name: name})
    },

    async retrievetab(){
      
      const res = await axios.get('/api/retrievetab')
      this.jouets = res.data
      console.log('Je suis la')
    },


    async enregistrer (mail,password)
    {
      console.log('ENREGISTER LANCEE')
      const reg = await axios.post('/api/register',{email: mail,password: password});
      if (reg.status == 200)
      {
        console.log(reg.data)
  
      }

    },

    async loginUser (mail,password) {
      console.log("LOGIN LANCE")
      const reg = await axios.post('/api/login', {email: mail,password: password})
      if(reg.status == 200)
      {
        alert("vous etes connectés")
        this.$router.push('/')
        this.user = reg.data
        this.isConnected = true
        location.href="donnerrecevoir.html"
      }
    },

    async addArticle (article) {
      const res = await axios.post('/api/article', article)
      this.articles.push(res.data)
    },
    async updateArticle (newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.articles.find(a => a.id === newArticle.id)
      article.name = newArticle.name
      article.description = newArticle.description
      article.image = newArticle.image
      article.price = newArticle.price
    },
    async deleteArticle (articleId) {
      await axios.delete('/api/article/' + articleId)
      const index = this.articles.findIndex(a => a.id === articleId)
      this.articles.splice(index, 1)
    },
    async addToPanier(articleId) {
      const res = await axios.post('/api/panier', articleId)
      this.panier = res.data
      
    }
  }
})
