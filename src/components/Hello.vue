<template>
  <section class="all">
    <loading :loaded="Loaded"/>
    <section class="row r1">
      <article class="post c-1o3 m-1o1"
        :class="{ mostrado: show.projects > -1 }">
        <figure class="blur">
          <img src="../assets/img/shapes.jpg" height="100%"
            alt="Círculos e triangulos coloridos desenhados">
          <figcaption>Versatilidade do Design</figcaption>
        </figure>
        <section class="text">
          <h1 class="close" @click="openWorks(null)">X</h1>
          <p class="author">
            {{ projeto.titulo }}
          </p>
          <p class="postText" v-html="projeto.subTitulo">
          </p>
          <div class="btns" :class="{ list: !show.project }">
            <a v-for="(op, i) of options" :key="i"
              @click="op.indexOf('Ver') === 0 ?'': openProject(i)"
              v-html="op" target="_blank"
              :style="bgIsShow(i)"
              :href="parse(i)">a</a>
          </div>
        </section>
      </article>
      <section class="column c1" :class="{ borrado: show.projects > -1 }">
        <h1 class="type">Design está em tudo</h1>
        <div class="neon n1"></div>
        <shapes></shapes>
      </section>
      <nav class="nav-menu">
        <ul class="menu">
          <li @click="openWorks(0)">
            <i class="material-icons">code</i>
            <p>Code</p>
          </li>
          <li @click="openWorks(1)">
            <i class="material-icons">local_cafe</i>
            <p>Media</p>
          </li>
          <li @click="openWorks(2)">
            <i class="material-icons">local_cafe</i>
            <p>Outros</p>
          </li>
        </ul>
        <section class="logo-center">
          <logo width="60%"></logo>
          <h1 class="t-menu">Menu</h1>
        </section>
      </nav>
      <div class="column c2">
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
        <div class="bg-l">
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
        <div class="bg-r bg2">
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
        <img v-for="(img, i) of projeto.imgs[show.projects < 0 ? 0 : show.projects]"
          :key="i" :class="['img-pro' + img[0], { direitado: toBool(i) }]"
          :src="img[1]" @load="addLoad">
        <div id="colr" :class="{ direitado: show.project }">
          <section class="codes">
            <div v-for="(code, i) of codes.text" :key="code[0][0]"
              :class="{ up: i == 0 ? codes.upMargin : false }">
              <p v-for="c of code" :key="c[0]"
                :class="[{ cd: i < 5 }, c[0]]"
                v-text="c[1]">
              </p>
            </div>
          </section>
          <div class="neon"></div>
          <div class="neon n2">
            <img class="Dev-center" src="../assets/img/GuiDevloper.png" @load="addLoad">
            <title>GuiDevloper desenhado</title>
          </div>
          <h1 class="type tw">Código também</h1>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import loading from "@/components/Loading.vue";
import shapes from "@/components/Shapes.vue";
import logo from "@/components/Logo.vue";
import data from "../assets/data.js";

