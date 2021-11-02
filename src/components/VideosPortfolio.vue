<template>
<div> 
    <br>
    <h1>Editor AudioVisual</h1>
    <h2>Faço edições de video, como lyrics e videoclipes</h2> <br>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/giQ1v-6gx6E" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<p>Exemplo de Lyric Video encomendados.</p>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/FOywmYKloVs" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<p>Exemplo de Videoclipes encomendados.</p>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/0Xy-ezOBvxE" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<OtherVideos v-show ='MaisVideos'/>
<button @click='BtnMaisVideos'><p class="btntext"> Mais videos </p></button>

<br>



</div>
</template>

<script>
import OtherVideos from '@/components/OtherVideos.vue'
export default {
  components:{
    OtherVideos
  },
  data(){
      return{
          MaisVideos: false,
          texto: 'Mais Videos'
      }
  },
  methods:{
      BtnMaisVideos: function(){
          return this.MaisVideos = true
      }
  }
}
</script>



<style scoped>
*{
    padding: 0;
    margin: 0;
}
button{
    margin-bottom: 20px;
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
</style>