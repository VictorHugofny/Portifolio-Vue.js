<template>

<div>
  <div class="flex">
    <div>
    <p>Ola, bem vindo!</p>
    <h1>Victor Hugo</h1>
    <button type="submit"><a target="_blank" href="https://github.com/VictorHugofny">GITHUB</a></button>
    <button class = "segundo" type="submit"><a target="_blank" href="https://www.linkedin.com/in/victor-hugo-santana/">Linkedin</a></button>
    </div>

    <div>
    <img class="foto" src="../assets/fotoperfil.jpeg" width="200px"> 
   
    </div>
 </div>
        <h1>Sobre mim</h1>
        <p>Sou <strong> Victor Hugo</strong>, estudante de Ciencia da computação no IFBaiano, Sou <strong> desenvolvedor </strong> uso tecnologias como <strong>Javascript, Html, Css, Vue.js e Node, </strong>  essa pagina foi construida por mim como <strong> portifolio </strong> usando o framework <strong> Vue.js</strong>, faço tambem edições de video como hobby onde atuo como freelancer </p> 
</div>   
</template>

<style scoped>
.foto{
  border-radius: 100px;
  border: rgb(1, 139, 163) 3px solid;
}
div{
  margin-top: 20px;
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.02);
  border: rgb(1, 139, 163) 3px solid;
  padding-bottom: 30px;
}
button{
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    padding-left:40px;
    padding-right: 40px;
    background-color: rgb(1, 140, 253);
}
button:hover{
  background-color: rgb(0, 36, 95);
}
a{
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
}
.segundo{
  background: rgb(255, 255, 255);
}
.segundo a{
  color: rgb(0, 47, 255);
}
</style>

