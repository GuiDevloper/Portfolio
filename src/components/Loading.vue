<template>
  <section class="loading" :style="back">
    <div class="placa">
      <figure>
        <img
          height="40px"
          width="40px"
          src="../assets/img/logo.png"
          @load="typeWriter('GuiDevloper')"
          class="logo"
        >
      </figure>
      <p class="type" v-text="typed"></p>
      <p class="nameNeon" :style="animNeon">グイデベロッパー</p>
      <svg width="100%">
        <text x="50%" y="60%" class="text-logo" text-archor="middle" :style="animDraw">
          GuiDevloper
        </text>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loaded'],
  data: function() {
    return {
      typed: '',
      pos: 0,
      animNeon: '',
      animDraw: '',
      back: ''
    }
  },
  methods: {
    typeWriter(txtArray) {
      // SE o caractere é menor que o tamanho da frase atual
      if (this.pos < txtArray.length) {
        // Adiciona mais um caractere do texto
        this.typed = txtArray.substr(0, ++this.pos) + "|";
        // Faz callback passando os mesmos dados
        setTimeout(() => {
          this.typeWriter(txtArray);
          // tempo dinamico
        }, this.loaded[1] ? 100 : 150);
      } else {
        this.typed = "";
        // durações dinamicas
        var dur = this.loaded[1] ? [0.7, 0.7, 1400] : [2, 3, 4500];
        // ativa animações
        var anim = [
          "animation-delay:",
          "animation-duration:",
          "animation-play-state: running;"
        ];
        this.animNeon = `${anim[1]} ${dur[0]}s; ${anim[2]}`;
        this.animDraw = `${anim[1]} ${dur[1]}s; ${anim[0]} ${dur[0]}s; ${anim[2]}`;
        // espera fim das animações
        setTimeout(() => {
          if (!this.loaded[0]) {
            // restart
            this.pos = 0;
            this.animNeon = `animation: initial;`;
            this.animDraw = this.animNeon;
            this.typeWriter(txtArray);
          } else {
            // oculta tudo
            this.back = 'opacity: 0;';
            setTimeout(() => {
              this.back += 'display: none;';
            }, 500);
          }
        }, dur[2]);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(22, 24, 37, 0.98);
  position: fixed;
  transition: 500ms ease-in;
}
.placa {
  margin-top: 30vh;
  text-align: center;
}
.text-logo, .placa p {
  stroke: white;
  stroke-width: 2px;
  stroke-dashoffset: 150%;
  stroke-dasharray: 150%;
  fill: transparent;
  font-size: 2.5rem;
  width: 100%;
  position: absolute;
  margin-top: 52px;
  margin-top: 20px;
  font-family: "Special Elite", cursive;
  text-shadow: 0px 0px 5px #cc4e4e;
}
.logo {
  width: auto;
  height: auto;
}
.nameNeon {
  color: #388E3C;
  transform-origin: center;
  font-family: 'Raleway', sans-serif !important;
  text-shadow: 0px 0px 5px #388E3C !important;
  animation-name: vanishIn;
}
.text-logo {
  text-anchor: middle;
  font-family: 'Great Vibes', cursive;
  animation-name: draw;
  font-size: 3.5rem;
}
.text-logo, .nameNeon {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-timing-function: ease-In-Out;
  animation-play-state: paused;
}
@keyframes draw {
  0%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
    stroke-dashoffset: 0;
    text-shadow: 0px 0px 40px red;
    fill: #ef4a4a;
    stroke: transparent;
  }
  80% {
    stroke-dashoffset: 150%;
    fill: transparent;
  }
}
@keyframes vanishIn {
  0%, 100% {
    opacity: 0;
  }
  20% {
    transform: scale(1.2, 1.2);
    filter: blur(10px);
  }
  70% {
    opacity: 1;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

@import '../assets/CSS/breakpoints';

@include for-phone-tablet {
  img {
    width: 120px;
  }
  svg {
    height: 10vh;
  }
  .text-logo, .placa p {
    font-size: 1.7rem;
    margin-top: 30px;
  }
  .nameNeon {
    font-size: 1.3rem
  }
  .text-logo {
    font-size: 2.7rem;
  }
}
</style>
