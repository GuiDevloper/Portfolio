<template>
  <main id="app">
    <div class="bg-r">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1409 2749">
        <path
          d="M110 10c-1-1-10 22-19 47a1336 1336 0 0 0-52 168 648 648 0 0 0-9 366c14 59 27 80 44 128 32 93 38 169 43 243 7 94 12 167-11 260-19 77-45 114-62 220-3 23-9 59-10 105-4 229 91 267 77 527-6 117-30 127-37 246-4 63 12 218 64 422l1264-3-3-2731-1289 2z"
          class="cls-2">
        </path>
        <path
          d="M104 4a1600 1600 0 0 0-21 52l-21 58c-17 53-31 107-43 161a642 642 0 0 0 36 416 741 741 0 0 1 43 159c8 50 11 102 14 153 4 55 6 112-3 167-7 45-21 89-36 132s-28 87-35 133c-14 88-16 177 3 265 15 68 41 133 54 202 16 91 15 188-6 278-16 69-26 136-21 207 6 91 23 181 42 270l21 87a8 8 0 0 0 7 5l986-2 278-1a8 8 0 0 0 7-7v-617l-1-703-1-668V83 11 7a8 8 0 0 0-8-7h-128L964 1 592 2H112c-1 0-4 0 0 0-10-2-14 13-4 15 11 2 24 0 36 0h401l372-1 323-1h157a10 10 0 0 1 2 0l-7-7v670l1 654 1 705v702l8-8-986 2-278 1 7 6c-25-100-46-202-57-305-8-70-9-139 6-209 7-35 17-70 21-106a795 795 0 0 0 3-156c-6-72-27-141-47-210a680 680 0 0 1-2-390c10-38 25-75 37-113a582 582 0 0 0 24-154c2-53-3-107-7-160-4-49-9-98-20-146-12-49-30-94-47-140-34-90-48-189-38-284 6-54 20-108 33-160A1344 1344 0 0 1 93 70l12-30a1154 1154 0 0 1 10-25c6-7-4-18-11-11z"
          class="cls-2">
        </path>
      </svg>
    </div>
    <router-view/>
    <contact/>
    <footer>
      <p class="p1">Construído com</p>
      <i class="material-icons p2" alt="café">local_cafe</i>
      <p alt="e">&&</p>
      <i class="material-icons p2 i2" alt="amor">favorite</i>
      <p class="p3">por GuiDevloper</p>
    </footer>
  </main>
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
@import "./assets/CSS/variables";

body {
  background: $white;
  margin: 0;
}
* {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
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
p,
figure {
  margin: 0;
}
input,
textarea,
legend,
a {
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
}
.lik {
  color: $white;
  &:hover {
    color: $black;
  }
}
#app {
  min-height: 100vh;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  font-weight: normal;
}
footer {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    //background: linear-gradient(to bottom, transparent 62%, #973333 0);
    z-index: 999;
    font-size: large;
    font-weight: 600;
    color: #d84315;
  }
  .p1 {
    color: $black;
    border-radius: 0 5px;
    background: $white;
    margin-left: 25px;
  }
  .p2 {
    color: #5d4037;
    border-radius: 0;
    z-index: 1;
    margin: 0 15px;
    font-size: 2.3rem;
  }
  .i2 {
    color: #f44336;
  }
  .p3 {
    border-radius: 5px 0;
    background: $black;
    color: $white;
  }
}
// back
.bg-l,
.bg-r {
  min-height: 1158px;
  height: auto;
  position: absolute;
  z-index: -10;
  margin-top: -2px;
  margin-bottom: -5px;
  width: 60%;
  overflow: hidden;
  img,
  svg {
    min-height: 1158px;
    height: 138vh;
    flex: 1 auto;
  }
}
.bg-r {
  margin-left: 47vw;
  background: linear-gradient(to left, $black 70%, transparent 50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  svg {
    .cls-2 {
      fill: $black;
    }
  }
}
@supports (-ms-ime-align:auto) {
  .bg-l,
  .bg-r {
    img,
    svg {
      flex: 1 1%;
    }
  }
}
.postText .material-icons {
  vertical-align: middle;
}

@import "./assets/CSS/breakpoints";

@include for-phone {
  #app {
    font-size: 16px;
  }
}

@include for-phone-tablet {
  footer {
    p {
      font-size: 0.6rem;
    }
    .p1 {
      color: $white;
      background: $black;
      margin-left: 0;
    }
    .p2 {
      margin: 0 1%;
      font-size: 1.7rem;
    }
  }
  .bg-r {
    display: none;
  }
}
</style>
