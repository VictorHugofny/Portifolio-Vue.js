<template>
  <div id="app">
    <div id="nav" class = 'sobre'>
      <router-link class = 'sobre' to="/">Sobre</router-link> |
      <router-link to="/Projetos">Projetos</router-link> | 
      <router-link to="/Contatos">Contato</router-link>
    </div>
    <router-view/>

  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff; 
}

#nav {
  padding-top: 10px;
  padding-bottom: 10px;
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  top: 0;
  height: 50%;
  width: 100%;
  text-align: center;
  color:rgb(202, 202, 202);
  z-index: 1;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42a7b9;
}

.sobre{
  background: black;
}



</style>
