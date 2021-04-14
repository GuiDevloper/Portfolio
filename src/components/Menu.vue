<template>
  <nav class="nav-menu">
    <ul class="menu" :class=" { focused: focus } ">
      <li class="logo-center">
        <figure>
          <img
            width="60%"
            height="48px"
            src="../assets/img/logo.png"
            alt="Logo do GuiDevloper"
            title="Logo do GuiDevloper"
          >
        </figure>
        <h1 class="t-menu">Menu</h1>
      </li>
      <li
        v-for="(li, i) of [
          ['code', 'Code'],
          ['video_library', 'Media'],
          ['more', 'Outros'],
          ['account_box', 'Currículo']
        ]"
        :key="i"
        @click="openWorks(i)"
        @focus="focused()"
        @keyup.enter="openWorks(i)"
        tabindex="0"
      >
        <i class="material-icons"> {{ li[0] }} </i>
        <p> {{ li[1] }} </p>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: ['focus'],
  methods: {
    openWorks(id) {
      this.$emit('openWorks', id);
    },
    focused() {
      this.$emit('focused');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/CSS/variables";

.nav-menu {
  margin: 0 47vw;
  z-index: 10;
  width: 120px;
  height: 55vh;
  position: fixed;
  display: flex;
  align-items: flex-end;
  &:hover, .focused {
    li:not(.logo-center) {
      height: 8vh;
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
  li:not(.logo-center) {
    height: 20px;
    &:hover i, &:focus i {
      color: yellow;
    }
  }
  img {
    margin-top: 5%;
    height: auto; 
  }
}

.logo-center,
.menu {
  z-index: 2;
  cursor: pointer;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.3);
}
.logo-center {
  width: 80px;
  height: 80px;
  margin: 5px;
  border-radius: 100%;
  overflow: hidden;
  background: #e5e5e5;
}
.t-menu {
  color: #a34c45;
  font-family: "Great Vibes", cursive;
  font-size: 18px;
}
.menu {
  height: 90px;
  width: 90px;
  background: linear-gradient(
    to left bottom,
    rgba(0, 117, 0, .8),
    rgba(255, 238, 88, .8)
  ) 100% center;
  position: fixed;
  border-radius: 100px;
  transition: 250ms ease-in;
  padding: 0;
  list-style-type: none;
  bottom: 47vh;
  i {
    font-size: 2vh;
    padding: 20px 0 0;
    transition: 200ms;
  }
}
.nav-menu:hover .menu, .focused {
  height: 50vh;
}

@import "../assets/CSS/breakpoints";

@include for-phone-height {
  .nav-menu {
    height: 90vh;
    .menu * {
      font-size: 18px;
    }
    &:hover .menu, .focused {
      height: 80vh;
      bottom: 12vh;
    }
    &:hover li:not(.logo-center),
    .focused li:not(.logo-center) {
      height: auto;
    }
    p {
      display: none;
    }
    i {
      padding-top: 5vh;
    }
  }
}

@include for-tablet-portrait {
  .t-menu {
    font-size: 18px;
  }
}

@include for-phone-tablet {
  .nav-menu {
    margin: 0;
    right: 0;
    width: 85px;
    .t-menu {
      font-size: 16px;
    }
  }
  .menu {
    height: 80px;
    width: 80px;
    top: 5px;
  }
  .logo-center {
    height: 70px;
    width: 70px;
  }
}
</style>