<template>
  <article class="post" :class="{ mostrado: show.projects > -1 }">
    <figure class="blur">
      <img
        src="/img/shapes.530c8e2f.jpg"
        height="100%"
        width="100%"
        alt="Círculos e triangulos coloridos desenhados"
        @load="addLoad"
      >
      <figcaption>Versatilidade do Design</figcaption>
    </figure>
    <section class="text">
      <i
        class="material-icons close"
        @click="openWorks(null)"
        @keyup.enter="openWorks(null)"
        :tabindex="show.projects > -1 ? 0 : -1"
      >
        close
      </i>
      <p class="author">
        {{ projeto.titulo }}
      </p>
      <p
        class="postText" v-if="show.project"
        v-html="projeto.subTitulo"
        :tabindex="show.project ? 0 : -1"
      >
      </p>
      <div class="btns" :class="{ list: !show.project }">
        <a
          v-for="(op, i) of options" :key="i"
          @click="!op.noOpen && openProject(i)"
          @focus="resetFocus()"
          @keyup.enter="!op.noOpen && openProject(i)"
          v-html="op.title"
          :style="bgIsShow([i, op])"
          :href="getUrl(op, i)"
          target="_blank"
          rel="nofollow noopener noreferrer"
          :tabindex="show.projects > -1 ? 0 : -1"
        >a</a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Projects',
  props: ['show', 'projeto', 'options', 'options1'],
  methods: {
    addLoad() {
      this.$emit('addLoad');
    },
    openWorks(id) {
      this.$emit('openWorks', id);
    },
    openProject(id) {
      this.$emit('openProject', id);
    },
    resetFocus() {
      this.$emit('resetFocus');
    },
    getUrl(op, key) {
      if (!op.back && !op.noOpen && !op.noProject) {
        return null;
      }
      if (op.noProject) {
        return op.links[0];
      }
      const sh = this.show.projects;
      let id = this.projeto.id;
      const opt = this.options1[0][sh];
      const links = ((opt || [])[id] || {}).links;
      if (links) {
        return links[key - 1];
      }
    },
    bgIsShow(op) {
      if (typeof op[1].thumb !== 'number') return '';
      const pjs = this.show.projects;
      const imgs = this.projeto.imgs || [];
      const pjsImgs = imgs[pjs < 0 ? 0 : pjs] || [];
      const pjImgs = (pjsImgs[op[0]] || {}).imgs || [];

      return !this.show.project ? {
        backgroundImage: `url(${
          (pjImgs[op[1].thumb] || '')
        })`
      } : '';
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/CSS/variables";

.post {
  height: 620px;
  width: 33.33%;
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
      width: auto;
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
    margin: 2% 2%;
    left: 0;
    width: auto;
    font-size: 1.7rem;
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
    padding: 0 8%;
    margin: 5% 0;
    color: #143a61;
    max-height: 70%;
  }
}

.mostrado {
  margin-left: 10% !important;
  margin-right: 0 !important;
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
    transition: 500ms ease-out;
    cursor: pointer;
    border-radius: 0px;
    flex: 1;
    font-weight: 600;
    padding-top: 9px;
    &:hover, &:focus {
      color: $black;
      background-color: transparent;
    }
  }
  &.list {
    height: auto;
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
      &:hover, &:focus {
        color: $white;
        background: center / cover;
        background-blend-mode: lighten;
        text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000;
      }
    }
  }
}

@import "../assets/CSS/breakpoints";

@include for-phone-tablet {
  .post {
    height: 400px;
    width: 85%;
    .blur {
      width: 94%;
    }
    .postText {
      margin: 0;
      padding-bottom: 8%;
    }
  }
}
</style>