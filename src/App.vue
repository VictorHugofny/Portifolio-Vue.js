<template>
  <div id="app">
    
    <div id="nav" class = 'sobre'>
      <router-link to="/"> <p>Sobre</p></router-link> 
      <router-link to="/Projetos"><p> Projetos</p></router-link> 
      <router-link to="/Audiovisual"><p> Audiovisual</p></router-link> 
      <router-link to="/Contatos"><p> Contato </p></router-link> 
      
    </div>
    <router-view/>
    <Contacts/>
  </div>
  
</template>

<script>
import Contacts from '@/components/Contacts.vue'
export default {
  components:{
    Contacts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff; 
  background-color:rgb(24, 24, 24);
}
h1{
  color: #ffffff;
  font-size: 44px;
}
p{
  font-size: 22px;
  color: rgb(177, 177, 177);
}
h2{
  font-size: 22px;
  color: rgb(177, 177, 177);
}
strong{
  color: #00ffff;
}
.subtitle{
    color: #ffffff;
}
#nav {
  background-color:#272727;
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  color:rgb(202, 202, 202);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  padding: 0;
  color: #ffffff;
}

#nav p{
  font-weight: bold;
  margin: 10px;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  padding-right: 30px;
  padding-right: 30px;
}

#nav p:hover{
  color: #00ffff;
}

p, h1, h3, h2{
    margin-left: 20px;
    margin-right: 20px;

  }

#nav a.router-link-exact-active {
  color: #42a7b9;
}




body{
  margin: 0;
  background: #eb0000;
}
@media(max-width: 800px){
  .Contacts p{
    font-size: 12px;
}
  .foto{
    border-radius: 150px;
    border: #191919 5px solid;
    margin-left:0px;
}
  #nav{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  p, h1, h3, h2{
    margin-left: 10px;
    margin-right: 10px;
  }
  #nav p{
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  padding-right: 10px;
  padding-left: 10px;
}
}
  p, h1, h3, h2{
    margin-left: 5%;
    margin-right: 5%;
  }
@media(min-width: 1900px){
  p, h1, h3, h2{
    margin-left: 8%;
    margin-right: 8%;
  }
  .Projetos{
    margin-left: 10%;
    margin-right: 10%;
  }}

@media(min-width: 2400px){
  p, h1, h3, h2{
    margin-left: 13%;
    margin-right: 13%;
  }
  .Projetos{
    margin-left: 10%;
    margin-right: 10%;
  }}



</style>
