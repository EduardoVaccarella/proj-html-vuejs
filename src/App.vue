<template>
  <div id="app">
    <HeaderProj/>
    <JumbotronProj/>
    <FounderProj/>
    <CoursesProj/>
    <AmazonSectionProj/>
    <Cards2Proj/>
    <PeopleJumbotron/>
    <StudentsProj/>
    <FooterProj/>
  </div>
</template>

<script>
import HeaderProj from './components/HeaderProj.vue'
import JumbotronProj from './components/JumbotronProj.vue'
import FounderProj from './components/FounderProj.vue'
import CoursesProj from './components/CoursesProj.vue'
import AmazonSectionProj from './components/AmazonSectionProj.vue'
import Cards2Proj from './components/Cards2Proj.vue'
import PeopleJumbotron from './components/PeopleJumbotron.vue'
import StudentsProj from './components/StudentsProj.vue'
import FooterProj from './components/FooterProj.vue'

export default {
  name: 'App',
  components: {
    HeaderProj,
    JumbotronProj,
    FounderProj,
    CoursesProj,
    AmazonSectionProj,
    Cards2Proj,
    PeopleJumbotron,
    StudentsProj,
    FooterProj
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: arial;
}

.container-fluid {
  display: flex;
  justify-content: center;
}

.ms-container {
  width: 888px;
}
</style>