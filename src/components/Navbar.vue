<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
module.exports = {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 5px;
  left: 0;
  text-align: justify;
  a {
    font-weight: 600;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      background-color: #42b983;
      border-radius: 3px;
    }
  }
}
</style>
