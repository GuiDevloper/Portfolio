<template>
  <section class="all">
    <Loading :loaded="Loaded" />
    <section class="row r1">
      <Projects
        :show="show"
        :projeto="projeto"
        :options="options"
        :options1="options1"
        @addLoad="addLoad"
        @openWorks="openWorks"
        @openProject="openProject"
        @resetFocus="focus = false"
      />
      <section class="column c1" :class="{ blurred: show.projects > -1 }">
        <h1 class="type">Design está em tudo</h1>
        <div class="neon n1"></div>
        <Shapes/>
      </section>
      <Menu
        :focus="focus"
        @openWorks="openWorks"
        @focused="focus = true"
      />
      <div class="column c2">
        <Backgrounds/>
        <Imgs
          :projeto="projeto"
          :show="show"
          @addLoad="addLoad"
        />
        <div
          class="colr"
          :class="{ direitado: show.img[0] > -1 && projeto.id != 3 }"
        >
          <Codes ref="codes" />
          <div class="neon"></div>
          <div class="neon n2">
            <img
              class="Dev-center"
              src="../assets/img/GuiDevloper.png"
              @load="addLoad"
              alt="GuiDevloper desenhado"
              title="GuiDevloper desenhado"
              height="90%"
              width="210px"
            >
          </div>
          <h1 class="type tw">Código também</h1>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Shapes from "@/components/Shapes.vue";
import Projects from '@/components/Projects';
import Menu from '@/components/Menu';
import Backgrounds from '@/components/Backgrounds';
import Imgs from '@/components/Imgs';
import Codes from '@/components/Codes';
import data from "../assets/data.js";

export default {
  name: "Hello",
  components: {
    Loading,
    Shapes,
    Projects,
    Menu,
    Backgrounds,
    Imgs,
    Codes
  },
  data: function() {
    return {
      show: {
        projects: -1,
        project: false,
        img: [-1, -1]
      },
      projeto: {
        titulo: "Projetos",
        subTitulo: "",
        descriptions: data.descriptions,
        imgs: data.imgs,
        id: -1
      },
      options1: data.options1,
      options: [],
      Loaded: [false, 0],
      focus: false
    };
  },
  created() {
    this.options = this.options1[0];
  },
  methods: {
    openWorks(key) {
      const codes = this.$refs.codes;
      codes.pause();
      let sh = this.show;
      if (
        sh.projects > -1 &&
        key != null &&
        sh.projects !== key
      ) {
        setTimeout(() => {
          this.openWorks(key);
        }, 500);
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
        codes.resume();
      }, 200);
    },
    openProject(key) {
      const codes = this.$refs.codes;
      codes.pause();
      const sh = this.show.projects;
      const project = this.options1[0][sh][key];
      // inverte showProj
      this.show.project = project.noProject ? false : !this.show.project;
      this.show.img = [-1, -1];
      if (this.show.project) {
        this.projeto.subTitulo = this.projeto.descriptions[sh][key];
        this.projeto.titulo = this.options[key].title;
        setTimeout(() => {
          this.options = Array.from(this.options1[1]);
          if (project.noOnline) {
            this.options.pop();
          }
          if (project.noGit) {
            this.options.splice(1, 2);
          }
          this.projeto.id = key;
          this.show.img = [project.noImg ? -1 : key, sh];
          if (project.noImg){
            codes.resume();
          }
        }, 100);
      } else {
        this.restart(sh);
        codes.resume();
      }
    },
    restart(key) {
      let titulos = ['Projetos', 'Multimidia', 'Outros', 'Currículo'];
      this.projeto.subTitulo = "";
      this.projeto.titulo = titulos[key || 0];
      this.options = this.options1[0][key || 0];
      // Esconde imagens
      this.show.img = [-1, -1];
      this.projeto.id = -1;
    },
    addLoad() {
      // Acrescenta e testa se todas imgs carregaram
      this.Loaded[0] = ++this.Loaded[1] > 23;
      if (this.Loaded[0]) {
        const codes = this.$refs.codes;
        codes.timer.T = codes.startCodes;
        codes.resume(1, 5000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/CSS/variables";

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
  .colr {
    transition: all 400ms;
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
  font-family: "Special Elite", Raleway, sans-serif;
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

.blurred {
  filter: blur(1px);
}
.direitado {
  margin-left: 110vw !important;
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
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.1),
      inset 7px 7px 20px rgba(0, 0, 0, 0.1);
  }
  &.n2 {
    filter: none;
    overflow: hidden;
    background: rgba(18, 22, 27, 0.6);
  }
}

.Dev-center {
  height: 90%;
  width: auto;
  margin-top: 50px;
  z-index: -1;
  position: relative;
}

@import "../assets/CSS/breakpoints";

// for tablet landscaped style
@include for-tablet-landscape {
  .neon {
    width: 25%;
    &.n1 {
      margin-top: 70px;
      margin-left: 8%;
    }
  }
}

// for tablet styles
@include for-tablet-portrait {
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
  .Dev-center {
    margin-top: 30px;
    margin-left: -10px;
  }
  .type {
    font-size: 1.5rem;
    &.tw {
      margin: 400px 0 0 5%;
    }
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
  body {
    width: 100vw;
    overflow-x: hidden;
  }
}
</style>
