<template>
<div> 
    <br>
    <h1 class="subtitle is-2">Editor AudioVisual</h1>
    <h1 class="subtitle is-4">Faço edições de video, como lyrics e videoclipes</h1> <br>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/giQ1v-6gx6E" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<p class="title is-5 is-spaced">Exemplo de Lyric Video encomendados.</p>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/FOywmYKloVs" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<p class="title is-5 is-spaced">Exemplo de Videoclipes encomendados.</p>

<figure>
    <div class="boxVideo">
        <iframe width="330" height="180" src="https://www.youtube.com/embed/0Xy-ezOBvxE" frameborder="0" allowfullscreen></iframe> 
    </div>
</figure>

<button class="button is-link" @click='BtnMaisVideos'>Mais videos</button>

<br>
<OtherVideos v-show ='MaisVideos'/>


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
</style>