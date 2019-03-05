<template>
  <div class="image">
    <svg xmlns="http://www.w3.org/2000/svg" class="i1" viewBox="0 0 144 149"><title>Triangulo amarelo</title><path d="M110 10l27 132-127-41 100-91m3-10l-7 6L6 97l-6 6 8 3 128 41 8 2-2-8-9-46-18-86-2-9z" class="cls-1"/><path d="M110 10l28 132-128-41z" class="cls-2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i2" viewBox="0 0 33 115"><title>Traço verde</title><path d="M10 111c-4-10-5-20-3-30a37 37 0 0 1 6-14l10-11c13-15 13-36 6-54-2-4-8-2-6 2 4 9 6 20 4 31a37 37 0 0 1-7 15l-9 10C-2 75-2 95 4 113c1 3 7 2 6-2z" class="cls-1"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i3" viewBox="0 -20 228 235"><title>Triangulo azul</title><path d="M27 10l91 77L6 128 27 10M24 0l-2 9L1 127l-1 8 8-3 89-32 23-8 8-3-7-5-31-27L30 6l-6-6z" class="cls-1"/><path d="M27 9l91 78L6 127 27 9z" class="cls-2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i4" viewBox="0 0 112 112"><title>Circulo vermelho</title><path d="M56 5a51 51 0 1 1-18 3 51 51 0 0 1 18-3m0-5a56 56 0 1 0 31 10A56 56 0 0 0 56 0z" class="cls-1"/><circle cx="56" cy="56" r="51" class="cls-2" transform="rotate(-19 56 56)"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i5" viewBox="0 0 112 112"><title>Quadrado marrom</title><path d="M80 6l26 74-74 26L6 32 80 6m3-6l-5 2L5 28l-5 1 2 5 26 74 1 4 5-1 74-26 4-2-1-5L85 5l-2-5z" class="cls-1"/><path d="M6 32L80 6l26 74-74 26z" class="cls-2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i6" viewBox="0 0 66 99"><title>Traço azul</title><path d="M65 93c-9-5-18-12-23-21a37 37 0 0 1-5-15V42C36 23 22 8 5 0 1-1-2 4 2 5c9 5 17 11 23 20s6 18 6 28c0 20 14 36 31 45 3 2 6-3 3-5z" class="cls-1"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i7" viewBox="0 -20 228 235"><title>Triangulo verde</title><path d="M27 10l91 77L6 128 27 10M24 0l-2 9L4 111l-3 16-1 8 8-3 112-40 8-3-7-5-74-64L30 6l-6-6z" class="cls-1"/><path d="M27 10l91 77L6 128 27 10z" class="cls-2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i8" viewBox="0 -20 200 150"><title>Quadrado azul</title><path d="M34 6l84 28-28 84L6 90 34 6m-3-6l-2 5L2 89l-2 4 5 2 84 27 4 2 2-5 27-84 2-4-5-2L35 2l-4-2z" class="cls-1"/><path d="M6 90L34 6l84 28-28 83z" class="cls-2"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i9" viewBox="0 0 112 112"><title>Circulo vermelho e amarelo</title><path d="M56 5a51 51 0 1 1-18 3 51 51 0 0 1 18-3m0-5a56 56 0 1 0 31 10A56 56 0 0 0 56 0z" class="cls-1"/><circle cx="56" cy="56" r="51" class="cls-2" transform="rotate(-19 56 56)"/><circle cx="56" cy="56" r="51" class="cls-3" transform="rotate(-19 56 56)"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="i10" viewBox="0 0 93 96"><title>Traço vermelho</title><path d="M6 94c3-11 8-22 17-30a42 42 0 0 1 14-9l16-4c22-6 35-26 40-47 0-4-5-6-6-2-3 12-7 23-16 31-8 9-18 12-30 14C19 52 5 72 0 93c-1 3 5 5 6 1z" class="cls-1"/></svg>
  </div>
</template>

<script>
export default {
  name: 'shapes'
}
</script>

<style scoped lang="scss">
$darken: #405165;
.image {
  z-index: -3;
  text-align: justify;
  svg {
    height: 10%;
    position: absolute;
    filter: drop-shadow(5px 5px 4px rgba(57, 60, 62, 0.5));
  }
  .cls-2,
  .cls-3 {
    transform: scale(1.02) translate(-1px, -1px);
  }
  .cls-1 {
    fill: $darken;
  }
  .i1 {
    margin: 2vw 0 0 2vw;
    .cls-2 {
      fill: #c5a76f;
    }
  }
  .i2 {
    margin: 13vh 0 0 20%;
    height: 5%;
    .cls-1 {
      fill: #76a880;
    }
  }
  .i3 {
    margin: 6vh 0 0 35%;
    height: 8%;
    .cls-2 {
      fill: #54769b;
    }
  }
  .i4 {
    margin: 40vh 0 0 4%;
    height: 6%;
    .cls-2 {
      fill: #c35b53;
    }
  }
  .i5 {
    margin: 40vh 0 0 25%;
    .cls-2 {
      fill: #654344;
    }
  }
  .i6 {
    margin: 45vh 0 0 40%;
    height: 6%;
    .cls-1 {
      fill: #54769b;
    }
  }
  .i7 {
    margin: 65vh 0 0 5%;
    height: 10%;
    .cls-2 {
      fill: #76a880;
    }
  }
  .i8 {
    margin: 65vh 0 0 25%;
    height: 8%;
    .cls-2 {
      fill: #54769b;
    }
  }
  .i9 {
    margin: 76vh 0 0 40%;
    height: 7%;
    .cls-2 {
      fill: #c5a76f;
    }
    .cls-3 {
      fill: #76a880;
    }
  }
  .i10 {
    margin: 85vh 0 0 10%;
    height: 7%;
    .cls-1 {
      fill: #c35b53;
    }
  }
}

@import '../assets/CSS/breakpoints';

@include for-phone-tablet {
  .image {
    .i2 {margin: 100px 0 0 45%;}
    .i3 {margin: 20px 0 0 80%;}
    .i4 {margin: 190px 0 0 5%;}
    .i5 {margin: 250px 0 0 35%;}
    .i6 {margin: 150px 0 0 85%;}
    .i7 {margin: 350px 0 0 5%;}
    .i8 {margin: 420px 0 0 45%;}
    .i9 {margin: 340px 0 0 85%;}
    .i10 {margin: 500px 0 0 10%;}
  }
}
</style>
