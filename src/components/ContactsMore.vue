<template>
<div> 
    <h1>Entre em contato</h1>
    <p>Abaixo <strong> formas de contato</strong>, clicando nos links você sera enviando para cada pagina que deseja </p> 


<div class = "Contacts"> 
    <div class = 'Especifico'>
        <h2><a href= "mailto:victorhugofny@gmail.com?subject=Hello%20again" target="_blank">
        <h2>Email:</h2>
        <img src="../assets/gmail.png"></a> victorhugofny@gmail.com</h2>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://github.com/VictorHugofny" target="_blank">
        <h2>Github</h2>
        <img src="../assets/github.png"></a>victorhugofny</h2>
    </div>

    <div class = 'Especifico'>
        <h2>Linkedin</h2>
        <a href= "https://www.linkedin.com/in/victor-hugo-santana/" target="_blank">
        <img src="../assets/linkedin.png"></a>
    </div>

    <div class = 'Especifico'>
        <h2>Youtube</h2>
        <a href= "https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw" target="_blank">
        <img src="../assets/youtube.png"></a>
    </div>
</div>
</div>
</template>

<style scoped>
img{
    height: 50px;
    height: 30px;
}
a{
    text-decoration: none;
}
.Especifico{
    background-color: rgb(17, 17, 17);
    border: turquoise 1px solid;
    padding: 20px;
    margin-bottom: 16px;
}

</style>