<template>
  <div id="app">
    <div class="bg-l">
      <img src="./assets/SVG/back-left.svg">
    </div>
    <div class="bg-r">
      <img src="./assets/SVG/back-right.svg">
    </div>
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
  background: #171717;
  margin: 0;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #3d7bff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #171717;
  }
}
.bg-l,
.bg-r {
  height: auto;
  position: absolute;
  z-index: -5;
  margin-top: -2px;
  margin-bottom: -5px;
  width: 65%;
  img {
    height: 142vh;
  }
}
.bg-l {
  background: linear-gradient(to right, #e5e5e5 50%, transparent 50%);
}
.bg-r {
  z-index: 1;
  margin-left: 40%;
  background: linear-gradient(to left, #171717 50%, transparent 50%);
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
  background: #761f1f;
  padding: 0 1px;
}
footer {
  width: 100%;
  float: left;
  z-index: 3;
  p {
    text-align: center;
    width: fit-content;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 62%, #973333 0);
    margin: auto;
  }
}
@media (max-width: 767px) {
  #app {
    font-size: 16px;
  }
}
</style>
