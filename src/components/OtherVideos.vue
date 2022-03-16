<template>
<div> 

    <div class="trabalhos"> 
        <br>
        <h2>CodeCast - Desenvolvimento de software, O Mítico Homem-Mês (Engenharia de Software)</h2> <br>
        <p>Um episodio de PODCAST desenvolvido junto com outros colegas na faculdade</p> 
        <br>
        <a> Publicado em 23 de julho de 2021</a><br>
        <br>
        
        <figure>
            <div class="boxVideo">
                <iframe width="350" height="180" src="https://www.youtube.com/embed/1LFAFQxgNwk" frameborder="0" allowfullscreen></iframe> 
            </div>
        </figure>
        <br><br>
    </div>

</div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
h2{
    color: white;
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