<template>
  <div id="app">
    <router-view/>
    <contact/>
    <footer>
      <p>Construído com amor por GuiDevloper</p>
    </footer>
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
div, footer {
  border-radius: 3px;
}
i, p, span {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: 'liga';
  -moz-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
}
#app {
  min-height: 100vh;
  background-color: gray;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  width: 100%;
  background-color: #3E2723;
  color: white;
  margin: 1vh 0;
  float: left;
  p {
    text-align: center;
    margin: 0;
    padding: 1%;
  }
}
</style>