export default {
  name: "Hello",
  components: {
    loading,
    shapes,
    logo
  },
  data: function() {
    return {
      show: {
        projects: -1,
        project: false,
        img: -1
      },
      projeto: {
        titulo: "Projetos",
        subTitulo: "",
        descriptions: data.descriptions,
        imgs: data.imgs
      },
      codes: {
        text: data.codes,
        upMargin: false
      },
      options1: data.options1,
      options: [],
      Loaded: [false, 0]
    };
  },
  created() {
    this.options = this.options1[0];
    /*for (let [i, proj] of this.projeto.imgs.entries()) {
      for (let [j, img] of proj.entries()) {
        this.projeto.imgs[i][j] = this.bring(img[1]);
      }
    }
    console.log(this.projeto.imgs);*/
  },
  methods: {
    openWorks(key) {
      let sh = this.show;
      if (sh.projects > -1 && key != null && sh.projects !== key) {
        setTimeout(() => { this.openWorks(key) }, 500)
      }
      // inverte showDesc
      sh.projects = sh.projects > -1 ? -1 : key;
      sh.project = false;
      this.show = sh;
      setTimeout(() => {
        this.restart(key);
        if (key !== null) {
          this.options = this.options1[0][key];
        }
      }, 200);
    },
    openProject(key) {
      // inverte showProj
      this.show.project = !this.show.project;
      const sh = this.show.projects;
      if (this.show.project) {
        // troca subT pela desc
        this.projeto.subTitulo = this.projeto.descriptions[sh][key];
        // troca title
        this.projeto.titulo = this.options[key];
        setTimeout(() => {
          // troca options pela especifica
          this.options = this.options1[1][0];
        }, 100);
        this.show.img = key;
      } else {
        this.restart(sh);
      }
    },
    restart(key) {
      let titulos = ['Projetos', 'Multimidia', 'Outros'];
      this.projeto.subTitulo = "";
      this.projeto.titulo = titulos[key || 0];
      this.options = this.options1[0][key || 0];
      // Esconde imagens
      this.show.img = -1;
    },
    // Mescla titulo e url pro git e online
    parse(op, key) {
      const title = this.projeto.titulo;
      const old = title.includes("Sea") ? " " : "The ";
      const url = op[key];
      return Array.isArray(op) ? `${url + title.replace(old, "")}` : null;
    },
    toBool(i) {
      // Sendo par, diminui caso != 0
      i = i % 2 == 0 ? (i == 0 ? 0 : --i) :
      // sendo impar, diminui a divisão arredondada
        i - Math.round(i / 2);
      // retorna booleano armazenado
      return this.show.img !== i;
    },
    addLoad() {
      // Acrescenta e testa se todas imgs carregaram
      this.Loaded[0] = ++this.Loaded[1] > 12;
      if (this.Loaded[0]) if (this.Loaded[0]) setTimeout(this.startCodes, 5000);
    },
    bring(file) {
      return require(`@/assets/img/${file}`);
    },
    startCodes() {
      let tis = this;
      tis.codes.upMargin = true;
      const last = tis.codes.text[0];
      setTimeout(() => {
        tis.codes.text.shift();
        // ao alterar data
        tis.$nextTick(() => {
          tis.codes.text.push(last);
          tis.codes.upMargin = false;
          setTimeout(tis.startCodes, 3500);
        }, 500);
      }, 1000);
    },
    bgIsShow(id) {
      const sh = this.show;
      const pj = sh.project, pjs = sh.projects;
      const opt = [[4, 5, 6], [1, 2]];
      const vals = [[3.5, 4.5, 5], [0.5, 1]];
      if (pjs >= 0 && pjs < 2) {
        for (let i = 0; i < opt[pjs].length; i++) {
          if (id == opt[pjs][i]) {
            id = vals[pjs][i];
            break;
          }
        }
      }
      return !pj ? {
        backgroundImage: `url(${
          (this.projeto.imgs[pjs < 0 ? 0 : pjs][ id * 2 ] || '')[1]
        })`
      } : '';
    }
  }
};
</script>

<style scoped lang="scss">
$black: #20272f;
$white: #e5e5e5;
$darken: #405165;
.all {
  min-height: 99vh;
  height: 790px;
}

.row {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 810px;
}
.r1 {
  .c1 {
    z-index: 1;
  }
  .c2 {
    overflow: hidden;
    margin-left: 50%;
  }
  .c2,
  #colr,
  .img-pro1,
  .img-pro2 {
    transition: all 400ms;
  }
}

.post {
  height: 620px;
  margin: 60px 10%;
  position: absolute;
  padding-right: 0px !important;
  z-index: 5;
  transition: all 700ms;
  margin-left: -100vw;
  .blur {
    position: absolute;
    height: 95%;
    width: 94%;
    overflow: hidden;
    background: $white;
    img {
      filter: blur(6px);
      opacity: 0.95;
    }
  }
  p {
    padding: 20px;
  }
  .text {
    position: relative;
    background: rgba(250, 250, 250, 0.4);
    box-shadow: 10px 10px 20px rgba(32, 39, 47, 0.1);
    color: $black;
    height: 95%;
    width: 94%;
  }
  .close {
    cursor: pointer;
    margin: 2% 3%;
    width: auto;
    font-size: 1.3rem;
    color: #c35b53;
    position: absolute;
  }
  .author {
    font-size: 1.3rem;
    font-weight: 600;
    padding-bottom: 0;
    color: #3b699b;
  }
  .postText {
    text-align: justify;
    line-height: 1.6rem;
    padding: 8%;
    color: #143a61;
    max-height: 70%;
  }
}
.btns {
  height: 60px;
  width: 94%;
  margin: 3%;
  bottom: 0;
  position: absolute;
  display: flex;
  transition: 250ms;
  a {
    color: $white;
    background-color: $black;
    transition: 400ms;
    cursor: pointer;
    border-radius: 0px;
    flex: 1;
    font-weight: 600;
    padding-top: 9px;
    &:hover {
      color: $black;
      background-color: transparent;
    }
  }
  &.list {
    height: 70%;
    top: 50px;
    flex-direction: column;
    p,
    a {
      background: url(/img/TheSea.34953e45.jpg) 0 100px / cover no-repeat
        transparent;
      color: inherit;
      padding: 20px 0;
      min-height: 70px;
      max-height: 70px;
      &:hover {
        color: $white;
        background: center / cover;
        background-blend-mode: lighten;
      }
    }
    /*a:nth-child(1):hover {
      background-image: url('../assets/img/TheSea.jpg');
    }
    a:nth-child(2):hover {
      background-image: url('../assets/img/Inspiration-d.jpg');
    }*/
  }
}

