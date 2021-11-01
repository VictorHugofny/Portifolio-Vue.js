<template>
<ProjectMore/>
</template>

<script>
import ProjectMore from '@/components/ProjectMore.vue'
export default {
  components:{
    ProjectMore
  }
}
</script>


<style>





.Projetos .card{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.507), rgba(0, 0, 0, 0.651)),
  url(../assets/wallpaper2.png);
  padding: 8px ;
  padding-top: 15px;
  padding-bottom: 15px;
  border: rgb(8, 0, 83) 5px solid;
  border-radius: 16px;
}


.Projetos .card-rpgvue{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.726), rgba(0, 0, 0, 0.705)),
  url(../assets/RPGVUE.jpg);
}

.Projetos .card-pokedex{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.726), rgba(0, 0, 0, 0.705)),
  url(../assets/pokedex.jpg);
}
.Projetos .card-clones{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.726), rgba(0, 0, 0, 0.705)),
  url(../assets/CLONES.jpg);
}

.Projetos .card-rpgjs{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.726), rgba(0, 0, 0, 0.705)),
  url(../assets/rpg.jpeg);
}

.Projetos .card-tela{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.726), rgba(0, 0, 0, 0.705)),
  url(../assets/telazul.jpg);
}
.Projetos .card-perguntas{
  background-image: linear-gradient(to bottom, rgba(0, 12, 10, 0.801), rgba(0, 0, 0, 0.795)),
  url(../assets/wallpaper.jpg);
}

.Projetos{
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;
}
.Projetos p{
  color: aliceblue;
  background: rgba(30, 98, 243, 0.548);
  width: 100%;
}

.Projetos a{
  color: aliceblue;
  background: rgba(2, 75, 109, 0.692);
}

.Projetos a{
  color: aliceblue;
  background: rgb(2, 75, 109);
}

.Projetos t{
  color: rgb(255, 255, 255);
}
.texto{
  color: black;
  font-size: 24px;
}
</style>