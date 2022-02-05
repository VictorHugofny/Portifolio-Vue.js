<template>

<div>
  <div class="flex">
    <div>
      <img class="foto" src="../assets/fotoperfil.jpeg" width="200px"> 
    </div>

    <div>
      <h1>Victor Hugo</h1>
      <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny">GITHUB</a></button>
      <button class = "segundo" type="submit"><a target="_blank" href="https://www.linkedin.com/in/victor-hugo-santana/">Linkedin</a></button>
    </div>

 </div>
        <h1>Sobre mim</h1>
        <p>Sou <strong> Victor Hugo</strong>, estudante de Ciencia da computação no IFBaiano, Sou <strong> desenvolvedor </strong> uso tecnologias como <strong>Javascript, Html, Css, Vue.js e Node, </strong>  essa pagina foi construida por mim como <strong> portifolio </strong> usando o framework <strong> Vue.js</strong>, faço tambem edições de video como hobby onde atuo como freelancer </p> 
</div>   
</template>

<style scoped>
.foto{
  border-radius: 150px;
  border:  hsl(0, 0%, 25%) 2px solid;
  margin-right: 10px;
}
div{
  padding: 0px;
  margin-top: 0px;
}
.flex{
   padding: 20px;
    display: flex;
    background: rgb(27, 27, 27);
    border: #272727 5px solid;
    padding-bottom: 20px;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    align-items: center
}

.flex p {
  color: #0358a8;
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

