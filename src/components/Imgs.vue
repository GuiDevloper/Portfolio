<template>
  <div class="contents">
    <div v-for="(pjsImgs, pjsId) of projeto.imgs" :key="pjsId">
      <div v-for="(pjImgs, pjId) of pjsImgs" :key="pjId">
        <img
          v-for="(img, j) of pjImgs.imgs"
          :key="`${pjsId}${pjId}${j}`"
          :class="[`img-pro${j + 1}`, {
            direitado: pjImgs.notShown || toBool([pjsId, pjId]),
            poster: pjImgs.poster,
            readyShadow: pjImgs.readyShadow,
          }]"
          :src="img"
          @load="addLoad"
          :alt="pjImgs.alt"
          :title="pjImgs.alt"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Imgs',
  props: ['projeto', 'show'],
  methods: {
    addLoad() {
      this.$emit('addLoad');
    },
    toBool(id) {
      let sh = this.show;
      if (sh.projects === id[0] && this.projeto.id === id[1]) {
        return false;
      }
      return true;
    },
  }
}
</script>

<style scoped lang="scss">
.img-pro1,
.img-pro2 {
  width: 40%;
  z-index: 8;
  position: absolute;
  left: 0;
  margin: 5% 0 0 7%;
  border-radius: 10px;
  max-width: 540px;
  transition: all 400ms;
  box-shadow: 0px 0px 20px 1px rgba(14, 14, 14, 0.6);
}
.img-pro2 {
  margin-top: 31%;
}
.poster {
  max-width: 480px;
}
.readyShadow {
  box-shadow: unset;
}
.contents {
  display: contents;
}
.direitado {
  margin-left: 110vw !important;
}

@import "../assets/CSS/breakpoints";

@include for-greater-desktop {
  .img-pro2 {
    margin-top: 430px;
    margin-top: calc(420px + 2%);
  }
}

@include for-phone-tablet {
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
  .poster {
    max-width: 290px;
    margin-left: 10vw;
  }
}

@include for-phone {
  .img-pro2 {
    margin-top: 250px;
    margin-left: 10%;
  }
}
</style>