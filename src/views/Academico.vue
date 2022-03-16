<template>
<div>
<Scholar/>
<OtherVideos v-show ='MaisVideos'/>
<button @click='BtnMaisVideos'><p class="btntext"> Mais Conteudo </p></button>
<a target="_blank" href="https://www.youtube.com/channel/UCmplSMpzK73aHzJQeR45gOQ/"><button> <p class="btntext"> Canal do Youtube </p></button></a>
</div>
</template>

<script>
import Scholar from '@/components/Scholar.vue'
import OtherVideos from '@/components/OtherVideos.vue'

export default {
    components:{
        Scholar,
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

<style>
.btntext{
    color: white;
    font-size: 20px;
    font-weight: bold;
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

button{
    margin-bottom: 20px;
}
</style>