.column {
  float: left;
  min-height: 100vh;
  height: 810px;
  width: 100%;
  position: absolute;
}

.type {
  font-family: "Special Elite", Raleway;
  font-size: 2rem;
  color: $black;
  position: absolute;
  margin: 120px 5%;
  z-index: 5;
  text-shadow: 15px 8px 10px rgba(0, 0, 0, 0.2);
  padding: 0 5% 5% 0;
  &.tw {
    letter-spacing: 1px;
    margin: 730px 0 0 5%;
    margin-top: calc(700px + 5vh);
    color: inherit;
    text-shadow: 15px 8px 10px #171717;
  }
}

.mostrado {
  margin-left: 10% !important;
  margin-right: 0 !important;
}
.borrado {
  filter: blur(1px);
}
.direitado {
  margin-left: 110vw !important;
}
.img-pro1,
.img-pro2 {
  width: 40%;
  z-index: 8;
  position: absolute;
  left: 0;
  margin: 5% 0 0 7%;
  border-radius: 10px;
  max-width: 540px;
  box-shadow: 0px 0px 20px 1px rgba(14, 14, 14, 0.6);
}
.img-pro2 {
  margin-top: 31%;
}

.codes {
  z-index: 1;
  position: absolute;
  height: 200px;
  width: auto;
  margin: 50px 0 0 5%;
  overflow: hidden;
  .up {
    margin-top: -40%;
  }
  .cd {
    background: transparent !important;
  }
  p {
    float: left;
    margin: 0 3px;
    width: auto !important;
    transition: 0.5s;
  }
  div {
    height: 17px;
    margin: 4px 3px;
    float: left;
    font-size: 0.8rem;
    transition: 4s;
    width: 100%;
  }
}
.cd8,
.cd11,
.cd14,
.cd16,
.cd17,
.cd20 {
  margin-left: 30px;
}
$red: #c35b53;
$brown: #654344;
$grey: #91969a;
$blue: #517194;
$green: #73a17b;
$yellow: #c0a36d;
$cd18: #b08169;
$class-colors: ("red", "cd2", "grey", "blue", "green", "yellow", "cd18");
$colors: ($red, $brown, $grey, $blue, $green, $yellow, $cd18);
// percorrendo lists
@each $class in $class-colors {
  // index atual
  $i: index($class-colors, $class);
  // valor
  $color: nth($colors, $i);
  .#{$class} {
    background-color: $color;
    color: $color;
  }
}

$neon-color: "rgba(240, 74, 74";
.neon {
  position: absolute;
  width: 20%;
  height: 450px;
  margin-top: 200px;
  margin-left: 20%;
  border: 4px solid #{$neon-color + ", 1)"};
  box-shadow: 0 0 40px 0px #{$neon-color + ", 0.2)"};
  filter: blur(1px);
  border-radius: 10px;
  z-index: 2;
  &.n1 {
    width: 30%;
    height: 320px;
    margin-top: 70px;
    margin-left: 10%;
    border-radius: 300px;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.1);
  }
  &.n2 {
    filter: none;
    overflow: hidden;
    background: rgba(18, 22, 27, 0.6);
  }
}

.Dev-center {
  height: 130%;
  margin: 50px 0 0 -30px;
  z-index: -1;
  position: relative;
}

