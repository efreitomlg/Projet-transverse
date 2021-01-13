<template>
  <div class="accueil-santa">
    <section class="nav">
        <div class="nav-logo">
            <img height="200px" src="https://banner.holidaypng.com/20191121/oh/red-lip-santa-claus-for-christmas-5dd6242d530a09.33074331.png" alt="logo">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li class="nav-list-item"><router-link to='/invente'>Ajoute ton jouet !</router-link></li>
                <li class="nav-list-item"><router-link to='/liste'>Fais-moi ta liste !</router-link></li>
            </ul>
        </div>
    </section>
    <div class="santa-title">
      <img height="50px" src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100257/33643405-santa-claus-cartoon-profile-flat-icon-christmas-holiday.jpg" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>C'est moi !</p>
        <h2>Santa Clauss</h2>
      </div>
    </div>
    <div class="santa-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique vel nihil omnis odit voluptatem molestias, temporibus aliquam inventore perferendis totam fugiat assumenda accusamus natus voluptate commodi tenetur saepe eaque illum aut sint? Similique quisquam officia aliquid nesciunt tempore itaque quod temporibus consectetur, hic rerum cupiditate possimus veniam obcaecati nobis.
      </p>
      <table width="100%">
        <tr>
          <th>Rennes</th>
          <th>Présentation</th>
        </tr>
        <tr>
          <th>Tornade</th>
          <th>Le mâle le plus rapide, il galope !</th>
        </tr>
        <tr>
          <th>Danseuse</th>
          <th>Elle est la plus grâcieuse !</th>
        </tr>
        <tr>
          <th>Fringant</th>
          <th>C'est le plus beau, il se pavane</th>
        </tr>
        <tr>
          <th>Furie</th>
          <th>C'est la plus puissante, elle tire !</th>
        </tr>
        <tr>
          <th>Comète</th>
          <th>Il apporte le bonheur aux enfants</th>
        </tr>
        <tr>
          <th>Cupidon</th>
          <th>Elle apporte l'amour aux enfants</th>
        </tr>
        <tr>
          <th>Tonnerre</th>
          <th>Lui et Furie sont bons amis, c'est le plus puissant !</th>
        </tr>
        <tr>
          <th>Eclair</th>
          <th>Elle apporte la lumière !</th>
        </tr>
      </table>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique vel nihil omnis odit voluptatem molestias, temporibus aliquam inventore perferendis totam fugiat assumenda accusamus natus voluptate commodi tenetur saepe eaque illum aut sint? Similique quisquam officia aliquid nesciunt tempore itaque quod temporibus consectetur, hic rerum cupiditate possimus veniam obcaecati nobis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique vel nihil omnis odit voluptatem molestias, temporibus aliquam inventore perferendis totam fugiat assumenda accusamus natus voluptate commodi tenetur saepe eaque illum aut sint? Similique quisquam officia aliquid nesciunt tempore itaque quod temporibus consectetur, hic rerum cupiditate possimus veniam obcaecati nobis.
      </p>
    </div>
  </div>
</template>


<style>
.accueil-santa {
  background: #333;
  padding: 3em;
  border-radius: 10 px;
  color: white;
}
.accueil-santa .santa-title {
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 10px;
}
.accueil-santa .santa-title .avatar {
  border: 1px solid rgba(225, 225, 225, 0.4);
  border-radius: 50%;
  margin: 0 30px;
}
.accueil-santa .title-text-content p {
  margin-bottom: 0;
  color: white;
}
.accueil-santa .title-text-content h2 {
  margin-top: 0;
}

.santa-content p {
  line-height: 1.5;
  margin: 30px auto;
}

table {
  border-spacing: 0px;
  margin: 50px auto;
}
table tr th, table tr td {
  border: 1px solid white;
  border-top: none;
  padding: 10px;
  text-align: center;
  color: white
}
table tr th:first-of-type, table tr td:first-of-type {
  border-left: none;
}
table tr th:nth-of-type(2), table tr td:nth-of-type(2) {
  border-right: none;
}
.nav {
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.nav .nav-logo {
  margin: 20px auto;
}
.nav .nav-menu {
  width: 100%;
}

.nav-menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  color: white;
}
.nav-menu-list li {
  width: 50%;
  text-align: center;
  background: #555;
  padding: 10px 0;
  cursor: pointer;
  transition:  300ms ease-in-out;
}
.nav-menu-list li:hover {
  background: #333;
}
.nav-menu-list li:first-of-type {
  border-bottom: 5px solid #222;
}
</style>