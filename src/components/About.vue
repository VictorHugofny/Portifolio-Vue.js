<template>
<div>
<div>
  <div class="flex">
    <div>
      <img class="foto" src="../assets/foto.gif" width="200px"> 
    </div>

  <div>
      <h1>Victor Hugo</h1>
      <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny">GITHUB</a></button>
      <button class = "segundo" type="submit"><a target="_blank" href="https://www.linkedin.com/in/victor-hugo-santana/">Linkedin</a></button>
  </div>

 </div>
        <h1>Sobre mim</h1>
        <p>Sou <strong> Victor Hugo</strong>, estudante de Ciencia da computação no IFBaiano, Sou <strong> desenvolvedor </strong> uso tecnologias como <strong>Javascript, Html, Css, Vue.js e Node, </strong>  essa pagina foi construida por mim como <strong> portifolio </strong> usando o framework <strong> Vue.js</strong>, Estagiando como programador <strong>Fullstack na Elogroup</strong> 
 </p> 
</div>   
<br>

<div>

<h1>Conhecimentos</h1>
<div>
  <div class= "icons">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" width="55px">
    <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/vuejs/vuejs-original.svg" width="55px">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="55px">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="55px">
  </div>


  <div class= "flex">
    <h2>Utilização das práticas Scrum, metodologia ágil</h2>
  </div>
  <div class= "flex">
    <h2>Mobile first</h2>
  </div>
 


</div>
</div>
</div>   

</template>

<style scoped>
.foto{
  border-radius: 150px;
  border:  hsl(0, 0%, 25%) 2px solid;
}
div{
  padding: 0px;
  margin-top: 0px;
}
.infos{
  margin-top: 40px;
}
.flex{
    padding: 20px;
    display: flex;
    background: rgb(27, 27, 27);
    border-bottom: #272727 5px solid;
    padding-bottom: 20px;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    align-items: center
}
.conhecimentos{
  width: 550px;
}
.flex p {
  color: #0358a8;
}
.icons img{
  padding: 10px;
}
.icons{
  padding: 10px;
  border-bottom: #272727 5px solid;
  background: #1d1d1d;
}
.icons :hover{
  background-color: #00ffea4a;
}
button{
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    padding-left:40px;
    padding-right: 40px;
    background-color: #3691e7;
}
button:hover{
  background-color: #3d3d3d;
}
a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
}
.segundo{
  background: #1d1d1d;
  border: #3691e7 1px solid;
}
.segundo a{
  color: #3691e7;
}
</style>