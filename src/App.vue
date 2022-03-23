<template>
  <div id="app">
    <HeaderProj/>
    <JumbotronProj/>
  </div>
</template>

<script>
import HeaderProj from './components/HeaderProj.vue'
import JumbotronProj from './components/JumbotronProj.vue'

export default {
  name: 'App',
  components: {
    HeaderProj,
    JumbotronProj
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