.nav-menu {
  margin: 0 47vw;
  z-index: 10;
  width: 120px;
  height: 55vh;
  position: fixed;
  display: flex;
  align-items: flex-end;
  &:hover {
    .menu {
      height: 50vh;
    }
    li {
      height: 7.4vh;
    }
  }
  * {
    overflow: hidden;
    transition: 200ms;
    font-size: 14px;
    font-weight: 600;
    color: $black;
  }
  #item1 {
    margin-bottom: 60px;
  }
  li {
    height: 20px;
    &:last-of-type {
      margin-bottom: 70px;
    }
    li:first-of-type {
      margin: 0;
    }
    &:hover i {
      color: yellow;
    }
  }
}
.logo-center,
.menu {
  z-index: 2;
  cursor: pointer;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.3);
}
.logo-center {
  width: 90px;
  height: 90px;
  margin: 15px 5px;
  border-radius: 100%;
  overflow: hidden;
  background: #e5e5e5;
}
.t-menu {
  color: #c35b53;
  font-family: "Great Vibes";
  margin-top: -10px;
  font-size: 20px;
}
.menu {
  height: 100px;
  width: 100px;
  background: linear-gradient(
    rgba(215, 65, 119, 0.8),
    rgba(255, 233, 138, 0.8)
  );
  position: fixed;
  border-radius: 100px;
  margin-top: -10px;
  transition: 250ms ease-in;
  padding: 0;
  i {
    font-size: 2vh;
    padding: 20px 0 0;
    transition: 200ms;
  }
  div:hover i {
    color: #fff59d;
  }
}

// back
.bg-l,
.bg-r {
  display: none;
  img,
  svg {
    flex: 1;
  }
}
.bg2 {
  margin-top: 310px !important;
}
.bg-l {
  margin-top: 100px;
  z-index: 0;
  margin-left: 200px;
  width: 500px;
  height: 1000px;
  svg * {
    fill: $white;
  }
}

@import "../assets/CSS/breakpoints";

@include for-greater-desktop {
  .img-pro2 {
    margin-top: 430px;
    margin-top: calc(420px + 2%);
  }
}

// for tablet landscaped style
@include for-tablet-landscape {
  .neon {
    width: 25%;
    &.n1 {
      margin-top: 70px;
      margin-left: 8%;
    }
  }
  .code div {
    font-size: 0.7rem;
  }
  .cd8,
  .cd11,
  .cd14,
  .cd16,
  .cd17,
  .cd20 {
    margin-left: 20px;
  }
}

// for tablet styles
@include for-tablet-portrait {
  .t-menu {
    font-size: 18px;
  }
  .type {
    font-size: 4vw;
  }
}

// for phone and tablet styles
@include for-phone-tablet {
  .all {
    height: 960px;
  }
  .r1 {
    .c1 {
      height: 600px;
      position: absolute;
    }
    .c2 {
      margin: 0;
      height: 870px;
      margin-top: 480px;
    }
  }
  .row {
    position: static;
  }
  .column {
    width: 100%;
    position: absolute;
  }
  .neon {
    width: 50%;
    height: 300px;
    margin-top: 130px;
    margin-left: 45%;
    max-width: 200px;
  }
  .nav-menu {
    margin: 0;
    right: 0;
    width: 85px;
    .t-menu {
      font-size: 16px;
    }
    li:last-of-type {
      margin: 0;
    }
    li:first-of-type {
      margin-top: 70px;
    }
  }
  .menu {
    height: 80px;
    width: 80px;
    top: 15px;
  }
  .logo-center {
    height: 70px;
    width: 70px;
    top: -5px;
    position: absolute;
  }
  .post {
    height: 400px;
    width: 85%;
    .blur {
      width: 94%;
    }
  }
  .codes {
    height: 200px;
    margin: 60px 0 0 3%;
    div {
      height: auto;
      margin: 0px;
      font-size: 12px;
    }
    p {
      margin: 3px;
    }
  }
  .cd8,
  .cd11,
  .cd14,
  .cd16,
  .cd17,
  .cd20 {
    margin-left: 10px;
  }
  .img-pro1,
  .img-pro2 {
    width: 85%;
    max-width: 400px;
  }
  .img-pro1 {
    margin-top: 50px;
  }
  .img-pro2 {
    margin-top: 250px;
    margin-left: 30%;
  }
  .type {
    font-size: 1.5rem;
    &.tw {
      margin: 400px 0 0 5%;
    }
  }
  .bg-l,
  .bg-r {
    display: block;
    transform: rotate(90deg);
  }
  .bg-r {
    margin-top: -325px;
    margin-left: 200px;
    width: 500px;
    height: 1000px;
  }
}

// for phone styles
@include for-phone {
  .neon {
    &.n1 {
      width: 50vw;
      height: 50vw;
    }
  }
  .Dev-center {
    height: 120%;
  }
  body {
    width: 100vw;
    overflow-x: hidden;
  }
  .img-pro2 {
    margin-top: 250px;
    margin-left: 10%;
  }
}
</style>
