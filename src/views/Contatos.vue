<template>

<div> 
<br><br>
<h1 class="subtitle is-1">Entre em contato</h1>
<h1 class = "texto">Abaixos <strong> formas de contato </strong>, clicando nos links você sera enviando para cada pagina que deseja </h1> 

<Contacts/>

</div>
    
</template>

<script>
import Contacts from '@/components/Contacts.vue'
export default {
    components:{
        Contacts
    }
}
</script>

<style>
.Contatos{
    margin-top: 3%;
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>