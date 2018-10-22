<template>
  <div id="contact">
    <div class="email">
      <form>
        <legend>Email</legend>
        <input placeholder="Seu email"/>
        <input placeholder="Sobre o que deseja conversar?"/>
        <textarea placeholder="Sua mensagem"/>
      </form>
    </div>
    <div class="social">
      <p>Likes to see me and my experiments?</p>
      <div class="git">
				<a target="_blank" href="https://github.com/GuiDevloper">
					<img src="../assets/img/GitHub.png">
					<span>/GuiDevloper</span>
				</a>
        <span> - See me on GitHub</span>
		  </div>
			<div class="insta">
				<a target="_blank" href="https://instagram.com/GuiDevloper">
			  	<img src="../assets/img/insta.png">
					<span>/GuiDevloper</span>
				</a>
        <span> - Follow me on Instagram</span>
			</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "contact"
};
</script>

<style lang="scss" scoped>
#contact {
  min-height: 40vh;
  z-index: 3;
  position: relative;
  .email,
  .social {
    height: 100%;
    float: left;
    padding: 3% 5% 0%;
    width: 50%;
  }
}
$black: #20272f;
input,
textarea, legend, a {
  color: $black !important;
}
a,
legend {
  font-weight: bold;
}
a {
  background: #e5e5e5;
  padding: 0 1px;
}
input,
textarea {
  width: 50%;
  margin: 1vh 5%;
  background-color: transparent;
  border: 0;
  caret-color: red;
  border-radius: 2px;
  border-bottom: solid #3b4b5f;
}
textarea {
  height: 60px;
  resize: none;
}
.social {
  height: 20vh;
  padding-bottom: 3%;
  img {
    height: 15px;
  }
  div {
    padding-top: 5%;
  }
  p {
    margin: 0;
    padding-top: 4%;
  }
}
@media (max-width: 767px) {
  .email,
  .social {
    width: 100% !important;
  }
}
</style>
