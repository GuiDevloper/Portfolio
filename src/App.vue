<template>
  <div id="app">
    <router-view/>
    <contact/>
  </div>
</template>

<script>
import contact from "@/components/Contact.vue";

export default {
  components: {
    contact
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: gray;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 3px;
}
</style>
