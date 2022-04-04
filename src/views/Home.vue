<template>
<div class="home">
  <About/>
  <Footer/>
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
  margin-top: 60px;
  margin-bottom: 20px;
}


</style>>

