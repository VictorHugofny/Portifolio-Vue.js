<template>
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
</template>   

<style scoped>
.grid-container img{
  width: 30px;
}

.grid-container{
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: #292930;
}

#rodape > div{
  padding: 0px;
  width: 20%;
}

#rodape > div:hover{
  background-color: rgba(0, 247, 255, 0.075);
}
</style>
