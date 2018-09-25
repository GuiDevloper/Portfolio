<template>
  <div id="contact">
    <div class="email">
      <form>
        <legend>Email</legend>
        <input name=""/>
        <input name=""/>
        <textarea name=""/>
      </form>
    </div>
    <div class="mid"/>
    <div class="social">
      <div class="git">
				<p>Likes to see me and my experiments?</p>
				<a href="https://github.com/GuiDevloper">
					<img src="../assets/img/GitHub.png">
					<span>/GuiDevloper</span>
				</a>
        <span> - See me on GitHub</span>
		  </div>
			<div class="insta">
				<a href="https://instagram.com/GuiDevloper">
			  	<img src="../assets/img/insta.png">
					<span>/GuiDevloper</span>
				</a>
        <span> - Follow me on Instagram</span>
			</div>
			<div class="gmail">
				<p>Need speak something? Write to me:</p>
				<img src="../assets/img/Gmail.png">
				<span>guicorrea384@gmail.com</span>
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
    padding: 3% 5% 1%;
    width: 50%;
  }
}
.email {
  color: black !important;
  font-weight: 600 !important;
}
.mid {
  height: 70%;
  width: 1px;
  background-color: #008300;
  float: left;
  position: absolute;
  display: none;
  margin: 3% 0 0 51%;
}
input,
textarea {
  width: 50%;
  margin: 1vh 5%;
  background-color: transparent;
  font-family: "Raleway";
  font-size: 1rem;
  border: 0;
  caret-color: red;
  border-radius: 2px;
  border-bottom: solid #607d8b;
  font-weight: 600 !important;
}
textarea {
  height: 60px;
  resize: none;
}
fieldset {
  width: 90%;
  margin: auto;
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
  }
}
.gmail span {
  vertical-align: super;
}
@media (max-width: 767px) {
  .email,
  .social {
    width: 100% !important;
  }
}
</style>
