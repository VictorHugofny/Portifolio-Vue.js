<template>
<div class="trabalhos">
    <br><br>
    <h1>Trabalhos Acadêmicos</h1>
    <br>
    <p>Abaixo meus trabalhos e estudos como artigos e minicursos</p> <br>
    <br><br>

    <div class="trabalhos"> 
        <br>
        <br>
        <h2>ARTIGO: "SEGURANÇA DA INFORMAÇÃO NO CONTEXTO ESCOLAR"</h2> <br>
        <p>Escrito por Victor Hugo de Carvalho Santana, Douglas Silva Santos, Luis Henrique de Almeida Gomes</p> 
        <br>
        <h3>Editora Realize</h3> <a> Publicado em 17 de janeiro de 2022</a><br>
        <br>
        <iframe class = "artigo" src="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf#zoom=92" width="90%" height="600" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        <br><br>
        <a target="_blank" href="https://editorarealize.com.br/artigo/visualizar/80791"><button> <p class="btntext"> Link da publicação </p></button></a>
    </div>
    <div class="trabalhos"> 
        <br>
        <h2>MINICURSO - INTRODUÇÃO A ALGORITMO EM JAVASCRIPT</h2> <br>
        <p>Ministrado por Victor Hugo, Douglas Silva, Marcos Santos</p> 
        <br>
        <a> Publicado em 26 de março de 2021</a><br>
        <br>

        <figure>
            <div class="boxVideo">
                <iframe width="350" height="180" src="https://www.youtube.com/embed/h5i7P6rqAhU" frameborder="0" allowfullscreen></iframe> 
            </div>
        </figure>

        <figure>
            <div class="boxVideo">
                <iframe width="350" height="180" src="https://www.youtube.com/embed/HBbky2hqbOg" frameborder="0" allowfullscreen></iframe> 
            </div>
        </figure>


    </div>

</div>

</template>




<style scoped>
.artigo{
    max-width: 1000px;
    max-height: 1000px;
}
*{
    padding: 0;
    margin: 0;
}
button{
    margin-bottom: 20px;
}

figure { 
    width: 80%; 
    min-width: 16.5em; 
    margin:0 auto;
    }
.boxVideo {
    position: relative;
    padding-bottom: 56.25%; 
    padding-top: 25px;
    height: 0;
    margin:0 auto;
    margin-bottom: 20px;
}
.boxVideo iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
button{
    background-color: turquoise;
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    border: none;
    border-radius: 10px;
    background-color: rgb(1, 81, 253);
}
.btntext{
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.tituloArtigo{
    display: flex;
}
h2{
    color:white ;
}
.trabalhos{
    border-top: 5px solid rgb(47, 47, 47);
}

figure { 
    width: 80%; 
    min-width: 16.5em; 
    margin:0 auto;
    }
.boxVideo {
    position: relative;
    padding-bottom: 56.25%; 
    padding-top: 25px;
    height: 0;
    margin:0 auto;
    margin-bottom: 20px;
}
.boxVideo iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


</style>