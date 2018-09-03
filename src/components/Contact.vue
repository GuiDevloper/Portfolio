<template>
  <div id="contact" class="c-1o1">
    <div class="email c-1o2">
      <form>
        <fieldset>
          <legend>Email</legend>
          <input name=""/>
          <input name=""/>
          <textarea name=""/>
        </fieldset>
      </form>
    </div>
    <div class="mid"/>
    <div class="social c-1o2">
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
  min-height: 60vh;
  background-color: white;
  .email,
  .social {
    height: 100%;
    float: left;
    padding: 5vh;
    padding-top: 10%;
  }
}
.mid {
  height: 40%;
  width: 1px;
  background-color: #42b983;
  float: left;
  position: absolute;
  margin: 5% 0 0 50%;
}
fieldset {
  border-radius: 5px;
}
input,
textarea {
  width: 50%;
  margin: 1vh 5%;
  background-color: rgb(128, 107, 107);
  font-family: "Raleway";
  color: white;
  font-size: 1rem;
  border: 0;
  caret-color: red;
  border-radius: 2px;
  border-bottom: solid #171717;
}
textarea {
  height: 60px;
  resize: none;
}
.social {
  height: 20vh;
}
.social img {
  height: 15px;
}
.social div {
  padding-top: inherit;
}
.social p {
  margin: 0;
}
.gmail span {
  vertical-align: super;
}
</style>
