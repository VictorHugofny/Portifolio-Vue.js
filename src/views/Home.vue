<template>
<div class="home">
  <Contacts/>
  <About/>
  <Projects/>
  <Footer/>
</div>

</template>

<script>
import Contacts from '@/components/Contacts.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Contacts,
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
.foto{
  border-radius: 100px;
}

</style>>

