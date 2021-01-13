<template>
  <div>
    <table>
      <tr>
        <th>Ce que tu as créé</th>
        <th>Ce que tu as dans ta liste</th>
      </tr>
      <tr>
        <th><article v-for="jouet in jouetscrees" :key="jouet.id">
        <div class="article-title">
          <h2>{{ jouet.name }} - {{ jouet.description }}</h2>
        </div>
        </article></th>
      </tr>
    </table>
  </div>
</template>

<script>
module.exports = {
props: {
    jouetscrees: { type: Array, default: [] },
  },
  data (){
    return { 
      name:'',
      description:'',
      name2: ''
    }
  },
}

</script>

<style>
table {
  border-spacing: 0px;
  margin: 50px auto;
}
table tr th, table tr td {
  border: 1px solid green;
  border-top: none;
  padding: 10px;
  text-align: center;
  color:black;
}
table tr th:first-of-type, table tr td:first-of-type {
  border-left: none;
}
table tr th:nth-of-type(2), table tr td:nth-of-type(2) {
  border-right: none;
}

.article-title {
  display: flex;
  justify-content: space-between;
}
</style>