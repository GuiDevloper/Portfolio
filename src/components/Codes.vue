<template>
  <section class="codes">
    <div
      v-for="(code, i) of codes.text"
      :key="code[0][0]"
      :class="{ up: i == 0 ? codes.upMargin : false }"
    >
      <p
        v-for="c of code"
        :key="c[0]"
        :class="[{ cd: i < 5 }, c[0]]"
        v-text="c[1]"
      >
      </p>
    </div>
  </section>
</template>

<script>
import data from '../assets/data.js';

export default {
  name: 'Codes',
  data: function() {
    return {
      codes: {
        text: data.codes,
        upMargin: false
      },
      timer: {
        timerId: 0,
        start: 0,
        T: null,
        remain: 0,
        delay: 0
      },
    }
  },
  methods: {
    startCodes() {
      let tis = this;
      tis.codes.upMargin = true;
      tis.timer.T = () => {
        tis.codes.upMargin = false;
        tis.timer.T = () => {
          const last = tis.codes.text.shift();
          tis.codes.text.push(last);
          tis.startCodes();
        }
        tis.resume(1, 1000);
      }
      tis.resume(1, 4000);
    },
    pause() {
      let ti = this.timer;
      const rest = Date.now() - ti.start;
      if ( ti.remain !== (ti.remain - rest) ) {
        ti.remain = ti.delay - rest;
      }
      clearTimeout(ti.timerId);
    },
    resume(i = 0, delay) {
      let ti = this.timer;
      ti.delay = delay || ti.delay;
      ti.remain = i === 0 ? ti.remain : ti.delay;
      ti.start = Date.now();
      clearTimeout(ti.timerId);
      ti.timerId = setTimeout(ti.T, ti.remain);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/CSS/variables";

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

@import "../assets/CSS/breakpoints";

@include for-tablet-landscape {
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

@include for-phone-tablet {
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
}
</style>