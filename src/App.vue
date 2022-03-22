<template>
  <div id="app">
    <HeaderProj/>
  </div>
</template>

<script>
import HeaderProj from './components/HeaderProj.vue'

export default {
  name: 'App',
  components: {
    HeaderProj
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>