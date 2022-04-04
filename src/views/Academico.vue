<template class = "academico">
<div>
<Scholar/>
<a target="_blank" href="https://www.youtube.com/channel/UCmplSMpzK73aHzJQeR45gOQ/"><button> <p class="btntext"> Youtube </p></button></a>
</div>
</template>

<script>
import Scholar from '@/components/Scholar.vue'

export default {
    components:{
        Scholar,
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
    padding: 0px;
    padding-left: 70px;
    margin-bottom: 30px;
    padding-right: 70px;
    border: none;
    border-radius: 10px;
    background-color: rgb(246, 41, 41);
}

</style>