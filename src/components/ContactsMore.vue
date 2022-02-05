<template>
<div> 
    <h1>Entre em contato</h1>
    <p>Abaixo <strong> formas de contato</strong>, clicando nos links você sera enviando para cada pagina que deseja </p> 

<div class = "Contacts"> 
    <div class = 'Especifico'>
        <p><a href= "mailto:victorhugofny@gmail.com?subject=Hello%20again" target="_blank">
        <h2>Email:</h2>
        <img src="../assets/gmail.png"></a> victorhugofny@gmail.com</p>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://github.com/VictorHugofny" target="_blank">
        <h2>Github:</h2>
        <img src="../assets/github.png"></a>victorhugofny</h2>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://www.linkedin.com/in/victor-hugo-santana/" target="_blank">
        <h2>Linkedin:</h2>
        <img src="../assets/linkedin.png"></a>Victor Hugo</h2>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://www.instagram.com/victorhugofny/?hl=pt" target="_blank">
        <h2>Instagram:</h2>
        <img src="../assets/instagram-icone-icon-1.png"></a>@victorhugofny</h2>
    </div>


    <div class = 'Especifico'>
        <h2><a href= "https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw" target="_blank">
        <h2>Youtube:</h2>
        <img src="../assets/youtube.png"></a>HugoFUNNY</h2>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://steamcommunity.com/id/HugoFUNNY/" target="_blank">
        <h2>Steam:</h2>
        <img src="../assets/Steam_Logo.png"></a>HugoFUNNY</h2>
    </div>

    <div class = 'Especifico'>
        <h2><a href= "https://discord.gg/fHQCYYA" target="_blank">
        <h2>Discord:</h2>
        <img src="../assets/discord.png"></a>victorhugofny</h2>
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
    border: turquoise 1px solid;
    padding: 20px;
    margin-bottom: 16px;
    width: 50%;
    border-radius: 20px
}
.Contacts{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>