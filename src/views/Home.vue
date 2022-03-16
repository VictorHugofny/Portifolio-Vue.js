<template>
<div class="home">
  <About/>
  <Projects/>
  <Scholar/>
  <Footer/>
</div>

</template>

<script>
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'
import Scholar from '@/components/Scholar.vue'

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Footer,
    Scholar
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


</style>>

