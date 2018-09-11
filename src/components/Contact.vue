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
  min-height: 40vh;
  background-color: rgba(71, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.9);
  &:before {
    content: "";
    position: absolute;
    width: 150%;
    height: 100%;
    left: -50%;
    z-index: -1;
    background: url(https://images.homedepot-static.com/productImages/12aacea2-75c3-4f9a-9377-a00f4950978d/svn/swedish-red-newtechwood-tiles-us-qd-zx-sr-64_1000.jpg);
    background-repeat: round;
  }
  .email,
  .social {
    height: 100%;
    float: left;
    padding: 3% 5% 1%;
    width: 50%;
    /* width: 100%; */
    box-sizing: border-box;
  }
}

</style>
