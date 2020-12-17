<template>
<div>
  <h1>Ici la liste</h1>
</div>
  
</template>



<style>
.view-container {
  width: 79vw;
  padding: 1.5em;
  margin-left: 20vw;
  box-sizing: border-box;
}

#mobile-xmas {
  display: none;
}

@media screen and (max-width: 1096px) {
  .view-container {
    width: 100%;
    margin-left: 0;
  }

  #xmas-nav {
    display: none;
  }

  #mobile-nav {
    display: flex;
  }
}

h1{
  color: azure;
}

</style>
