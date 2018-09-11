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
};
</script>

<style lang="scss">
body {
  background: #001727;
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden auto;
  border-radius: 5px;
}
i,
p,
span {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
}
p {
  margin: 0;
}
#app {
  min-height: 100vh;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
a {
  color: #ffeb3b;
}
footer {
  width: 100%;
  float: left;
  p {
    text-align: center;
    width: fit-content;
    background: linear-gradient(to bottom, transparent 62%, #973333 0);
    margin: auto;
  }
}
</style>
