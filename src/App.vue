<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Boomset Logo.png">
    <EventDashboard msg="All events:"/>
  </div>
</template>

<script>
import EventDashboard from './components/EventDashboard.vue'

export default {
  name: 'App',
  components: {
    EventDashboard
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
