<template>
<div class="home">
  <About/>
  <Projects/>
  <Footer/>
</div>

</template>

<script>
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Footer
  }
}
</script>

<style scoped>
.home .footer{
  background: rgb(0, 0, 0);
}
.Contatos-sobre{
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}


</style>>

