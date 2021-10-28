<template>
  <div class="home">

<div class = "links">
<div class = "grid-container" id="rodape"> 
        <div><a href= "mailto:victorhugofny@gmail.com?subject=Hello%20again" target="_blank">
            <h2><img  src="../assets/gmail.png" widht = '10' > </h2></a></div>
        <div><a href= "https://www.instagram.com/victorhugofny/?hl=pt" target="_blank">
            <h2><img src="../assets/instagram-icone-icon-1.png" > </h2></a></div>
       <div> <a href= "https://github.com/VictorHugofny" target="_blank">
            <h2><img src="../assets/github.png"> </h2></a></div>
        <div><a href= "https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw" target="_blank">
            <h2> <img src="../assets/youtube.png" >  </h2></a></div>
        <div><a href= "https://www.linkedin.com/in/victor-hugo-santana/" target="_blank">
            <h2> <img src="../assets/linkedin.png" >  </h2></a></div><br><br>
</div> 
    </div> 
    



<article class="message is-dark is-large">
  <div class="message-body">
    
  <img class="foto" src="../assets/fotoperfil.jpeg" width="200px"> 
    
    <h1 class="subtitle is-1">Sobre mim</h1>
    <h1> Sou <strong> Victor Hugo </strong>, estudante de Ciencia da computação no IFBaiano, Estudando <strong> programação Web </strong> Frontend usando tecnologias como Javascript, Html, Css, Vue.js e Node,  essa pagina foi construida por mim como <strong> portifolio </strong> usando os frameworks <strong> Vue.js e Bulma</strong>, faço tambem edições de video como hobby onde atuo como freelancer </h1> 
    </div>
</article>

<div class="Projetos">

<h1 class="subtitle is-1">Projetos</h1>
<h1 class = "texto">Abaixos meus <strong> projetos e estudos </strong>, clicando nos links você pode ver uma versão online e o repositorio de cada projeto </h1> 
<br>
<div class="columns">
  <div class="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Rpg de arena - Vue.js
    </p>
   
  </header>
  <div class="card-content">
    <div class="content">
     <t> Jogo de rpg criado usando Vue.js </t>
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://rpg-de-arena-vue-js.vercel.app" class="card-footer-item">SITE</a>
    <a href="https://github.com/VictorHugofny/Rpg-de-Arena-Vue.js" class="card-footer-item">REPOSITORIO</a>
  </footer>


 </div> 
  </div>
  <div class="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Pokedex - Vue.js
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <t> Projeto pokedex usando Vue.js, Axios, PokeAPI </t>
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://pokedex-vue-js-ten.vercel.app/" class="card-footer-item">SITE</a>
    <a href="https://github.com/VictorHugofny/Pokedex-Vue.js" class="card-footer-item">REPOSITORIO</a>
  </footer>


 </div> 
 </div> 

  </div>

<div class="columns">
  <div class="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Clones HTML/CSS/JS
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <t> Clones de sites usando HTML/CSS/JS - Sites como Netflix, Disney+, Spotify, Tinder </t>
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://rpg-de-arena-vue-js.vercel.app" class="card-footer-item">SITE</a>
    <a href="https://github.com/VictorHugofny/Rpg-de-Arena-Vue.js" class="card-footer-item">REPOSITORIO</a>
  </footer>


 </div> 
  </div>
  <div class="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      RPG DE ARENA POO.JS
    </p>
  </header>
  <div class="card">
    <div class="content">
      <br>
      <t> Estudo de POO, criação de um rpg usando objeto </t>
      <br><br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://victorhugofny.github.io/RPG-DE-ARENA-POO-JS/" class="card-footer-item">SITE</a>
    <a href="https://github.com/VictorHugofny/RPG-DE-ARENA-POO-JS" class="card-footer-item">REPOSITORIO</a>
  </footer>


 </div> 
 </div> 
 
  </div>

  <div class="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Estudos Programacao WEB
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <t> Meus estudos de programação Web  </t>
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://github.com/VictorHugofny/Programacao-WEB" class="card-footer-item">REPOSITORIO</a>
  </footer>
       </div> 
    </div>  
  </div>  
</div>



</template>



<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.Contatos-sobre{
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}
.foto{
  border-radius: 100px;
}

.grid-container img{
  width: 35px;
  height: 35px;
  margin: 3%;
}
.grid-container{
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background: rgba(236, 235, 235, 0.473);
}

#rodape > div{
  padding: 0px;
  width: 20%;
}

#rodape > div:hover{
  background-color: rgb(211, 211, 211);
}


</style>