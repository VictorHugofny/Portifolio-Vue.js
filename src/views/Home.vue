<template>
<div class="home">
  <About/>
  <Footer/>
  <div>
        <img src="../assets/fantasma.gif" width="105px" height="110">
  </div>
</div>

</template>

<script>
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    About,
    Footer
  }
}
</script>

<style scoped>
.Contatos-sobre{
    background: white 3px solid;
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}
.home{
  background: white 3px solid;
}
Footer{
  margin-top: 40px;
  margin-bottom: 0px;
}


</style>>

