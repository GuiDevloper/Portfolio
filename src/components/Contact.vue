<template>
  <article id="contact">
    <section class="email">
      <h4>Vamos conversar?</h4>
      <p>
        <i class="material-icons">email</i> guicorrea384@gmail.com
      </p>
    </section>
    <section class="social">
      <h4>Gostou de ver meus experimentos?</h4>
      <div class="git">
        <span>Veja mais em </span>
        <a target="_blank" href="https://github.com/GuiDevloper">
          <img src="../assets/img/GitHub.png">
          <span>/GuiDevloper</span>
        </a>
      </div>
      <div class="insta">
        <span>Me siga no </span>
        <a target="_blank" href="https://instagram.com/GuiDevloper">
          <img src="../assets/img/insta.png">
          <span>/GuiDevloper</span>
        </a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss" scoped>
$black: #20272f;
#contact {
  min-height: 285px;
  z-index: 3;
  position: relative;
}

.email,
.social {
  height: 100%;
  float: left;
  padding: 3% 5% 0%;
  width: 50%;
}
.email {
  p, h4 {
    color: #e5e5e5;
    background: #20272f;
    padding: 2px 0;
    margin: 30px 20% 0;
    margin: 30px calc(30% - 85px) 0;
  }
  i {
    vertical-align: middle;
    padding: 0 5px;
  }
}

a {
  color: $black;
  font-weight: bold;
  background: #e5e5e5;
  padding: 0 1px;
}

.social {
  img {
    height: 15px;
  }
  div {
    padding-top: 5%;
  }
  p, h4 {
    margin: 0;
    padding-top: 0;
  }
}

@import "../assets/CSS/breakpoints";

@include for-phone-tablet {
  .email,
  .social {
    width: 100%;
    padding: 30px 5% 0%;
  }
  .email {
    padding-top: 0;
    padding-bottom: 25px;
  }
  #contact {
    min-height: 330px;
    margin-top: 15px;
  }
  .social {
    p, h4 {
      padding-top: calc(50px - 3%);
    }
  }
}
</style>
