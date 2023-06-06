<template>
  <div id="app">
    <SunlightDataPage />
  </div>
</template>

<script>
import SunlightDataPage from './components/SunlightDataPage.vue'

export default {
  name: 'App',
  components: {
    SunlightDataPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
