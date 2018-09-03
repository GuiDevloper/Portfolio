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
body {
  &::-webkit-scrollbar {
    width: 4px;
	}
	&::-webkit-scrollbar-thumb {
    background: #3d7bff;
		border-radius: 10px;
	}
	&::-webkit-scrollbar-track {
    background-color: #0a1c76;
	}
}
* {
  overflow-x: hidden;
}
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
