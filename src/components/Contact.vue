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
</style>
