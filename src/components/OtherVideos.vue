<template>
<div> 

<figure>
    <div class="boxVideo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DEkCnltgkK0" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/KsPCbEC77z8" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/4nMVH687Ejg" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/dH2ZD4ddTCU" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

</div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}

figure { 
    width: 60%; 
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