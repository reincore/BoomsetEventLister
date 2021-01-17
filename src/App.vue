<template>
  <div id="app">
    <img class="main-logo" alt="Boomset logo" src="./assets/Boomset Logo.png" @click="goEventDetail">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goEventDetail() {
      this.$router.push("/").catch(()=>{});
    } 
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .main-logo{
      cursor: pointer;  
    }
  }
</style>
