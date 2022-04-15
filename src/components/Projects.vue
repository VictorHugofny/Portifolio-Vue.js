<template>
<div class="Projetos">
    <h1 class="subtitle is-1 is-$white">Projetos</h1>
    <h2> A seguir meus <strong> estudos</strong>, sobre programação web</h2> 
    <br>
<div class = "container">
    <div class = "github" >
        <h1> GITHUB </h1>
        <h2> Perfil do meu Github como todos repositorios presentes </h2>
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny">GITHUB</a></button>
    </div> 
</div> 
 <h2>Abaixo meus <strong> projetos e estudos</strong>, clicando nos links você pode ver uma versão online e o repositorio de cada projeto </h2> 
<div class = "container"> 

    <div class = "elogroup" >
        <h3> Case Fullstack - Elogroup </h3>
        <p> Desafio para vaga de estagio (ELOGROUP)</p>
        <button type="submit"><a target="_blank" href="https://elo-group-case-estagio-full-stack.vercel.app/" >SITE</a></button>
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/EloGroup_Case_Estagio_FullStack">REPOSITORIO</a></button>
    </div> 

    <div class = "universitarioWorld" >
        <h3> Universitario World</h3>
        <p> Jogo desenvolvido na Unity Engine</p>
        <button type="submit"><a target="_blank" href="https://gamejolt.com/games/UniversitarioWorld/480550" >SITE</a></button>
    </div> 

    <div class = "rpgvue" >
        <h3> Rpg de arena - Vue.js </h3>
        <p> Jogo de rpg criado usando Vue.js </p>
        <button type="submit"><a target="_blank" href="https://rpg-de-arena-vue-js.vercel.app" >SITE</a></button>
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/Rpg-de-Arena-Vue.js">REPOSITORIO</a></button>
    </div> 

    <div class = "pokedex" >
        <h3> Pokedex - Vue.js </h3>
        <p> Projeto pokedex usando Vue.js, Axios, PokeAPI </p>
        <button type="submit"><a target="_blank" href="https://pokedex-vue-js-ten.vercel.app/">SITE</a></button>
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/Pokedex-Vue.js">REPOSITORIO</a></button>
    </div> 

    <div class = "clones" >
        <h3> Clones HTML/CSS/JS </h3>
        <p> Clones de sites usando HTML/CSS/JS - Netflix, Disney+, Spotify, Tinder </p>
        <button type="submit"><a target="_blank" href="https://victorhugofny.github.io/Clones-HTML-CSS-JAVASCRIPT/" class="card-footer-item">SITE</a></button> 
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/Clones-HTML-CSS-JAVASCRIPT" class="card-footer-item">REPOSITORIO</a></button>    
    </div> 

    <div class = "rpgjs" >
        <h3> RPG DE ARENA POO.JS </h3>
        <p> Estudo de POO, criação de um rpg usando objeto </p>
        <button type="submit"><a target="_blank" href="https://victorhugofny.github.io/RPG-DE-ARENA-POO-JS/" class="card-footer-item">SITE</a></button> 
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/RPG-DE-ARENA-POO-JS" class="card-footer-item">REPOSITORIO</a></button>   
    </div>

    <div class = "progracaoweb">
        <h3> Estudos Programacao WEB </h3>
        <p> Meus estudos de programação Web </p>
        <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny/Programacao-WEB" >REPOSITORIO</a> </button>
    </div> 

    </div> 
</div> 
</template>

<style>

.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
}
.container > div {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  flex: 10 10 40%;
  text-align: center;
  border: #2e2e2e 4px solid;
  border-radius: 10px;
}

.elogroup{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.493)),
  url(../assets/fullstack.jpeg);
}

.universitarioWorld{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.493)),
  url(../assets/ifinho.jpg);
}

.rpgvue{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.493)),
  url(../assets/RPGVUE.jpg);
}

.pokedex{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.609)),
  url(../assets/pokedex.jpg);
}
.clones{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.664)),
  url(../assets/CLONES.jpg);
}

.rpgjs{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(3, 1, 117, 0.787)),
  url(../assets/rpg.jpeg);
}

.progracaoweb{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(0, 46, 46, 0.787)),
  url(../assets/programacao.jpg);
}
.perguntas{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(0, 0, 14, 0.787)),
  url(../assets/wallpaper.jpg);
}
.portifolioHTML{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(0, 0, 14, 0.787)),
  url(../assets/potfolio.png);
}
.github{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.904), rgba(0, 0, 14, 0.787)),
  url(../assets/Gifprogramador.gif);
  background-size: 400px 220px;
}

.Projetos button:hover{
  background-color: rgba(47, 0, 255, 0.158);
}

.Projetos button{
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    padding-left:40px;
    padding-right: 40px;
    background: #1d1d1d;
    border: #3691e7 1px solid;
}
.Projetos a{
    text-decoration: none;
    color: #3691e7 ;
    font-size: 16px;
    font-weight: bold;
}
.Projetos h3{
    background-color: rgba(0, 37, 117, 0.116);
    color: #36d8e7;
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
}
.Projetos p{
    color: rgb(202, 200, 200);
    font-weight: bolder;
    font-size: 19px;
}

</style>